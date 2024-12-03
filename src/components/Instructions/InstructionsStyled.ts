import styled from "styled-components";

export const InstructionCon = styled.div`
  padding-top: 32px;
  padding-bottom: 32px;

  margin-left: 32px;
  margin-right: 32px;

  border-bottom: 1px solid #e3ddd7;

  & > h3 {
    margin-bottom: 32px;

    font-family: "young-sherif";
    font-size: 28px;

    color: #854632;
  }
`;

export const InstructionList = styled.ol`
  list-style-type: decimal;

  list-style-position: outside; /* Ensures marker is outside the text block */
  padding-left: 30px;
`;

export const InstructionItem = styled.li`
  font-family: "Outfit";
  font-size: 16px;
  line-height: 1.5;

  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;