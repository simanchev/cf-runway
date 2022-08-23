/* eslint-disable no-case-declarations */
import actionType from '../store/actions';

const initialState = {
  revenueData: [],
  costData: [],
  investmentData: [],
  financingData: [],
  curFinData: {},
  CF: {},
  cumulativeCF: {},
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.LOAD_FIN_DATA:
      const revenueData = action.payload.filter((data) => data.fin_types_id === 1);
      const costData = action.payload.filter((data) => data.fin_types_id === 2);
      const investmentData = action.payload.filter((data) => data.fin_types_id === 3);
      const financingData = action.payload.filter((data) => data.fin_types_id === 4);

      return {
        ...state, revenueData, costData, investmentData, financingData,
      };

    case actionType.SELECT_FIN_DATA:
      return { ...state, curFinData: action.payload };

    case actionType.CLEAR_CUR_FIN_DATA:
      return { ...state, curFinData: {} };

    default:
      return state;
  }
}

export default reducer;
