import * as React from 'react';

interface Props {
  login: () => void;
}

const Login = ({login}: Props) => (
  <button onClick={login}>Login Here!</button>
);

export default Login;