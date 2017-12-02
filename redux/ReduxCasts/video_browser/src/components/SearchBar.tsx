import * as React from 'react';
import { SyntheticEvent } from 'react';

interface Props {
  onSearchTermChange: (term: string) => void;
}

interface State {
  term: string;
}

class SearchBar extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      term: ''
    };
  }

  render() {
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={(e: SyntheticEvent<HTMLInputElement>) =>
            this.onInputChange(e.currentTarget.value)
          }
        />
      </div>
    );
  }

  onInputChange = (term: string) => {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;