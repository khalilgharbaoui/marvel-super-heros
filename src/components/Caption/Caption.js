import React from 'react'
import './Caption.scss'
import HeroLink from '../HeroLink/HeroLink'

class Caption extends React.Component {

  render() {
    return (<div className="caption caption-up">
      <h3>
        {this.props.name}
      </h3>
      <HeroLink id={this.props.id}/>
    </div>);
  }
}

export default Caption;
