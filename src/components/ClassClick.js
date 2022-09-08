import React, { Component } from 'react';

export default class ClassClick extends Component {
  
  render() {
    return (
      <div>
        <button onClick={this.clickHandler}> Click me</button>
      </div>
    )
  }
}