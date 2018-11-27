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
          name: "Fais ton voumba",
          url: "https://faistonvoumba.com",
          description:
            "Building a blog for showbiz and people using WordPress."
        },
        {
          name: "Mendolearn",
          url: "https://www.behance.net/gallery/61905361/Mendolearn-Mobile-App",
          description:
            "Social network for school and students."
        },
        {
          name: "K-nary",
          url: "https://mike.yo.fr",
          description:
            "A blog about people and other stuff building with WordPress."
        },
        {
          name: "ReactAuth",
          url: "https://reactauth.now.sh",
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
          name: "Mikefolio",
          url: "https://www.behance.net/gallery/66527737/Mikefolio-2018",
          description: "Visual for the earler version of this portfolio that hasn't be implemented(lol)"
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
