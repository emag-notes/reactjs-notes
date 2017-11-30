import * as React from 'react';
import * as ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
import { createStore, applyMiddleware } from 'redux';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';

const history = createBrowserHistory();
const store = createStore(
  routerReducer,
  applyMiddleware(routerMiddleware(history), logger)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
