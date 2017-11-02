import React, {Component} from 'react';
import {View, Text} from 'react-native';

import Header from './components/Header';
import Content from './components/Content';

export default class App extends Component{

  render(){
    const description = "Lorem Ipsum dolor sit amet";

    return (
      <View>
        <Header
          title="Kursus React"
          color="#FFF"
        />
        <Content backgroundColor="#8CC570">
          <Text>{description}</Text>
        </Content>
      </View>
    );
  }

}
