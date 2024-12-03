import styled from "styled-components";

export const IngredientsCon = styled.div`
  margin-left: 32px;
  margin-right: 32px;

  padding-bottom: 32px;

  border-bottom: 1px solid #e3ddd7;

  & > h3 {
    margin-bottom: 32px;

    font-family: "young-sherif";
    font-size: 28px;

    color: #854632;
  }
`;

export const IngredientsList = styled.ul`
padding-left: 8px;
  text-indent: 16px;

  list-style-type: disc;
`;

export const IngredientItem = styled.li`

font-family: "Outfit";
font-size: 16px;
line-height: 1.5;

&:not(:last-child){
    margin-bottom: 8px;
}

`