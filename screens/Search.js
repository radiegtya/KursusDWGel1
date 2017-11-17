import React, {Component} from 'react';
import {Container, Content, Text, Header, Item, Icon, Input, Button} from 'native-base';
import {View, Image, Dimensions} from 'react-native';

let {height, width} = Dimensions.get('window');

export default class Search extends Component{

  static navigatorStyle = {
    navBarHidden: true,
  };

  images = [
    {id: "1", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
    {id: "2", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
    {id: "3", uri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg"},
  ]

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
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
        </Header>

        <Content>
          <View style={{flexDirection: 'row', flex: 1}}>
            {this.images.map((image)=> this.renderRow(image))}
          </View>
        </Content>
      </Container>
    )
  };

}
