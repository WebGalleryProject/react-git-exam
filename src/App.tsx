import React from 'react';
import AppRouter from './components/AppRouter';
import Navigation from './pages/Navigation';

function App() {
  return (
    <div>
      <Navigation/>
      <AppRouter />
    </div>
  );
}

export default App;
