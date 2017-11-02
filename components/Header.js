import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Header extends Component{

  render(){
    const {title, color} = this.props;

    return (
      <View>
        <Text>{title}</Text>
        <Text>{color}</Text>
      </View>
    )
  }

}
