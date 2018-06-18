import React from 'react';
import { shallow, mount, render } from 'enzyme';
import NavBar from './NavBar';

describe("NavBar Component", () => {
  const navbar = shallow(<NavBar brand={"Marvel Super Heros"}/>);
  it("Has Marvel Super Heros in its props", () => {
    expect(navbar.props()).toBeTruthy();
    expect(navbar.find('strong.logoimg').length).toBe(1);
    expect(navbar.contains(<strong className="logoimg">Marvel Super Heros</strong>)).toBeTruthy();
  });
});
