import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import Header from './Header';
import Fetch from './Fetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='container'>
    <Header/>
      <Fetch/>
      <App />
    </div>
  </React.StrictMode>
);

