"use client";

import React, { useState } from 'react';

interface ComponentAProps {
  initialState: number;
  onFinalState: (finalState: number) => void;
}

const ComponentA: React.FC<ComponentAProps> = ({ initialState, onFinalState }) => {
  const [state, setState] = useState(initialState);

  const getFinalState = () => {
    return state;
  };
  const handleLogFinalState = () => {
    onFinalState(state);
  };

  return (
    <div className="component-container">
      <p className="state-display">Current State: {state}</p>
      <div className="button-group">
        <button className="action-button" onClick={() => setState(state + 1)}>Increment</button>
        <button className="action-button" onClick={() => console.log(getFinalState())}>Log Final State</button>
        <button className="action-button primary" onClick={handleLogFinalState}>Submit</button>
      </div>
    </div>
  );
};

export { ComponentA };
