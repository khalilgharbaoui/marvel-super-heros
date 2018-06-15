import React from 'react';
import $ from 'jquery';
import './HerosList.scss';
import spinnergif from '../../spinner.gif';
import HeroName from '../HeroName/HeroName';
import Caption from '../Caption/Caption';
// import HomePlanet from './HomePlanet';
// import Pagination from './Pagination';
import {Link} from 'react-router-dom';
let md5 = require('md5');

class HerosList extends React.Component {

  constructor() {
    super();

    this.state = {
      data: [],
      // next: 'http://swapi.co/api/people/?page=2&format=json',
      // previous: null,
      // currentpage: '1'
    }
  }

  getHerosData() {
    // let component = this;
    // let url = `http://gateway.marvel.com/v1/public/characters?ts page=${component.props.params.pageId}&format=json`

    let component = this;
    // let API_PUBLIC = "298bab46381a6daaaee19aa5c8cafea5";
    let API_PUBLIC = "4eeea482433c34be951bc65e90d99d32";
    // let API_PRIVATE = "b0223681fced28de0fe97e6b9cd091dd36a5b71d";
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
        //    next: data.next,
        //    previous: data.previous,
        //    currentpage: component.props.params.pageId
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

  updatePage() {
    let component = this;
    // NOTE without this if statement there is an infinate loop
    if (this.state.currentpage !== this.props.params.pageId) {
      this.getHerosData();
    }
  }

  // {id, name, description, modified, thumbnail, resourceURI, comics, series, stories, events, urls}
  render() {
    return (<div>
      <div className="row">
        {
          this.state.data && this.state.data.map(function(hero, i) {
            let img_url = hero.thumbnail.path + '.' + hero.thumbnail.extension;
            let hero_thumbnail = `url(${img_url}),url(${spinnergif})`;
            return (<div className="col-md-4 col-sm-6 col-xs-12 hero" key={Math.random() + i}>
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

// <Pagination next={this.state.next} previous={this.state.previous} type={'heros'} onClick={this.updatePage()} />
// Year of birth: {hero.birth_year}

// <HomePlanet url={hero.homeworld} />
