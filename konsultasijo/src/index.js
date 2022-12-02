import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import {AuthContextProvider} from './context/AuthContext'

ReactDOM.render(
  <StrictMode>
    <AuthContextProvider>
      <Router>
        <App />
      </Router>
    </AuthContextProvider>
  </StrictMode>,
  document.getElementById('root')
);
