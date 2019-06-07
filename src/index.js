import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import * as serviceWorker from './serviceWorker';

//ReactDOM.render(__QUE___, __DONDE__);

ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
