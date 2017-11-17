import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import ImagePicker from 'react-native-image-picker';

export default class AddStory extends Component{

  state = {
    source: null
  }

  handleAddMedia(){
    var options = {
      title: 'Select Media',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };


    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

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

        // You can also display the image using data:
        // let source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          source: source
        });
      }
    });
  }

  render(){
    return(
      <Container>
        <Content>
          <Button onPress={()=> this.handleAddMedia()}>
            <Text>Add Media</Text>
          </Button>
        </Content>
      </Container>
    )
  };

}
