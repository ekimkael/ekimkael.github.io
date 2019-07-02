import React, { Component } from "react";
import Link from "react-router-dom/Link";

class CaseStudies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [
        {
          name: "Autodisciple",
          id: "autodisciple",
          description:
            "Autodisciple is a productivity app design to help you start you days being motivated and encourage you to do your best to achieve your goals"
        },
        {
          name: "Wallates",
          id: "wallates",
          description:
            "Wallates means: Wallet + States et parce que parfois je dois à tellement de gens qu'au moment où je veux leur rendre l'argent j'oublie souvent à qui je dois et pour faire mes états de finances."
        },
        {
          name: "Milly",
          id: "milly",
          description:
            "Milly is a young pastry chef who mainly makes pancakes and this is a redesign of his website with intention to improve and show what can be done"
        },
        {
          name: "Xtencel",
          id: "xtencel",
          description:
            "A clone of my.yoomee.cm, an internet provider platform to control your datas consumsions"
        }
      ]
    };
  }

  render() {
    const { works } = this.state;
    console.log(this.props.match);
    return (
      <React.Fragment>
        <div>
          <ul>
            {works.map((work, index) => [
              <Link key={index} to={`/cs/${work.id}`}>
                <li>
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

export default CaseStudies;
