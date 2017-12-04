import React, { Component } from 'react';
import { connect } from 'react-redux';

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
      <li key={post.id} className="Post">
        <h4 className="Post-title">{post.title}</h4>
        <p className="Post-body">{post.body}</p>
      </li>
    );
  }

  render() {
    return (
      <Layout>
        <div className="Posts">
          <h1>Posts</h1>
          <ul className="PostList">{this.props.items.map(this.renderPost)}</ul>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps({ posts }) {
  return {
    items: posts,
  };
}

export default {
  component: connect(mapStateToProps, {
    fetchPosts,
  })(Posts),
};
