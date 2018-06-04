import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Route, Switch } from 'react-router';
import PostsIndex from './PostsIndex';
import PostsNew from './PostsNew';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/posts/new" component={PostsNew}/>
            <Route path="/" component={PostsIndex}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
