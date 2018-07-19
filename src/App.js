import React, { Component } from 'react';
import './App.css';
import MarketPlacePage from './components/MarketPlacePage';
import Header from './components/Header';
import '../src/styles/components/Header.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="app-container"> 
          <MarketPlacePage />
        </div>
      </div>
    );
  }
}

export default App;
