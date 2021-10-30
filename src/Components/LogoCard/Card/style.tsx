import styled from "styled-components";

export const CardContainer = styled.div`
  display: flex;
  height: 95px;
  padding: 13px 23px 16px 14px;
  border-radius: 5px;
  border: 1px solid var(--grey0);
  align-items: center;
  max-width: 377px;
  .iconContainer {
    color: #219653;
    background: rgba(39, 174, 96, 0.1);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    min-height: 60px;
    margin-right: 15px;
  }
  .textContainer {
    p {
      color: var(--grey3);

      span {
        color: var(--grey6);
        margin: 0 5px;
      }
    }
  }
`;
