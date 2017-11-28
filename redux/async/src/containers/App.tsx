import * as React from 'react';
import Picker from '../components/Picker';
import { connect } from 'react-redux';
import { fetchPostsIfNeeded, invalidateReddit, selectReddit } from '../actions';
import Posts from '../components/Posts';

interface Props {
  selectedReddit: string;
  posts: [{
    title: string
  }];
  isFetching: boolean;
  lastUpdated: number;
  dispatch: any;
}

class App extends React.Component<Props, {}> {

  componentDidMount() {
    const {dispatch, selectedReddit} = this.props;
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.selectedReddit !== this.props.selectedReddit) {
      const {dispatch, selectedReddit} = nextProps;
      dispatch(fetchPostsIfNeeded(selectedReddit));
    }
  }

  handleChange = (nextReddt: string) => {
    this.props.dispatch(selectReddit(nextReddt));
  }

  handleRefreshClick = () => {
    const {dispatch, selectedReddit} = this.props;
    dispatch(invalidateReddit(selectedReddit));
    dispatch(fetchPostsIfNeeded(selectedReddit));
  }

  render() {
    const {selectedReddit, posts, isFetching, lastUpdated} = this.props;
    const isEmpty = posts.length === 0;

    const lastUpdatedSection =
      lastUpdated === 0
        ? (<span/>)
        : (<span>Last updated at {new Date(lastUpdated).toLocaleTimeString()}.{' '}</span>);

    const mainSection =
      isEmpty
        ? isFetching ? (<h2>Loading...</h2>) : (<h2>Empty.</h2>)
        : (
          <div style={{opacity: isFetching ? 0.5 : 1}}>
            <Posts posts={posts}/>
          </div>
        );

    return (
      <div>
        <Picker
          value={selectedReddit}
          onChange={this.handleChange}
          options={['reactjs', 'frontend']}
        />
        <p>
          {lastUpdatedSection}
          {!isFetching &&
          <button onClick={this.handleRefreshClick}>
            Refresh
          </button>
          }
        </p>
        {mainSection}
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  const {selectedReddit, postsByReddit} = state;
  const {
    isFetching,
    lastUpdated = 0,
    items: posts
  } = postsByReddit[selectedReddit] || {
    isFetching: true,
    items: []
  };

  return {
    selectedReddit,
    posts,
    isFetching,
    lastUpdated
  };
};

export default connect(mapStateToProps)(App);
