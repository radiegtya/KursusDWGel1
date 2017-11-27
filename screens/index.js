import { Navigation } from 'react-native-navigation';

import SignIn from './SignIn';
import SignUp from './SignUp';
import Home from './Home';
import Search from './Search';
import AddStory from './AddStory';
import Follow from './Follow';
import Profile from './Profile';
import Comment from './Comment';
// import WelcomeScreen from './WelcomeScreen';
// import About from './About';
// import Users from './Users';
// import UsersAdd from './UsersAdd';
// import UsersEdit from './UsersEdit';

// register all screens of the app (including internal ones)
export function registerScreens(store, Provider) {
  Navigation.registerComponent('example.SignIn', () => SignIn);
  Navigation.registerComponent('example.SignUp', () => SignUp);
  Navigation.registerComponent('example.Home', () => Home, store, Provider);
  Navigation.registerComponent('example.Search', () => Search, store, Provider);
  Navigation.registerComponent('example.AddStory', () => AddStory, store, Provider);
  Navigation.registerComponent('example.Follow', () => Follow, store, Provider);
  Navigation.registerComponent('example.Profile', () => Profile, store, Provider);
  Navigation.registerComponent('example.Comment', () => Comment, store, Provider);
  // Navigation.registerComponent('example.WelcomeScreen', () => WelcomeScreen);
  // Navigation.registerComponent('example.About', () => About);
  // Navigation.registerComponent('example.Users', () => Users, store, Provider);
  // Navigation.registerComponent('example.UsersAdd', () => UsersAdd, store, Provider);
  // Navigation.registerComponent('example.UsersEdit', () => UsersEdit, store, Provider);
}
