import react from "react";

import Home from ".";
import { shallow, mount, render } from "enzyme";

// const mock = ["Something.com", "dog.com"];
//
it("should match its base snapshot", () => {
  expect("hello").toBe("hello");
  // console.log(shallow(<Home />));
  // expect(shallow(<Home />).length).toEqual(1);
  expect(shallow(<Home />)).toMatchSnapshot();
});
