import axios from "axios";
import { useCallback, useEffect, useState } from "react";

// import { useMappedState } from "redux-react-hook";
import gql from "graphql-tag";

import { getCurrentUser } from "../selector";

export default function useCurrentUser() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data } = await axios.get(
          "https://klp-prisma-server-d03dab4c93.herokuapp.com/lp-traveller-service/prod",
          {
            query: gql`
              query user($email: String!) {
                user(where: { email: "krysia@gmail.com" }) {
                  id
                  first_name
                  last_name
                  email
                  createdAt
                }
              }
            `,
          }
        );
        if (data) {
          console.log("here data /currentUser ~~~~~~~~~", JSON.stringify(data));
          setUser(data);
        }
      } catch (error) {
        console.log("Error fetching user ", error);
      }
    }
    fetchUser();
  }, [setUser]);

  return { user };
}
