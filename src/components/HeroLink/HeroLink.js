import React from 'react';
import {Link} from 'react-router-dom';

class HeroLink extends React.Component {
  render() {
    return (<div>
      <Link to={`/heros/${this.props.id}`} className="btn btn-primary">
        Details
      </Link>
    </div>);
  }
}

export default HeroLink;
