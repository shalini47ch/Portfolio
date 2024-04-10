import React from "react";
import About from "./About/About";
import "./App.css";
import Experience from "./Experience/Experience";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import Skills from "./Skills/Skills";
import Contact from "./Contact/Contact";
import Projects from "./Projects/Projects";
import Research from "./Research/Research"

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
            <Skills />
          </Route>
         

          <Route path="/projects">
            <Projects />
          </Route>
          <Route path="/research">
            <Research />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
