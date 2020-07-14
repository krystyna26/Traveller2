import React, { useState } from "react";
import { MDBRow, MDBCol, MDBBtn } from "mdbreact";

export default function Commute() {
  const [fname, setFname] = useState("Puerto Vallarta");
  const [lname, setLname] = useState("taxi");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [state, setStatee] = useState("");
  const [purpose, setPurpose] = useState("Ziplining");
  const [cost, setCost] = useState("");

  const submitHandler = (event) => {
    event.preventDefault();
    event.target.className += " was-validated";
  };

  const changeHandler = (event) => {
    // this.setState({ [event.target.name]: event.target.value });
  };

  return (
    <div style={{ border: "1px solid black" }} className="rounded mt-4">
      <form className="needs-validation" onSubmit={submitHandler} noValidate>
        <div class="d-flex flex-row ">
          <MDBCol class="w-100 ">
            <MDBRow className="mt-4">
              <MDBCol md="2" className="mb-3 pt-4">
                Adventure
              </MDBCol>
              <MDBCol md="3" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterNameEx"
                  className="grey-text"
                >
                  Going to
                </label>
                <input
                  value={fname}
                  name="fname"
                  onChange={changeHandler}
                  type="text"
                  id="defaultFormRegisterNameEx"
                  className="form-control"
                  placeholder=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="3" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Transportation
                </label>
                <input
                  value={lname}
                  name="lname"
                  onChange={changeHandler}
                  type="text"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control"
                  placeholder=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md="2" className="mb-3"></MDBCol>
              <MDBCol md="3" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Purpose
                </label>
                <input
                  value={purpose}
                  name="lname"
                  onChange={changeHandler}
                  type="text"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control"
                  placeholder=""
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </MDBCol>
              <MDBCol md="3" className="mb-3">
                <label
                  htmlFor="defaultFormRegisterEmailEx2"
                  className="grey-text"
                >
                  Cost
                </label>
                <input
                  value={cost}
                  name="lname"
                  onChange={changeHandler}
                  type="text"
                  id="defaultFormRegisterEmailEx2"
                  className="form-control"
                  placeholder="$45"
                  required
                />
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
            <MDBBtn
              color="primary"
              type="submit"
              class="btn btn-primary btn-sm"
            >
              EDIT
            </MDBBtn>
            <MDBBtn
              color="primary"
              type="submit"
              class="btn btn-sm btn-outline-primary"
            >
              DELETE
            </MDBBtn>
            <MDBBtn
              color="primary"
              type="submit"
              class="btn btn-primary btn-sm"
            >
              MOVE
            </MDBBtn>
          </MDBCol>
        </div>
      </form>
    </div>
  );
}
