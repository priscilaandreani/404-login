import React from 'react';
import ReactDOM from 'react-dom';  //importante para aparecer na tela
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
