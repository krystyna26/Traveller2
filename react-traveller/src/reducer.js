import { Action, State } from "./store";

export default function reducer(
  state: State | null | undefined,
  action: Action
) {
  if (!state) {
    return null;
  }

  switch (action.type) {
    case "fetch": {
      return {
        ...state,
        user: state.user.concat(action.user),
      };
    }

    case "delete": {
      const users = state.user;
      // finish that
      return { ...state, users };
    }

    default:
      return state;
  }
}
