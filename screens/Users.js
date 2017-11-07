import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Fab} from 'native-base';

export default class Users extends Component{

  handleGoToUsersAdd(){
    this.props.navigator.push({
      screen: "example.UsersAdd",
      title: "Add User"
    })
  }

  render(){
    return (
      <Container>
        <Content>
          <List>
            <ListItem>
              <Text>Anita</Text>
            </ListItem>
            <ListItem>
              <Text>Dian</Text>
            </ListItem>
          </List>
        </Content>
        <Fab
          style={{ backgroundColor: '#5067FF' }}
          position="bottomRight"
          onPress={() => this.handleGoToUsersAdd()}>
            <Icon name="add" />
        </Fab>
      </Container>
    )
  }
}
