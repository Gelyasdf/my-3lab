import React from 'react';

const Menu = ({ labs, handleClick }) => {
  return (
    <nav>
      <ul>
        {labs.map((lab, index) => (
          <li key={index} onClick={() => handleClick(lab)}>
            {lab}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;