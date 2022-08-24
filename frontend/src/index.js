import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './features/profile/Profile';
import store from './features/store/store';
import Range from './features/Range/Range';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <BrowserRouter>
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/range" element={<Range />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Provider>
  </BrowserRouter>,
  // </React.StrictMode>
);
