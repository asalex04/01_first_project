import React from "react";
import {create} from 'react-test-renderer'
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("SUBSCRIBE TO BASIC");
  });
});

describe("ProfileStatus span", () => {
  test("status from props should be in the state", () => {
    const component = create(<ProfileStatus status="SUBSCRIBE TO BASIC" />);
    const root = component.root;
    const span = root.findByType('span');
    expect(span.length).not.toBeNull();
  });
});
