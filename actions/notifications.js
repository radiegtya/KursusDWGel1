import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allNotifications(){
  return {
    type: "ALL_NOTIFICATIONS",
    payload: axios.get(`${apiUrl}/notifications`)
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
