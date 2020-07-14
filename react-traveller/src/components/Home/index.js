import React, { Fragment } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, useHistory } from "react-router-dom";
import { withRouter } from "react-router";

import useCurrentUser from "../currentUser";

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
} from "mdbreact";

import face from "../Face/face.png";
import ScrollBar from "../../ui/ScrollBar";

import { useQuery, useMutation } from "react-apollo";
import { loader } from "graphql.macro";
import { get } from "lodash";
import { formatDistance, formatDistanceToNow } from "date-fns";
// import { useDispatch } from "redux-react-hook";
// import { fetchUser } from "../../actions";

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
const SearchButton = styled(MDBBtn)`
  margin: 5px !important;
  max-width: 18rem !important;
  padding-right: 13px !important;
`;

const TripButton = styled(MDBBtn)`
  margin: 5px !important;
`;

export const fetchUserQuery = loader("../queries/CurrentUser.graphql");

function Home({ onRouteChange }) {
  const { data } = useQuery(fetchUserQuery);

  const { user: currentUser } = useCurrentUser();

  // const dispatch = useDispatch();

  // console.log("here CURRENT USER /home ~~~~~~~~~~~~~~", cu && cu);

  const me = get(data, "user", {
    id: "",
    first_name: "defaultName",
    last_name: "",
    email: "",
    createdAt: new Date(),
    trips: {},
  });

  const memberSince = formatDistanceToNow(new Date(me.createdAt), {
    addSuffix: false,
  });

  const myTripsCount = me.trips.length;
  // console.log("here myTrips", me.trips);

  const recentTrips =
    me.trips.length > 0 &&
    me.trips.map((trip) => ({
      to: trip.traveled_to,
      from: trip.traveled_from,
      time: formatDistance(
        new Date(trip.travel_started_at),
        new Date(trip.travel_ended_at),
        { addSuffix: false }
      ),
    }));
  // console.log("here recentTrips: ", recentTrips);

  let history = useHistory();

  const linkToSeachForTripPage = () => {
    console.log("here linkToSeachForTripPage", history);
    if (history) history.push(`/search`);
    return true;
  };

  const colStyle = { maxWidth: "22rem", paddingTop: "20px" };
  // console.log("here fetchuser", fetchUser);
  return (
    <Router>
      <MDBRow style={{ padding: "55px" }}>
        <MDBCol className="col-md-3" style={{ maxWidth: "22rem" }}>
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
                  alt="krysia"
                  className="rounded-circle"
                />
              </MDBAvatar>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-3">{`${me.first_name} ${me.last_name}`}</h4>
                <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                  {`Member since ${memberSince}`}
                </MDBCardTitle>
                <MDBCardText tag="h6" sub className="mb-2 text-muted">
                  {`${myTripsCount} trip(s) created`}
                </MDBCardText>
                <MDBCardText tag="h6" sub className="mb-2 text-muted">
                  XXX trips taken
                </MDBCardText>
                <Link to="/my_trips">
                  <a href="#" className="btn" data-card="card-1">
                    <MDBIcon icon="plane" /> See the trips I created
                  </a>
                </Link>
                <hr />
                <p>
                  Need to add 'bio' to user table. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit. Maxime quae, dolores dicta.
                  Blanditiis rem amet repellat, dolores nihil quae in mollitia
                  asperiores ut rerum repellendus, voluptatum eum, officia
                  laudantium quaerat?
                </p>
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
              <Link onClick={() => linkToSeachForTripPage()}>
                <SearchButton
                  block
                  outline
                  onClick={() => onRouteChange("search")}
                >
                  Search for trip
                </SearchButton>
              </Link>
            </Fragment>
            <Fragment>
              <MDBCardTitle>Recent trip taken:</MDBCardTitle>

              <MDBListGroup className="customClass">
                {recentTrips &&
                  recentTrips.map((trip) => (
                    <MDBListGroupItem href="/" hover key={trip.from}>
                      {`${trip.from} - ${trip.to} (${trip.time})`}
                    </MDBListGroupItem>
                  ))}
                <MDBListGroupItem href="/" hover>
                  Mexico - Las Vegas (4 days) fake
                </MDBListGroupItem>
                <MDBListGroupItem href="/" hover>
                  Florida - Austin (5 days) fake
                </MDBListGroupItem>
                <MDBListGroupItem href="/" hover>
                  San Jose - Moroco (8 days) fake
                </MDBListGroupItem>
                <MDBListGroupItem href="/" hover>
                  Puerto Vallarta - Las Palmas (4 days) fake
                </MDBListGroupItem>
              </MDBListGroup>
            </Fragment>
          </MDBRotatingCard>
        </MDBCol>
        <MDBCol className="col-md-9">
          <ScrollBar />
        </MDBCol>
      </MDBRow>

      <MDBRow>
        <MDBCol style={{ minHeight: "26rem", maxWidth: "23rem" }}></MDBCol>
      </MDBRow>
    </Router>
  );
}

export default withRouter(Home);
