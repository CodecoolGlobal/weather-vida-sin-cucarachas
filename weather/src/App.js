import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityTable from "./component/CityTable";
import CityTableSearch from "./component/CityTableSearch";
import CityDetailWeek from "./component/CityDetailWeek";
import CitySearch from "./component/CitySearch";
import { DefaultCitiesContextProvider } from "./context/DefaultCitiesContext";

const App = (props) => {
  //const [searchStringData, setSearchString] = useState("testString");
  //console.log({ searchStringData });

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <div>
                <React.Fragment>
                  <CitySearch />
                  <CityTable />
                </React.Fragment>
              </div>
            )}
          />
          <Route
            exact
            path="/search"
            render={(props) => (
              <div>
                <React.Fragment>
                  <CityTableSearch
                    searchStringFromURL={props.location.query.searchString}
                  />
                </React.Fragment>
              </div>
            )}
          />
          <Route
            exact
            path="/weather/:woeid"
            render={(props) => (
              <div>
                <React.Fragment>
                  <CityDetailWeek weather={props.location.query.cityWeather} />
                </React.Fragment>
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
