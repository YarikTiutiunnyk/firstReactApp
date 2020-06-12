import React from 'react';
import { shallow } from 'enzyme';
import SerchBar from '../serch';

/*
<SerchBlock
  itemFound={props.filmObj.found}
  textError={props.filmObj.textError}
  setItems={props.setFilms}
  setItemsError={props.setFilmsError}
  setSerchString={props.setSerchFilmsString}
  type="movie"
          />*/

describe('Card test', () => {
  const mocksetSerchString = jest.fn();
  const mocksetItemsError = jest.fn();
  const mocksetItems = jest.fn();
  const props = {
    itemFound: '0',
    textError: '',
    type: 'movie',
    setSerchString: mocksetSerchString,
    setItemsError: mocksetItemsError,
    setItems: mocksetItems
  };

  describe('Serch bar initial', () => {
    const wrapper = shallow(<SerchBar {...props} />);

    it('renders properly', () => {
      expect(wrapper.debug()).toMatchSnapshot();
    });
  });

  /*describe('All fields are correct', () => {
    const wrapper = shallow(<Card {...props} />);

    it('Link has correct path', () => {
      //console.log(wrapper.find('Link').debug());
    });
  });*/
});
