const initiaState = {
    films:{
        found: 0,
        count: 0,
        mas:[ ],
        textError: ''
    },
    series:{
        found: 0,
        count: 0,
        mas:[ ],
        textError: ''

    },
    collection:{
        mas:[ 
            {
                Title: 'Harry Potter and the Deathly Hallows: Part 2',
                Year: '2011',
                imdbID: 'tt1201607',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'
              },
              {
                Title: 'Harry Potter and the Sorcerer\'s Stone',
                Year: '2001',
                imdbID: 'tt0241527',
                Type: 'movie',
                Poster: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
              }
        ]

    }
}

export default (state = initiaState, action)=>{
    switch (action.type) {
        /*case 'ADD_COLLECTION':   
            return {
                ...state,
                collection: {
                    ...state.collection,
                    masCollection: [
                        ...state.collection.masCollection,
                        ...action.payload
                    ],
                    countFilm: state.countFilm + action.payload.length
                },   
            };*/
        case 'SET_COLLECTION':   
            return {
                ...state,
                collection: {
                    ...state.collection,
                    mas: [
                        ...action.payload
                    ],
                }   
            }
        case 'ADD_FILMS':   
            return {
                ...state,
                films: {
                    ...state.films,
                    mas: [
                        ...state.films.mas,
                        ...action.payload
                    ],
                    count: state.count + action.payload.length,
                    textError: ''
                },   
            };
        case 'SET_FILMS':   
            return {
                ...state,
                films: {
                    ...state.films,
                    found: action.payload.found,
                    mas: [
                        ...action.payload.mas
                    ],
                    count: action.payload.mas.length,
                    textError: ''
                }   
            }       
        case 'SET_FILMS_ERROR':   
            return {
                ...state,
                films: {
                    ...state.films,
                    found: 0,
                    textError: action.payload
                }   
            }
        
        default:
            return state;
    }
}