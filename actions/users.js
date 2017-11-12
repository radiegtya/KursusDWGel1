import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allUsers(){
  return {
    type: "ALL_USERS",
    payload: axios.get(`${apiUrl}/users`)
  }
}

export function getUser(id){
  return {
    type: "GET_USER",
    payload: axios.get(`${apiUrl}/users/${id}`)
  }
}
