export const initialState = {

  auth: false,
  name: '',
};

// eslint-disable-next-line default-param-last
export default function topicsReducer(state = initialState, action) {
  console.log(action.payload, 'payyyyllloooaaaadddd');
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

    default:
      return state;
  }
}
