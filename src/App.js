import React from 'react';
import './style.css';
import MyComponent from './components/Greet';
import ClassComponent from './components/Welcome';
import EventHandler from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ParentComponent from './components/ParentComponent';
import UserGreetings from './components/UserGreetings';
import NameList from './components/NameList';
import Form from './components/FormComponent';
import LifeCycleHook from './components/LifecycleHooks';
import ReactFragments from './components/reactFragments';

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
      {/* <EventBind></EventBind> */}

      {/* using child to invoke parent method using props */}
      {/* <ParentComponent></ParentComponent> */}

      {/* Conditional rendering */}
      {/* <UserGreetings></UserGreetings> */}

      {/* List rendering */}
      {/* <NameList></NameList> */}

      {/* form */}
      {/* <Form></Form> */}

      {/* lifecycle hook */}
      <LifeCycleHook></LifeCycleHook>

      {/* fragements */}
      <ReactFragments></ReactFragments>
      
    </div>
  );
}
