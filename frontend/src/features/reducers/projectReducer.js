/* eslint-disable no-case-declarations */
import actionType from '../store/actions';

const initialState = {
  projectList: [],
  curProject: {
    id: null,
    user_id: null,
    title: '',
    industry: '',
    description: '',
  },
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.LOAD_PROJECT:
      return { ...state, curProject: action.payload };

    case actionType.UPDATE_PROJECT:
      const {
        id, title, industry, description,
      } = action.payload;

      const targetProject = state.projectList.find((project) => project.id === id);
      const updatedProject = {
        ...targetProject, title, industry, description,
      };

      return {
        ...state,
        projectList: state.projectList.map((project) => (project.id === id ? updatedProject : project)),
      };

    default:
      return state;
  }
}

export default reducer;
