import axios from 'axios';

import {apiUrl} from '../utils/config';

export function getFollow(ownerId, followedId){
  return {
    type: "GET_FOLLOW",
    payload: axios.get(`${apiUrl}/follows/${ownerId}/${followedId}`)
  }
}

// export function createNotification(){
//   axios.post(`${apiUrl}/notifications`)
//
//   return {
//     type: "ALL_NOTIFICATION",
//     payload: axios.get(`${apiUrl}/notifications`)
//   }
// }
