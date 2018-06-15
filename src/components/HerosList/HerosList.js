import React from 'react';
import $ from 'jquery';
import './HerosList.scss';
import spinnergif from '../../spinner.gif';
import HeroName from '../HeroName/HeroName';
import Caption from '../Caption/Caption';
import {Link} from 'react-router-dom';
let md5 = require('md5');

class HerosList extends React.Component {

  constructor() {
    super();

    this.state = {
      data: []
    }
  }

  getHerosData() {

    let component = this;
    let API_PUBLIC = "4eeea482433c34be951bc65e90d99d32";
    let API_PRIVATE = "41a7ff15e8a1db2375df61a4822cce263f228f15";
    let BASE_URL = "http://gateway.marvel.com";
    let URI = "/v1/public/characters"
    let keys = API_PRIVATE + API_PUBLIC;
    let ts = Date.now() / 1000;
    let url = `${BASE_URL}${URI}?&apikey=${API_PUBLIC}&hash=${md5(ts + keys)}ts=${ts}`;

    $.ajax({
      url: url,
      contentType: 'application/json',
      method: 'GET',
      success: function(response) {
        console.log("HeroList Code: " + response.code)
      }
    }).done((response) => {
      this.setState({
        data: response.data.results,
      });
    }).fail((response) => {
      console.log("Failed with status " + data.status);
    });
  }
  componentWillMount() {
    Pace.start();
  }
  componentDidMount() {
    this.getHerosData();
  }

  // {id, name, description, modified, thumbnail, resourceURI, comics, series, stories, events, urls}
  render() {
    return (<div>
      <div className="row">
        {
          this.state.data && this.state.data.map(function(hero, i) {
            let img_url = hero.thumbnail.path + '.' + hero.thumbnail.extension;
            let hero_thumbnail = `url(${img_url}),url(${spinnergif})`;
            return (<div className="col-md-4 col-sm-6 col-xs-12 hero animated flipInY" key={Math.random() + i}>
              <div className="hero_thumbnail" style={{
                  backgroundImage: hero_thumbnail
                }}>
                <HeroName name={hero.name}/>
              </div>
              <Caption name={hero.name} id={hero.id}/>
            </div>);
          })
        }
      </div>
    </div>);
  }
}

export default HerosList;
