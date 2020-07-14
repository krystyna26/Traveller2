import React from "react";
import styled from "styled-components";
import { MDBCard, MDBCardBody } from "mdbreact";
import face from "./face.png";
import Card from "../Card";
import { BrowserRouter as Router, Link } from "react-router-dom";

const Container = styled.div`
  width: 100%;
  max-height: 800px;
  overflow: scroll;
  border: 1px solid black;
  padding: 10px;
`;

const RoundedImage = styled.img`
  width: 100%;
  background: none repeat scroll 0 0 #fff;
  border: 5px solid #fff;
  border-radius: 50% !important;
`;

const MDBAvatar = styled.div`
  display: block;
  width: 50px;

  overflow: hidden;
  border-radius: 50% !important;
`;

export default function ScrollBar({ empty, children }) {
  return (
    <Router>
      <Container>
        {!empty ? (
          <>
            <Card whenCard="present" />
            <MDBCard className="m-4 ">
              <div className="row pl-3">
                <MDBAvatar className="pt-2 white  hx-auto" circle>
                  <RoundedImage
                    src={face}
                    alt="krysia"
                    className="rounded-circle pl-2"
                  />
                </MDBAvatar>
                <MDBCardBody className="font-weight-light">
                  <span className="font-weight-bolder">Alexander</span> is on
                  the trip{" "}
                  <Link to="/my_trips">
                    <span className="font-weight-bolder">AUSTIN - DENVER</span>
                  </Link>
                </MDBCardBody>
              </div>
            </MDBCard>

            <MDBCard className="m-4">
              <MDBCardBody>This is some text within a panel body.</MDBCardBody>
            </MDBCard>
            <MDBCard className="m-4">
              <MDBCardBody>This is some text within a panel body.</MDBCardBody>
            </MDBCard>
          </>
        ) : (
          children
        )}
      </Container>
    </Router>
  );
}
