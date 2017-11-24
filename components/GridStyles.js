import React from 'react';
import {
  StyleSheet,
  Dimensions
} from 'react-native'

export default StyleSheet.create({
  rowContainer: {
    overflow: 'hidden',
    width: Dimensions.get('window').width / 2,
    height: Dimensions.get('window').width / 2,
    borderWidth: 0.3,
    borderColor: '#bbbbbb'
  },
  rowContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  rowTitle: {
    color: '#333333',
    fontSize: 15
  }
})
