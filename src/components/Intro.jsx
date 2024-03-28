import React from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'


const Box = styled(motion.div)`

position: absolute;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);


width: 65vw;
height:55vh;
display: flex;


background: linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient(
    to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) top;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;
    @media (max-width: 768px) {
    flex-direction: column; 
    /* position: relative; */
    background: linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) right,
    linear-gradient(
    to bottom,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) left;
    background-repeat: no-repeat;
    background-size: 2px 100%;
    border-left: 0px solid white;
    border-right: 0px solid white;
    border-top: 2px solid white;
    border-bottom: 2px solid black;
    }

`
const SubBox = styled.div`
width: 50%;
position: relative;
display: flex;
/* background: blue; */
/* align-items: flex-end; */
/* justify-content: end; */

@media (max-width: 768px) {
width: 100%;
height: 50%;
}
`
const ImageContainer = styled.div`
width: 50%;
height: 100%;
position: relative;
@media (max-width: 768px) {
    height: 50%;
    width: 100%;
}

`
const Image = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%,0%);
    width: 100%;
    height: auto;
    @media (max-width: 768px) {
    height: min-content;
    bottom: 0;
    width: 80%;
    }
`

const Text = styled.div`
font-size: calc(1em + 1.5vw);
color: ${props => props.theme.body};
padding: 2rem;
cursor: pointer;

display: flex;
flex-direction: column;
justify-content: space-evenly;

&>*:last-child{
    color: ${props => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight:300;

}
`

const Intro = () => {
    return (
        <Box
            initial={{ height: 0 }}
            animate={{ height: '55vh' }}
            transition={{ type: 'spring', duration: 2, delay: 1 }}
        >
            <SubBox>
                <Text>
                    <h1>Hi,</h1>
                    <h3>I'm Utkarsh.</h3>
                    <h6>A code by choice and a developer by profession.</h6>
                </Text>
            </SubBox>
            <ImageContainer>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                    style={{width: '100%',height: '100%'}}
                >
                    <Image className="pic" src={'/assets/images/profile-img.png'} alt="Profile Pic" />
                </motion.div>
            </ImageContainer>
        </Box>
    )
}

export default Intro
