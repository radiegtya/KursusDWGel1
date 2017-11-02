import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class App extends Component{

  constructor(){
    super();
    console.log("1. Constructor");
  }

  componentWillMount(){
    console.log("2. componentWillMount");
  }

  componentDidMount(){
    console.log("3. componentDidMount");
  }

  componentWillReceiveProps(){
    console.log("componentWillReceiveProps");
  }

  componentWillUnmount(){
    console.log("4. componentWillUnmount");
  }

  render(){
    return (
      <View>
        <Text>App.js</Text>
      </View>
    )
  }

}
