import React from 'react';
interface ComponentAProps {
    initialState: number;
    onFinalState: (finalState: number) => void;
}
declare const ComponentA: React.FC<ComponentAProps>;
export default ComponentA;
