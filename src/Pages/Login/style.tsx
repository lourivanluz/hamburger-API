import styled from "styled-components";

export const PageLogin = styled.div`
  padding: 30px 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 828px) {
    flex-direction: row-reverse;
  }
  .formContainer {
    padding: 18px;
    width: 333px;
    border-radius: 5px;
    border: 1px solid var(--grey0);
    h2 {
      margin-bottom: 25px;
      font-size: 22px;
      font-weight: bold;
    }
    p {
      color: var(--grey5);
      width: 250px;
      margin: 15px auto;
      font-size: 14px;
      text-align: center;
    }
    @media (min-width: 828px) {
      margin-right: 20px;
    }
  }
`;
