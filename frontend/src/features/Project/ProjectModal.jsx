import React from 'react';

function ProjectModal({ project }) {
  async function updateProject(event) {
    event.preventDefault();
    console.log(event.target);
    const { projectTitle, projectIndustry, projectDescription } = event.target;

    console.log(projectTitle.value);
    console.log(projectIndustry.value);
    console.log(projectDescription.value);

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

    if (data.updated) window.location.href = '/';
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
                <button type="submit" className="btn btn-dark btn-modal">Сохранить изменения</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;
