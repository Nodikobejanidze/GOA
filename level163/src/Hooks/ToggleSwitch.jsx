import React from 'react';

function ToggleSwitch({ isToggled, onToggle }) {
  return (
    <div>
      <label className="switch">
        <input type="checkbox" checked={isToggled} onChange={onToggle} />
        <span className="slider"></span>
      </label>
    </div>
  );
}

export default ToggleSwitch;
