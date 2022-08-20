import actionType from '../../store/actions';

const initialState = {
  revenueData: [],
  costData: [],
  investmentData: [],
  financingData: [],
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.LOAD_FIN_DATA:
      console.log(action.payload);
      return { ...state };

    default:
      return state;
  }
}

export default reducer;
