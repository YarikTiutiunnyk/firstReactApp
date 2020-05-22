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
            {Title: "Harry Potter and the Sorcerer's Stone", Year: "2001", imdbID: "tt0241527", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Chamber of Secrets", Year: "2002", imdbID: "tt0295297", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"},
            {Title: "Harry Potter and the Prisoner of Azkaban", Year: "2004", imdbID: "tt0304141", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Goblet of Fire", Year: "2005", imdbID: "tt0330373", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Order of the Phoenix", Year: "2007", imdbID: "tt0373889", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"},
            {Title: "Harry Potter and the Deathly Hallows: Part 1", Year: "2010", imdbID: "tt0926084", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Half-Blood Prince", Year: "2009", imdbID: "tt0417741", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"},
            { Title: 'Harry Potter and the Deathly Hallows: Part 2', Year: '2011', imdbID: 'tt1201607', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
            {Title: "Now You See Me", Year: "2013", imdbID: "tt1670345", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTY0NDY3MDMxN15BMl5BanBnXkFtZTcwOTM5NzMzOQ@@._V1_SX300.jpg"},
            {Title: "Now You See Me 2", Year: "2016", imdbID: "tt3110958", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYjhlNDljNTgtZjc4My00NmZmLTk2YzAtYWE5MDYwYjM4MTkzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg"},
            {Title: "Armagedon", Year: "2015", imdbID: "tt6010492", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZDdhM2ZkYjYtMDQ0MC00NTJhLTlkYmYtMDczZTQwMjZhNzBkXkEyXkFqcGdeQXVyNDcwNDE0Nzk@._V1_SX300.jpg"},

        ]

    }
}

export default (state = initiaState, action)=>{
    switch (action.type) {
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
                        ...action.payload.mas
                    ],
                    count: action.payload.mas.length + state.films.count,
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
            case 'ADD_SERIES':   
            return {
                ...state,
                series: {
                    ...state.series,
                    mas: [
                        ...state.series.mas,
                        ...action.payload.mas
                    ],
                    count: action.payload.mas.length + state.series.count,
                    textError: ''
                },   
            };
        case 'SET_SERIES':   
            return {
                ...state,
                series: {
                    ...state.series,
                    found: action.payload.found,
                    mas: [
                        ...action.payload.mas
                    ],
                    count: action.payload.mas.length,
                    textError: ''
                }   
            }       
        case 'SET_SERIES_ERROR':   
            return {
                ...state,
                series: {
                    ...state.series,
                    found: 0,
                    textError: action.payload
                }   
            }
        default:
            return state;
    }
}