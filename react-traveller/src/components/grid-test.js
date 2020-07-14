import React from "react";
import styled, { css } from "styled-components";

const size = {
  mobileS: "320px",
  mobileM: "375px",
  mobileL: "425px",
  tablet: "768px",
  laptop: "1024px",
  laptopL: "1440px",
  desktop: "2560px"
};

const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const ZoneGreen = styled.nav`
  @media only screen and (max-width: 600px);
  @media ${device.laptop} {
    max-width: 1800px;
  }
  @media ${device.desktop} {
    max-width: 1400px;
  }
  font-size: 0.5em;
  padding: 0;
  ${({ sticky }) =>
    sticky &&
    css`
      position: fixed;
      top: 0;
      width: 100%;
    `}
`;

const MainNav = styled.ul`
  display: flex;
  border: 1px solid green;
  list-style: none;

  font-size: 0.7em;
  margin: 0;
`;

const StyledItems = styled.li`
  padding: 20px;

  ${({ push }) =>
    push &&
    css`
      margin-left: auto;
    `}
`;

const Cover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  border: 1px solid blue;
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  border: 1px solid red;
`;

const ProjectGrid = styled.div`
  background-color: #444;
  padding: 130px;
  margin: 20px;
  & > div {
    width: 100%;
  }
`;

const Footer = styled.div`
  text-align: center;
  border: 1px dotted green;
`;

const MyDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid pink;
`;
export default function Grid() {
  return (
    <>
      <ZoneGreen sticky>
        <MainNav>
          <StyledItems>About</StyledItems>
          <StyledItems>Products</StyledItems>
          <StyledItems>Our team</StyledItems>
          <StyledItems push>Contact</StyledItems>
        </MainNav>
      </ZoneGreen>

      <Cover>Cover</Cover>

      <Wrapper>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
        <ProjectGrid>
          <MyDiv src="" alt="visionary" />
        </ProjectGrid>
      </Wrapper>
      <Footer>Footer</Footer>
    </>
  );
}
