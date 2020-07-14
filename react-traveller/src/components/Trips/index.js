import React, { useState } from "react";
// import styled from "styled-components";
import {
  MDBBtn,
  MDBRow,
  MDBCard,
  MDBCardBody,
  MDBNavbarNav,
  MDBNavItem,
  MDBFormInline,
  MDBDataTable,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import { useQuery } from "react-apollo";
import { loader } from "graphql.macro";
import { get } from "lodash";
import { formatDistanceToNow } from "date-fns";
import moment from "moment";

const fetchTripsQuery = loader("../queries/FetchMyTrips.graphql");

export default function Trips({ onRouteChange }) {
  const { data: trips, error, loading } = useQuery(fetchTripsQuery, {
    id: "ck9xiwho5003i0783xnrr10ci",
  });
  // console.log("here trips:", trips, error, loading);
  const myTrips = get(trips, "trips", [
    {
      rate: null,
      travel_ended_at: "2019-10-12T00:00:00.000Z",
      author: {
        id: "1",
        first_name: "defaultName",
      },
      published: true,
      traveled_from: "",
      pictures: [],
      traveled_to: "",
      id: "9",
      stops: [],
      travel_started_at: "2019-10-10T00:00:00.000Z",
      comments: [],
    },
  ]);

  const tripsMap = myTrips.map((trip) => {
    // console.log("here ####", trip.travel_started_at);
    const d = formatDistanceToNow(new Date(trip.travel_started_at), {
      addSuffix: true,
    });
    var a = moment(new Date(trip.travel_started_at), "M/D/YYYY");
    var b = moment(new Date(trip.travel_ended_at), "M/D/YYYY");
    var diffDays = b.diff(a, "days");
    const f = `${trip.traveled_from} - ${trip.traveled_to}`;

    return {
      when: d,
      durance: `${diffDays} days`,
      fromTo: f,
      author: trip.author.first_name,
      rate: trip.rate,
      details: (
        <MDBBtn color="purple" size="sm" tripId={trip.id}>
          Details
        </MDBBtn>
      ),
    };
  });

  const data = {
    columns: [
      {
        label: "When",
        field: "when",
        sort: "asc",
        width: 150,
      },
      {
        label: "Travel length",
        field: "durance",
        sort: "asc",
        width: 200,
      },
      {
        label: "From / To",
        field: "fromTo",
        sort: "asc",
        width: 200,
      },
      {
        label: "Trip owner",
        field: "author",
        sort: "asc",
        width: 100,
      },
      {
        label: "Rate",
        field: "rate",
        sort: "asc",
        width: 100,
      },
      {
        label: "More",
        field: "details",
        sort: "asc",
        width: 100,
      },
    ],
    rows: tripsMap,
  };

  return (
    <Router>
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <div>
            <h2 className="h1-responsive font-weight-bold my-5">
              My awesome trips
            </h2>
            <MDBNavbarNav>
              <MDBNavItem>
                <MDBFormInline waves>
                  <div className="md-form my-0">
                    <input
                      className="form-control mr-sm-2"
                      type="text"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </div>
                </MDBFormInline>
              </MDBNavItem>
            </MDBNavbarNav>
          </div>
          <MDBRow style={{ paddingTop: "55px" }}>
            <MDBDataTable
              className="mx-auto w-100"
              order={["age", "asc"]}
              responsive
              striped
              bordered
              small
              hover
              btn
              data={data}
            ></MDBDataTable>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </Router>
  );
}
