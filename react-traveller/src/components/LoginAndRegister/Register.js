import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from "mdbreact";
import { Formik } from "formik";

import { useMutation } from "react-apollo";
import { loader } from "graphql.macro";
// import { get } from "lodash";
import { useHistory } from "react-router-dom";

const createUserMutation = loader("./RegisterMutation.graphql");

export default function Register({ onRouteChange }) {
  // const [f_name, setfname] = useState("");
  // const [l_name, setlname] = useState("");
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // let history = useHistory();

  const redirectToHome = () => {
    // console.log("here I'm /home");
    // history.push("/");
  };

  const [createUser, { data, loading, error }] = useMutation(
    createUserMutation,
    {
      onCompleted: redirectToHome,
    }
  );

  const handleSubmitting = async (values) => {
    const { first_name, last_name, email, password, confirm_password } = values;
    if (password !== confirm_password) {
      throw new Error("Password must match!");
    }
    const input = {
      first_name,
      last_name,
      email,
      password,
    };
    try {
      await createUser({ variables: { input } });
    } catch (e) {
      // console.log("here error: ", e);
    }
  };

  const initialFormValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <Formik
            initialValues={initialFormValues}
            onSubmit={(val) => handleSubmitting(val)}
          >
            {({ handleChange, handleSubmit, values }) => {
              // console.log("here values: ", values);
              return (
                <form onSubmit={handleSubmit}>
                  <p className="h5 text-center mb-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="First name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={values.first_name}
                    />
                    <MDBInput
                      label="Last name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      value={values.last_name}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={values.email}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      value={values.password}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      value={values.confirm_password}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn color="primary" type="submit">
                      Register
                    </MDBBtn>
                  </div>
                </form>
              );
            }}
          </Formik>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}
