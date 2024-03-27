import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { FaPaintBrush, FaChartLine, FaCode } from "react-icons/fa";
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
  width: 100%;
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
  flex-flow: row wrap;
  /* justify-content: space-around; */
  column-gap: 2rem;
  @media (max-width: 768px) {
    width: 90%;
    /* margin-top: 1rem; */
    flex-direction: column;
    row-gap: 0.5rem;
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
  height: 30vh;
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

const InterestsPage = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <Box>
        <LogoComponent theme="light" />
        <SocialIcons theme="light" />
        <PowerButton />
        <ParticleComponent theme="light" />
        <BigTitle text="INTERESTS" top="80%" left="5%" mtop="10%" mleft="5%" mfontsize="4.5rem" />
        <CardCover>

          <Main>
            <Title>
              <FaPaintBrush style={{fontSize:"1.35rem"}}/> Web Designing
            </Title>
            <Description>
              I love designing websites and upgrading myself by learning new skills and implementing them.
            </Description>
          </Main>
          <Main>
            <Title>
              <FaChartLine style={{fontSize:"2rem"}}/> Learning new Techs
            </Title>
            <Description>
              I believe in constantly updating myself by learning something new with practical
              Implementations.
            </Description>
          </Main>
          <Main>
            <Title>
              <FaCode style={{fontSize:"2rem"}}/> Competetive Coding
            </Title>
            <Description>
            In my free time I like to do some problem solving on various Competetive Coding platforms.
            </Description>
          </Main>

        </CardCover>
      </Box>
    </ThemeProvider>
  );
};

export default InterestsPage;
