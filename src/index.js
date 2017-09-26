import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ErrorBoundary from './ErrorBoundary';
import Breaker from './Breaker';

ReactDOM.render(
  <ErrorBoundary>
    <Breaker />
  </ErrorBoundary>,
  document.getElementById('root'),
);
