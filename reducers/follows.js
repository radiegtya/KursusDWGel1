const initialState = {
  loading: false,
  follows: [],
  error: "",
};

export default function followsReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_FOLLOWS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_FOLLOWS_FULFILLED":
      state = {...state, loading: false, follows: action.payload.data};
      break;
    case "ALL_FOLLOWS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
