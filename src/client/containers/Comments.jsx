import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';

import { fetchPostComments } from './../actions/posts';

class Comments extends Component {
  async componentDidMount() {
    const { items } = this.props;

    if (items.length === 0) {
      console.log('FETCHING COMMENTS IN CLIENT');
      await this.fetchData();
    }
  }

  fetchData = async () => {
    const { match, fetchPostComments } = this.props;

    await fetchPostComments(match.params.id);
  };

  render() {
    return (
      <div className="Comments">
        <Helmet>
          <title>Comments</title>
        </Helmet>
        {this.props.items.map(comment => (
          <li key={comment.id}>
            <h4 className="Comment-name">{comment.name}</h4>
            <p className="Comment-body">{comment.body}</p>
          </li>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state, { match }) {
  return {
    items: state.comments.entities.filter(
      comment => comment.postId === +match.params.id,
    ),
  };
}

export default {
  component: connect(mapStateToProps, {
    fetchPostComments,
  })(Comments),

  loadData: ({ dispatch }, params) => dispatch(fetchPostComments(params.id)),
};
