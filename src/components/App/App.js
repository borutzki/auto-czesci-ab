import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Map from "../../pages/Map";
import About from "../../pages/About";
import Contact from "../../pages/Contact";
import Adverts from "../../pages/Adverts";
import Main from "../../pages/Main";

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
