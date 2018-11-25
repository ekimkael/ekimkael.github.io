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
          url: "https://github.com/iamKael/starscream",
          description:
            "Starscream is REST API for a music app built with LoopBack."
        },
        {
          name: "Mendolearn",
          url: "https://behance.net/michkael/Mendolean",
          description:
            "Social network for school and students."
        },
        {
          name: "Scribe",
          url: "https://github.com/iamKael/scribe",
          description:
            "This simple application allows you to take notes and not lose them in case you close the window by mistake."
        },
        {
          name: "ReactAuth",
          url: "https://github.com/iamKael/reactauth",
          description:
            "Sample of Authentication process made with React and a design from scratch"
        },
        {
          name: "Olympus",
          url: "https://medium.com/iamkael/52kfdpoe",
          description:
            "A case study and redesign of the Canal Olympia application"
        },
        {
          name: "Autodisciple",
          url: "https://behance.net/michkael/autodisciple",
          description: "A motivation app inspired by #100DaysOfCode project"
        }
      ]
    };
  }

  /*   componentDidMount() {
    
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
              <a  key={index} href={work.url} target="_blank" rel="noreferrer noopener">
                <li>
                  <h3 className="works">{work.name}</h3>
                  <p>{work.description}</p>
                </li>
              </a>
            ])}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
