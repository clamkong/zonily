import React, { Component } from "react";
import "./App.css";
import AppRouter from "./routers/AppRouter";

import { Provider } from "react-contextual";

const store = {
  user: {
    email: "",
    isAuthenticated: false
  },
  loginUser: () => state => {
    return Object.assign({}, state, { user: { isAuthenticated: true } });
  },
  logoutUser: () => state => {
    return Object.assign({}, state, { user: { isAuthenticated: false } });
  },
  updateUser: updates => state => {
    return Object.assign({}, state.user, updates);
  }
};

class App extends Component {
  render() {
    return (
      <Provider {...store}>
        <AppRouter />;
      </Provider>
    );
  }
}

export default App;
