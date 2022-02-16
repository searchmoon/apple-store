import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import clayful from "clayful/client-js";
import axios from "axios";

clayful.config({
  client: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImI4YTY4YjMyYjEwOWM3NjlkMWM1M2RhYjdjMzgwZTg2NDQ1YmE4NDNmN2FhNzc3NjQ5MDUwZTg0MzY0YTViODEiLCJyb2xlIjoiY2xpZW50IiwiaWF0IjoxNjQ0OTcyNDI0LCJzdG9yZSI6IkxDQ1E1SEFWWDNZQS40OTdTVzREQkFDODkiLCJzdWIiOiJXTUpERUxERjlBMjcifQ.8BJWgVoIG6oeR0QebwmVepxqjz142z0tchtej5n8M00'
});

clayful.install('request', require('clayful/plugins/request-axios')(axios));

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
