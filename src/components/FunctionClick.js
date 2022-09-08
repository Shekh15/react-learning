import React from 'react';

function EventHandling(props) {
  const { name, role } = props;

  function clickHandler() {
    console.log('Button Clicked');
  }

  console.log(props);
  return (
    <div>
      <button onClick={clickHandler}>Click me</button>
    </div>
  );
}

export default EventHandling;
