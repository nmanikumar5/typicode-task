import "./App.css";
import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import Routes from './Routes';

function App() {
  return (
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  );
}

export default App;
