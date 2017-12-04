import React, {Component} from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text, Button} from 'native-base';
import {connect} from 'react-redux';
import {AsyncStorage} from 'react-native';
import axios from 'axios';

import {allNotifications} from '../actions';
import {apiUrl} from '../utils/config';
import FollowButton from './FollowButton';

class You extends Component{

  componentDidMount(){
    this.props.dispatch(allNotifications());
  }

  renderRow({id, activity, userId, user, postId, createdAt}){
    return (
      <ListItem key={id} avatar>
        <Left>
          <Thumbnail source={{ uri: user.profilePicture? user.profilePicture: "https://d30y9cdsu7xlg0.cloudfront.net/png/411045-200.png" }} />
        </Left>
        <Body>
          <Text>{user.username}</Text>
          <Text note>{activity}</Text>
          <Text note>{createdAt}</Text>
        </Body>
        <Right>
          <FollowButton followedId={userId}/>
        </Right>
      </ListItem>
    )
  }

  render(){
    const {notifications} = this.props.data;

    return (
      <List style={{marginTop: 10}}>
        {notifications.map((notification)=> this.renderRow(notification))}
      </List>
    )
  }

}

const mapStateToProps = (state)=>({
  data: state.notificationsReducer
});

export default connect(mapStateToProps)(You)
