import React from 'react';
import Person from './Person';
import style from './styles.module.css';

function showNameList() {
  // const names = ['Ravi', 'Raju', 'Disha'];
  // const allNames = names.map((name) => <h2>{name}</h2>);

  const heading = {
    fontSize: '24px',
    color: 'blue',
  };

  const persons = [
    {
      id: 1,
      name: 'Rajiv',
      skill: 'Actor',
    },
    {
      id: 2,
      name: 'Diana',
      skill: 'Chef',
    },
    {
      id: 3,
      name: 'kriti',
      skill: 'Teacher',
    },
  ];

  const allPersons = persons.map((person) => (
    <Person key={person.id} person={person}></Person>
  ));

  return (
    <div>
      {/* {names.map((name) => (
        <h2>{name}</h2>
      ))} */}

      {/* OR */}

      {allPersons}
      <h4 style={heading}>Inline style</h4>

      <h3 className={style.success}>Module style</h3>
    </div>
  );
}

export default showNameList;
