import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import DateRangePicker from "@wojtekmaj/react-daterange-picker";
import Calendar from "react-calendar";
import styled from "styled-components";

import TextInput from "../../ui/Input";

import {
  // MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
import { Formik } from "formik";

const MDBAutocomplete = styled.div``;

export default function SearchForTrip() {
  const [value, onChange] = useState(new Date());
  console.log("here value", value);

  const initialFormValues = {};
  const handleSubmitting = () => {};

  const onClickDay = () => {
    console.log("here onClickDay");
  };

  const onClickMonth = () => {
    console.log("here onClickMonth");
  };

  const onClickYear = () => {
    console.log("here onClickYear");
  };
  return (
    <Router>
      <MDBCard className="my-5 px-5 pb-5 text-center">
        <MDBCardBody>
          <div style={{ display: "inline" }}>
            <h2 className="h1-responsive font-weight-bold my-5">
              Search for new trip
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
                        data={[]}
                        label="Choose your favorite state"
                        icon="heart"
                        clear
                        id="input"
                        getValue={[]}
                      />
                      <MDBRow>
                        <MDBCol md="4" className="mb-3">
                          <MDBRow>
                            <label
                              htmlFor="defaultFormRegisterNameEx"
                              className="grey-text"
                            >
                              Days
                            </label>
                          </MDBRow>
                          <MDBRow>
                            <label
                              htmlFor="defaultFormRegisterNameEx"
                              className="grey-text"
                            >
                              Destination
                            </label>
                          </MDBRow>
                          <MDBRow>
                            <label
                              htmlFor="defaultFormRegisterNameEx"
                              className="grey-text"
                            >
                              Budget
                            </label>
                          </MDBRow>
                        </MDBCol>

                        <MDBCol md="4" className="mb-3">
                          <MDBRow>
                            <Calendar
                              onChange={onChange}
                              activeStartDate={new Date()}
                              minDate={new Date()}
                              value={value}
                              onClickDay={onClickDay}
                              onClickMonth={onClickMonth}
                              onClickYear={onClickYear}
                              nextLabel={"›"}
                            />
                          </MDBRow>
                        </MDBCol>
                        <MDBCol md="4" className="mb-3"></MDBCol>
                      </MDBRow>

                      <MDBRow>
                        <MDBCol md="4" className="mb-3"></MDBCol>
                        <MDBCol md="4" className="mb-3"></MDBCol>
                        <MDBCol md="4" className="mb-3"></MDBCol>
                      </MDBRow>
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
