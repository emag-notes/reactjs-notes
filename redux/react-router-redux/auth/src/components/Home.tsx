import * as React from 'react';

interface Props {
  logout: () => void;
  location: {
    pathname: string
  };
}

class Home extends React.Component<Props, {}> {

  componentWillMount() {
    alert(`Private home is at: ${this.props.location.pathname}`);
  }

  render() {
    return (
      <button onClick={this.props.logout}>Logout Here!</button>
    );
  }

}

export default Home;
