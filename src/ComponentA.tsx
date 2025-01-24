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
    <div>
      <p>Current State: {state}</p>
      <button onClick={() => setState(state + 1)}>Increment</button>
      <button onClick={() => console.log(getFinalState())}>Log Final State</button>
      <button onClick={handleLogFinalState}>Submit</button>
    </div>
  );
};

export default ComponentA;