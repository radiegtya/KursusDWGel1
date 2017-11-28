import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Button, H3} from 'native-base';
import {View, Image, Dimensions, AsyncStorage, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';

import {myPosts, getUser, allPostsCount} from '../actions';
import {apiUrl} from '../utils/config';

let {height, width} = Dimensions.get('window');

class Profile extends Component{

  async componentDidMount(){
    // AsyncStorage.getItem('@dw:userId').then((userId)=>{
    //   this.props.dispatch(myPosts(userId))
    // });

    const userId = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(myPosts(userId));
    this.props.dispatch(getUser(userId));
    this.props.dispatch(allPostsCount(userId));
  }

  renderRow({id, imageUrl}){
    const profilePicture = imageUrl && imageUrl != ""? imageUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/411045-200.png";

    return (

      <View key={id} style={{
        flex: 1,
        minWidth: width/3,
        width: width/3,
        height: width/3,
        maxHeight:width/3,
        backgroundColor: '#CCC',
      }}>
        <Image
          style={{width: width/3, height: width/3}}
          source={{uri: profilePicture}}
        />
      </View>
    )
  }

  handleSignOut(){
    const self = this;
    AsyncStorage.clear(()=>{
      self.props.navigator.resetTo({
        screen: "example.SignIn",
        title: "Sign In"
      })
    });
  }

  showImagePicker(){
    return new Promise((resolve, reject)=>{
      var options = {
        title: 'Select Media',
        storageOptions: {
          skipBackup: true,
          path: 'images',
          quality: 0.3
        }
      };

      ImagePicker.showImagePicker(options, (response) => {
        // console.log('Response = ', response);

        if (response.didCancel) {
          console.log('User cancelled image picker');
        }
        else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
        }
        else if (response.customButton) {
          console.log('User tapped custom button: ', response.customButton);
        }
        else {
          // let source = { uri: response.uri };

          resolve(response);

          // this.setState({
          //   source: source
          // });
        }
      });
    })
  }

  async handleChangeProfile(){
    const response = await this.showImagePicker();

    const userId = await AsyncStorage.getItem('@dw:userId');

    const photo = {
    	uri: response.uri,
    	type: 'image/jpeg',
    	name: response.fileName,
    };

    const body = new FormData();
    body.append('profilePicture', photo);

    await axios({
    	method: 'patch',
    	url: `${apiUrl}/users/${userId}`,
    	data: body,
    	headers: {'Content-Type': 'multipart/form-data'}
    });

    await this.props.dispatch(getUser(userId));
    alert('profile picture had been changed');
  }

  render(){
    const {user} = this.props.user;
    const {postCount} = this.props.data;

    return(
      <Container>
        <Content>
          <View style={{flex: 1, flexDirection: 'row', padding: 15}}>

            {/* Profile */}
            <TouchableOpacity onPress={()=> this.handleChangeProfile()} style={{flex: 1, marginRight: 15}}>
              <Thumbnail large source={{ uri: user.profilePicture? user.profilePicture: "https://d30y9cdsu7xlg0.cloudfront.net/png/411045-200.png" }} />
              <Text>Edit Profile</Text>
            </TouchableOpacity>

            <View style={{flex: 2}}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                  <View style={{flex: 1}}>
                    <H3>{postCount.count + ""}</H3>
                    <Text note>posts</Text>
                  </View>
                  {/*
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                  */}
                </View>
                <View style={{flex: 1}}>
                  <Button light full small onPress={()=> this.handleSignOut()}>
                    <Text>Sign Out</Text>
                  </Button>
                </View>
              </View>
            </View>

          </View>


          <View style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'center'}}>
            {this.props.data.myPosts.map((post)=> this.renderRow(post))}
          </View>
        </Content>
      </Container>
    )
  };

}

const mapStateToProps = (state)=>({
  data: state.postsReducer,
  user: state.usersReducer,
});

export default connect(mapStateToProps)(Profile);
