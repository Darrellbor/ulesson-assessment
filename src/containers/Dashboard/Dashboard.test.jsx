import React from "react";
import { shallow } from "enzyme";

import Dashboard from "./";

//Icons
import MathIcon from "../../components/Icons/MathIcon";
import PhyIcon from "../../components/Icons/PhyIcon";

describe("Dashboard Component", () => {
  let wrapper, instance;

  beforeEach(() => {
    wrapper = shallow(<Dashboard />);
    instance = wrapper.instance();
  });

  it("renders correctly", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("Set Icon: Should return the appropriate icon based on subject name", () => {
    expect(instance.setIcon("Mathematics")).toEqual(<MathIcon />);
    expect(instance.setIcon("Physics")).toEqual(<PhyIcon />);
  });

  it("Set Class Name: Should return the appropriate short name based on subject name", () => {
    expect(instance.setClassName("Mathematics")).toBe("math");
    expect(instance.setClassName("Chemistry")).toBe("chem");
  });

  it("Get Lessons: Should set the lesson state value when called", () => {
    instance.getLessons();
    expect(wrapper.state("lessons").length).toBeGreaterThanOrEqual(0);
  });
});
