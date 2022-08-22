export const initialState = {

  auth: false,
};

export default function topicsReducer(state = initialState, action) {
  switch (action.type) {
    case 'AUTH':
      return {
        ...state,
        auth: action.payload.login,
        name: action.payload.username,
      };
    case 'AUTHENTIC':
      return {
        ...state,
        auth: action.payload.login,
        name: action.payload.username,
      };

    default:
      return state;
  }
}
