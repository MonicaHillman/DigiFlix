import React, { useContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthProvider from './provider/AuthProvider';
import {BrowserRouter} from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
  <AuthProvider>
  <App />
  </AuthProvider>
  </BrowserRouter>, document.getElementById('root')
);
