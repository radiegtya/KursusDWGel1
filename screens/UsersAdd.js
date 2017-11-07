import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import t from 'tcomb-form-native';

const Form = t.form.Form;

const UserForm = t.struct({
  name: t.String,
  password: t.String,
  age: t.maybe(t.Number)
})

export default class UsersAdd extends Component{

  handleAdd(){
    const value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      alert(JSON.stringify(value)); // value here is an instance of Person
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
