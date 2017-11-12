import {createStore, combineReducers, applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import axios from 'axios';

import {apiUrl} from '../utils/config';

//REDUCER
const usersInitialState = {
  users: [],
  user: {},
  error: false,
  loading: false
}
const usersReducer = function(state = usersInitialState, action){

  switch (action.type) {
    case "GET_USER_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_USER_FULFILLED":
      state = {...state, user: action.payload.data, loading: false};
      break;
    case "GET_USER_REJECTED":
      state = {...state, error: true};
      break;
    default:

  }

  return state;
}

const storiesInitialState = {
  stories: [],
  story: {}
}
const storiesReducer = function(state = storiesInitialState, action){
  switch (action.type) {
    case "GET_STORY":
      state = {...state, story: action.payload};
      break;
    case "ALL_STORIES":
      state = {...state, stories: action.payload};
      break;
    default:
      state;
  }
  return state;
}
const reducers = combineReducers({usersReducer, storiesReducer});


//STORE
const store = createStore(
  reducers,
  applyMiddleware(createLogger(), promise())
);

//SUBSCRIPTIONS
store.subscribe(()=> {
  console.log("current state = ");
  console.log(store.getState());
});

//ACTIONS
// store.dispatch({type: "GET_USER", payload: {username: "Joni", age: 20}})
// store.dispatch({type: "GET_USER", payload: {username: "Dian"}})

store.dispatch({
  type: "GET_USER",
  payload: axios.get(`${apiUrl}/users/3`)
});

// store.dispatch((dispatch)=>{
//   axios.get(`${apiUrl}/users/3`).then((result)=>{
//     dispatch({type: "GET_USER", payload: result.data});
//   })
// })
