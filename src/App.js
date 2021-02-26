import React from "react";
import { Route } from 'react-router-dom';

import Login from "./components/Login";
import BubblePage from './components/BubblePage';
import PrivateRoute from './components/PrivateRoute';
import "./styles.scss";

function App() {
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute path="/bubbles" component={BubblePage}/>
      </div>
  );
}

export default App;

//Task List:
//1. Render BubblePage as a PrivateRoute