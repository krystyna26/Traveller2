import React, { useState } from "react";
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";

import { Formik } from "formik";

import { useMutation } from "react-apollo";
import { loader } from "graphql.macro";
// import { get } from "lodash";

const AUTH_TOKEN = "auth-token";

const loginMutation = loader("./LoginMutation.graphql");

export default function Login({ onRouteChange }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { data, error, loading }] = useMutation(loginMutation, {
    onCompleted: () => onCompleted(data),
  });

  const onCompleted = (data) => {
    // console.log("here onCompleted");
  };

  // const handleSubmit = (e) => {
  //   console.log("handleSubmit");
  //   e.preventDefault();
  // };

  const initialFormValues = {
    email: "",
    password: "",
  };

  // confirm
  const handleLogin = async (values) => {
    // console.log("handleLogin");
    const { email, password } = values;
    const input = { email };
    try {
      const { token } = await login({ variables: { input } });
      saveUserData(token);
    } catch (e) {
      // console.log("here error", e);
    }
  };

  const saveUserData = (token) => {
    localStorage.setItem(AUTH_TOKEN, token);
  };

  return (
    <MDBContainer>
      <MDBRow>
        <MDBCol md="6">
          <Formik
            initialValues={initialFormValues}
            onSubmit={(val) => handleLogin(val)}
          >
            {({ handleSubmit, values }) => {
              return (
                <form onSubmit={handleSubmit}>
                  <p className="h5 text-center mb-4">Sign in</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Type your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <MDBInput
                      label="Type your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text-center">
                    <MDBBtn type="submit">Login</MDBBtn>
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
