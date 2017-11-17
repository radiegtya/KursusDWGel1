import React, {Component} from 'react';
import {Container, Content, Text, Header, Tab, Tabs, List} from 'native-base';

import Following from '../components/Following';
import You from '../components/You';

export default class Follow extends Component{

  static navigatorStyle = {
    navBarHidden: true,
  };

  render(){
    return(
      <Container>
        <Tabs style={{paddingTop: 10}}>
          <Tab heading="Following">
            <Following/>
          </Tab>
          <Tab heading="You">
            <You/>
          </Tab>
        </Tabs>
      </Container>
    )
  };

}
