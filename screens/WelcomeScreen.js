import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import {AsyncStorage} from 'react-native';

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
          <Button full danger onPress={()=> this.handleSignOut()}>
            <Text>Sign Out</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
