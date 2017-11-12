import React, {Component} from 'react';
import {Container, Content, Button, Text, Spinner} from 'native-base';
import t from 'tcomb-form-native';
import axios from 'axios';
import {connect} from 'react-redux';

import {apiUrl} from '../utils/config';
import {allUsers, getUser} from '../actions';

const Form = t.form.Form;

const UserForm = t.struct({
  username: t.String,
  password: t.String,
  age: t.Number
})

class UsersEdit extends Component{

  static navigatorButtons = {
    rightButtons: [
      {
        id: 'delete',
        title: "Delete",
        buttonColor: 'red'
      }
    ]
  }

  onNavigatorEvent(event) { // this is the onPress handler for the two buttons together
    const id = this.props.id;
    const self = this;

    if (event.type == 'NavBarButtonPress') { // this is the event type for button presses
      if (event.id == 'delete') { // this is the same id field from the static navigatorButtons definition
        axios.delete(`${apiUrl}/users/${id}`).then(function(){
          self.props.dispatch(allUsers());
          self.props.navigator.pop();
        })
      }
    }
  }

  componentWillMount(){
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  componentDidMount(){
    const self = this;
    const id = this.props.id;

    this.props.dispatch(getUser(id));

    // axios.get(`${apiUrl}/users/${id}`).then(function(result){
    //   self.setState({
    //     user: result.data
    //   })
    // })
  }

  handleEdit(){
    const self = this;
    const value = this.refs.form.getValue();
    const id = this.props.id;
    if(value){
      axios.patch(`${apiUrl}/users/${id}`, value).then(function(result){
        self.props.dispatch(allUsers());
        self.props.navigator.pop();
      })
    }
  }

  render(){
    if(this.props.data.loading){
      return (
        <Container>
          <Content>
            <Spinner color="blue"/>
          </Content>
        </Container>
      )
    }

    return (
      <Container style={{padding: 10}}>
        <Content>
          <Form
            ref="form"
            type={UserForm}
            value={this.props.data.user}
          />
          <Button full success onPress={()=> this.handleEdit()}>
            <Text>Edit</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}

const mapStateToProps = (state)=> ({
  data: state.usersReducer
});

export default connect(mapStateToProps)(UsersEdit);
