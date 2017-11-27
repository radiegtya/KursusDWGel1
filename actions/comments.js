import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allComments(postId){
  return {
    type: "ALL_COMMENTS",
    payload: axios.get(`${apiUrl}/comments/${postId}`)
  }
}
