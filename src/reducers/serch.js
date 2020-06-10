const initialState = {
    serchStringFilms: '',
    serchStringSeries: ''
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'SET_SERCH_FILMS_STRING':   
            return {
                ...state,
                serchStringFilms:  action.payload
            };
        case 'SET_SERCH_SERIES_STRING':   
            return {
                ...state,
                serchStringSeries:  action.payload
            };         
        
        default:
            return state;
    }
}