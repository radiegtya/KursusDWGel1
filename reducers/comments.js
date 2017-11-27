const initialState = {
  loading: false,
  comments: [],
  error: "",
};

export default function commentsReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_COMMENTS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_COMMENTS_FULFILLED":
      state = {...state, loading: false, comments: action.payload.data};
      break;
    case "ALL_COMMENTS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
