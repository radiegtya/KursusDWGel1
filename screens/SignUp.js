import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import {AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

import {apiUrl} from '../utils/config';

const Form = t.form.Form;

const SignUpForm = t.struct({
  username: t.String,
  password: t.String,
  age: t.Number
})

export default class SignUp extends Component{

  async setStorage(data){
    const {token, userId, username} = data;
    await AsyncStorage.setItem('@dw:token', token);
    await AsyncStorage.setItem('@dw:userId', userId + "");
    await AsyncStorage.setItem('@dw:username', username);

    return true;
  }

  handleSignUp(){
    const self = this;
    const value = this.refs.form.getValue();
    if (value) {
      axios.post(`${apiUrl}/signup`, value).then((res)=>{
        self.setStorage(res.data).then(function(){
          self.props.navigator.resetTo({
            screen: "example.WelcomeScreen",
            title: "Welcome Screen"
          });
        });
      });
    }
  }

  render(){
    return (
      <Container style={{padding: 10}}>
        <Content>
          <Form
            ref="form"
            type={SignUpForm}
          />
          <Button full success onPress={()=> this.handleSignUp()}>
            <Text>Sign Up</Text>
          </Button>
        </Content>
      </Container>
    )
  }

}
