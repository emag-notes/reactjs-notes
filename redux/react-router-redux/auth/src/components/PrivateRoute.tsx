import * as React from 'react';
import { Redirect, Route } from 'react-router';

interface Props {
  isAuthenticated: boolean;
  component: any;
  exact: boolean;
  path: string;
}

class PrivateRoute extends React.Component<Props> {
  render() {
    const {
      isAuthenticated,
      component: Component,
      ...props
    } = this.props;

    return (
      <Route
        {...props}
        render={props =>
          isAuthenticated
            ? (
              <Component {...props}/>
            ) : (
              <Redirect
                to={{
                pathname: '/login',
                state: {from: props.location}}}
              />
            )}
      />
    );
  }
}

export default PrivateRoute;