import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import { render } from 'react-dom';
import App from './Routes/App';

render(<App />, document.getElementById('root'));
>>>>>>> a07c665553c4dd21a025089a8958e73ed26dbdd2
