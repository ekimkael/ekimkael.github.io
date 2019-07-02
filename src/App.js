import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Story from "./pages/story";
import CaseStudies from "./pages/case_studies";
import CaseStudy from "./pages/case_study";
import Navbar from "./organisms/Navbar";
import Aside from "./organisms/Aside";
import Footer from "./molecules/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <HashRouter>
          <main>
            <Aside />
            <section className="content">
              <Navbar />
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About} />
                <Route path="/story" component={Story} />
                <Route path="/case-studies" component={CaseStudies} />
                <Route path="/cs/:id" component={CaseStudy} />
              </Switch>
            </section>
          </main>
        </HashRouter>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
