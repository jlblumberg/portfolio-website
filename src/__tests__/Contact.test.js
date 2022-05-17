import React from "react";
import { shallow } from "enzyme";
import Contact from "../components/Contact";

describe("Contact", () => {
  const wrapper = shallow(<Contact />);

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("has a header and a form", () => {
    expect(wrapper.find("#header").length).toEqual(1);
  });

  it("has an up button which takes you to the top", () => {
    expect(wrapper.find("#back-to-top-button").exists()).toBe(true);
  });
});
