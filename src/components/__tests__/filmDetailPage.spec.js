import React from 'react';
import { shallow } from 'enzyme';
import { FilmDetailPage } from '../filmDetailPage/filmDetailPageContainer';
import FilmDetailPagePresentation from '../filmDetailPage/filmDetailPagePresentation';

describe('FilmDetailPage', () => {
  const props = {
    match: {
      params: { filmId: 'tt0259711' },
      path: '/firstReactApp/films'
    }
  };

  describe('FilmDetailPage initial', () => {
    const props = {
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
      backPage: '/firstReactApp/',
      video: {
        urlVideoImg: 'URL',
        idYoutubeVideo: '123456'
      }
    };
    const wrapper = shallow(<FilmDetailPagePresentation {...props} />);
    //console.log(wrapper.debug());

    it('Collections actibve renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('button "Back" has correct prop "to"', () => {
    const wrapper = shallow(<FilmDetailPage {...props} />);

    it('"Back" link to films', () => {
      expect(wrapper.props().backPage).toEqual(props.match.path);
    });

    const props2 = {
      match: { ...props.match, path: '/firstReactApp/series' }
    };
    const wrapper2 = shallow(<FilmDetailPage {...props2} />);
    it('"Back" link to series', () => {
      expect(wrapper2.props().backPage).toEqual(props2.match.path);
    });

    const props3 = {
      match: { ...props.match, path: '/firstReactApp/' }
    };
    const wrapper3 = shallow(<FilmDetailPage {...props3} />);
    it('"Back" link to collection', () => {
      expect(wrapper3.props().backPage).toEqual(props3.match.path);
    });
  });
});
