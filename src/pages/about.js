import React from 'react'
import styled from 'styled-components'

// The gray background
const AboutComponent = styled.section`
  height: 600px;
  width: 90%;
  border-radius: 2px;
  background-color: #fff;
  padding: 16px;
  margin: 0 auto;
`
const Resume = styled.p`
  font-size: 0.85em;
  font-weight: 500;
`
const Header = styled.h3`
  color: crimson;
  font-size: 20px;
  margin: 0;
  padding: 0;
`
const Subtitle = styled.span`
  margin: 0 16px;
  color: #989898;
  font-size: 12px;
  display: block;
`
const Stack = styled.div`
  height: 42px;
  margin: 0 16px;
  background-color: #000;
`

const About = () => {
  return <AboutComponent>
      <Resume>
        I'm a self-taught designer and developer. Today when I remember, I never really liked the school (buildings) I even managed to escape the catechesis for that reason it's to say; therefore after obtaining my High School Degree it was really hard to go to college because of the money and I finally gave up and started looking for work. I discovered design and programming at the same time in high school and I really liked it.So much that although I was never in computer class, I still had the best grades in the class. At that time there was only one PC at home and my big brother was there all the time so you can imagine how hard it was to practice. Some of my early codes were written on notebooks and it worked the first time.No...I tease you.Sometimes it worked, other times it didn't.I was so glad.By the help of my bro who recommanded me for a job that he was doing on internet AKA transcription, i started working for Pactera Technologies as transcriber. I was finally able to afford my own PC and since then, not a day goes by that I don't make a design or that I don't write a piece of code. I'm also a Mangas/Animes lover. I can't count how many i've watched. <a>Here is a list</a>
      </Resume>
      <div className="workflow">
        <Header>Stack</Header>
        <Subtitle>Languages</Subtitle>
        <Stack />
        <Subtitle>Frameworks & Libraries</Subtitle>
        <Stack />
        <Subtitle>Design Tools</Subtitle>
        <Stack />
      </div>
  </AboutComponent>
}

export default About
