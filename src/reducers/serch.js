const initiaState = {
    serchStringFilms: '',
    serchStringSeries: ''
}

export default (state = initiaState, action)=>{
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