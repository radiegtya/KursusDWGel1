import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import t from 'tcomb-form-native';
import axios from 'axios';

import {apiUrl} from '../utils/config';

const Form = t.form.Form;

const UserForm = t.struct({
  username: t.String,
  password: t.String,
  age: t.Number
})

export default class UsersAdd extends Component{

  handleAdd(){
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      const self = this;
      axios.post(`${apiUrl}/users`, value).then(function(result){
        self.props.navigator.pop();
      })
    }
  }

  render(){
      return(
        <Container style={{padding: 10}}>
          <Content>
            <Form
              ref="form"
              type={UserForm}
            />
            <Button full success onPress={()=> this.handleAdd()}>
              <Text>Add</Text>
            </Button>
          </Content>
        </Container>
      )
  }

}
