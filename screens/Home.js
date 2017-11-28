import React, {Component} from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import {Image, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import axios from 'axios';

import {allPosts} from '../actions';
import {apiUrl} from '../utils/config';

class Home extends Component {

  async componentWillMount(){
    this.props.navigator.toggleTabs({ to: 'show', animated: false });

    //if token exists
    const token = await AsyncStorage.getItem('@dw:token');

    if(!token){
      this.props.navigator.resetTo({
        screen: "example.SignIn",
        title: "Sign In"
      })
    }
  }

  componentDidMount(){
    this.props.dispatch(allPosts());
  }

  handleGoToComment(postId){
    this.props.navigator.push({
      screen: "example.Comment",
      title: "Comments",
      passProps: {
        postId
      }
    });
  }

  async handleLike(id, likeCount = 0){
    await axios.patch(`${apiUrl}/posts/${id}`, {likeCount: likeCount + 1});
    this.props.dispatch(allPosts());
  }

  renderComment(comment){
    return (
      <CardItem key={comment._id}>
        <Text>{comment.user.username}</Text>
        <Text note>{comment.text}</Text>
      </CardItem>
    )
  }

  renderRow({id, user, imageUrl, likeCount, commentCount, comments}){
    const picture = imageUrl && imageUrl != ""? imageUrl: "https://d30y9cdsu7xlg0.cloudfront.net/png/411045-200.png";

    return (
      <Card key={id}>
        <CardItem>
          <Left>
            <Thumbnail source={{uri: 'https://img.buzzfeed.com/buzzfeed-static/static/2014-04/tmp/webdr02/2/17/0e7cd6da3ce720d983515a9ab831a530-3.jpg?downsize=715:*&output-format=auto&output-quality=auto'}} />
            <Body>
              <Text>{user.username}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image source={{
            uri: picture
          }} style={{height: 200, width: null, flex: 1}}/>
        </CardItem>
        <CardItem>
          <Left>
            <Button transparent onPress={()=> this.handleLike(id, likeCount)}>
              <Icon name="heart" />
            </Button>
            <Button transparent onPress={()=>this.handleGoToComment(id)}>
              <Icon name="chatbubbles"/>
            </Button>
          </Left>
          <Body/>
        </CardItem>
        <CardItem>
          <Text>{likeCount} likes</Text>
        </CardItem>
        {comments.map(comment=> this.renderComment(comment))}
      </Card>
    )
  }

  render(){
    return (
      <Container>
        <Content>
          {this.props.data.posts.map(post=> this.renderRow(post))}
        </Content>
      </Container>
    )
  }

}

const mapStateToProps = (state)=>({
  data: state.postsReducer
})

export default connect(mapStateToProps)(Home)
