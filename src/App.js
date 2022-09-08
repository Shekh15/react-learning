import React from 'react';
import './style.css';
import MyComponent from './components/Greet';
import ClassComponent from './components/Welcome';
import EventHandler from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';

export default function App() {
  return (
    <div>
      {/* <MyComponent name="Kirti" role="Admin">
        <p>Hii Kirti</p>
      </MyComponent>
      <MyComponent name="Areful" role="User" />
      <ClassComponent />
      <MyComponent name="Kirti" role="Admin">
        <h1>Hii Kirti</h1>
      </MyComponent>
      <EventHandler></EventHandler>
      <ClassClick></ClassClick> */}
      <EventBind></EventBind>
    </div>
  );
}
