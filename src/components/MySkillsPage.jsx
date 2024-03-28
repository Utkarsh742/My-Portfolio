import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme } from "./Themes";
import { Design, Develope } from "./AllSvgs";

import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticleComponent from "../subComponents/ParticleComponent";
import BigTitle from "../subComponents/BigTitlte";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: right;
  align-items: flex-end;
  @media (max-width: 768px) {
  height: 100%;
  align-items: center;
  }
`;
const CardCover = styled.div`
  width: 100%;
  justify-content: center;
  height: 95%;
  max-height: 90%;
  /* padding-top: 1rem;   */
  /* align-items: flex-start; */
  /* background: red; */
  display: flex;
  /* justify-content: space-around; */
  column-gap: 2rem;
  @media (max-width: 768px) {
    width: 90%;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
    justify-content: space-evenly;
    padding-top: 8rem;
    margin-bottom: 1rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  background-color: ${(props) => props.theme.body};
  padding: 1.5rem 2rem;
  margin-top: 1rem;
  width: 30vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
  @media (max-width: 768px) {
  width: 65%;
  /* padding: 1rem; */
  margin-top: 2rem;
  
  height: min-content;
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.4em + 1vw);
  padding: 0.3rem 0;
  margin-top: ${props => props.marginTop};

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 1.4rem;
    margin-top: 0;
    margin-bottom: 0;
  }
    @media (max-width: 768px) {
    font-size: calc(1em);
    padding: 0.1rem 0;
  }
`;

const MySkillsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <BigTitle text="SKILLS" top="80%" right="30%" mtop="10%" mleft="10%"/>
        <CardCover>
          
          <Main>
            <Title>
              <Develope width={40} height={40} /> Developer
            </Title>
            <Description>
              I value business or brand for which I'm working for, and hence enjoy
              bringing new ideas to life by learning new technologies.
            </Description>
            <Description $marginTop="0.4rem">
              <strong>Skills</strong>
              <p>
                Next, React, React Native, React Native Paper, Zustand, MongoDb, SQl(Basic), Node js, Tailwind, Redux, Firebase, OneSignal, FramerMotion, Aos, MixPanel 
                etc.
              </p>
            </Description>
            <Description>
              <strong>Tools</strong>
              <p>VScode, Github, Codepen etc.</p>
            </Description>
          </Main>
          <Main>
            <Title>
              <Design width={30} height={30} /> Coding
            </Title>
            <Description>
            I love to code out different problems, Keep it clean, minimal, optimized and simple.
            </Description>
            <Description>
              <strong>Languages</strong>
              <ul>
                <li>Java</li>
                <li>JavaScript</li>
                <li>C++(Basic)</li>
              </ul>
            </Description>
            <Description>
              <strong>Platforms</strong>
              <ul>
                <li>Leetcode</li>
                <li>CodeChef</li>
                <li>HackerRank</li>
                <li>GfG</li>
              </ul>
            </Description>
          </Main>
        </CardCover>
      </Box>
    </ThemeProvider>
  );
};

export default MySkillsPage;
