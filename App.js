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
      screen: 'example.Search',
      icon: require('./img/icons/search-inactive.png'),
      selectedIcon: require('./img/icons/search-active.png'), // iOS only
      title: 'Search'
    },
    {
      screen: 'example.AddStory',
      icon: require('./img/icons/add-inactive.png'),
      selectedIcon: require('./img/icons/add-active.png'), // iOS only
      title: 'Add Story'
    },
    {
      screen: 'example.Follow',
      icon: require('./img/icons/follow-inactive.png'),
      selectedIcon: require('./img/icons/follow-active.png'), // iOS only
      title: 'Follow'
    },
    {
      screen: 'example.Profile',
      icon: require('./img/icons/profile-inactive.png'),
      selectedIcon: require('./img/icons/profile-active.png'), // iOS only
      title: 'Profile'
    },
  ]
});
