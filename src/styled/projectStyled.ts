import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 899px) {
    margin: 0;
  }
`;

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100%;
  margin: 0 auto;
  gap: 10px;
  border: 1px solid #000;
  padding: 10px;

  @media screen and (max-width: 899px) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);
    width: 100%;
    border: none;
    padding: 0;
  }
`;

export const PGridItem = styled.div`
  background-color: #ccc;
  padding: 20px;
  text-align: center;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  gap: 5px;

  img {
    width: 100%;
  }
`;
