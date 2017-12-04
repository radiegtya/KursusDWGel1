const initialState = {
  loading: false,
  notifications: [],
  error: "",
};

export default function notificationsReducer(state = initialState, action){
  switch (action.type) {
    case "ALL_NOTIFICATIONS_PENDING":
      state = {...state, loading: true};
      break;
    case "ALL_NOTIFICATIONS_FULFILLED":
      state = {...state, loading: false, notifications: action.payload.data};
      break;
    case "ALL_NOTIFICATIONS_REJECTED":
      state = {...state, loading: false, error: action.payload};
      break;
    default:
      state;
  }

  return state;
}
