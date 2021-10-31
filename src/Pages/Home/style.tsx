import styled from "styled-components";
export const HeaderStyled = styled.header`
  height: 80px;
  background-color: var(--grey0);
  display: flex;

  .logoContainer {
    width: fit-content;
  }

  .headerContainer {
    display: flex;
    max-width: 1024px;
    width: 100%;
    padding: 0 15px;
    align-items: center;
    margin: 0 auto;
    justify-content: space-between;
  }
  .rightDiv {
    display: flex;
    align-items: center;
    .icon-header {
      font-size: 25px;
      color: var(--grey5);
      margin-left: 23px;
      cursor: pointer;
    }
  }
`;

export const PageHome = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;
