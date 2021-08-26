import Head from "next/head";
import styled from "styled-components";
import React, { useState } from "react";
import { Fade } from "../components/Fade";

export default function Home() {
  const [inProp, setInProp] = useState(false);
  const duration = 300;
  return (
    <FlexContainer>
      <Wrapper>
        <Title>hello world</Title>
      </Wrapper>
      <Wrapper primary>
        <Title>right</Title>

        <Fade in={inProp} />
        <Fade in={inProp} />
        <Fade in={inProp} />
        <button onClick={() => setInProp(!inProp)}>Click to Enter</button>
      </Wrapper>
    </FlexContainer>
  );
}

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: black;
`;
const Wrapper = styled.section`
  padding: 4em;
  background: ${(props) => (props.primary ? "#fcf7f8" : "#afb591")};
  width: 50vw;
`;

const FlexContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
`;
