'use client'
import styled from "styled-components";

// import Particles from "react-particles-js"
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
// This is new implementation where I have used react-tsparticles instead of react-particles-js
  const particlesInit = async (main) => {
    await loadFull(main);
  };


  return (
    <Box>
      <Particles
        id="tsparticles"
        // style={{ position: "absolute", top: 0 }}
        
        // params={props.theme === "light" ? ConfigLight : ConfigDark}
        options={{
           fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push"
              },
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 200,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: props.theme === "light" ? "#000000" : "#ffffff"
            },
            links: {
              color: props.theme === "light" ? "#000000" : "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce"
              },
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 80
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 5 }
            }
          },
          detectRetina: true
        }}
        init={particlesInit} 
      />
    </Box>
  );
};

export default ParticlesComponent;
