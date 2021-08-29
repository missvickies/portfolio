import styled from "styled-components";
import { keyframes } from "styled-components";
import { LayoutProject } from "../../components/LayoutProject";
import { useRouter } from "next/router";
import Link from "next/link";

export default function project() {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <>
      <Link href="/">
        <BackBtn>
          <a>
            <h1> X </h1>
          </a>
        </BackBtn>
      </Link>
      <Wrapper>
        <Left>
          <LayoutProject pid={pid} />
        </Left>
      </Wrapper>
    </>
  );
}

// const Title = styled.h1`
//   font-size: 5em;
//   font-weight: 800;
//   color: ${(props) => (props.primary ? "white" : "black")};
// `;
const slideRight = keyframes`
0% {  width: 50vw;opacity:0 }
100% { width: 100vw;opacity:1}
`;
const BackBtn = styled.div`
  font-size: 4em;
  position: relative;
  float: right;
  margin-right: 1em;
  top: 0;
`;
const Wrapper = styled.div`
  padding: 4em;
  height: 100vh;
  background: ${(props) => (props.primary ? "#fcf7f8" : "#B1E0A9")};
  animation-name: ${slideRight};
  animation-duration: 1s;
  animation-iteration-count: 1;
  animation-timing-function: easeTo;
`;

const Left = styled.div`
  height: 100%;
  width: 100%;
`;
