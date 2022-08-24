import React from 'react';

function ProfileButtons({ el }) {
  return (
    <div className="card" id={el.id}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{el.title}</h5>
        <h6 className="card-text">{el.industry}</h6>
        <p className="card-text">{el.description}</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  );
}
export default ProfileButtons;
