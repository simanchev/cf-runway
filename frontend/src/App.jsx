import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Main from './features/main/Main';
import MainContent from './features/main/MainContent';
import Profile from './features/profile/Profile';
import ProjectPage from './features/Project/ProjectPage';
// import ProjectPage from './features/Project/ProjectPage';

function App() {
  const user = localStorage.getItem('user');
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/auth/authenticate')
      .then((result) => result.json())
      .then((data) => {
        if ((data.auth === false) && (!user)) {
          localStorage.clear();
          dispatch({ type: 'AUTHENTIC', payload: data });
        } else {
          dispatch({ type: 'AUTHENTIC', payload: data });
        }
      });
  }, [dispatch, user]);
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />}>
          <Route path="/" element={<MainContent />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/profile/project/:id" element={<ProjectPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
