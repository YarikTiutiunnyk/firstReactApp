
export const setCollections = (masfilms)=>({
    type: "SET_COLLECTION",
    payload: masfilms
})
//-------------------------------------------------
export const setFilms = (objectWithFilms)=>({
    type: "SET_FILMS",
    payload: objectWithFilms
})

export const addFilms = (objectWithFilms)=>({
    type: "ADD_FILMS",
    payload: objectWithFilms
})

export const setFilmsError = (strError)=>({
    type: "SET_FILMS_ERROR",
    payload: strError
})
//-------------------------------------------------
export const setSeries = (objectWithFilms)=>({
    type: "SET_SERIES",
    payload: objectWithFilms
})

export const addSeries = (objectWithFilms)=>({
    type: "ADD_SERIES",
    payload: objectWithFilms
})

export const setSeriesError = (strError)=>({
    type: "SET_SERIES_ERROR",
    payload: strError
})

