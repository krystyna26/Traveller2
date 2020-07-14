import React from "react";
import styled from "styled-components";
import { MDBCard, MDBCardBody, MDBCardTitle, MDBCardText } from "mdbreact";
import face from "../ScrollBar/face.png";
import ImageContainer from "../ImageContainer";

import { BrowserRouter as Router, Link } from "react-router-dom";

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

type Props = {
  whenCard: string,
};

export default function Card({ whenCard = "present" }: Props) {
  return (
    <Router>
      {whenCard === "present" ? (
        <MDBCard className="m-4">
          <MDBCardBody>
            <MDBCardTitle tag="h6" sub className="mb-3 ml-4 font-weight-light">
              3 days ago <span className="font-weight-bolder">Kamil</span> came
              back from trip{" "}
              <Link to="/my_trips">
                <span className="font-weight-bolder">MEXICO - LAS VEGAS</span>(4
                days)
              </Link>
            </MDBCardTitle>
            <div class="flex-fill">
              <ul class="list-group list-group-horizontal">
                <li class="list-group-item ">
                  <ImageContainer />
                </li>
                <li class="row">
                  <li class="list-group-item">
                    <MDBCardText className="font-weight-light">
                      Rate: 4.8 / 5
                    </MDBCardText>
                    <MDBCardText className="font-weight-light">
                      Transportation mode: flight
                    </MDBCardText>
                    <MDBCardText className="font-weight-light">
                      Times taken: 8
                    </MDBCardText>
                  </li>
                  <li class="list-group-item">
                    <MDBCardText className="font-weight-light">
                      Tips: take sunscreen
                    </MDBCardText>
                    <MDBCardText className="font-weight-light">
                      Budget: $$
                    </MDBCardText>
                    <MDBCardText className="font-weight-light">
                      Fast pace mode
                    </MDBCardText>
                  </li>
                </li>
              </ul>
            </div>
            <MDBCardTitle
              tag="h6"
              sub
              className="mt-3 ml-4 text-muted font-weight-light"
            >
              Comments: We had so much fun. Definitelly want to go again
            </MDBCardTitle>
          </MDBCardBody>
        </MDBCard>
      ) : (
        <MDBCard className="m-4 ">
          <div class="row pl-3">
            <MDBAvatar className="pt-2 white  hx-auto" circle>
              <RoundedImage
                src={face}
                alt="krysia"
                className="rounded-circle pl-2"
              />
            </MDBAvatar>
            <MDBCardBody className="font-weight-light">
              <span className="font-weight-bolder">Alexander</span> is on the
              trip <span className="font-weight-bolder">AUSTIN - DENVER</span>
            </MDBCardBody>
          </div>
        </MDBCard>
      )}
    </Router>
  );
}
