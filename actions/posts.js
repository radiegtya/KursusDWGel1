import axios from 'axios';

import {apiUrl} from '../utils/config';

export function allPosts(){
  return {
    type: "ALL_POSTS",
    payload: axios.get(`${apiUrl}/posts`)
  }
}

export function myPosts(userId){
  return {
    type: "MY_POSTS",
    payload: axios.get(`${apiUrl}/posts?userId=${userId}`)
  }
}

export function getPost(id){
  return {
    type: "GET_POST",
    payload: axios.get(`${apiUrl}/posts/${id}`)
  }
}

//get all posts count by userId (loggedIn user)
export function allPostsCount(userId){
  return {
    type: "ALL_POSTS_COUNT",
    payload: axios.get(`${apiUrl}/posts/count/${userId}`)
  }
}
