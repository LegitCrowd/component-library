"use client";

import React, { useState } from "react";
import "./TextInput.css";
import { TextInputProps } from "./TextInput.types";

export const TextInput: React.FC<TextInputProps> = ({
  promptText,
  onSubmit,
  placeholder = "Type your answer here...",
  theme = "light",
  testIdPrefix = "text-input",
}) => {
  const [answer, setAnswer] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(answer);
    setAnswer(""); // Clear input after submission
  };

  return (
    <div className={`text-input-container theme-${theme}`}>
      <p className="prompt-text">{promptText}</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder={placeholder}
          className="text-input"
          data-testid={`${testIdPrefix}-input`}
        />
        <button 
          type="submit" 
          className="submit-button"
          data-testid={`${testIdPrefix}-submit`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}; 