import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from '../Header/Header';
import ProfileButtons from './ProfileButtons';

function Profile() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/user/profile')
      .then((res) => res.json())
      .then((data) => dispatch({ type: 'LOAD_PROJECTS', payload: data.result }));
  }, []);
  const { projectsForMap } = useSelector((st) => st.projectCards);
  return (
    <div>
      <Header />
      {(projectsForMap.length === 0) ? (<div>Список пуст</div>)
        : (
          <ul>
            {projectsForMap.map((el) => <li><ProfileButtons key={el.id} el={el} /></li>)}
          </ul>
        )}
    </div>

  );
}
export default Profile;
