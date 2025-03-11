import React from 'react';

function Tweet({ username, content }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px' }}>
      <h4>@{username}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Tweet;
