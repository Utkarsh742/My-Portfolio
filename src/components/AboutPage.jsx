'use client'
import styled, { keyframes, ThemeProvider } from 'styled-components'
import { DarkTheme } from './Themes';


import LogoComponent from '../subComponents/LogoComponent';
import SocialIcons from '../subComponents/SocialIcons';
import PowerButton from '../subComponents/PowerButton';
import ParticleComponent from '../subComponents/ParticleComponent';
import BigTitle from '../subComponents/BigTitlte';

const Box = styled.div`
background-color: ${props => props.theme.body};
width: 100vw;
height:100vh;
position: relative;
padding: 0;
margin: 0;
overflow: hidden;
`
const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }

`
const Spaceman = styled.div`
position: absolute;
top: 10%;
right: 5%;
width: 20vw;
animation: ${float} 4s ease infinite;
img{
    width: 100%;
    height: auto;
}
`
const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.5rem + 1vw);
 backdrop-filter: blur(4px);
  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: 'Ubuntu Mono', monospace;
  font-style: italic;
  @media (max-width: 768px) {
    font-size: calc(0.6rem + 1vw);
  }
`




const AboutPage = () => {
    return (
        <ThemeProvider theme={DarkTheme}>
            <Box>
                <LogoComponent theme='dark' />
                <SocialIcons theme='dark' />
                <PowerButton />
                <ParticleComponent theme='dark' />

                <Spaceman>
                    <img src={"/assets/images/spaceman.png"} alt="spaceman" />
                </Spaceman>
                <Main>
                    I am a full-stack developer with a passion for web development and a keen interest in machine learning and artificial intelligence.
                    <br /> <br />
                    I love dedicating my time to various activities, competitions, hackathons, and events as I find them refreshing.
                    <br /> <br />
                    I believe learning everything is possible when you put your focus in it. You can connect with me via social links.
                </Main>

                <BigTitle text="ABOUT" top="10%" left="5%" color="rgba(253, 253, 253, 0.151);"/>


            </Box>

        </ThemeProvider>

    )
}

export default AboutPage
