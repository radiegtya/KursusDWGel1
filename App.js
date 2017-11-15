import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';

import { registerScreens } from './screens';
import store from './store';

registerScreens(store, Provider); // this is where you register all of your app's screens

Navigation.startTabBasedApp({
  tabs: [
    {
      screen: 'example.Home', // this is a registered name for a screen
      icon: require('./img/icons/home-inactive.png'),
      selectedIcon: require('./img/icons/home-active.png'), // iOS only
      title: 'Instantgram'
    },
    {
      screen: 'example.WelcomeScreen',
      icon: require('./img/icons/home-inactive.png'),
      selectedIcon: require('./img/icons/home-active.png'), // iOS only
      title: 'WelcomeScreen'
    }
  ]
});
