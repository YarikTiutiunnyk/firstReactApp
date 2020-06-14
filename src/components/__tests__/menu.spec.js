import React from 'react';
import { shallow } from 'enzyme';
import { MenuExampleBasic as Menu } from '../menu';
//import configureStore from 'redux-mock-store';

describe('Menu test', () => {
  const mocksetActivePage = jest.fn();
  const props = {
    activePage: 'collections',
    setActivePage: mocksetActivePage
  };

  describe('Menu initial', () => {
    const wrapper = shallow(<Menu {...props} />);
    //console.log(wrapper.find('MenuItem[name="collections"]').debug());

    it('Collections actibve renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('Menu events', () => {
    const wrapper = shallow(<Menu {...props} />);

    it('Click on films triggered the function setActivePage(films)', () => {
      wrapper.find('MenuItem[name="films"]').simulate('click');
      expect(mocksetActivePage.mock.calls[0][0]).toEqual('films');
    });

    it('Click on series triggered the function setActivePage(series)', () => {
      wrapper.find('MenuItem[name="series"]').simulate('click');
      expect(mocksetActivePage.mock.calls[1][0]).toEqual('series');
    });

    it('Click on collections triggered the function setActivePage(collections)', () => {
      wrapper.find('MenuItem[name="collections"]').simulate('click');
      expect(mocksetActivePage.mock.calls[2][0]).toEqual('collections');
    });
  });
});
