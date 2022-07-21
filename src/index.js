// stylesheet
import './css/index.css';

// Js files
// import './js/search';
import './js/cities';
import React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('app'));
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
);
// ReactDOM.render(<App />, document.getElementById('app'));
