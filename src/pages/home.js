import React, { Component } from "react";
import Link from "react-router-dom/Link";

// styles
import "../App.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAboutActive: false,
      works: [
        {
          name: "Starscream",
          description:
            "Starscream is REST API for a music app built with LoopBack."
        },
        {
          name: "Scribe",
          description:
            "This simple application allows you to take notes and not lose them in case you close the window by mistake."
        },
        {
          name: "ReactAuth",
          description:
            "Sample of Authentication process made with React and a design from scratch"
        },
        {
          name: "Olympus",
          description:
            "A case study and redesign of the Canal Olympia application"
        },
        {
          name: "Autodisciple",
          description: "A motivation app inspired by #100DaysOfCode project"
        }
      ]
    };
  }

  /*   componentDidMount() {
    fetch(`https://kael.now.sh/works?&_limit=7`)
      .then(res => res.json())
      .then(works => this.setState({ works }));
  } */

  render() {
    const { works } = this.state;
    return (
      <React.Fragment>
        <Link to="/about" id="about">
          About
        </Link>
        <div>
          <h4>
            <Link to="/works" className="allWorks">Projects</Link>
          </h4>
          <ul>
            {works.map((work, index) => [
              <Link to={`/w/${work.name}`}>
                <li key={index}>
                  <h3 className="works">{work.name}</h3>
                  <p>{work.description}</p>
                </li>
              </Link>
            ])}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
