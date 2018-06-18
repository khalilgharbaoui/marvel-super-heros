import React from 'react';
import { BrowserRouter as Router }    from 'react-router-dom';
import { shallow, mount, render } from 'enzyme';
import App from './App';


it("renders without crashing", () => {
  const div = document.createElement('div');
  let app = shallow(
    <Router>
      <App />
    </Router>
  );
  render(app, div);
});
