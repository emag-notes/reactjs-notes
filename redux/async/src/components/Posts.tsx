import * as React from 'react';

interface Props {
  posts: [{
    title: string
  }];
}

const Posts = ({posts}: Props) => {
  return (
    <ul>
      {posts.map((post, i) =>
        <li key={i}>{post.title}</li>
      )}
    </ul>
  );
};

export default Posts;
