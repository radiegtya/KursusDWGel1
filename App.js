import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class App extends Component{

  render(){
    return (
      <View style={styles.container}>

        {/* flex 2 */}
        <View style={styles.firstSide}>
          <Text>First Side</Text>
        </View>

        {/* flex 1 */}
        <View style={styles.secondSide}>
          <Text>Second Side</Text>
        </View>

      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column'
  },
  firstSide: {
    flex: 0.2,
    backgroundColor: 'red',
    padding: 20,
    justifyContent: 'center',
    alignSelf: 'center'
  },
  secondSide: {
    flex: 7,
    backgroundColor: 'yellow',
    padding: 20,
    justifyContent: 'flex-end',
  }
});
