import styled from "styled-components";

export const AppCustom = styled.div`
  height: 100vh;

  background-color: #fff7fb;

  @media (min-width: 1280px) {
    width: 50%;
    height: auto;

    margin-left: auto;
    margin-right: auto;

    border-radius: 12px;

    overflow: hidden;
  }
`;

export const DesktopWrapper = styled.div`
  @media (min-width: 1280px) {
    padding-top: 123px;
    padding-bottom: 124px;

    background-color: #f3e5d7;
  }
`;
