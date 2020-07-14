import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  // MDBCard,
  // MDBCardBody,
  // MDBIcon,
  // MDBCardTitle,
  // MDBCardText,
} from "mdbreact";
import Subtitle from "../../ui/Subtitle";
import Title from "../../ui/Subtitle";

type Props = {
  history?: any,
};

export default function TripDetails({ history, ...props }: Props) {
  // const friendTrip = props.location.state.trip;
  // console.log("here history /TripDetails:", history);
  // console.log("here props.location.state /TripDetails", props.location.state);
  return (
    <Router>
      <MDBRow style={{ padding: "55px" }}>
        <Title>Guacamole2019</Title>
      </MDBRow>
      <MDBRow style={{ padding: "55px" }}>
        <MDBCol class="col-md-3">
          <Subtitle>Itenerary</Subtitle>
          <div class="list-group">
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start active"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">Arrive Mexico</h5>
                <small>Day 1</small>
              </div>
              <p class="mb-2">Visit Museum of Pinacolada</p>
              <small>Dinner at Mexico Mamas Bufet.</small>
            </a>
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-2">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">List group item heading</h5>
                <small class="text-muted">3 days ago</small>
              </div>
              <p class="mb-2">
                Donec id elit non mi porta gravida at eget metus. Maecenas sed
                diam eget risus varius blandit.
              </p>
              <small class="text-muted">Donec id elit non mi porta.</small>
            </a>
          </div>
        </MDBCol>
        <MDBCol>
          <p>Created May 2019</p>
          <div class="list-group">
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">Created</h5>
                <small>May 2019</small>
              </div>
            </a>
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">Rate</h5>
                <small class="text-muted">4.5 / 5</small>
              </div>
            </a>
            <a
              href="#!"
              class="list-group-item list-group-item-action flex-column align-items-start"
            >
              <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-2 h5">Countries visited</h5>
                <p class="mb-2">Mexico</p>
              </div>
            </a>
          </div>
        </MDBCol>
        <MDBCol>Pictures</MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol>
          <button type="button" class="btn btn-primary">
            Add to my callendar
          </button>
        </MDBCol>
        <MDBCol>
          <button type="button" class="btn btn-primary">
            Modify
          </button>
        </MDBCol>
      </MDBRow>
    </Router>
  );
}
