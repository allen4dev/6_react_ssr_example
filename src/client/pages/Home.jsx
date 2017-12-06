import React, { Component } from 'react';

import Layout from './../shared/Layout';

export class Home extends Component {
  render() {
    return (
      <Layout options={{ title: 'Homepage' }}>
        <div className="Home">
          <h1>Home</h1>
        </div>
      </Layout>
    );
  }
}

export default {
  component: Home,
};
