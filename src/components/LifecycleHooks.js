import React, { Component } from 'react';
import LifecycleB from './LifecycleB';

export default class LifecycleHooks extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Areful',
    };

    console.log('Lifecycle Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps method');
    return null;
  }

  componentDidMount() {
    console.log('component did mount');
  }

  shouldComponentUpdate() {
    console.log('should component update lifecycle hook');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate Lifecycle hook');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Lifecycle hook');
  }

  changeState = () => {
    this.setState({
      name: 'Asik',
    });
  };

  render() {
    console.log('Lifecycle hooks render');
    return (
      <div>
        Lifecycle Hooks
        <LifecycleB></LifecycleB>
        <button onClick={this.changeState}>Change State</button>
      </div>
    );
  }
}
