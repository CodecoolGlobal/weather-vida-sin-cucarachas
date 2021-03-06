import React, { useState, useContext } from "react";
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
import { NavBarThemeContext } from "./theme/NavBarThemeContext";
import NavBarThemes from "./theme/NavBarThemes";
import styled from "styled-components";

function App() {
  const [themeMode, setThemeMode] = useContext(NavBarThemeContext);
  const currentTheme = NavBarThemes[themeMode];

  const Div = styled.div`
    background-image: ${currentTheme.mainBody.backgroundImage};
    margin-left: -0.55%;
    width: 101.1%;
  `;

  return (
    <Div className="App">
      <Router>
        <CatFactProvider>
          <WeatherHistoryProvider>
            <SearchProvider>
              <Header />
              <br></br>
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
          </WeatherHistoryProvider>
        </CatFactProvider>
      </Router>
    </Div>
  );
}

export default App;
