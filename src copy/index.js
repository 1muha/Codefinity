import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Begin from './components/begin/Begin';
import { BrowserRouter } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Savol from "././components/savol/Savol"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/begin" element={<Begin />}></Route>
        <Route path="/savol" element={<Savol />}></Route>
      </Routes>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);