'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const ComponentA = ({
  initialState,
  onFinalState
}) => {
  const [state, setState] = react.useState(initialState);
  const getFinalState = () => {
    return state;
  };
  const handleLogFinalState = () => {
    onFinalState(state);
  };
  return jsxRuntime.jsxs("div", {
    children: [jsxRuntime.jsxs("p", {
      children: ["Current State: ", state]
    }), jsxRuntime.jsx("button", {
      onClick: () => setState(state + 1),
      children: "Increment"
    }), jsxRuntime.jsx("button", {
      onClick: () => console.log(getFinalState()),
      children: "Log Final State"
    }), jsxRuntime.jsx("button", {
      onClick: handleLogFinalState,
      children: "Submit"
    })]
  });
};

module.exports = ComponentA;
