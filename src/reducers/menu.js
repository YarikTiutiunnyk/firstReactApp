const initialState = {
    activePage: 'collections'
}

export default (state = initialState, action)=>{
    switch (action.type) {
        case 'SET_ACTIVE_PAGE':   
            return {
                ...state,
                activePage:  action.payload
            };        
        
        default:
            return state;
    }
}