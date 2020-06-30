import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityTable from "./component/CityTable";
import CityDetailWeek from "./component/CityDetailWeek";

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
          <Route
            exact
            path="/weather/:woeid"
            render={(props) => (
              <div>
                <CityDetailWeek weather={props.location.query.cityWeather} />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
