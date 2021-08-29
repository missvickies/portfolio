import styled from "styled-components";
export const Header = () => {
  return (
    <Top>
      <h2>Vicki Chen</h2>
      <h2>Developer</h2>
    </Top>
  );
};
const Top = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
