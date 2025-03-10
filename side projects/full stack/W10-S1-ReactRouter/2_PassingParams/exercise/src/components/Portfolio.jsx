import React from 'react';
import { Link } from 'react-router-dom';

function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <p>Select a portfolio item to view details:</p>
      <ul>
        <li>
          <Link to="/portfolio/1">Portfolio Item 1</Link>
        </li>
        <li>
          <Link to="/portfolio/2">Portfolio Item 2</Link>
        </li>
        <li>
          <Link to="/portfolio/3">Portfolio Item 3</Link>
        </li>
      </ul>
    </div>
  );
}

export default Portfolio;
