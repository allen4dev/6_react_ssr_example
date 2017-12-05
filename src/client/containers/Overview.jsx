import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUserPosts, fetchPostComments } from './../actions/posts';

class Overview extends Component {
  async componentDidMount() {
    const { posts, comments } = this.props;

    if (posts.length === 0 || comments.length === 0) {
      console.log('FETCHING OVERVIEW DATA IN THE CLIENT');
      await this.fetchData();
    }
  }

  fetchData = async () => {
    const {
      currentPost,
      fetchUserPosts,
      fetchPostComments,
      match: { params },
    } = this.props;

    await Promise.all([
      fetchUserPosts(currentPost.userId),
      fetchPostComments(+params.id),
    ]);
  };

  renderPosts() {
    return (
      <ul>
        {this.props.posts
          .filter(post => post.id !== this.props.currentPost.id)
          .map(post => (
            <Link
              key={post.id}
              to={`/posts/${post.id}`}
              style={{
                textDecoration: 'none',
                color: 'black',
                border: '1px solid black',
                display: 'block',
                marginBottom: '1em',
              }}
              key={post.id}
              className="Post">
              <h4 className="Post-title">{post.title}</h4>
              <p className="Post-body">{post.body}</p>
            </Link>
          ))}
      </ul>
    );
  }

  renderComments() {
    return (
      <ul>
        {this.props.comments.map(comment => (
          <div
            key={`comment-${comment.id}`}
            style={{
              textDecoration: 'none',
              color: 'black',
              border: '1px solid red',
              display: 'block',
              marginBottom: '1em',
            }}
            className="comment">
            <h4 className="comment-name">{comment.name}</h4>
            <p className="comment-body">{comment.body}</p>
          </div>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="Overview">
        <h2>Posts</h2>
        {this.renderPosts()}
        <h2>Comments</h2>
        {this.renderComments()}
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const currentPost = state.posts.entities.find(
    post => post.id === +match.params.id,
  );

  return {
    currentPost,
    posts: state.posts.entities.filter(
      post => post.userId === currentPost.userId,
    ),
    comments: state.comments.entities.filter(
      comment => comment.postId === +match.params.id,
    ),
  };
}

export default {
  component: connect(mapStateToProps, {
    fetchUserPosts,
    fetchPostComments,
  })(Overview),
  loadData: ({ getState, dispatch }, params) => {
    return Promise.all([
      dispatch(fetchPostComments(+params.id)),
      dispatch(fetchUserPosts(1)),
    ]);
  },
};
