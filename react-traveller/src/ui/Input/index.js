import React from "react";

import styled, { css } from "styled-components";

import Label from "../Label";

const StyledInput = styled.input`
  padding: 0.5em;
  margin-top: 0.5em;
  color: #242425;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  font-size: 1rem;
  width: inherit;
`;

const Container = styled.div`
  align-item: center;
  display: flex;
  height: max-content;
  width: 80%;
  ${({ stacked }) =>
    stacked &&
    css`
      flex-direction: column;
      justify-content: flex-start;
    `}
`;

type Props = {
  text?: string
};

export default function Input({ text }: Props) {
  return (
    <Container stacked>
      {text && <Label>{text}</Label>}
      <StyledInput />
    </Container>
  );
}
