import React from 'react';
import { useSelector } from 'react-redux';

function DeleteModal() {
  // eslint-disable-next-line react/destructuring-assignment
  const project = useSelector((state) => state.projects.curProject);
  const { id } = project;

  async function deleteProject(event) {
    event.preventDefault();
    const response = await fetch(`/api/project/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'Application/json' },
      body: JSON.stringify({ id }),
    });
    const data = await response.json();
    if (data.deleted) window.location.replace('/profile');
  }

  return (
    <div className="modal fade" id="deleteModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Удалить проект</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
          </div>
          <div className="modal-body">
            <form className="modal-form" id="project-delete-form" onSubmit={deleteProject}>
              <div className="mb-3">
                <label className="form-label" style={{ marginBottom: '20px' }}>Вы уверены, что хотите удалить проект?</label>
                <label className="form-label">Это действие невозможно отменить, вся информация о проекте будет удалена без возможности восстановления.</label>
              </div>
              <div className="delete-modal-footer">
                <button type="button" className="btn btn-dark btn-modal" data-bs-dismiss="modal">Отменить</button>
                <button type="submit" className="btn btn-danger btn-delete-project">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                  </svg>
                  Подтвердить удаление
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeleteModal;
