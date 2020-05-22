const initiaState = {
    serchString: ''
}

export default (state = initiaState, action)=>{
    switch (action.type) {
        case 'SET_SERCH_STRING':   
            return {
                ...state,
                serchString:  action.payload
            };        
        
        default:
            return state;
    }
}