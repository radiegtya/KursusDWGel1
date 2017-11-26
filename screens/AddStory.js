import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import ImagePicker from 'react-native-image-picker';
import axios from 'axios';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';

import {apiUrl} from '../utils/config';
import {allPosts, myPosts} from '../actions';

const Form = t.form.Form;
const FormSchema = t.struct({
  text: t.String
});

class AddStory extends Component{

  state = {
    value: {
      text: ""
    }
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

  // id, user, imageUrl, likeCount, commentCount
  async handleAddPost(){
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      const response = await this.showImagePicker();

      const userId = await AsyncStorage.getItem('@dw:userId');

      const photo = {
        uri: response.uri,
        type: 'image/jpeg',
        name: response.fileName,
      };

      const body = new FormData();
      body.append('photo', photo);
      body.append('userId', userId);
      body.append('text', value.text);

      await axios({
        method: 'post',
        url: `${apiUrl}/posts`,
        data: body,
        headers: {'Content-Type': 'multipart/form-data'}
      });

      await this.props.dispatch(allPosts());
      await this.props.dispatch(myPosts(userId));
      this.setState({text: ""});
      alert('Post Had been added');
    }
  }

  render(){
    return(
      <Container style={{flex: 1, justifyContent: 'center', padding: 10}}>
        <Content>
          <Form
            ref="form"
            type={FormSchema}
            value={this.state.value}
          />

          <Button full onPress={()=> this.handleAddPost()}>
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
