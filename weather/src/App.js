import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import AllDefaultCities from "./component/AllDefaultCities";
import { SearchProvider } from "./context/SearchContext";
import Header from "./layout/Header";
import SearchResult from "./component/SearchResult";

function App() {
  return (
    <div className="App">
      <Router>
        <SearchProvider>
          <Header />
          <Route exact path="/" component={AllDefaultCities} />
          <Route exact path="/search" component={SearchResult} />
        </SearchProvider>
      </Router>
    </div>
  );
}

export default App;
