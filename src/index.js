import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import './index.css';


ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
