import { jsxs, jsx } from 'react/jsx-runtime';
import { useState } from 'react';

const ComponentA = ({
  initialState,
  onFinalState
}) => {
  const [state, setState] = useState(initialState);
  const getFinalState = () => {
    return state;
  };
  const handleLogFinalState = () => {
    onFinalState(state);
  };
  return jsxs("div", {
    children: [jsxs("p", {
      children: ["Current State: ", state]
    }), jsx("button", {
      onClick: () => setState(state + 1),
      children: "Increment"
    }), jsx("button", {
      onClick: () => console.log(getFinalState()),
      children: "Log Final State"
    }), jsx("button", {
      onClick: handleLogFinalState,
      children: "Submit"
    })]
  });
};

export { ComponentA as default };
