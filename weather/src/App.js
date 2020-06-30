import React, { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CityTable from "./component/CityTable";
import CityDetailWeek from "./component/CityDetailWeek";
import CitySearch from "./component/CitySearch";
import { DefaultCitiesContext } from "./context/DefaultCitiesContext";
import { SearchCitiesContext } from "./context/SearchCitiesContext";
import { WeatherHistoryProvider } from "./context/WeatherHistoryContext";
import { CatFactProvider } from "./context/CatFactContext";
import Header from "./component/Header";
import WeatherHistory from "./component/WeatherHistory";

function App() {
  const [cities] = useContext(DefaultCitiesContext);
  const [searchCities] = useContext(SearchCitiesContext);

  return (
    <CatFactProvider>
      <WeatherHistoryProvider>
        <Router>
          <div className="App">
            <Header />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <div>
                    <CitySearch />
                    <CityTable cities={cities} />
                  </div>
                )}
              />
              <Route
                exact
                path="/search"
                render={(props) => (
                  <div>
                    <CitySearch />
                    <CityTable cities={searchCities} />
                  </div>
                )}
              />
              <Route
                exact
                path="/weather/:woeid"
                render={(props) => (
                  <div>
                    <CityDetailWeek
                      weather={props.location.query.cityWeather}
                    />
                  </div>
                )}
              />

              <Route
                exact
                path="/history"
                render={(props) => (
                  <div>
                    <WeatherHistory />
                  </div>
                )}
              />
            </Switch>
          </div>
        </Router>
      </WeatherHistoryProvider>
    </CatFactProvider>
  );
}

export default App;
