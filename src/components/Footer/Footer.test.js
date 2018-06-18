import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Footer from './Footer';

describe("Footer Component", () => {
  const footer = shallow(<Footer />);
  it("Has Marvel Super Heros in its props", () => {
    expect(footer.props()).toBeTruthy();
    expect(footer.contains(<span className="Footer-credit">
      Made with 🎧 by
      <a href='https://www.linkedin.com/in/khalilgharbaoui'>
        <span> khalil gharbaoui</span>
      </a>
    </span>)).toBeTruthy();
  });
});
