import React, {Component} from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text, Button} from 'native-base';

export default class You extends Component{

  followers= [
    {
      id: "1",
      user: {
        imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg",
        username: "Meta"
      },
      text: "started following you",
      createdAt: "1m"
    },
    {
      id: "2",
      user: {
        imageUri: "https://pbs.twimg.com/profile_images/435306281369210880/cej2q6hE.jpeg",
        username: "Dian"
      },
      text: "started following you",
      createdAt: "2m"
    },
  ]

  renderRow(follower){
    return (
      <ListItem key={follower.id} avatar>
        <Left>
          <Thumbnail source={{ uri: follower.user.imageUri }} />
        </Left>
        <Body>
          <Text>{follower.user.username}</Text>
          <Text note>{follower.text}</Text>
          <Text note>{follower.createdAt}</Text>
        </Body>
        <Right>
          <Button primary small>
            <Text>Follow</Text>
          </Button>
        </Right>
      </ListItem>
    )
  }

  render(){
    return (
      <List style={{marginTop: 10}}>
        {this.followers.map((follower)=> this.renderRow(follower))}
      </List>
    )
  }

}
