import React from "react";
import styled, { css } from "styled-components";

import Field from ".";

const Label = styled.label`
  align-self: center;
  color: #4d5673;
  font-family: "roboto-mono", monospace;
  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.3rem;
  margin: 0.5em;
  opacity: 0.75;
  padding-left: inherit;
  text-transform: uppercase;
  background: 1ps solid green;
`;

const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: #242425;
  background: papayawhip;
  border: 1px solid red;
  border-radius: 3px;
  font-size: 1rem;
  width: inherit;
`;

type Props = {
  label?: string,
  stacked?: boolean
};

const TextField = ({ label, stacked }: Props) => {
  return (
    <div>
      <Label label={label} />
      <Input />
    </div>
  );
};

export default TextField;
