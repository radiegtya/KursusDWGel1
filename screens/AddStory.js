import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';

import {apiUrl} from '../utils/config';
import {allPosts} from '../actions';

class AddStory extends Component{

  showImagePicker(){
    return new Promise((resolve, reject)=>{
      var options = {
        title: 'Select Media',
        storageOptions: {
          skipBackup: true,
          path: 'images'
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
          let source = { uri: response.uri };

          resolve(response);

          // this.setState({
          //   source: source
          // });
        }
      });
    })
  }

  // id, user, imageUrl, likeCount, commentCount
  async handleAddPost(){
    const response = await this.showImagePicker();
    console.log(response);

    const userId = await AsyncStorage.getItem('@dw:userId');

    // const doc = {
    //   userId: userId,
    //   imageUrl: "https://de7i3bh7bgh0d.cloudfront.net/2016/07/05/16/50/17/0ce17b10-565d-4284-a9d0-617d26ee339b/VizBlog_OnePiece.jpg",
    //   likeCount: 0,
    //   commentCount: 0,
    // }
    //
    // const res = await axios.post(`${apiUrl}/posts`, doc);
    // this.props.dispatch(allPosts());

    const photo = {
    	uri: response.uri,
    	type: 'image/jpeg',
    	name: response.fileName,
    };

    const body = new FormData();
    body.append('photo', photo);
    // body.append('userId', userId);
    // body.append('title', 'A beautiful photo!')

    axios({
    	method: 'post',
    	url: `${apiUrl}/posts`,
    	data: body,
    	headers: {'Content-Type': 'multipart/form-data'}
    })
  }

  render(){
    return(
      <Container>
        <Content>
          <Button onPress={()=> this.handleAddPost()}>
            <Text>Add Post</Text>
          </Button>
        </Content>
      </Container>
    )
  };

}

const mapStateToProps = (state)=>({

});

export default connect(mapStateToProps)(AddStory)
