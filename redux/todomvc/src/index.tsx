import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App';
import reducer from './reducers';
import registerServiceWorker from './registerServiceWorker';
import 'todomvc-app-css/index.css';

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
