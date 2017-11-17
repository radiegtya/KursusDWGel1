import React, {Component} from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text} from 'native-base';

export default class Following extends Component{

  followings= [
    {
      id: "1",
      user: {
        imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg",
        username: "Meta"
      },
      text: "started following xxx",
      createdAt: "1m"
    },
    {
      id: "2",
      user: {
        imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg",
        username: "Dian"
      },
      text: "liked xxx",
      createdAt: "2m"
    },
  ]

  renderRow(following){
    return (
      <ListItem key={following.id} avatar>
        <Left>
          <Thumbnail source={{ uri: following.user.imageUri }} />
        </Left>
        <Body>
          <Text>{following.user.username}</Text>
          <Text note>{following.text}</Text>
          <Text note>{following.createdAt}</Text>
        </Body>
        <Right/>
      </ListItem>
    )
  }

  render(){
    return (
      <List style={{marginTop: 10}}>
        {this.followings.map((following)=> this.renderRow(following))}
      </List>
    )
  }

}
