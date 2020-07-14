import React, { useState } from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { Formik } from "formik";
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
// import { MDBListGroup, MDBListGroupItem } from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";

import Stop from "./Stop";
import Commute from "./Commute";

import { useMutation } from "react-apollo";
import { loader } from "graphql.macro";
import { get } from "lodash";

const createTripMutation = loader("../queries/CreateTripMutation.graphql");

// const fetchUserQuery = loader("./FetchUsers.graphql");

const MDBAutocomplete = styled.div``;

export default function Friends({ onRouteChange }) {
  const onCompleted = () => {
    // console.log("tadaam updated!");
  };
  const [createTrip] = useMutation(createTripMutation, {
    onCompleted: onCompleted,
  });

  const [isOpen, setIsOpen] = useState(false);
  const [fname, setfname] = useState("");
  const [lname, setlname] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");

  const initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    //
    checked: false,
    //
    traveled_from: "",
    traveled_to: "",
    travel_started_at: "",
    travel_ended_at: "",
    author: { connect: { id: "ck9xiwho5003i0783xnrr10ci" } },
    published: false,
    budget: 0,
    // num_of_people: 1,
    // kids: false,
    // seniors: false,
    // walking: false,
    // driving: false,
    // rate: 0,
  };
  const handleSubmitting = async (values) => {
    // console.log("here", values);
    const {
      author,
      traveled_from,
      traveled_to,
      travel_started_at,
      travel_ended_at,
      budget,
    } = values;
    const { id: creatorId } = author.connect;

    const input = {
      traveled_from: traveled_from,
      traveled_to: traveled_to,
      travel_started_at: travel_started_at,
      travel_ended_at: travel_ended_at,
      author: { connect: { id: creatorId } },
      //published: false
      budget: budget,
      //   num_of_people: 2
      //   kids: false
      //   seniors: false
      //   walking: true
      //   driving: true
      //pace: MODERATE
      //   rate: 5
    };
    try {
      await createTrip({ variables: { input } });
    } catch (error) {
      console.log("error with creating a trip: ", error);
    }
  };

  const states = ["Poland"];

  const logValue = (value) => {
    // console.log(value);
  };
  //
  // const state = {
  //   fname: "Mark",
  //   lname: "Otto",
  //   email: "",
  //   city: "",
  //   state: "",
  //   zip: ""
  // };

  const changeHandler = (event) => {
    setState({ [event.target.name]: event.target.value });
  };

  return (
    <Router>
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <div style={{ display: "inline" }}>
            <h2 className="h1-responsive font-weight-bold my-5">
              Create new trip
            </h2>
          </div>
          <MDBRow style={{ paddingTop: "55px" }}>
            <MDBCol>
              <Formik
                initialValues={initialFormValues}
                onSubmit={(values) => handleSubmitting(values)}
              >
                {({ errors, handleChange, handleSubmit, values }) => (
                  <form onSubmit={handleSubmit}>
                    <MDBContainer className="m0">
                      <MDBAutocomplete
                        data={states}
                        label="Choose your favorite state"
                        icon="heart"
                        clear
                        id="input"
                        getValue={logValue}
                      />
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <label
                            htmlFor="defaultFormRegisterNameEx"
                            className="grey-text"
                          >
                            From
                          </label>
                          <input
                            value={values.first_name || state.fname}
                            name="fname"
                            onChange={changeHandler}
                            type="text"
                            id="defaultFormRegisterNameEx"
                            className="form-control"
                            placeholder="traveled_from: New York"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3">
                          <label
                            htmlFor="defaultFormRegisterEmailEx2"
                            className="grey-text"
                          >
                            Destination
                          </label>
                          <input
                            value={values.last_name || state.lname}
                            name="lname"
                            onChange={changeHandler}
                            type="text"
                            id="defaultFormRegisterEmailEx2"
                            className="form-control"
                            placeholder="traveled_to: Texas"
                            required
                          />
                          <div className="valid-feedback">Looks good!</div>
                        </MDBCol>
                      </MDBRow>
                      <div className="rounded">
                        <div class="d-flex flex-row ">
                          <MDBCol class="w-100 ">
                            <MDBRow className="mt-4">
                              <MDBCol md="3" className="mb-3">
                                <label
                                  htmlFor="defaultFormRegisterNameEx"
                                  className="grey-text"
                                >
                                  From
                                </label>
                                <input
                                  value={values.travel_started_at}
                                  name="fname"
                                  onChange={""}
                                  type="text"
                                  id="defaultFormRegisterNameEx"
                                  className="form-control"
                                  placeholder="travel_started_at: 2020-01-01"
                                  required
                                />
                                <small
                                  id="emailHelp"
                                  className="form-text text-muted"
                                >
                                  How many days you're planing to travel.
                                </small>
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </MDBCol>
                              <MDBCol md="3" className="mb-3">
                                <label
                                  htmlFor="defaultFormRegisterNameEx"
                                  className="grey-text"
                                >
                                  To
                                </label>
                                <input
                                  value={values.travel_ended_at}
                                  name="to"
                                  onChange={""}
                                  type="text"
                                  id="defaultFormRegisterNameEx"
                                  className="form-control"
                                  placeholder="travel_ended_at: 2020-07-01"
                                  required
                                />
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </MDBCol>
                              <MDBCol md="2" className="mb-3">
                                <label
                                  htmlFor="defaultFormRegisterEmailEx2"
                                  className="grey-text"
                                >
                                  Estimate budget
                                </label>
                                <input
                                  value={values.budget}
                                  name="lname"
                                  onChange={""}
                                  type="text"
                                  id="defaultFormRegisterEmailEx2"
                                  className="form-control"
                                  placeholder=" budget: 560.00"
                                  required
                                />
                                <div className="valid-feedback">
                                  Looks good!
                                </div>
                              </MDBCol>
                            </MDBRow>
                            <MDBRow>
                              <MDBCol md="2" className="mb-3"></MDBCol>
                            </MDBRow>
                          </MDBCol>
                        </div>
                      </div>

                      <div style={{ "flex-direction": "row" }}>
                        <div
                          style={{ "margin-right": "790px" }}
                          className="mb-3"
                        >
                          <MDBBtn color="primary" type="submit">
                            Add stop
                          </MDBBtn>
                          <MDBBtn color="primary" type="submit">
                            Add commute
                          </MDBBtn>
                        </div>
                        <div style={{ "margin-left": "790px" }}>
                          <MDBBtn
                            color="primary"
                            type="submit"
                            class="btn btn-outline-primary waves-effect"
                            onClick={!values.published}
                          >
                            Finish later
                          </MDBBtn>
                          <MDBBtn color="primary" type="submit">
                            Save my trip
                          </MDBBtn>
                          <MDBCol md="3" className="mb-3">
                            <div className="custom-control custom-checkbox pl-3">
                              <input
                                className="custom-control-input"
                                type="checkbox"
                                value={values.checked}
                                id="invalidCheck"
                                required
                              />
                              <label
                                className="custom-control-label"
                                htmlFor="invalidCheck"
                              >
                                Agree to terms and conditions
                              </label>
                              <div className="invalid-feedback">
                                You must agree before submitting.
                              </div>
                            </div>
                          </MDBCol>
                        </div>
                      </div>
                    </MDBContainer>
                  </form>
                )}
              </Formik>
            </MDBCol>
          </MDBRow>
        </MDBCardBody>
      </MDBCard>
    </Router>
  );
}
