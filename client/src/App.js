import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BubblePage from './components/BubblePage'
import PrivateRoute from './utils/PrivateRoute'
import Login from "./components/Login";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Login} />
        <PrivateRoute exact path='/bubblepage' component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
