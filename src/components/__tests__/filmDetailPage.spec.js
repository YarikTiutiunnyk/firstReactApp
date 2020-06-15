import React from 'react';
import { shallow } from 'enzyme';
import { FilmDetailPage } from '../filmDetailPage';

describe('FilmDetailPage', () => {
  const props = {
    match: {
      //isExact: true,
      params: { filmId: 'tt0259711' },
      path: '/firstReactApp/films'
      //url: '/firstReactApp/films'
    }
  };

  describe('FilmDetailPage initial', () => {
    const wrapper = shallow(<FilmDetailPage {...props} />);
    //console.log(wrapper.debug());

    it('Collections actibve renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('button "Back" has correct prop "to"', () => {
    const wrapper = shallow(<FilmDetailPage {...props} />);

    it('"Back" link to films', () => {
      expect(wrapper.find('Button').props().to).toEqual(props.match.path);
    });

    const props2 = {
      match: { ...props.match, path: '/firstReactApp/series' }
    };
    const wrapper2 = shallow(<FilmDetailPage {...props2} />);
    it('"Back" link to series', () => {
      expect(wrapper2.find('Button').props().to).toEqual(props2.match.path);
    });

    const props3 = {
      match: { ...props.match, path: '/firstReactApp/' }
    };
    const wrapper3 = shallow(<FilmDetailPage {...props3} />);
    it('"Back" link to collection', () => {
      expect(wrapper3.find('Button').props().to).toEqual(props3.match.path);
    });
  });
});
