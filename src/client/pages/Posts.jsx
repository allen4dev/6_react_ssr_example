import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Layout from './../shared/Layout';

import { fetchPosts } from './../actions/posts';

export class Posts extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      console.log('FETCHING FROM CLIENT');
      this.fetchData();
    }
  }

  fetchData = async () => {
    const { fetchPosts } = this.props;

    return await fetchPosts();
  };

  renderPost(post) {
    return (
      <Link
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
    );
  }

  render() {
    return (
      <Layout options={{ title: `${this.props.items.length} posts loaded` }}>
        <div className="Posts">
          <h1>Posts</h1>
          <ul className="PostList">{this.props.items.map(this.renderPost)}</ul>
          {this.props.error && <span>{this.props.error}</span>}
        </div>
      </Layout>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    items: posts.entities,
    error: posts.error,
  };
}

export default {
  component: connect(mapStateToProps, {
    fetchPosts,
  })(Posts),
  loadData: ({ dispatch }) => dispatch(fetchPosts()),
};
