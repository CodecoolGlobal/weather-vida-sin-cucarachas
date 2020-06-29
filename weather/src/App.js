import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityTable from "./component/CityTable";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <CityTable />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
