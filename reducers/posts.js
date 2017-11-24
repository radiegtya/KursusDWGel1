const initialState = {
  loading: false,
  posts: [],
  myPosts: [],
  post: {},
  error: "",
};

export default function postsReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_POSTS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_POSTS_FULFILLED":
      state = {...state, loading: false, posts: action.payload.data};
      break;
    case "ALL_POSTS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    case "MY_POSTS_PENDING":
      state = {...state, loading: true};
      break;
    case "MY_POSTS_FULFILLED":
      state = {...state, loading: false, myPosts: action.payload.data};
      break;
    case "MY_POSTS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    case "GET_POST_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_POST_FULFILLED":
      state = {...state, post: action.payload.data, loading: false};
      break;
    case "GET_POST_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
