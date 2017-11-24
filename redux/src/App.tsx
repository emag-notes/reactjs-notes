import * as React from 'react';
import Counter from './containers/Counter';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { StoreState } from './types';
import { count } from './reducers';

const store = createStore<StoreState>(count, {
  name: 'りんご',
  price: 300,
  count: 0
});

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Counter/>
      </Provider>
    );
  }
}

export default App;
