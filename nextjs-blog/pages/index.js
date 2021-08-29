import styled from "styled-components";
import { Block } from "../components/Block";
import { keyframes } from "styled-components";
import { GithubIcon, CodepenIcon, LinkedinIcon } from "../components/Icons";
export default function Home() {
  return (
    <FlexContainer>
      <Wrapper>
        <Left>
          <Title primary>Hi, I'm Vicki.</Title>
          <h1>
            And I make digital experiences that feel like ~{" "}
            <em>magic 🪄 ✨✨</em>
          </h1>
          <h1>
            Currently, I am attending my{" "}
            <mark>third year at Carleton University </mark>
            studying <mark>Computer Science </mark>
          </h1>
          <h1>
            During my free time, I take web dev courses from{" "}
            <a href="https://frontendmasters.com">frontend masters</a>, code
            side projects on{" "}
            <mark>
              <a href="">Github</a>
            </mark>{" "}
            and play around with css to create animations on{" "}
            <mark>
              <a href="https://codepen.io/MissesVickies">Codepen.</a>
            </mark>
          </h1>
          <h1>
            Some technologies I've been coding with lately are
            <ListContainer>
              <ul>
                <li>Javascript,</li>
                <li>React</li>
                <li>Redux</li>
              </ul>
              <ul>
                <li>HTML/CSS</li>
                <li> Sass</li>
                <li>Node.js</li>
              </ul>
            </ListContainer>
            Check out my projects on github.
          </h1>
          <h1>
            In highschool, I volunteered as a mentor and web developer for my
            school's robotics team. I also spoke at the{" "}
            <mark>
              <a href="https://www.hervolution.org/150-days-canadian-women-stem-week-4-wrap/">
                150 days of Canadian women in STEM{" "}
              </a>
            </mark>
            conference hosted by hervolution.
          </h1>
        </Left>
      </Wrapper>

      <Wrapper primary>
        <Right>
          <ListContainer style={{ alignItems: "center" }}>
            <Title>Projects</Title>
            <GithubIcon />
            <CodepenIcon />
            <LinkedinIcon />
          </ListContainer>

          <Block height="400px" title="Ecommerce Website" id="0"></Block>
          <Block height="400px" title="Task Manager" id="1"></Block>
          <Block height="400px" title="Contra CSS Components" id="2"></Block>
          <Block height="400px" title="CryptoKitties app" id="3"></Block>
        </Right>
      </Wrapper>
    </FlexContainer>
  );
}

const Title = styled.h1`
  font-size: 5em;
  font-weight: 800;
  color: ${(props) => (props.primary ? "white" : "black")};
`;
const slideRight = keyframes`
0% {  width: 100vw; opacity:0;}
100% { width: 44vw; opacity:1; }
`;
const Left = styled.div`
  width: 100%;
  padding: 5em;
  height: inherit;
  animation-name: ${slideRight};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: easeTo;
`;

const Right = styled.div`
  padding: 4em;
  position: relative;
  max-height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background: ${(props) => (props.primary ? "white" : "#B1E0A9")};
`;

const FlexContainer = styled.section`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const ListContainer = styled.section`
  padding: 1em;
  display: flex;
  flex-direction: row;
  position: relative;
  overflow: hidden;
`;
