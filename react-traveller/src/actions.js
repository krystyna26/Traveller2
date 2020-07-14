import axios from "axios";
import { loader } from "graphql.macro";
import { useQuery } from "react-apollo";
import { get } from "lodash";
import React from "react";
import { fetchUserQuery } from "./components/Home";
// const fetchUserQuery = loader("./components/queries/CurrentUser.graphql");
//
// const functionBody = () => {
// const { data, error, loading } = useQuery(fetchUserQuery);
//
//   return data;
// };

// const data = get()

export const fetchUser = () => async (dispatch: any) => {
  try {
    const result = await axios({
      url:
        "https://klp-prisma-server-d03dab4c93.herokuapp.com/lp-traveller-service/prod",
      method: "get",
      data: {
        query: `
      query CurrectUser {
        user(where: { email: "krysia@gmail.com" }) {
          id
          first_name
          last_name
          email
          createdAt
          trips(where: { published: true }) {
            traveled_to
            traveled_from
            travel_started_at
            travel_ended_at
          }
        }
      }
      `,
      },
    }).then((result) => {
      console.log("here result.data /actions ~~~~~~~~~~~~~~", result.data);
    });
    dispatch({ payload: result.data, type: "fetch" });
  } catch (error) {
    dispatch({ payload: error.message });
  }
};
