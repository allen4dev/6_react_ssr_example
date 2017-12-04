import React, { Component } from 'react';
import { connect } from 'react-redux';

import Layout from './../shared/Layout';

import { fetchPosts } from './../actions/posts';

export class Posts extends Component {
  componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      const posts = this.fetchData();
      console.log('POSTS', posts);
    }
  }

  fetchData = async () => {
    const { fetchPosts } = this.props;

    return await fetchPosts();
  };

  render() {
    return (
      <Layout>
        <div className="Posts">
          <h1>Posts</h1>
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

export default connect(mapStateToProps, {
  fetchPosts,
})(Posts);
