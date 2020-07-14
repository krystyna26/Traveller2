import styled, { css } from "styled-components";

const Content = styled.div`
  background-color: #f7fbff;
  border-radius: 1rem;
  box-shadow: rgba(black, 0.1) 0 4rem 16rem;
  margin: 2rem;
  padding: 2rem;

  ${({ twoCol }) =>
    twoCol &&
    css`
      display: flex;
      flex-direction: row;

      & > :first-child {
        margin-right: 1rem;
        width: 50%;
      }
      & > :last-child {
        margin-left: 1rem;
        width: 50%;
      }
      & + & {
        margin-top: 10px;
      }
    `}
`;

export default Content;
