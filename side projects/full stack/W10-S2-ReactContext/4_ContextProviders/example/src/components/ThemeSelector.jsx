import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

function ThemeSelector() {
  const { changeTheme } = useContext(ThemeContext);

  const handleColorChange = (e) => {
    changeTheme(e.target.value);
  };

  return (
    <div>
      <label htmlFor="themeColor">Choose Theme Color: </label>
      <input
        type="color"
        id="themeColor"
        onChange={handleColorChange}
      />
    </div>
  );
}

export default ThemeSelector;
