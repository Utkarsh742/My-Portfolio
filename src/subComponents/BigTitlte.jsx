'use client'
import React from 'react'
import styled from 'styled-components'


const Text = styled.h1`
position: fixed;
top: ${props => props.top};
left: ${props => props.left};
right: ${props => props.right};
color:${props => props.color ? props.color : `rgba(${props.theme.textRgba},0.1)`};
font-size: calc(4.5rem + 5vw);
z-index:0;
margin: 0;
@media (max-width: 768px) {
    top: ${props => props.mtop};
    left: ${props => props.mleft};
    font-size: ${props => props.mfontsize}
}
`


const BigTitlte = (props) => {
    return (
        <Text  top={props.top}  left={props.left}  right={props.right} mtop={props.mtop} mleft={props.mleft} mfontsize={props.mfontsize} color={props.color}>
            {props.text}
        </Text>
    )
}

export default BigTitlte
