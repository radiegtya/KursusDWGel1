import React, {Component} from 'react';
import {Container, Content, Text, Thumbnail, Button, H3} from 'native-base';
import {View, Image, Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

export default class Search extends Component{

  images = [
    {id: "1", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
    {id: "2", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
    {id: "3", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
  ]

  user = {
    imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"
  }

  renderRow({id, uri}){
    return (
      <View key={id} style={{flex: 1}}>
        <Image
          style={{width: width/3, height: width/3}}
          source={{uri}}
        />
      </View>
    )
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
                </View>
              </View>
            </View>

          </View>

          <View style={{flexDirection: 'row', flex: 1}}>
            {this.images.map((image)=> this.renderRow(image))}
          </View>
        </Content>
      </Container>
    )
  };

}
