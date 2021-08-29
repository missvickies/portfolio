import styled from "styled-components";
// import { Nav } from "../components/Navigation";
import Link from "next/link";
import { useRouter } from "next/router";

export const Block = ({ height, title, description, id }) => {
  const router = useRouter();
  const { pid } = router.query;
  return (
    <div>
      <Link href={"/projects/" + id}>
        <a>
          <h1> {title}</h1>
          <IpsumBlock height={height}></IpsumBlock>
          <p>{description}</p>
        </a>
      </Link>
    </div>
  );
};

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  height: inherit;
  //   justify-content: space-between;
  background-color: yellow;
`;

const FlexCol = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: col;
  background-color: red;
`;

const IpsumBlock = styled.div`
  margin-top: 2em;
  margin-bottom: 2em;
  width: 100%;
  height: ${(props) => props.height || "200px"};
  background-color: green;
`;
