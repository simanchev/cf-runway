import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Profile from './features/profile/Profile';
import store from './features/store/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<App />} />
        <Route path="/profile" element={<Profile />} />

      </Routes>
    </Provider>
  </BrowserRouter>,
);
