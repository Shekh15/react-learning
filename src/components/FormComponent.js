import React, { Component } from 'react';

export default class ClassClick extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      comments: '',

      selectedValue: 'Vue',
    };
  }

  handleUserNameChange = (event) => {
    console.log(event);
    this.setState({
      username: event.target.value,
    });
  };

  handleComments = (event) => {
    this.setState({
      comments: event.target.value,
    });
  };

  handleDropdown = (event) => {
    this.setState({
      selectedValue: event.target.value,
    });
  };

  handleSubmit = (event) => {
    let formData = this.state;
    alert(
      `Hii ${formData.username}, your comment -- ${formData.comments}, selected tech -- ${formData.selectedValue}`
    );
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name :</label>
          <input
            type="text"
            onChange={this.handleUserNameChange}
            value={this.state.username}
          />
        </div>

        <div>
          <label>Comments</label>
          <textarea
            value={this.state.comments}
            onChange={this.handleComments}
            cols="30"
            rows="10"
          ></textarea>
        </div>

        <div>
          <label>Select One</label>
          <select
            value={this.state.selectedValue}
            onChange={this.handleDropdown}
          >
            <option value="Angular">Angular</option>
            <option value="React">React</option>
            <option value="Vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}
