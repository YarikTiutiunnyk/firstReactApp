
/*  films:{
        found: 0,
        count: 0,
        mas:[ ],
        textError:''

    }*/
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

export const setCollections = (masfilms)=>({
    type: "SET_COLLECTION",
    payload: masfilms
})
