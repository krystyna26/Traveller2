import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default function Stop() {
  const [fname, setFname] = useState("San Jose");
  const [lname, setlname] = useState("9:20 AM");
  const [email, setEmail] = useState("wedding");
  const [city, setCity] = useState("");
  const [state, setState] = useState("$2000.00");
  const [to, setTo] = useState("Puerto Vallarta");

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  const changeHandler = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
  };

  return (
    <div style={{ border: "1px solid black" }} className="rounded">
      <div class="d-flex flex-row ">
        <MDBCol class="w-100 ">
          <MDBRow className="mt-4">
            <MDBCol md="2" className="mb-3 pt-4">
              Stop 1
            </MDBCol>
            <MDBCol md="3" className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                From
              </label>
              <input
                value={fname}
                name="fname"
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="From"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="3" className="mb-3">
              <label htmlFor="defaultFormRegisterNameEx" className="grey-text">
                To
              </label>
              <input
                value={to}
                name="to"
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterNameEx"
                className="form-control"
                placeholder="To"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="2" className="mb-3">
              <label
                htmlFor="defaultFormRegisterEmailEx2"
                className="grey-text"
              >
                Time
              </label>
              <input
                value={lname}
                name="lname"
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterEmailEx2"
                className="form-control"
                placeholder="Departure time"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
          <MDBRow>
            <MDBCol md="2" className="mb-3"></MDBCol>
            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterConfirmEx3"
                className="grey-text"
              >
                Purpose
              </label>
              <input
                value={email}
                onChange={changeHandler}
                type="email"
                id="defaultFormRegisterConfirmEx3"
                className="form-control"
                name="email"
                placeholder="Purpose"
              />
              <small id="emailHelp" className="form-text text-muted">
                Tell your friends what are you going to do/explore there.
              </small>
            </MDBCol>
            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Details
              </label>
              <input
                value={city}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="city"
                placeholder="Details"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid city.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
            <MDBCol md="3" className="mb-3">
              <label
                htmlFor="defaultFormRegisterPasswordEx4"
                className="grey-text"
              >
                Cost
              </label>
              <input
                value={state}
                onChange={changeHandler}
                type="text"
                id="defaultFormRegisterPasswordEx4"
                className="form-control"
                name="state"
                placeholder="Approximate cost"
                required
              />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
              <div className="valid-feedback">Looks good!</div>
            </MDBCol>
          </MDBRow>
        </MDBCol>
        <MDBCol
          md="2"
          className="mt-4 pt-4"
          class="btn-group-vertical flex-shrink-1"
          role="group"
          aria-label="Vertical button group"
        >
          <MDBBtn color="primary" type="submit" class="btn btn-primary btn-sm">
            EDIT
          </MDBBtn>
          <MDBBtn
            color="primary"
            type="submit"
            class="btn btn-sm btn-outline-primary"
          >
            DELETE
          </MDBBtn>
          <MDBBtn color="primary" type="submit" class="btn btn-primary btn-sm">
            MOVE
          </MDBBtn>
        </MDBCol>
      </div>
    </div>
  );
}
