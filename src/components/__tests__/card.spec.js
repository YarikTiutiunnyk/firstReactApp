import React from 'react';
import { shallow } from 'enzyme';
import Card from '../card';

describe('Card test', () => {
  const props = {
    Title: 'Test title',
    Year: '2000',
    imdbID: '555',
    Type: 'film',
    Poster: 'URL',
    currentURL: '/'
  };

  describe('All fields are correct', () => {
    const wrapper = shallow(<Card {...props} />);

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('Card Poster present', () => {
      expect(wrapper.find('Image').props().src).toEqual(props.Poster);
    });

    it('Card Year present', () => {
      expect(wrapper.find('.date').text()).toMatch(props.Year);
    });

    it('Link has correct path', () => {
      //console.log(wrapper.find('Link').debug());
      expect(wrapper.find('Link').props().to).toEqual(
        `${props.currentURL}/${props.imdbID}`
      );
    });
  });

  describe('fields are N/A', () => {
    const propsForTest = {
      ...props,
      Poster: 'N/A',
      Title: 'N/A'
    };
    const wrapper = shallow(<Card {...propsForTest} />);

    it('Card Poster 404 is working', () => {
      expect(wrapper.find('Image').props().src).toEqual('404logolong.png');
    });

    it('Replace title  N/A', () => {
      //console.log(wrapper.find('CardHeader').childAt(0).debug());
      expect(wrapper.find('CardHeader').childAt(0).text()).toEqual(
        'Film name not found'
      );
    });
  });
});
