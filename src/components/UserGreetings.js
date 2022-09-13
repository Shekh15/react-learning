import React, { Component } from 'react';

export default class UserGreetings extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userLoggedIn: false,
    };
  }

  render() {
    //element variable approch for conditional rendering
    // let status;
    // if (this.state.userLoggedIn) {
    //   status = 'logged in';
    // } else {
    //   status = 'not logged in';
    // }
    // return <div>{status}</div>;

    //Ternary conditional operator approch
    // return this.state.userLoggedIn ? (
    //   <div>Logged in</div>
    // ) : (
    //   <div>not logged in</div>
    // );

    //short circuit approach
    return this.state.userLoggedIn && <div>Welcome areful</div>;
  }
}
