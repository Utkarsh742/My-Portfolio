'use client'
import { motion } from "framer-motion";
import React from "react";
// import { NavLink } from 'react-router-dom'
import styled from "styled-components";
import { Github, LinkedIn } from "../components/AllSvgs";
import { DarkTheme } from "../components/Themes";
import { usePathname } from "next/navigation";

const Icons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  position: fixed;
  bottom: 0;
  left: 2rem;

  z-index: 3;

  & > *:not(:last-child) {
    margin: 0.5rem 0;
  }
  @media (max-width: 768px) {
    display: ${props => props.sdisplay};
  }
`;

const Line = styled(motion.span)`
  width: 2px;
  height: 6rem;
  background-color: ${(props) =>
    props.color};
`;

const SocialIcons = (props) => {
  const router = usePathname();
  return (
    <Icons sdisplay={props.sdisplay}>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://github.com/Utkarsh742"}
        >
          <Github
            width={25}
            height={25}
            fill={window.innerWidth < 768 && router === '/' && props.theme === 'dark' ? DarkTheme.body : props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.2 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://www.linkedin.com/in/utkarshdwivedi742/"}
        >
          <LinkedIn
            width={24}
            height={22}
            fill={window?.innerWidth < 768 && router === '/' && props.theme === 'dark' ? DarkTheme.body : props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div>
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.4 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://facebook.com/codebucks27"}
        >
          <Facebook
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div> */}
      {/* <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: [0, 1, 1.5, 1] }}
        transition={{ type: "spring", duration: 1, delay: 1.6 }}
      >
        <a
          style={{ color: "inherit" }}
          target="_blank"
          href={"https://youtube.com"}
        >
          <YouTube
            width={25}
            height={25}
            fill={props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
          />
        </a>
      </motion.div> */}

      <Line
        color={window.innerWidth < 768 && router === '/' && props.theme === 'dark' ? DarkTheme.body : props.theme === "dark" ? DarkTheme.text : DarkTheme.body}
        initial={{
          height: 0,
        }}
        animate={{
          height: "6rem",
        }}
        transition={{
          type: "spring",
          duration: 1,
          delay: 0.8,
        }}
      />
    </Icons>
  );
};

export default SocialIcons;
