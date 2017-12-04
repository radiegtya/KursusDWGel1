import React, {Component} from 'react';
import {Button, Text} from 'native-base';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

import {apiUrl} from '../utils/config';
import {getFollow} from '../actions';

class FollowButton extends Component{

  async componentDidMount(){
    const ownerId = await AsyncStorage.getItem('@dw:userId');
    const {followedId} = this.props;

    this.props.dispatch(getFollow(ownerId, followedId));
  }

  async handleFollow(followedId){
    const ownerId = await AsyncStorage.getItem('@dw:userId');

    const res = await axios.post(`${apiUrl}/follows`, {followedId, ownerId});
    this.props.dispatch(getFollow(ownerId, followedId));
  }

  async handleUnfollow(followedId){
    const ownerId = await AsyncStorage.getItem('@dw:userId');

    const res = await axios.delete(`${apiUrl}/follows/${ownerId}/${followedId}`);
    this.props.dispatch(getFollow(ownerId, followedId));
  }

  render(){
    const {followedId} = this.props;
    const {follow, loading} = this.props.data;

    if(loading){
      return null;
    }

    return (
      <Button
        primary small
        onPress={()=> {
          if(follow){
            this.handleUnfollow(followedId);
          }else{
            this.handleFollow(followedId)
          }
        }}
      >
        <Text>{follow? "Unfollow": "Follow"}</Text>
      </Button>
    )
  }

}

const mapStateToProps = (state)=>({
  data: state.followsReducer
});

export default connect(mapStateToProps)(FollowButton);
