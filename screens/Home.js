import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Image, AsyncStorage} from 'react-native';

export default class Home extends Component {

  async componentWillMount(){
    this.props.navigator.toggleTabs({ to: 'show', animated: false });

    //if token exists
    const token = await AsyncStorage.getItem('@dw:token');

    if(!token){
      this.props.navigator.resetTo({
        screen: "example.SignIn",
        title: "Sign In"
      })
    }
  }

  render(){
    return (
      <Container>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto'}} />
                <Body>
                  <Text>Putry</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{
                uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto'
              }} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon name="heart" />
                </Button>
                <Button transparent>
                  <Icon name="chatbubbles" />
                </Button>
              </Left>
              <Body/>
            </CardItem>
            <CardItem>
              <Text>60 likes</Text>
            </CardItem>
            <CardItem>
              <Text>Someone </Text>
              <Text note>Hi...</Text>
            </CardItem>
          </Card>
        </Content>
      </Container>
    )
  }

}
