import React, { useState, useEffect, Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link } from "react-router-dom";

import { useQuery } from "react-apollo";
import { loader } from "graphql.macro";
import { get } from "lodash";

import {
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBDataTable,
} from "mdbreact";

import { formatDistance, formatDistanceToNow } from "date-fns";

import { format } from "date-fns";
import moment from "moment";

import face from "../Face/fox.jpg";
import ScrollBar from "../../ui/ScrollBar";

// const fetchUserQuery = loader("./FetchUsers.graphql");
const MDBRotatingCard = styled.div`
  display: block;
  width: 100px;
  height: 100px;
  margin: 0
  overflow: hidden;
  text-align: center !important;
  position: relative;
`;

const MDBCardUp = styled.div`
  height: 200px;
  overflow: hidden;
`;

const MDBAvatar = styled.div`
  display: block;
  width: 120px;
  margin-top: -60px;
  overflow: hidden;
  border-radius: 50% !important;
`;
const RoundedImage = styled.img`
  width: 100%;
  background: none repeat scroll 0 0 #fff;
  border: 5px solid #fff;
  border-radius: 50% !important;
`;

const fetchFriendProfile = loader("../queries/FriendProfileFetch.graphql");

type Props = {
  history?: any,
};

export default function FriendProfile({ history, ...props }: Props) {
  const [currentId, setCurrentId] = useState("");

  // const { data } = useQuery(fetchUserQuery);
  // console.log("here props /FriendsProfile:", props);
  const friendId = props.location.state.friendId;

  // useEffect(() => {
  //   if (currentId === "") setCurrentId(friendId);
  // });

  // console.log("here currentId /FriendProfile:", currentId);

  const { data: friend, error, loading } = useQuery(fetchFriendProfile, {
    variables: { friendId: String(currentId) },
  });

  // console.log("here friend", friend, error);

  const currentFriend = get(friend, "user", {
    first_name: "Krystyna",
    id: "ck9xiwho5003i0783xnrr10ci",
    last_name: "Lemeni Pop",
    trips: [
      {
        travel_ended_at: "2020-01-07T00:00:00.000Z",
        author: {
          first_name: "Krystyna",
        },
        traveled_from: "New York",
        traveled_to: "Texas",
        travel_started_at: "2020-01-01T00:00:00.000Z",
      },
    ],
    createdAt: "2020-05-08T01:30:55.712Z",
  });
  // console.log("here FriendProfile", currentFriend, error, loading);

  const linkToTripDetailsDirectory = () => {
    console.log("here linkToTripDetailsDirectory", history);
    if (history) history.push(`/details`);
    return true;
  };

  const friendTrips = currentFriend.trips.map((trip) => {
    var when = format(new Date(trip.travel_started_at), "MMMM yyyy");
    var a = moment(new Date(trip.travel_started_at), "M/D/YYYY");
    var b = moment(new Date(trip.travel_ended_at), "M/D/YYYY");
    var diffDays = b.diff(a, "days");
    var f = `${trip.traveled_from} - ${trip.traveled_to}`;
    // console.log("here trip", trip);
    return {
      when: when,
      fromTo: `${f} (${diffDays} days)`,
      rate: trip.rate,
      details: (
        <Link
          to={{ state: { tripDetails: trip } }}
          onClick={() => linkToTripDetailsDirectory()}
        >
          <MDBBtn color="purple" size="sm" tripId={trip.id}>
            Details
          </MDBBtn>
        </Link>
      ),
    };
  });

  const memberSince = formatDistanceToNow(new Date(currentFriend.createdAt), {
    addSuffix: false,
  });
  const friendTripsCount = currentFriend.trips.length;

  const friendRecentTrips = currentFriend.trips.map((trip) => ({
    from: trip.traveled_from,
    to: trip.traveled_to,
    durance: formatDistance(
      new Date(trip.travel_started_at),
      new Date(trip.travel_ended_at),
      { addSuffix: false }
    ),
  }));

  const data = {
    columns: [
      {
        label: "When",
        field: "when",
        sort: "asc",
        width: 100,
      },
      {
        label: "From - To",
        field: "fromTo",
        sort: "asc",
        width: 200,
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
    rows: friendTrips,
  };

  const colStyle = { maxWidth: "22rem", paddingTop: "20px" };

  return (
    <Router>
      <MDBRow style={{ padding: "55px" }}>
        <MDBCol
          class="col-md-3"
          style={{ border: " 1px solid black", maxWidth: "22rem" }}
        >
          <MDBRotatingCard className="text-center h-100 w-100" style={colStyle}>
            <MDBCard className="face front">
              <MDBCardUp>
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/photo7.jpg"
                  alt=""
                />
              </MDBCardUp>
              <MDBAvatar className="mx-auto white" circle>
                <RoundedImage
                  src={face}
                  alt="john"
                  className="rounded-circle"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-3">{`${currentFriend.first_name} ${currentFriend.last_name}`}</h4>
                <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                  {`Member since ${memberSince}`}
                </MDBCardTitle>
                <MDBCardText tag="h6" sub className="mb-2 text-muted">
                  {`${friendTripsCount} trips(s) created`}
                </MDBCardText>
                <MDBCardText tag="h6" sub className="mb-2 text-muted">
                  F trips taken
                </MDBCardText>
                <a href="#!" className="rotate-btn" data-card="card-1">
                  <MDBIcon icon="redo" /> Click here to see my trips
                </a>

                <hr />
                <p>
                  F Need to add 'bio' to user table. I like to travel to
                  Australia.
                </p>
                <p>Favorite hobby is fishing</p>
                <hr />
                <ul className="list-inline py-2">
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg fb-ic">
                      <MDBIcon icon="facebook" brand />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg tw-ic">
                      <MDBIcon icon="twitter" brand />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg gplus-ic">
                      <MDBIcon icon="google-plus" brand />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg li-ic">
                      <MDBIcon icon="linkedin" brand />
                    </a>
                  </li>
                </ul>
              </MDBCardBody>
            </MDBCard>

            <Fragment>
              <MDBCardTitle>Recent trip taken:</MDBCardTitle>

              <MDBListGroup className="customClass">
                {friendRecentTrips.map((t) => (
                  <MDBListGroupItem href="/" hover>
                    {`${t.from} - ${t.to} (${t.durance})`}
                  </MDBListGroupItem>
                ))}
                <MDBListGroupItem href="/" hover>
                  F Mexico - Las Vegas (4 days)
                </MDBListGroupItem>
                <MDBListGroupItem href="/" hover>
                  F Florida - Austin (5 days)
                </MDBListGroupItem>
                <MDBListGroupItem href="/" hover>
                  F San Jose - Moroco (8 days)
                </MDBListGroupItem>
                <MDBListGroupItem href="/" hover>
                  F Puerto Vallarta - Las Palmas (4 days)
                </MDBListGroupItem>
              </MDBListGroup>
            </Fragment>
          </MDBRotatingCard>
        </MDBCol>
        <MDBCol class="col-md-9">
          <MDBRow>
            <MDBCol class="col-md-9">
              <p>John's experience</p>
            </MDBCol>
            <MDBCol class="col-md-9">
              <button type="button" class="btn btn-success">
                Send a friend request
              </button>
            </MDBCol>
          </MDBRow>

          <ScrollBar empty>
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
          </ScrollBar>
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol style={{ minHeight: "26rem", maxWidth: "23rem" }}></MDBCol>
      </MDBRow>
    </Router>
  );
}

// export default NavbarPage;
