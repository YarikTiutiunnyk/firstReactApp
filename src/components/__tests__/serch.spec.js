import React from 'react';
import { shallow, mount } from 'enzyme';
import { SearchBar } from '../search';

describe('SerchBar test', () => {
  const mocksetItemsError = jest.fn();
  const mocksetItems = jest.fn();
  const mockitemsFetchData = jest.fn();
  const props = {
    itemFound: '0',
    textError: '',
    type: 'movie',
    setItemsError: mocksetItemsError,
    setItems: mocksetItems,
    itemsFetchData: mockitemsFetchData
  };
  //const initialState = { input: 'hello' };

  describe('SerchBar initial', () => {
    const wrapper = shallow(<SearchBar {...props} />);

    it('renders properly', () => {
      expect(wrapper).toMatchSnapshot();
    });

    it('change state', () => {
      wrapper.setState({ input: 'hello' });
      //console.log(wrapper.state());
      expect(wrapper.state('input')).toEqual('hello');
    });
  });

  describe('Samulate events', () => {
    const wrapper = shallow(<SearchBar {...props} />);
    const newText = 'new text';

    it('change on input form', () => {
      wrapper.find('Input').simulate('change', {
        target: {
          value: newText
        }
      });
      expect(wrapper.state('input')).toEqual(newText);
    });

    it('click on the button', () => {
      const wrapper = mount(<SearchBar {...props} />);
      //console.log(wrapper.find('Button').debug());
      wrapper.find('Button').simulate('click');
      expect(mockitemsFetchData).toHaveBeenCalledTimes(1);
      wrapper.unmount();
    });
  });
});
