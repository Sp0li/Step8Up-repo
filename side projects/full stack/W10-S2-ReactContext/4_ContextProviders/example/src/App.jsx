import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import ThemeSelector from './components/ThemeSelector';
import Display from './components/Display';

function App() {
  return (
    <ThemeProvider>
      <div style={{ padding: '20px', textAlign: 'center' }}>
        <h1>React Theme Selector</h1>
        <ThemeSelector />
        <Display />
      </div>
    </ThemeProvider>
  );
}

export default App;
