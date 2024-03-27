'use client'
import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";
import localFont from 'next/font/local';

const myFont = localFont({
    src: '../config/go3v2.ttf',
    display: 'swap',
  })

const Logo = styled.h1`
  display: flex;
  margin: 0;
  color: ${(props) =>
    props.$color === "dark" ? DarkTheme.text : DarkTheme.body};
  /* font-family: "Pacifico", cursive; */
  position: fixed;
  left: 2rem;
  top: 2rem;
  z-index: 3;
  @media (max-width: 768px) {
  left: 1rem;
  font-size: 1.7rem;
  }
`;

const LogoComponent = (props) => {
  return <Logo $color={props.theme} className={myFont.className}>UD</Logo>;
};

export default LogoComponent;
