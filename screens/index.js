import { Navigation } from 'react-native-navigation';

import WelcomeScreen from './WelcomeScreen';
import About from './About';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('example.WelcomeScreen', () => WelcomeScreen);
  Navigation.registerComponent('example.About', () => About);
}
