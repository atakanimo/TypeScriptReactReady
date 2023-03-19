import React from 'react';
import './App.css';
import MainDrawer from './components/Drawer';
import MainAppBar from './components/AppBar';
import { Counter } from './Pages/Counter/Counter';

function App() {
  return (
    <div className="App">
      <MainDrawer />
      <MainAppBar />
      <Counter />
    </div>
  );
}

export default App;
