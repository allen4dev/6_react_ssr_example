import React from 'react';
import { Helmet } from 'react-helmet';
import { NavLink } from 'react-router-dom';

const Layout = ({ children, options }) => {
  function renderHead(options = {}) {
    return (
      <Helmet>
        <title>{options.title}</title>
      </Helmet>
    );
  }

  return (
    <div className="Layout">
      {renderHead(options)}
      <header className="Header">
        <NavLink exact to="/" activeStyle={{ color: 'darkorange' }}>
          Home
        </NavLink>
        <NavLink to="/posts" activeStyle={{ color: 'darkorange' }}>
          Posts
        </NavLink>
      </header>
      {children}
      <footer className="Footer">Footer here</footer>
    </div>
  );
};

export default Layout;
