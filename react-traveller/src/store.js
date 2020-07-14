import { createStore } from "redux";
import reducer from "./reducer";

export type State = { user: Object };

export type Action =
  | {
      type: "fetch",
      user: Object,
    }
  | {
      type: "delete",
      index: number,
    };

export function makeStore() {
  return createStore(reducer, {
    user: {
      first_name: "default",
      age: null,
      id: "ck9xiwho5003i0783xnrr10ci",
      last_name: "Lemeni Pop",
      from: null,
      createdAt: "2020-05-08T01:30:55.712Z",
      comments: [],
    },
  });
}
