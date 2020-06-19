import React from 'react';
import { useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';

import logo404 from '../../img/404logolong.png';
import FilmDetailPagePresentation from './filmDetailPagePresentation';

export default function FilmDetail() {
  let match = useRouteMatch();

  return <FilmDetailPage match={match}></FilmDetailPage>;
}

export class FilmDetailPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filmInf: {
        Title: '',
        Year: 'Year is unknown',
        Released: 'Release date is unknown',
        Runtime: 'Runtime is unknown',
        Genre: 'Genres is unknown',
        Director: 'Director is unknown',
        Writer: 'Writer is unknown',
        Actors: 'Actors is unknown',
        Plot: "Describe isn't available",
        Poster: 'N/A',
        imdbRating: 'Rating is unknown'
      },
      Response: 'N/A',
      backPage: '/firstReactApp/',
      video: {
        urlVideoImg: '',
        idYoutubeVideo: ''
      }
    };
  }

  componentDidMount() {
    //зберігаємо сторінку з якої прийшли
    if (this.props.match.path.indexOf('films') !== -1) {
      this.setState({
        backPage: '/firstReactApp/films'
      });
    } else if (this.props.match.path.indexOf('series') !== -1) {
      this.setState({
        backPage: '/firstReactApp/series'
      });
    }

    //витягуємо данні
    const url = `https://www.omdbapi.com/?apikey=27156496&i=${this.props.match.params.filmId}&plot=full`;
    fetch(url)
      .then((result) => {
        //console.log(result);
        return result.json();
      })
      .then((json) => {
        //console.log(json);
        if (json.Response === 'True') {
          this.setState({
            filmInf: {
              Title: json.Title,
              Year: json.Year,
              Released: json.Released,
              Runtime: json.Runtime,
              Genre: json.Genre,
              Director: json.Director,
              Writer: json.Writer,
              Actors: json.Actors,
              Plot:
                json.Plot === 'N/A' ? "Describe isn't available" : json.Plot,
              Poster: json.Poster === 'N/A' ? logo404 : json.Poster,
              imdbRating: json.imdbRating
            },

            Response: json.Response
          });

          //serch video on YouTube
          const urlSerchVideo = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${json.Title.replace(
            / /g,
            '+'
          )}+trailer${json.Year === 'N/A' ? '' : '+' + json.Year}+${
            json.Type
          }&type=video&key=AIzaSyDbvAZjWhs15-sw8XRVAzguPtIYYwqg7XE`;
          fetch(urlSerchVideo)
            .then((result) => {
              //console.log(result);
              return result.json();
            })
            .then((json) => {
              //console.log(json);
              this.setState({
                video: {
                  urlVideoImg: json.items[0].snippet.thumbnails.medium.url,
                  idYoutubeVideo: json.items[0].id.videoId
                }
              });
            })
            .catch((error) => console.log('*****Fatch failed***** :', error));
        } else {
          this.setState({
            Response: json.Response
          });
        }
      })
      .catch((error) => console.log('*****Fatch failed***** :', error));
  }

  render() {
    //console.log(this.state);
    //console.log(this.props.match);

    return (
      <FilmDetailPagePresentation
        filmInf={this.state.filmInf}
        video={this.state.video}
        backPage={this.state.backPage}
      />
    );
  }
}
FilmDetailPage.propTypes = {
  match: PropTypes.object.isRequired
};
