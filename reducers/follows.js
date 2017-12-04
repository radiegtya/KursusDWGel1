const initialState = {
  loading: false,
  follows: [],
  follow: {},
  error: "",
};

export default function followsReducer(state = initialState, action){
  switch (action.type) {
    case "GET_FOLLOW_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_FOLLOW_FULFILLED":
      state = {...state, follow: action.payload.data, loading: false};
      break;
    case "GET_FOLLOW_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
