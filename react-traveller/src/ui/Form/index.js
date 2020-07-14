import styled, { css } from "styled-components";

const Form = styled.form`
  background-color: #a8d0e6;
  border-radius: 1rem;
  padding: 2rem;
  ${({ stacked }) =>
    stacked &&
    css`
      display: grid;
      flex-direction: column;
      grid-template-columns: 1fr;
      justify-content: flex-start;
      width: 30rem;
      button {
        grid-column-start: 1;
        justify-self: center;
        margin-top: 1px;
      }
    `}
`;

export default Form;
