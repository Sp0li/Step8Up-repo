import React, { useContext } from 'react';
import { ThemeContext, ThemeProvider } from '../contexts/ThemeContext.jsx';

function Tweet({ username, content }) {

  //const { userID, themeColor, toggleTheme2 } = useContext(ThemeContext);

  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '10px 0', borderRadius: '5px'/*, backgroundColor: themeColor */}}>
      <h4>@{username}</h4>
      <p>{content}</p>
    </div>
  );
}

export default Tweet;
