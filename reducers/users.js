const initialState = {
  loading: false,
  users: [],
  user: {},
  error: "",
};

export default function usersReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_USERS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_USERS_FULFILLED":
      state = {...state, loading: false, users: action.payload.data};
      break;
    case "ALL_USERS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    case "GET_USER_PENDING":
      state = {...state, loading: true};;
      break;
    case "GET_USER_FULFILLED":
      state = {...state, user: action.payload.data, loading: false};
      break;
    case "GET_USER_REJECTED":
      state = {...state, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
