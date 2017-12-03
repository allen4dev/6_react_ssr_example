import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="Layout">
      <header className="Header">Header here</header>
      {children}
      <footer className="Footer">Footer here</footer>
    </div>
  );
};

export default Layout;
