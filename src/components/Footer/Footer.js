import React from 'react';
import './Footer.scss'

class Footer extends React.Component {

  render() {
    return (<footer className="Site-footer">
      <div className="Footer">
        <span className="Footer-social"></span>
        <div className="Footer-credits">
          <span className="Footer-credit">
            Made with 🎧 by
            <a href='https://www.linkedin.com/in/khalilgharbaoui'>
              <span> khalil gharbaoui</span>
            </a>
          </span>
        </div>
      </div>
    </footer>);
  }
}

export default Footer;
