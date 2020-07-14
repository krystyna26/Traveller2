import React from "react";
import styled from "styled-components";
import { Route, Link } from "react-router-dom";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBNavbarNav,
  MDBNavItem,
  MDBFormInline,
} from "mdbreact";

import fox from "../Face/fox.jpg";
import lemur from "./lemur.jpg";
import black from "./black.jpg";
import bigeye from "./bigeye.jpg";
import monkey from "./monkey.jpg";

import { useQuery } from "react-apollo";
import { loader } from "graphql.macro";
import { get } from "lodash";

// const fetchUserQuery = loader("./FetchUsers.graphql");

const RoundedImage = styled.img`
  width: 100%;
  background: none repeat scroll 0 0 #fff;
  border: 5px solid #fff;
  border-radius: 50% !important;
  max-width: 150px;
  max-height: 150px;
`;

const fetchUsersQuery = loader("../queries/FetchUsers.graphql");

type Props = {
  history?: any,
};

export default function Friends({ history, ...props }: Props) {
  console.log("here props /Friends:", props);

  const linkToNewDirectory = () => {
    console.log("here linkToNewDirectory", history);
    if (history) history.push(`/friend_profile`);
    return true;
  };

  const { data } = useQuery(fetchUsersQuery);
  // console.log("here", data);
  const myFriends = get(data, "users", [
    {
      first_name: "Krystyna",
      age: null,
      id: "ck9xiwho5003i0783xnrr10ci",
      last_name: "Lemeni Pop",
      from: null,
      createdAt: "2020-05-08T01:30:55.712Z",
      comments: [],
    },
  ]);

  return (
    <Route>
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <div>
            <h2 className="h1-responsive font-weight-bold my-5">
              My awesome friends
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
            {myFriends.map((friend) => {
              const { first_name, last_name, id } = friend;
              return (
                <MDBCol lg="3" md="6" className=" mb-5">
                  <Link
                    to={{ state: { friendId: id } }}
                    onClick={() => linkToNewDirectory()}
                  >
                    <RoundedImage src={""} alt="" className="rounded-circle" />
                    <h5 className="font-weight-bold mt-4 mb-3">{`${first_name} ${last_name}`}</h5>
                    <p className="text-uppercase blue-text">123 trips taken</p>
                  </Link>
                  <p className="grey-text">
                    I like night trips. Undercover. Villages are cool. Quiet,
                    lot of nature and farm animals. If you know what I mean.
                  </p>
                  <ul className="list-unstyled mb-0">
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="facebook-f" className="blue-text" />
                    </a>
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="twitter" className="blue-text" />
                    </a>
                    <a href="#!" className="p-2 fa-lg">
                      <MDBIcon fab icon="instagram" className="blue-text" />
                    </a>
                  </ul>
                </MDBCol>
              );
            })}

            <MDBCol lg="3" md="6" className=" mb-5">
              <RoundedImage src={fox} alt="krysia" className="rounded-circle" />
              <h5 className="font-weight-bold mt-4 mb-3">Anna Williams</h5>
              <p className="text-uppercase blue-text">123 trips taken</p>
              <p className="grey-text">
                I like night trips. Undercover. Villages are cool. Quiet, lot of
                nature and farm animals. If you know what I mean.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="twitter" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <RoundedImage
                src={lemur}
                alt="krysia"
                className="rounded-circle"
              />
              <h5 className="font-weight-bold mt-4 mb-3">John Doe</h5>
              <p className="text-uppercase blue-text">23 trips taken</p>
              <p className="grey-text">
                High trees are my favorite trips. Lot of food and peace.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <RoundedImage
                src={black}
                alt="krysia"
                className="rounded-circle"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Maria Smith</h5>
              <p className="text-uppercase blue-text">1234 trips taken</p>
              <p className="grey-text">
                High trees are my favorite trips. Lot of food and peace.
              </p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="instagram" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="dribbble" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <RoundedImage
                src={monkey}
                alt="krysia"
                className="rounded-circle"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">43 trips taken</p>
              <p className="grey-text">I like bananas.</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>

            <MDBCol lg="3" md="6" className="mb-lg-0 mb-5">
              <RoundedImage
                src={bigeye}
                alt="krysia"
                className="rounded-circle"
              />
              <h5 className="font-weight-bold mt-4 mb-3">Tom Adams</h5>
              <p className="text-uppercase blue-text">2 trips taken</p>
              <p className="grey-text">I lost my mom.</p>
              <ul className="list-unstyled mb-0">
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="facebook-f" className="blue-text" />
                </a>
                <a href="#!" className="p-2 fa-lg">
                  <MDBIcon fab icon="github" className="blue-text" />
                </a>
              </ul>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </Route>
  );
}
