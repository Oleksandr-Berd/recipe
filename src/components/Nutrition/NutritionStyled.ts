import styled from "styled-components";

export const NutritionCon = styled.div`
  padding-left: 32px;
  padding-top: 32px;
  padding-right: 32px;
  padding-bottom: 40px;
`;

export const NutritionTitle = styled.h3`
  margin-bottom: 24px;

  font-size: 28px;
  font-family: "young-serif";
  color: #854632;
`;

export const NutritionText = styled.p`
  margin-bottom: 24px;

  font-family: "Outfit";
  font-size: 16px;
  line-height: 1.5;
  color: #5f564d;

  text-wrap: balance;
`;

export const NutritionListCon = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  & > ul {
    width: 50%;
  }

  & > ul > li:not(:first-child) {
    padding-top: 12px;
  }

  & > ul > li:not(:last-child) {
    padding-bottom: 12px;

    border-bottom: 1px solid #e3ddd7;
  }

  & > ul:not(:last-child) > li {
    font-size: 16px;
    line-height: 1.5;
    color: #5f564d;
  }

  & > ul:last-child > li {
    font-size: 16px;
    line-height: 1.5;
    font-weight: bold;

    color: #854632;
  }
`;
