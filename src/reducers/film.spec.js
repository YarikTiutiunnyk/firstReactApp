import reducer  from './film'

const initialState = {
  films:{
      found: '0',
      count: 0,
      mas:[ ],
      textError: ''
  },
  series:{
      found: '0',
      count: 0,
      mas:[ ],
      textError: ''
  },
  collection:{
      mas:[]
  }
}

// За допомогою unit-тестів тестуємо редюсери
describe('film reducer test', () => { 
  
  it('SET_COLLECTION', () => { 
    const action = {
      type: "SET_COLLECTION",
      payload: [1, 2, 3]
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      collection:{
        mas: [1, 2, 3]
      }
    })
  })
  //-----------------------------------------------------
  it('ADD_FILMS', () => {
    const initialStatePreviously = {
      ...initialState,
      films:{
        found: '0',
        count: 3,
        mas:[1, 2, 3],
        textError: ''
      }
    }    
    const action = {
      type: "ADD_FILMS",
      payload: {
        mas: [4, 5, 6]
      }
    }
    expect(reducer(initialStatePreviously, action)).toEqual({
      ...initialState,
      films:{
        found: '0',
        count: 6,
        mas:[1, 2, 3, 4, 5, 6],
        textError: ''       
    }
    })
  })
  //-----------------------------------------------------
  it('SET_FILMS', () => {    
    const action = {
      type: "SET_FILMS",
      payload: {
        mas: [1, 2, 3],
        found: '3'
      }
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      films:{
        found: '3',
        count: 3,
        mas:[1, 2, 3],
        textError: ''       
    }
    })
  })
  //-----------------------------------------------------
  it('SET_FILMS_ERROR', () => {    
    const action = {
      type: "SET_FILMS_ERROR",
      payload: "Error text"
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      films:{
        found: '0',
        count: 0,
        mas:[ ], 
        textError: "Error text"       
    }
    })
  })
  //-----------------------------------------------------
  it('ADD_SERIES', () => {
    const initialStatePreviously = {
      ...initialState,
      series:{
        found: '0',
        count: 3,
        mas:[1, 2, 3],
        textError: ''
      }
    }    
    const action = {
      type: "ADD_SERIES",
      payload: {
        mas: [4, 5, 6]
      }
    }
    expect(reducer(initialStatePreviously, action)).toEqual({
      ...initialState,
      series:{
        found: '0',
        count: 6,
        mas:[1, 2, 3, 4, 5, 6],
        textError: ''       
    }
    })
  })
  //-----------------------------------------------------
  it('SET_SERIES', () => {    
    const action = {
      type: "SET_SERIES",
      payload: {
        mas: [1, 2, 3],
        found: '3'
      }
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      series:{
        found: '3',
        count: 3,
        mas:[1, 2, 3],
        textError: ''       
    }
    })
  })
  //-----------------------------------------------------
  it('SET_SERIES_ERROR', () => {    
    const action = {
      type: "SET_SERIES_ERROR",
      payload: "Error text"
    }
    expect(reducer(initialState, action)).toEqual({
      ...initialState,
      series:{
        found: '0',
        count: 0,
        mas:[ ], 
        textError: "Error text"       
    }
    })
  })
  //-----------------------------------------------------

})