import React, { Component } from 'react';

export default class Breaker extends Component {
  state = {
    shouldThrow: false,
  };

  throwError() {
    throw new Error('Whoopsie! 😇');
  }

  render() {
    if (this.state.shouldThrow) this.throwError();

    return (
      <button onClick={() => this.setState({ shouldThrow: true })}>
        Break it
      </button>
    );
  }
}
