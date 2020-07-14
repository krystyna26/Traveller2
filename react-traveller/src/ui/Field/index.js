import styled, { css } from "styled-components";
import React from "react";

import Label from "../Label";

type Props = {
  info?: Node,
  label?: string
};

const Container = ({ info, label }: Props) => (
  <div>
    {info && info}
    {label && <Label>{label}</Label>}
  </div>
);

const Field = styled(Container)`
  align-items: center;
  display: flex;
  flex-direction: row;
  ${({ label }) =>
    !label &&
    css`
      padding-left: 2px;
    `}

  ${({ stacked }) =>
    stacked &&
    css`
      flex-direction: column;
      justify-content: flex-start;
    `}
`;

export default Field;
