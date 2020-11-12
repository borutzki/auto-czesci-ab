import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Map from "../Map";
import About from "../About";
import Contact from "../Contact";
import Adverts from "../Adverts";
import Main from "../Main";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar />
      <div>
        <Switch>
          <Route path="/ogloszenia">
            <Adverts />
          </Route>
          <Route path="/o-nas">
            <About />
          </Route>
          <Route path="/dojazd">
            <Map />
          </Route>
          <Route path="/kontakt">
            <Contact />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
