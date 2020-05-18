const initiaState = {
    films:[{
        id: 0,
        title: "Star Wars"
      }],
    pp:[]
}

export default (state = initiaState, action)=>{
    switch (action.type) {
        case 'ADD_FILM':   
            return {
                ...state,
                films: [
                    ...state.films,
                    action.payload]
            };
        case 'SET_FILMS':   
            return {
                ...state,
                films:  action.payload
            };        
        
        default:
            return state;
    }
}