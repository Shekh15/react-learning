import React from 'react';
import './styles.css';

function Person({ person }) {
  return (
    <h2 className="primary">
      I'm {person.name}, I'm a {person.skill}
    </h2>
  );
}

export default Person;
