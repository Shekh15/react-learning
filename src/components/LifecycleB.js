import React, { Component } from 'react';

export default class LifecycleB extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: 'Areful',
    };

    console.log('Lifecycle B Constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps method lifecycle B');
    return null;
  }

  componentDidMount() {
    console.log('component did mount of lifecycle B');
  }

  shouldComponentUpdate() {
    console.log('should component update lifecycle B');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate Lifecycle B');
    return null;
  }

  componentDidUpdate() {
    console.log('componentDidUpdate Lifecycle B');
  }

  render() {
    console.log('Lifecycle hook B render');
    return <div>Lifecycle Hook B</div>;
  }
}
