import React from 'react';
import { shallow } from 'enzyme';
import CardList from '../cardList';
//import { initialState } from '../../reducers/film';

describe('CardList test', () => {
  const props = {
    films: [],
    currentURL: '/'
  };

  describe('With empty mas', () => {
    const propsForTest = {
      ...props,
      films: []
    };
    const wrapper = shallow(<CardList {...propsForTest} />);

    it('CardList gets empty mas', () => {
      //console.log(wrapper.debug());
      expect(wrapper.children().text()).toEqual(' ');
    });

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('With mas that have 2 films', () => {
    const propsForTest = {
      ...props,
      currentURL: '/test',
      films: [
        {
          Title: 'Name 1',
          Year: '2001',
          imdbID: 'tt0259711',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BYzFlMTJjYzUtMWFjYy00NjkyLTg1Y2EtYmZkMjdlOGQ1ZGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg'
        },
        {
          Title: 'Name 2',
          Year: '2016',
          imdbID: 'tt4550098',
          Type: 'movie',
          Poster:
            'https://m.media-amazon.com/images/M/MV5BMTYwMzMwMzgxNl5BMl5BanBnXkFtZTgwMTA0MTUzMDI@._V1_SX300.jpg'
        }
      ]
    };
    const wrapper = shallow(<CardList {...propsForTest} />);

    it('CardList gets mas with 2 films', () => {
      //console.log(wrapper.debug());
      expect(wrapper.find('FilmCard')).toHaveLength(propsForTest.films.length);
    });

    it('Card get currentURL in props', () => {
      //console.log(wrapper.debug());
      expect(wrapper.find('FilmCard').at(1).props().currentURL).toEqual(
        propsForTest.currentURL
      );
    });

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });
});
