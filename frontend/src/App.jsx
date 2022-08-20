import React from 'react';
import './App.css';
import Header from './features/Header/Header';
import ProjectPage from './features/project/ProjectPage';

function App() {
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
