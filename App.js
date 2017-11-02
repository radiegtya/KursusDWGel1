import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

export default class App extends Component{

  state = {
    startups: ["tokopedia", "bukalapak", "dumbways"],
    startup: ""
  }

  renderRow(startup, index){
    return (
      <View key={index} style={styles.listItem}>
        <Text>{startup}</Text>
      </View>
    );
  }

  handleAdd(){
    let newStartups = this.state.startups;
    newStartups.push(this.state.startup);
    this.setState({
      startups: newStartups,
      startup: ""
    })
  }

  render(){
    return (
      <View>
        {this.state.startups.map((startup, index)=> this.renderRow(startup, index))}

        <TextInput
           style={{height: 40, borderColor: 'gray', borderWidth: 1}}
           onChangeText={(startup) => this.setState({startup})}
           value={this.state.startup}
         />
        <TouchableOpacity onPress={()=> this.handleAdd()}>
          <Text>Add To List</Text>
        </TouchableOpacity>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    borderBottomWidth: 0.5
  }
});
