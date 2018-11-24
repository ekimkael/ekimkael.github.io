import React,{ Component } from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 33%;
`;

const Title = styled.h3`
  font-size: 1em;
  font-weight: bolder;
  letter-spacing: -0.07em;
  margin: 0;
`;

const Subtitle = styled.span`
  color: #989898;
  font-size: 13px;
  font-weight: 500;
`;

const SubtitleTypeURL = styled.a`
  color: #989898;
  font-size: 13px;
  font-weight: 500;
`;

class MoreInfo extends Component {  
  render() {
    return (
      <Section>
        <Title>{this.props.title}</Title>
        {(this.props.type === "url") ?
          <SubtitleTypeURL href={this.props.url} 
          target="_blank" 
          rel="noopener noreferrer">
          Visit
          </SubtitleTypeURL>
         :
          <Subtitle>{this.props.subtitle}</Subtitle>
        }
      </Section>
    )
  }
}

export default MoreInfo