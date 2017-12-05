const initialState = {
  loading: false,
  posts: [],
  postsFollowed: [],
  myPosts: [],
  post: {},
  postCount: {},
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
    case "ALL_POSTS_FOLLOWED_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_POSTS_FOLLOWED_FULFILLED":
      state = {...state, loading: false, postsFollowed: action.payload.data};
      break;
    case "ALL_POSTS_FOLLOWED_REJECTED":
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
    case "ALL_POSTS_COUNT_PENDING":
      state = {...state, loading: true};;
      break;
    case "ALL_POSTS_COUNT_FULFILLED":
      state = {...state, postCount: action.payload.data, loading: false};
      break;
    case "ALL_POSTS_COUNT_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
