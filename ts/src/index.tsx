import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './containers/Hello';
import { createStore } from 'redux';
import { enthusiasm } from './reducers';
import { StoreState } from './types';
import { Provider } from 'react-redux';
import DevTools from './containers/DevTools';
import registerServiceWorker from './registerServiceWorker';

const store = createStore<StoreState>(
  enthusiasm,
  {
    enthusiasmLevel: 1,
    languageName: 'TypeScript',
  },
  DevTools.instrument());

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Hello/>
      <DevTools/>
    </div>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
