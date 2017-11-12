import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';

import '../utils/redux';

export default class WelcomeScreen extends Component{

  handleGoToAbout(){
    this.props.navigator.push({
      screen: 'example.About',
      title: "About"
    })
  }

  handleGoToUsers(){
    this.props.navigator.push({
      screen: 'example.Users',
      title: "Users"
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <Text>Welcome Screen</Text>
          <Button full success onPress={()=> this.handleGoToAbout()}>
            <Text>Go to About</Text>
          </Button>
          <Button full success onPress={()=> this.handleGoToUsers()}>
            <Text>Go to Users</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
