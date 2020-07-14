import React from "react";
// import { useQuery, useMutation } from "react-apollo";
import { loader } from "graphql.macro";

import Login from "./Login";
import Register from "./Register";

import Header from "../../ui/Header";
import Content from "../../ui/Content";
import Title from "../../ui/Title";
import Description from "../../ui/Description";

// import { get } from "lodash";

// const fetchUserQuery = loader("../queries/FetchUsers.graphql");

export default function LoginPage({ onRouteChange }) {
  // const [createUser, { data: create }] = useMutation(createUser);

  // const { data } = useQuery(fetchUserQuery);
  // const loginUser = get(data, "user", {
  //   first_name: "",
  //   last_name: "",
  //   id: "",
  // });
  // console.log("here loginUser:", loginUser);

  return (
    <>
      <Header>
        <Title>Welcome to trip website!</Title>
        <Description>
          Design your journey. Share your trek. Tweak your time!
        </Description>
      </Header>
      <Content twoCol>
        <Login onRouteChange={onRouteChange} />
        <Register onRouteChange={onRouteChange} />
      </Content>
    </>
  );
}

// <Query query={GET_USERS}>
//   {({loading, data, error}) => {
//     if (loading) return "Loading...";
//     if (error) return `Error! ${error.message}`;
//
//     return (
//       <div>
//       <p>Hello everyone</p>
//       </div>
//     )
//   }}
// </Query>
