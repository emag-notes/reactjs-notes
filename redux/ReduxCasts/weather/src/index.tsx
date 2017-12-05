import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import reducers from './reducers';
import * as promise from 'redux-promise';
import logger from 'redux-logger';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const store = applyMiddleware(promise, logger)(createStore)(reducers);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
