import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchSingle } from './../actions/posts';

export class Post extends Component {
  async componentDidMount() {
    const { post } = this.props;

    if (!post) {
      console.log('FETCHING POST IN CLIENT');
      await this.fetchData();
    }
  }

  fetchData = async () => {
    const { fetchSingle, match } = this.props;
    await fetchSingle(match.params.id);
  };

  render() {
    const { post } = this.props;

    return (
      <div className="Post">
        <h1 className="Post-title">{post.title}</h1>
        <p className="Post-body">{post.body}</p>
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  const post = state.posts.entities.find(post => {
    return post.id === +match.params.id;
  });

  return {
    post,
  };
}

export default {
  component: connect(mapStateToProps, { fetchSingle })(Post),
  loadData: ({ dispatch }, params) => dispatch(fetchSingle(params.id)),
};
