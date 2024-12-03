import styled from "styled-components";

export const PreparationCustom = styled.div`
  padding-left: 24px;
  padding-top: 24px;
  padding-right: 64px;
  padding-bottom: 24px;
  margin-left: 32px;
  margin-right: 32px;
  margin-bottom: 32px;

  background-color: rgb(122, 40, 78, 0.2);

  border-radius: 12px;

  & > h3 {
    margin-bottom: 16px;

    font-family: "Outfit";
    color: #7a284e;
  }
`;

export const PreparationList = styled.ul`
  padding-left: 16px;

  list-style-type: disc;
`;

export const PreparationItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }

  & > p {

    font-family: "Outfit";
    font-size: 16px;
    line-height: 1.5;

    color: #5f564d;

    & > span {
        font-weight: 800;
    }
  }
`;
