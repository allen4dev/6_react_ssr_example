import React, { Component } from 'react';
import { Helmet } from 'react-helmet';

import Layout from './../shared/Layout';

export class Home extends Component {
  renderHead() {
    return (
      <Helmet>
        <title>Homepage</title>
      </Helmet>
    );
  }

  render() {
    return (
      <Layout>
        <div className="Home">
          {this.renderHead()}
          <h1>Home</h1>
        </div>
      </Layout>
    );
  }
}

export default {
  component: Home,
};
