import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Icon, Fab, Spinner} from 'native-base';
import axios from 'axios';
import {connect} from 'react-redux';

import {apiUrl} from '../utils/config';
import {allUsers} from '../actions';

class Users extends Component{

  state = {
    users: []
  }

  componentDidMount(){
    this.props.dispatch(allUsers());

    // const self = this;
    // axios.get(`${apiUrl}/users`).then(function(result){
    //   self.setState({
    //     users: result.data
    //   })
    // })
  }

  handleGoToUsersAdd(){
    this.props.navigator.push({
      screen: "example.UsersAdd",
      title: "Add User"
    })
  }

  handleGoToUsersEdit(id){
    this.props.navigator.push({
      screen: 'example.UsersEdit',
      title: "Edit User",
      passProps: {
        id: id
      }
    })
  }

  renderRow(user){
    return (
      <ListItem key={user.id} onPress={()=> this.handleGoToUsersEdit(user.id)}>
        <Text>{user.username}</Text>
      </ListItem>
    )
  }

  render(){
    if(this.props.data.loading){
      return (
        <Container>
          <Content>
            <Spinner color='blue' />
          </Content>
        </Container>
      )
    }

    return (
      <Container>
        <Content>
          <List>
            {this.props.data.users.map((user)=> this.renderRow(user))}
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

const mapStateToProps = (state)=> ({
  data: state.usersReducer
})

export default connect(mapStateToProps)(Users)
