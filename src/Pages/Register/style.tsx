import styled from "styled-components";

export const PageRegister = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px 20px 0 20px;
  .formContainer {
    padding: 18px;
    width: 333px;
    border-radius: 5px;
    border: 1px solid var(--grey0);
    .headerForm {
      display: flex;
      justify-content: space-between;
      h2 {
        margin-bottom: 25px;
        font-size: 22px;
        font-weight: bold;
      }
      span {
        margin-top: 5px;
        color: var(--grey5);
        font-size: 14px;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
  .logoContainer {
    display: none;
    @media (min-width: 850px) {
      display: block;
      margin-right: 20px;
    }
  }
`;
