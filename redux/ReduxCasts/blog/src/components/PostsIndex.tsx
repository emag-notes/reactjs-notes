import * as React from 'react';
import { connect } from 'react-redux';
import * as _ from 'lodash';
import { fetchPosts, FetchPostsAction } from '../actions/index';
import { Post } from '../models/Post';
import { Link } from 'react-router-dom';

interface Props {
  posts: any;
  fetchPosts: () => FetchPostsAction;
}

class PostsIndex extends React.Component<Props, {}> {

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    this.props.fetchPosts();
  }

  renderPosts() {
    return _.map(this.props.posts, (post: Post) => {
      return (
        <li className="list-group-item" key={post.id}>
          {post.title}
        </li>
      );
    });
  }

}

const mapStateToProps = (state: any) => ({
  posts: state.posts
});

export default connect(mapStateToProps, {fetchPosts})(PostsIndex);