import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 250px;
  margin-right: 250px;
  justify-content: center;
  padding: 20px;

  @media screen and (max-width: 899px) {
    margin: 10px;
    justify-content: center;
    padding: 10px;
  }
`;
