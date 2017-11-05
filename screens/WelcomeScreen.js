import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';

export default class WelcomeScreen extends Component{

  handleGoToAbout(){
    this.props.navigator.push({
      screen: 'example.About',
      title: "About"
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
        </Content>
      </Container>
    )
  }

}
