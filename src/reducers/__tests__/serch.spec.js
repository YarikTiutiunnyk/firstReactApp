import reducer from '../serch';

const initialState = {
  serchStringFilms: 'Text',
  serchStringSeries: 'Text'
};

describe('serchField reducer test', () => {
  it('SET_SERCH_FILMS_STRING', () => {
    const action = {
      type: 'SET_SERCH_FILMS_STRING',
      payload: 'Film name'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      serchStringFilms: 'Film name'
    });
  });
  //-----------------------------------------------------
  it('SET_SERCH_SERIES_STRING', () => {
    const action = {
      type: 'SET_SERCH_SERIES_STRING',
      payload: 'Series name'
    };
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      serchStringSeries: 'Series name'
    });
  });
  //-----------------------------------------------------
});
