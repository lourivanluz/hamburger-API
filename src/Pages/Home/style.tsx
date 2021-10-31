import styled from "styled-components";
export const HeaderStyled = styled.header`
  height: 80px;
  background-color: var(--grey0);
  display: flex;
  position: fixed;
  top: 0;
  width: 100vw;

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
    .cartContainer {
      position: relative;
      div {
        background-color: red;
        color: white;
        border-radius: 50%;
        width: 15px;
        height: 15px;
        font-size: 12px;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        top: -12px;
        right: -12px;
      }
    }
  }
`;

export const PageHome = styled.div`
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
`;

export const MainStyled = styled.main`
  padding: 80px;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding-left: 30px;
    padding-top: 30px;
    li {
      padding-bottom: 30px;
      padding-right: 30px;
    }
  }
`;
