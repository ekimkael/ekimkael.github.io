import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
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
