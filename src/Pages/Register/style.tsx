import styled from "styled-components";

export const PageRegister = styled.div`
  padding: 30px 20px 0 20px;
  .formContainer {
    padding: 18px;
    width: 347px;
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
`;
