import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBCardTitle,
  MDBCardText,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import face from "../Face/face.png";
import ScrollBar from "../../ui/ScrollBar";

// import { render } from "react-dom";
import { useQuery } from "react-apollo";
import { loader } from "graphql.macro";
import { get } from "lodash";

const fetchUserQuery = loader("../queries/FetchUsers.graphql");

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

export default function MyProfile({ onRouteChange }) {
  // const [isOpen, setIsOpen] = useState(false);

  const { data, error, loading } = useQuery(fetchUserQuery);
  const me = get(data, "users", {});
  // console.log("here MyProfile", me, error, loading);

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
              <h1
                style={{
                  position: "absolute",
                  top: "15px",
                  left: "20px",
                  zIndex: 1,
                  fontSize: "medium",
                  transform: "uppercase",
                }}
              >
                Edit
              </h1>
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
                <h4 className="font-weight-bold mb-3">Krystyna Lemeni Pop</h4>
                <MDBCardTitle tag="h6" sub className="mb-2 text-muted">
                  Member since 2 years
                </MDBCardTitle>
                <MDBCardText tag="h6" sub className="mb-2 text-muted">
                  12 trips created
                </MDBCardText>
                <MDBCardText tag="h6" sub className="mb-2 text-muted">
                  23 trips taken
                </MDBCardText>
                <a href="#!" className="rotate-btn" data-card="card-1">
                  <MDBIcon icon="redo" /> Click here to see my trips
                </a>

                <hr />
                <MDBCardTitle
                  tag="h6"
                  sub
                  className="mb-3 ml-4 mt-4 font-weight-light"
                >
                  <span className="font-weight-bold">Update your info</span>
                </MDBCardTitle>

                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                  dolores nihil quae in mollitia asperiores ut rerum
                  repellendus, voluptatum eum, officia laudantium quaerat?
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
          </MDBRotatingCard>
        </MDBCol>
        <MDBCol class="col-md-9">
          <MDBRow>
            <MDBCol>
              <ScrollBar empty>
                <MDBCardTitle
                  tag="h6"
                  sub
                  className="mb-3 ml-4 mt-4 font-weight-light"
                >
                  <span className="font-weight-bolder">Notifications</span>{" "}
                </MDBCardTitle>

                <MDBCard className="m-4">
                  <MDBCardBody>
                    <span className="font-weight-bolder">Josh Snow</span> sent
                    you friend request.
                  </MDBCardBody>
                </MDBCard>
                <MDBCard className="m-4">
                  <MDBCardBody>
                    Take some time to rate your last trip{" "}
                    <span className="font-weight-bolder">Guacamole2019</span>.
                  </MDBCardBody>
                </MDBCard>
              </ScrollBar>
            </MDBCol>
            <MDBCol>
              <ScrollBar empty>
                <MDBCardTitle
                  tag="h6"
                  sub
                  className="mb-3 ml-4 mt-4 font-weight-light"
                >
                  <span className="font-weight-bolder">Messages</span>{" "}
                </MDBCardTitle>
                <MDBCard className="m-4">
                  <MDBCardBody>
                    <span className="font-weight-bolder">Kamil</span> Hey, how
                    was your trip?
                  </MDBCardBody>
                </MDBCard>
              </ScrollBar>
            </MDBCol>
          </MDBRow>
        </MDBCol>
      </MDBRow>
    </Router>
  );
}
