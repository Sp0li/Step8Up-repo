import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function Display() {
  const { themeColor } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: themeColor, padding: '20px', color: '#fff', textAlign: 'center' }}>
      <p>Current Theme Color: {themeColor}</p>
    </div>
  );
}

export default Display;
