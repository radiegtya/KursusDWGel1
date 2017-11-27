import React, {Component} from 'react';
import {Container, Content, Text, List, ListItem, Left, Body, Right, Button} from 'native-base';
import {connect} from 'react-redux';
import t from 'tcomb-form-native';
import axios from 'axios';
import {AsyncStorage} from 'react-native';

import {allComments} from '../actions';
import {apiUrl} from '../utils/config';

const Form = t.form.Form;
const FormSchema = t.struct({
  text: t.String
});

class Comment extends Component{

  componentDidMount(){
    const postId = this.props.postId;
    this.props.dispatch(allComments(postId));
  }

  renderRow({id, text, user}){
    return (
      <ListItem key={id}>
        <Left>
          <Text>{user.username}: </Text>
        </Left>
        <Body>
          <Text>{text}</Text>
        </Body>
        <Right/>
      </ListItem>
    )
  }

  async handleAddComment(){
    const postId = this.props.postId;
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      let doc = {};
      doc.postId = postId;
      doc.userId = await AsyncStorage.getItem('@dw:userId');
      doc.text = value.text;

      await axios.post(`${apiUrl}/comments`, doc);
      this.props.dispatch(allComments(postId));
    }
  }

  render(){
    const {comments} = this.props.data;

    return (
      <Container>
        <Content>
          <List>
            {comments.map(comment=> this.renderRow(comment))}
          </List>

          <Form
            ref="form"
            type={FormSchema}
          />
          <Button full onPress={()=>this.handleAddComment()}>
            <Text>Add Comment</Text>
          </Button>
        </Content>
      </Container>
    );
  }

}

const mapStateToProps = (state)=> ({
  data: state.commentsReducer
});

export default connect(mapStateToProps)(Comment)
