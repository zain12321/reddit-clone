import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ProgressBar from '@badrap/bar-of-progress';

const progress = new ProgressBar({
  delay: 80,
   size: 8,
   color: "#29e",
   className: "bar-of-progress",

}
);

setTimeout(() => {
  progress.start()
  progress.finish();
}, 4000);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode
  >
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
