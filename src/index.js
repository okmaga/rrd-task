import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from "react-router-dom";
// import App5 from './App5';
import App6 from "./App6";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <App6 />
    </React.StrictMode>
  </BrowserRouter>
);

