import reducer from '../menu';

const initialState = {
  activePage: 'collections'
};

describe('menu reducer test', () => {
  it('SET_ACTIVE_PAGE', () => {
    const action = {
      type: 'SET_ACTIVE_PAGE',
      payload: 'other'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      activePage: 'other'
    });
  });
  //-----------------------------------------------------
});
