import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Button, H3} from 'native-base';
import {View, Image, Dimensions, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import {myPosts} from '../actions';

let {height, width} = Dimensions.get('window');

class Profile extends Component{

  user = {
    imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"
  }

  async componentDidMount(){
    // AsyncStorage.getItem('@dw:userId').then((userId)=>{
    //   this.props.dispatch(myPosts(userId))
    // });

    const userId = await AsyncStorage.getItem('@dw:userId');
    this.props.dispatch(myPosts(userId));
  }

  renderRow({id, imageUrl}){
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
          source={{uri: imageUrl}}
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

  render(){
    return(
      <Container>
        <Content>
          <View style={{flex: 1, flexDirection: 'row', padding: 15}}>

            <View style={{flex: 1, marginRight: 15}}>
              <Thumbnail large source={{ uri: this.user.imageUri }} />
            </View>
            <View style={{flex: 2}}>
              <View style={{flex: 1}}>
                <View style={{flex: 1, flexDirection: 'row', marginBottom: 10}}>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                  <View style={{flex: 1}}>
                    <H3>21</H3>
                    <Text note>posts</Text>
                  </View>
                </View>
                <View style={{flex: 1}}>
                  <Button light full small>
                    <Text>Edit Profile</Text>
                  </Button>
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
  data: state.postsReducer
});

export default connect(mapStateToProps)(Profile);
