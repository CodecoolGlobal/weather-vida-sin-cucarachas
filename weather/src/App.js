import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllDefaultCities from "./component/AllDefaultCities";
import { SearchProvider } from "./context/SearchContext";
import Header from "./layout/Header";
import SearchResult from "./component/SearchResult";
import WeeklyForecast from "./component/WeeklyForecast";
import { CatFactProvider } from "./context/CatFactContext";
import Footer from "./layout/Footer";
import { WeatherHistoryProvider } from "./context/WeatherHistoryContext";
import WeatherHistory from "./component/WeatherHistory";

function App() {
  return (
    <div className="App">
      <CatFactProvider>
        <WeatherHistoryProvider>
          <Router>
            <SearchProvider>
              <Header />
              <Route exact path="/" component={AllDefaultCities} />
              <Route exact path="/search" component={SearchResult} />
              <Route
                exact
                path="/weekly-forecast/:woeid"
                component={WeeklyForecast}
              />
              <Route exact path="/history" component={WeatherHistory} />
            </SearchProvider>
            <Footer />
          </Router>
        </WeatherHistoryProvider>
      </CatFactProvider>
    </div>
  );
}

export default App;
