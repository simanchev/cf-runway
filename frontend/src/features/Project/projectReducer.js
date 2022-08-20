/* eslint-disable no-case-declarations */
const actionType = {
  UPDATE_PROJECT: 'UPDATE_PROJECT',
};

const initialState = {
  projects: [
    {
      id: 1,
      user_id: 1,
      title: 'Интернет-магазин детской одежды',
      industry: 'Интернет-торговля',
      description: 'Интернет-магазин одежды и аксессуаров для детей от 3 до 14 лет. Ассортиментный ряд включает множество разнообразных по цвету и фасону моделей повседневной, школьной, спортивной и праздничной одежды',
    },
  ],
};

// eslint-disable-next-line default-param-last
function reducer(state = initialState, action) {
  switch (action.type) {
    case actionType.UPDATE_PROJECT:
      const {
        id, title, industry, description,
      } = action.payload;

      const targetProject = state.projects.find((project) => project.id === id);
      const updatedProject = {
        ...targetProject, title, industry, description,
      };

      return {
        ...state,
        projects: state.projects.map((project) => (project.id === id ? updatedProject : project)),
      };

    default:
      return state;
  }
}

export default reducer;
export { initialState };
