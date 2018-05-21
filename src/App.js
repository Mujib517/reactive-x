import React, { Component } from 'react';
import './App.css';
import CbDrawer from './components/Drawer';
import CbToolbar from './components/Toolbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CbDrawer />
      </div>
    );
  }
}

export default App;
