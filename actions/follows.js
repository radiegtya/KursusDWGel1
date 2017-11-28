import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allFollows(){
  return {
    type: "ALL_FOLLOWS",
    payload: axios.get(`${apiUrl}/follows`)
  }
}

// export function createFollow(){
//   axios.post(`${apiUrl}/follows`)
//
//   return {
//     type: "ALL_FOLLOW",
//     payload: axios.get(`${apiUrl}/follows`)
//   }
// }
