import * as React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "../pages/home";
import "./app.scss";
import Header from "../components/header";
import Footer from "../components/footer";

const App = () => {
  return (
    <Router>
      <Header />
      <div id="main-content-wrapper">
        <Switch>
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
