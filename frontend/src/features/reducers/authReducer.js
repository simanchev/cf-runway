export const initialState = {

  auth: false,
  name: '',
};

// eslint-disable-next-line default-param-last
export default function authReducer(state = initialState, action) {
  switch (action.type) {
    // case 'AUTH':
    //   return {
    //     ...state,
    //     auth: action.payload.login,
    //     name: action.payload.username,
    //   };
    case 'AUTHENTIC':
      return {
        ...state,
        auth: action.payload.auth,
        name: action.payload.username,
      };
      case 'LOGOUT':
        return {
          ...state,
          auth: action.payload.auth,
          name: action.payload.name
        };

    default:
      return state;
  }
}
