import React, { Component } from 'react';
import './App.css';
import AppRouter from './routers/AppRouter';

// class App extends Component {
//   render() {
//     return (

//       <div className="App">
//         <Header />
//         <div className="app-content-container"> 
//           <MarketPlacePage />
//         </div>
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    return ( 
      <AppRouter />
    );
  }
}

export default App;
