import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';

function ComponentOne() {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => setIsToggled(!isToggled);

  return (
    <div>
      <h2>Component One</h2>
      <ToggleSwitch isToggled={isToggled} onToggle={handleToggle} />
      <p>Status: {isToggled ? 'ON' : 'OFF'}</p>
    </div>
  );
}

export default ComponentOne;
