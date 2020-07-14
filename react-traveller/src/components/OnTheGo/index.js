import React, { useState } from "react";
import { MDBRow, MDBCol } from "mdbreact";

export default function OnTheGo({ onRouteChange }) {
  return (
    <MDBRow style={{ padding: "55px" }}>
      <MDBCol class="col-md-3">
        <table class="table table-sm">
          <thead>
            <tr>
              <th scope="col">DAY</th>
              <th scope="col">COMMUTE</th>
              <th scope="col">PLACE</th>
              <th scope="col">STATUS</th>
              <th scope="col">I'M TIRED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>San Jose</td>
              <td>Los Angeles</td>
              <td>COMPLETED</td>
              <td>SKIP</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </MDBCol>
      <MDBCol style={{ maxWidth: "22rem" }}>
        <button type="button" class="btn btn-primary">
          TRIP COMPLETED
        </button>
      </MDBCol>
    </MDBRow>
  );
}
