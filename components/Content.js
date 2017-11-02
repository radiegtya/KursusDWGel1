import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

export default class Content extends Component {

  constructor(){
    super();
    this.state = {
      myText: "my default text",
      number: 1
    }
  }

  handleClick(){
    this.setState({
      myText: "my new text",
      number: this.state.number + 1
    })
  }

  renderButton(){
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={()=> this.handleClick()}
      >
        <Text>Click Me!</Text>
      </TouchableOpacity >
    )
  }

  render(){
    const {backgroundColor} = this.props;

    return (
      <View style={{backgroundColor}}>
        {this.props.children}

        {/* Button */}
        {this.renderButton()}

        <Text>{this.state.myText}</Text>
        <Text>{this.state.number}</Text>
      </View>
    );
  }

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#d0d0d0",
    width: 100,
    height: 30,
    padding: 10,
    margin: 10
  }
})
