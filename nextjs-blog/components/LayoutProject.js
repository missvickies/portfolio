import { useState } from "react";
import styled from "styled-components";

const projects = [
  {
    id: 0,
    title: "ecommerce website",
    description: "a little blurb about something",
    img: "https://placeholder/300x300",
  },
  {
    id: 1,
    title: "task manager",
    description: "a little blurb about something",
    img: "https://placeholder/300x300",
  },
  {
    id: 2,
    title: "contra css components",
    description: "a little blurb about something",
    img: "https://placeholder/300x300",
  },
  {
    id: 3,
    title: "Browse Cryptokitties App",
    description: "a little blurb about something",
    img: "https://placeholder/300x300",
  },
];
export const LayoutProject = ({ pid }) => {
  return (
    <>
      {projects
        .filter(({ id }) => id == pid)
        .map((project) => (
          <Title primary> {project.title}</Title>
        ))}
    </>
  );
};

const Title = styled.h1`
  font-size: 5em;
  font-weight: 800;
  color: ${(props) => (props.primary ? "white" : "black")};
`;
