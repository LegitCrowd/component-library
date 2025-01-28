import React from 'react';

interface ComponentAProps {
    initialState: number;
    onFinalState: (finalState: number) => void;
}
declare const ComponentA: React.FC<ComponentAProps>;

interface TextInputProps {
    promptText: string;
    onSubmit: (answer: string) => void;
    placeholder?: string;
    theme?: 'light' | 'dark';
    testIdPrefix?: string;
}

declare const TextInput: React.FC<TextInputProps>;

export { ComponentA, TextInput };
