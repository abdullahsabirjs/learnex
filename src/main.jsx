import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
// React DOM root ko target karna
const root = ReactDOM.createRoot(document.getElementById('root'));

// App component ko render karna
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
 