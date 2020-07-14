import React from "react";

import styled from "styled-components";
import puerto from "./puerto-rico.jpg";

const StyledDiv = styled.div``;

const StyledImg = styled.img`
  width: 300px;
`;

export default function ImageContainer() {
  return (
    <StyledDiv>
      <StyledImg src={puerto} />
    </StyledDiv>
  );
}
