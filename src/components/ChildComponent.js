import React from 'react';

function ChildComponent(props) {
  return (
    <div>
      {/* Calling parent component method here */}
      {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
      <button onClick={() => props.greetHandler('child')}>Greet Parent</button>
    </div>
  );
}

export default ChildComponent;
