import React, { Component } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import Work from "./pages/work";
import Footer from "./templates/Footer";
// images
import devmod from "./devmod.png";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <main>
          <aside className="me">
            <img src={devmod} alt="avatar" />
            <section>
              <h1 className="name">Kael</h1>
              <h3 className="job">UIx Designer | Javascript Developer</h3>
              <p className="presentation">
                Officially known as Michel Mbili, I'm a UI designer and
                Javascript developer from Cameroon in love with Design Systems,
                Atomic Design, Node, React, MERN and JAM Stack
              </p>
              <section className="cv">
                <a href="./resume.pdf"
                  download="Resume"
                  rel="noreferrer noopener">
                  Download C.V
                </a>
              </section>
            </section>
          </aside>
          <section className="content">
            <HashRouter>
              <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/works" component={Home} />
                <Route path="/w/:work" component={Work} />
                <Route path="/about" component={About} />
              </Switch>
            </HashRouter>
          </section>
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
