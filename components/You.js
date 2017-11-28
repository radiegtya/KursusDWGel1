import React, {Component} from 'react';
import {List, ListItem, Left, Body, Right, Thumbnail, Text, Button} from 'native-base';
import {connect} from 'react-redux';

import {allFollows} from '../actions';

class You extends Component{

  componentDidMount(){
    this.props.dispatch(allFollows());
  }

  renderRow({id, activity, user, postId, createdAt}){
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
          <Button primary small>
            <Text>Follow</Text>
          </Button>
        </Right>
      </ListItem>
    )
  }

  render(){
    const {follows} = this.props.data;

    return (
      <List style={{marginTop: 10}}>
        {follows.map((follow)=> this.renderRow(follow))}
      </List>
    )
  }

}

const mapStateToProps = (state)=>({
  data: state.followsReducer
});

export default connect(mapStateToProps)(You)
