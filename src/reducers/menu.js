const initiaState = {
    activePage: 'collections'
}

export default (state = initiaState, action)=>{
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