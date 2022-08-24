const initialState = {
  projectsForMap: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'LOAD_PROJECTS':
        return {
...state, projectsForMap: [...action.payload],
        };
    default:
      return state;
  }
}

export default reducer;
