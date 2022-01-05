import React from "react";
import About from "./About/About";
import "./App.css";
import Experience from "./Experience/Experience";
// import AlternateTimeline from "./Experience/Timeline";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Skills from "./Skills/Skills";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/skills">
            <Skills/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
