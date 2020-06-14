import React from 'react';
import { shallow, mount } from 'enzyme';
import SerchBar from '../serch';

describe('SerchBar test', () => {
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
  //const initialState = { input: 'hello' };

  describe('SerchBar initial', () => {
    const wrapper = shallow(<SerchBar {...props} />);

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
    const wrapper = shallow(<SerchBar {...props} />);
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
      const wrapper = mount(<SerchBar {...props} />);
      //console.log(wrapper.find('Button').debug());
      wrapper.find('Button').simulate('click');
      expect(mocksetSerchString).toHaveBeenCalledTimes(1);
      wrapper.unmount();
    });
  });
});
