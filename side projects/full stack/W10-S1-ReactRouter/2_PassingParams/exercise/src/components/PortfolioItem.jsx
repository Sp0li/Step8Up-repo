import React from 'react';
import { useParams } from 'react-router-dom';


function PortfolioItem() {
  
  const { id } = useParams();

  return (
    <div>
      <h1>Portfolio Item {id}</h1>
      <p>Details for portfolio item number {id}.</p>
    </div>
  );
}

export default PortfolioItem;
