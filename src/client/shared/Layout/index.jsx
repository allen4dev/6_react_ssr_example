import React from 'react';

import { NavLink } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
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
