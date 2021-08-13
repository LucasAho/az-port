import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';

import TukrenDocs from './components/ContentPages/TukrenDocs';
import HomePage from "./components/LandingPages/HomePage";
import MaalimaPage from "./components/LandingPages/MaalimaHome";
import PortfolioPage from "./components/LandingPages/Portfolio";

function App(){
  return (
    <Router>
        <Switch>
          <Route exact path="/" component={HomePage}/>
          <Route exact path="/maalima" component={MaalimaPage}/>
          <Route exact path="/portfolio" component={PortfolioPage}/>
          <Route exact path="/maalima/tukren" component={TukrenDocs}/>
        </Switch>
      </Router>
  );
}

export default App;
