import React from 'react';
import { shallow } from 'enzyme';
import { mainPage as MainPage } from '../mainPage';

describe('MainPage test', () => {
  const mocksetFilms = jest.fn();
  const mocksetFilmsError = jest.fn();
  const mockSerchFilmsString = jest.fn();
  const mockaddFilms = jest.fn();

  const mocksetSeries = jest.fn();
  const mocksetSeriesError = jest.fn();
  const mockSerchSeriesString = jest.fn();
  const mockaddSeries = jest.fn();

  const props = {
    filmObj: {
      found: '1',
      count: 1,
      mas: [
        {
          Title: 'Name 1',
          Year: '2001',
          imdbID: 'tt0259711',
          Type: 'movie',
          Poster: 'URL'
        }
      ],
      textError: 'Error film'
    },
    setFilms: mocksetFilms,
    setFilmsError: mocksetFilmsError,
    setSerchFilmsString: mockSerchFilmsString,
    addFilms: mockaddFilms,
    serchStringFilms: 'filmName',

    seriesObj: {
      found: '1',
      count: 1,
      mas: [
        {
          Title: 'Name 2',
          Year: '2001',
          imdbID: 'tt0259711',
          Type: 'series',
          Poster: 'URL'
        }
      ],
      textError: 'Error series'
    },
    setSeries: mocksetSeries,
    setSeriesError: mocksetSeriesError,
    setSerchSeriesString: mockSerchSeriesString,
    addSeries: mockaddSeries,
    serchStringSeries: 'seriesName',

    masCollection: [
      {
        Title: 'Name 3',
        Year: '2001',
        imdbID: 'tt0259711',
        Type: 'movie',
        Poster: 'URL'
      }
    ]
  };

  describe('MainPage initial', () => {
    const wrapper = shallow(<MainPage {...props} />);
    //console.log(wrapper.debug());

    it('Collections actibve renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  /*describe('SerchFilmPage tests', () => {
    const propsForSerchFilmPage = {
      filmObj: props.filmObj,
      serchStringFilms: props.serchStringFilms,
      setFilms: props.setFilms,
      setFilmsError: props.setFilmsError
    };
    const wrapper = mount(<SerchFilmPage {...propsForSerchFilmPage} />);
    console.log(wrapper.debug());

    it('Collections actibve renders properly', () => {
      //expect(wrapper).toMatchSnapshot();
    });
  });*/
});
