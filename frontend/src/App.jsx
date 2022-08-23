import React, { useEffect } from 'react';
import './App.css';
import { useDispatch } from 'react-redux';
import Header from './features/Header/Header';
import ProjectPage from './features/Project/ProjectPage';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    fetch('/api/auth/authenticate')
      .then((result) => result.json())
      .then((data) => {
        dispatch({ type: 'AUTHENTIC', payload: data });
      }, [dispatch]);
  });
// передает все правильно {auth, name}
  return (
    <div className="App">
      <Header />
      <div className="container" style={{ marginTop: '60px' }}>
        <ProjectPage id={1} />
      </div>
    </div>
  );
}

export default App;
