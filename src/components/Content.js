import React from 'react';

const Content = ({ currentLab }) => {
  return (
    <div>
      <h2>Lab: {currentLab}</h2>
      <p>Content for Lab {currentLab} goes here...</p>
    </div>
  );
};

export default Content;