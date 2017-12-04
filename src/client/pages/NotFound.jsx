import React from 'react';

const NotFound = ({ staticContext = {} }) => {
  staticContext.notFound = true;

  return (
    <div className="NotFound">
      <span>Page not found</span>
    </div>
  );
};

export default {
  component: NotFound,
};
