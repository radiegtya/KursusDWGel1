import React, {Component} from 'react';
import {Container, Content, Text, Button} from 'native-base';
import {TouchableOpacity, AsyncStorage} from 'react-native';
import t from 'tcomb-form-native';
import axios from 'axios';

import {apiUrl} from '../utils/config';

const Form = t.form.Form;

const SignInForm = t.struct({
  username: t.String,
  password: t.String
})

export default class SignIn extends Component{

  async componentWillMount(){
    this.props.navigator.toggleTabs({ to: 'hidden', animated: false });

    //if token exists
    const token = await AsyncStorage.getItem('@dw:token');

    if(token){
      this.props.navigator.resetTo({
        screen: "example.Home",
        title: "Instantgram"
      })
    }
  }

  async setStorage(data){
    const {token, userId, username} = data;
    await AsyncStorage.setItem('@dw:token', token);
    await AsyncStorage.setItem('@dw:userId', userId + "");
    await AsyncStorage.setItem('@dw:username', username);

    return true;
  }

  handleGoToSignUp(){
    this.props.navigator.push({
      screen: "example.SignUp",
      title: "Sign Up"
    })
  }

  handleSignIn(){
    const self = this;
    const value = this.refs.form.getValue();
    if(value){
      axios.post(`${apiUrl}/signin`, value).then((res)=>{
        self.setStorage(res.data).then(function(){
          self.props.navigator.resetTo({
            screen: "example.Home",
            title: "Instantgram"
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
            type={SignInForm}
          />
          <Button full success onPress={()=> this.handleSignIn()}>
            <Text>Sign In</Text>
          </Button>
          <TouchableOpacity onPress={()=> this.handleGoToSignUp()}>
            <Text>{`Don't have account? Create a new one!`}</Text>
          </TouchableOpacity>
        </Content>
      </Container>
    )
  }

}
