import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import actionType from '../store/actions';

function ProjectModal() {
  const project = useSelector((state) => state.projects.curProject);
  const dispatch = useDispatch();

  async function showUpdatedProject() {
    const updateResponse = await fetch(`/api/project/${project.id}`);
    const projectData = await updateResponse.json();
    projectData.industry = projectData.industry.toLowerCase();
    dispatch({ type: actionType.LOAD_PROJECT, payload: projectData });
  }

  async function updateProject(event) {
    event.preventDefault();
    const { projectTitle, projectIndustry, projectDescription } = event.target;

    const response = await fetch(`/api/project/${project.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({
        title: projectTitle.value,
        industry: projectIndustry.value,
        description: projectDescription.value,
      }),
    });
    const data = await response.json();
    if (data.updated) showUpdatedProject();
  }

  return (
    <div className="modal fade" id="projectModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Изменить описание проекта</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="modal-form" onSubmit={updateProject}>
              <div className="mb-3">
                <label className="form-label">Название проекта</label>
                <input type="text" className="form-control" name="projectTitle" defaultValue={project.title} />
              </div>
              <div className="mb-3">
                <label className="form-label">Индустрия (основное направление)</label>
                <input type="text" className="form-control" name="projectIndustry" defaultValue={project.industry} />
              </div>
              <div className="mb-3">
                <label className="form-label">Краткое описание</label>
                <textarea className="form-control" name="projectDescription" defaultValue={project.description} />
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-dark btn-modal" data-bs-dismiss="modal">Сохранить изменения</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
