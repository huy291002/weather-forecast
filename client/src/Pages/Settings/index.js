import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './settings.css';

function Settings() {
  const [mode, setMode] = useState('light');

  function toggleMode() {
    setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
    document.body.classList.toggle('dark-mode');
  }

  return (
    <div className="toggle-container">
      <span className="button-text">Switch to mode</span>
      <Button onClick={toggleMode} className={`toggle-button ${mode}`}>
        <FontAwesomeIcon icon={mode === 'light' ? faMoon : faSun} className="icon" />
        <div className="swipe-indicator"></div>
      </Button>
      {/* Rest of your Settings component */}
    </div>
  )
}

export default Settings;
