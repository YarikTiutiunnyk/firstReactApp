
/*  films:{
        found: 0,
        count: 0,
        mas:[ ],
        textError:''

    }*/
export const setCollections = (masfilms)=>({
    type: "SET_COLLECTION",
    payload: masfilms
})
//-------------------------------------------------
export const setFilms = (objectWithFilms)=>({
    type: "SET_FILMS",
    payload: objectWithFilms
})

export const addFilms = (masfilms)=>({
    type: "ADD_FILMS",
    payload: masfilms
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

export const addSeries = (masfilms)=>({
    type: "ADD_SERIES",
    payload: masfilms
})

export const setSeriesError = (strError)=>({
    type: "SET_SERIES_ERROR",
    payload: strError
})

