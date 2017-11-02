import React, {Component} from 'react';
import {Container, Content, List, ListItem, Text, Left, Body, Right, Icon, Header, Footer, Button} from 'native-base';

export default class App extends Component{

  state = {
    cars: [
      {name: 'civic', color: 'white pearl'},
      {name: 'dodge charger', color: 'black'},
      {name: 'lambo', color: 'red'},
    ]
  }

  renderRow(car, i){
    return (
      <ListItem key={i}>
        <Body>
          <Text>{car.name}</Text>
          <Text note>{car.color}</Text>
        </Body>
        <Right>
          <Icon name="ios-arrow-forward"/>
        </Right>
      </ListItem>
    );
  }

  render(){
    return (
      <Container>
        <Header>
          <Left>
            <Icon style={{color: '#FFF'}} name="ios-arrow-back"/>
          </Left>
          <Body>
            <Text>Header</Text>
          </Body>
          <Right>
            <Icon name="more"/>
          </Right>
        </Header>

        <Content>
          <List>
            {this.state.cars.map((car, i)=>this.renderRow(car, i))}
          </List>
        </Content>

        <Footer>
          <Button full light>
            <Text>Add to List</Text>
          </Button>
        </Footer>
      </Container>
    )
  }

}
