import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Personal from "./Pages/Personal";
import Select from "./Pages/Select";

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Personal} />
          <Route path="/select" component={Select} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
