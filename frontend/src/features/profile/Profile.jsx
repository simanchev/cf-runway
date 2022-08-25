import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProjectCard from './ProjectCard';
import actionType from '../store/actions';
import ProjectModal from '../Project/ProjectModal';

function Profile() {
  if (!localStorage.user) window.location.replace('/');

  const dispatch = useDispatch();
  const newProject = true;

  function clearCurProject() {
    dispatch({ type: actionType.LOAD_PROJECT, payload: {} });
  }

  const memoLoadProjectCards = useCallback(
    async () => {
      const response = await fetch('/api/user/profile');
      const projects = await response.json();
      dispatch({ type: actionType.LOAD_PROJECT_CARDS, payload: projects.result });
    },
    [dispatch],
  );

    useEffect(() => {
      memoLoadProjectCards();
    }, [memoLoadProjectCards]);

  const { projectCards } = useSelector((state) => state.projects);

  return (
    <div className="container card-list-container">
      {(projectCards.length === 0) ? <p style={{ marginBottom: '50px', fontSize: '15px' }}>Список проектов пока пуст</p>
        : <div className="card-list row">{projectCards.map((proj) => <ProjectCard key={[proj.id]} proj={proj} />)}</div>}
      <button type="button" className="btn btn-success btn-add-project" data-bs-toggle="modal" data-bs-target="#projectModal" onClick={clearCurProject}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" />
        </svg>
        Добавить новый проект
      </button>
      <ProjectModal newProject={newProject} />
    </div>
  );
}
export default Profile;
