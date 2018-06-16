import React from 'react';
import {Link} from 'react-router';
import './ComicsList.scss';
import spinnergif from '../../spinner.gif';
let md5 = require('md5');
import MarvelWrapper from 'marvel-wrapper';
const marvel = new MarvelWrapper({privateKey: '41a7ff15e8a1db2375df61a4822cce263f228f15', publicKey: '4eeea482433c34be951bc65e90d99d32'});


class ComicsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }
  }

  getComicsData() {
    marvel.character.getComics(this.props.id).then((response) => {
      this.setState({
        data: response.data.results
      }, function() {
        console.log("ComicsList setState completed", this.state)
      });
    }, reason => {
      console.log(reason); // Error!
    });
  }

  componentDidMount() {
    this.getComicsData();
  }

  render() {
    let component = this;
    return (<div className="row">
      {
        component.state.data && component.state.data.map(function(comic, i) {
          let comic_name = comic.title;
          let comic_image_url = comic.thumbnail.path + '.' + comic.thumbnail.extension;
          let backgroundUrl = `url(${comic_image_url}), url(${spinnergif})`;
          return (<div className="col-lg-2 col-md-2 col-sm-2 col-xs-6 animated bounceIn" key={Math.random() + i}>
            <div style={{backgroundImage:backgroundUrl}}  className="comic_item"></div>
            <br/>
          </div>);
        })
      }
    </div>);
  }
}

export default ComicsList;
