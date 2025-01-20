import styled from "styled-components";

export const HeroCustom = styled.div`
  margin-bottom: 32px;

  background-color: #fff7fb;
`;

export const ImageCon = styled.div`
  @media (min-width: 1280px) {
    padding-top: 40px;
  }

  & > img {
    width: 375px;
    height: 171px;

    margin-bottom: 40px;

    @media (min-width: 1280px) {
      width: 90%;
      height: auto;

      margin-left: auto;
      margin-right: auto;

      border-radius: 12px;
    }
  }
`;

export const Content = styled.div`
  padding-left: 32px;
  padding-right: 32px;

  & > h3 {
    margin-bottom: 24px;

    font-family: "young-serif";
    font-size: 36px;

    color: #312e2c;
  }

  & > p {
    font-family: "Outfit";
    font-size: 16px;
    line-height: 1.5;

    color: #5f564d;
  }
`;
