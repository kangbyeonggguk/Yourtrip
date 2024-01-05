const initialState = {
  isLoggedIn: false,
  userId: null,
  token: null,
  tokenExpirationDate: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "REDUXLOGIN":
      return {
        ...state,
        isLoggedIn: true,
        userId: action.payload.uid,
        token: action.payload.token,
        tokenExpirationDate:
          action.payload.expirationDate ||
          new Date(new Date().getTime() + 1000 * 60 * 60),
      };
    case "REDUXLOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
