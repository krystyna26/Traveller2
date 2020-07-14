import styled, { css } from "styled-components";
import React from "react";

import Input from "./Input";

const Container = styled.div`
  align-item: center;
  display: flex;
  width: 100%;
`;

type Props = {
  label?: string
};
const TextInput = ({ label }: Props) => {
  <Container>
    <Input>{label}</Input>
  </Container>;
};

export default TextInput;
