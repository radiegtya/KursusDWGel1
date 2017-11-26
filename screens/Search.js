import React, {Component} from 'react';
import {Container, Content, Text, Header, Item, Icon, Input, Button} from 'native-base';
import {View, Image, Dimensions} from 'react-native';
import {connect} from 'react-redux';

import {allPosts} from '../actions';

let {height, width} = Dimensions.get('window');

class Search extends Component{

  state = {
    text: ""
  }

  componentDidMount(){
    if(this.state.text){

    }

    this.props.dispatch(allPosts());
  }

  static navigatorStyle = {
    navBarHidden: true,
  };

  renderRow({id, imageUrl}){
    return (
      <View key={id} style={{
        flex: 1,
        minWidth: width/3,
        width: width/3,
        height: width/3,
        maxHeight:width/3,
        backgroundColor: '#CCC',
      }}>
        <Image
          style={{width: width/3, height: width/3}}
          source={{uri: imageUrl}}
        />
      </View>
    )
  }

  render(){
    const {posts} = this.props.data;

    return(
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-search" />
            <Input
              placeholder="Search by Tag"
              onChangeText={(text) => {
                this.setState({text})
                this.props.dispatch(allPosts(`?text=${text}`))
              }}
              value={this.state.text}
            />
          </Item>
        </Header>

        <Content>
          <View  style={{flexDirection: 'row', flex: 1, flexWrap: 'wrap', justifyContent: 'center'}}>
            {posts.map((post)=> this.renderRow(post))}
          </View>
        </Content>
      </Container>
    )
  };

}

const mapStateToProps = (state)=>({
  data: state.postsReducer
});

export default connect(mapStateToProps)(Search);
