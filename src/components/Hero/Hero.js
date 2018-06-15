import React from 'react';
import ComicsList from '../ComicsList/ComicsList';
import spinnergif from '../../spinner.gif';
import $ from 'jquery'; // I use jquery here on pourpous.
let md5 = require('md5');
import "./Hero.scss";


class Hero extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
      thumbnail: '',
      comics: '',
      urls: ''
    }
  }

  getHeroData() {

    let component = this;
    let {match: {
        params
      }} = component.props;

    let heroId = (component.props.id !== undefined && true)
      ? component.props.id
      : params.heroId;
    console.log("Hero ID: " + heroId);

    let API_PUBLIC = "4eeea482433c34be951bc65e90d99d32";
    let API_PRIVATE = "41a7ff15e8a1db2375df61a4822cce263f228f15";
    let BASE_URL = "http://gateway.marvel.com";
    let URI = `/v1/public/characters/`
    let keys = API_PRIVATE + API_PUBLIC;
    let ts = Date.now() / 1000;
    let url = `${BASE_URL}${URI}${heroId}?ts=${ts}&apikey=${API_PUBLIC}&hash=${md5(ts + keys)}`;
    console.log(url);

    $.ajax({
      url: url,
      contentType: 'application/json',
      method: 'GET',
      success: function(response) {
        console.log("Code: " + response.code)
      }
    }).then((response) => {
      this.setState({
        data: response.data.results[0],
        thumbnail: response.data.results[0].thumbnail,
        comics: response.data.results[0].comics,
        urls: response.data.results[0].urls
      }, function() {
        console.log("setState completed", this.state)
      });
    }).fail((response) => {
      console.log("Failed with status " + this.state.data.status);
    });
  }
  componentDidMount() {
    this.getHeroData();
  }
  render() {
    let component = this;
    let img_url = component.state.thumbnail.path + '.' + component.state.thumbnail.extension;
    let hero_img = `url(${img_url}), url(${spinnergif})`;
    let {match: {
        params
      }} = component.props;
    let buttons = component.state.urls && component.state.urls.map(url => {
      switch (url.type) {
        case 'detail':
          return (<a key={url.type} className="btn btn-primary" href={url.url}>Detail</a>);
        case 'wiki':
          return (<a key={url.type} className="btn btn-success" href={url.url}>Wiki</a>);
        case 'comiclink':
          return (<a key={url.type} className="btn btn-info" href={url.url}>Comic</a>);
      }
    });
    return (<div>
      <div className="row">
        <div className="col-md-4 col-sm-6 col-xs-12 hero_container" style={{
            backgroundImage: hero_img
          }}></div>
        <div className="col-md-8 col-sm-6 col-xs-12 details_container">
          <h2>
            {component.state.data && component.state.data.name}
            Details:
          </h2>
          <h4>
            {component.state.data.description}
          </h4>
          <div className="row">
            {
              component.state.comics && component.state.comics.items.reduce((all, one, i) => {
                const ch = Math.floor(i / 10);
                all[ch] = [].concat((all[ch] || []), one);
                return all
              }, []).map(function(comic_chunk, i) {
                return (<div className="col-md-4" key={i}>
                  {
                    comic_chunk.map(function(comic, i) {
                      return (<h5 key={i}>{comic.name}</h5>)
                    })
                  }
                </div>)
              })
            }
              <div className="col-md-12">
                {buttons}
              </div>

          </div>
        </div>
      </div>
      <ComicsList id={params.heroId}/>
    </div>);
  }
}

export default Hero;
