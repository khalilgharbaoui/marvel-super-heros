import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.scss'

class NavBar extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (<nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">
              Toggle navigation
            </span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link to={"/"} className="navbar-brand">
            <span className="logo">
              <strong className='logoimg'>
                {this.props.brand}
              </strong>
            </span>
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav"></ul>
          <ul className="nav navbar-nav navbar-right colo">
            <li>
              <Link to={"/"}>Heros</Link>
            </li>
            <li>
              <Link to={"#"}>
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>);
  }
}
export default NavBar;
