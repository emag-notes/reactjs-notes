import * as React from 'react';
import { connect, Dispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather, FetchWeatherAction } from '../actions/index';

interface Props {
  fetchWeather: (term: string) => FetchWeatherAction;
}

interface State {
  term: string;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {term: ''};
  }

  render() {
    return (
      <form
        className="input-group"
        onSubmit={e => {
          e.preventDefault();
          this.props.fetchWeather(this.state.term);
          this.setState({term: ''});
        }}
      >
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={e => {
            this.setState({term: e.currentTarget.value});
          }}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Submit
          </button>
        </span>
      </form>
    );
  }

}

const mapDispatchToProps = (dispatch: Dispatch<FetchWeatherAction>) => {
  return bindActionCreators({ fetchWeather }, dispatch);
};

export default connect(null, mapDispatchToProps)(SearchBar);