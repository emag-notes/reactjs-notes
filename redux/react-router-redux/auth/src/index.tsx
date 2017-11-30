import * as React from 'react';
import * as ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import { ConnectedRouter, routerMiddleware, routerReducer } from 'react-router-redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import { Route, Switch } from 'react-router';
import authReducer from './reducers';
import Login from './containers/Login';
import Home from './containers/Home';
import PrivateRoute from './containers/PrivateRoute';

const history = createBrowserHistory();
const store = createStore(
  combineReducers({routerReducer, authReducer}),
  applyMiddleware(routerMiddleware(history), logger)
);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/login" component={Login}/>
        <PrivateRoute exact={true} path="/" component={Home}/>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
