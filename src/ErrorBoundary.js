import React, { Component } from 'react';

export default class ErrorBoundary extends Component {
  state = {
    error: false,
  };

  componentDidCatch(error, info) {
    this.setState({
      error: true,
    });
    console.log(info.componentStack);
  }

  render() {
    return this.state.error ? (
      <div>
        <h1>Uh oh!</h1>
        <p>Something&apos;s gone wrong 😬. Try refreshing the page.</p>
      </div>
    ) : (
      this.props.children
    );
  }
}
