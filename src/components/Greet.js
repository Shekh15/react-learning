import React from 'react';

// function greet() {
//   return <h1>Hii</h1>;
// }

//export default () => <h1>Hii Kirti</h1>

const Greet = (props) => {
  const { name, role } = props;
  console.log(props);
  return (
    <div>
      <h1>
        Hii {name} you're {role}
      </h1>
      {props.children}
    </div>
  );
};

export default Greet;
