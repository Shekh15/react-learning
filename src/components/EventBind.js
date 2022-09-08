import React, { Component } from 'react';

export default class EventBind extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: 'Hello',
    };

    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState({
      message: 'Good bye!!!',
    });

    console.log('clickHandler--', this);
  }

  render() {
    return (
      <div>
        <h3>{this.state.message}</h3>
        {/* <button onClick={this.clickHandler.bind(this)}>Click Here</button> */}
        <button onClick={this.clickHandler}>Click Here</button>
      </div>
    );
  }
}
