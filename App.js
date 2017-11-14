import { Navigation } from 'react-native-navigation';
import {Provider} from 'react-redux';

import { registerScreens } from './screens';
import store from './store';

registerScreens(store, Provider); // this is where you register all of your app's screens

// start the app
Navigation.startSingleScreenApp({
  screen: {
    screen: 'example.SignIn', // unique ID registered with Navigation.registerScreen
    title: 'Sign In', // title of the screen as appears in the nav bar (optional)
  },
});
