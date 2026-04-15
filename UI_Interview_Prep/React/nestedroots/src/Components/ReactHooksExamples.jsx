import React, { useState , forwardRef , useImperativeHandle } from 'react';

const ReactHooksExamples = forwardRef((props,ref) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  useImperativeHandle(ref, () => ({
    reset,
  }));
  
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Simple Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increment} style={{ margin: '5px', padding: '10px 20px' }}>
        Increment
      </button>
      <button onClick={decrement} style={{ margin: '5px', padding: '10px 20px' }}>
        Decrement
      </button>
    </div>
  );
});

export default ReactHooksExamples;