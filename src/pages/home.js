import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      works: [
        {
          name: "Fais ton voumba",
          url: "https://faistonvoumba.com",
          description: "Building a blog for showbiz and people using WordPress."
        },
        {
          name: "K-nary",
          url: "https://mike.yo.fr",
          description:
            "A blog about people and other stuff building with WordPress."
        },
        {
          name: "Mikefolio",
          url: "https://www.behance.net/gallery/66527737/Mikefolio-2018",
          description:
            "Visual for the earler version of this portfolio that hasn't be implemented(lol)"
        },
        {
          name: "Xtencel",
          url: "https://xtencel.netlify.com",
          description:
            "A clone of my.yoomee.cm, an internet provider platform to control your datas consumsions"
        },
        {
          name: "Cryptochain",
          url: "https://cryptochain.netlify.com",
          description:
            "Agfrikacion platform with react, user experience improved and a simple design"
        }
      ]
    };
  }

  render() {
    const { works } = this.state;
    return (
      <React.Fragment>
        <div>
          <ul>
            {works.map((work, index) => [
              <a
                key={index}
                href={work.url}
                target="_blank"
                rel="noreferrer noopener"
              >
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
