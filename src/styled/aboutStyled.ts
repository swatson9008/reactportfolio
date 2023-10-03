import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  justify-content: center;
  padding: 30px;

  @media screen and (max-width: 899px) {
    margin: 10px;
    justify-content: center;
    padding: 10px;
  }
`;
