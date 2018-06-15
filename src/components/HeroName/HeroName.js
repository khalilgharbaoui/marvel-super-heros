import './HeroName.scss'
import React from 'react';

class HeroName extends React.Component {
  render() {
    let hero_name = this.props.name
    return (<h1 className="hero_name">
      {hero_name}
    </h1>);
  }
}

export default HeroName;
