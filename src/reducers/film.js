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
            {Title: "Vanilla Sky", Year: "2001", imdbID: "tt0259711", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYzFlMTJjYzUtMWFjYy00NjkyLTg1Y2EtYmZkMjdlOGQ1ZGYwL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
            {Title: "Nocturnal Animals", Year: "2016", imdbID: "tt4550098", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTYwMzMwMzgxNl5BMl5BanBnXkFtZTgwMTA0MTUzMDI@._V1_SX300.jpg"},
            {Title: "Titanic", Year: "1997", imdbID: "tt0120338", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMDdmZGU3NDQtY2E5My00ZTliLWIzOTUtMTY4ZGI1YjdiNjk3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
            {Title: "Interstellar", Year: "2014", imdbID: "tt0816692", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
            {Title: "The Martian", Year: "2015", imdbID: "tt3659388", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTc2MTQ3MDA1Nl5BMl5BanBnXkFtZTgwODA3OTI4NjE@._V1_SX300.jpg"},
            {Title: "Risky Business", Year: "1983", imdbID: "tt0086200", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjVhNDE4YmQtNzBlMy00YTdkLTkwNTEtZGRmMDVkMmYwYjA5XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},
            {Title: "Eyes Wide Shut", Year: "1999", imdbID: "tt0120663", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMjA5NTUwNjI1N15BMl5BanBnXkFtZTYwOTE1ODc5._V1_SX300.jpg"},
            {Title: "House", Year: "2004–2012", imdbID: "tt0412142", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BMDA4NjQzN2ItZDhhNC00ZjVlLWFjNTgtMTEyNDQyOGNjMDE1XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"},
            {Title: "Elementary", Year: "2012–2019", imdbID: "tt2191671", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BMDEyN2U1YTItNDY1Zi00YjljLWI5YzItNWU3YWViYjhiZTgxXkEyXkFqcGdeQXVyNjg4NzAyOTA@._V1_SX300.jpg"},
            {Title: "Braveheart", Year: "1995", imdbID: "tt0112573", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMzkzMmU0YTYtOWM3My00YzBmLWI0YzctOGYyNTkwMWE5MTJkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},       
            {Title: "The Thing", Year: "2011", imdbID: "tt0905372", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTMxMjI0MzUyNl5BMl5BanBnXkFtZTcwNjc1NzE5NQ@@._V1_SX300.jpg"},
            {Title: "Pearl Harbor", Year: "2001", imdbID: "tt0213149", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTQ3MDc0MDc1NF5BMl5BanBnXkFtZTYwODI1ODY2._V1_SX300.jpg"},

            {Title: "Harry Potter and the Sorcerer's Stone", Year: "2001", imdbID: "tt0241527", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Chamber of Secrets", Year: "2002", imdbID: "tt0295297", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTcxODgwMDkxNV5BMl5BanBnXkFtZTYwMDk2MDg3._V1_SX300.jpg"},
            {Title: "Harry Potter and the Prisoner of Azkaban", Year: "2004", imdbID: "tt0304141", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTY4NTIwODg0N15BMl5BanBnXkFtZTcwOTc0MjEzMw@@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Goblet of Fire", Year: "2005", imdbID: "tt0330373", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTI1NDMyMjExOF5BMl5BanBnXkFtZTcwOTc4MjQzMQ@@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Order of the Phoenix", Year: "2007", imdbID: "tt0373889", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTM0NTczMTUzOV5BMl5BanBnXkFtZTYwMzIxNTg3._V1_SX300.jpg"},
            {Title: "Harry Potter and the Deathly Hallows: Part 1", Year: "2010", imdbID: "tt0926084", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTQ2OTE1Mjk0N15BMl5BanBnXkFtZTcwODE3MDAwNA@@._V1_SX300.jpg"},
            {Title: "Harry Potter and the Half-Blood Prince", Year: "2009", imdbID: "tt0417741", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNzU3NDg4NTAyNV5BMl5BanBnXkFtZTcwOTg2ODg1Mg@@._V1_SX300.jpg"},
            {Title: 'Harry Potter and the Deathly Hallows: Part 2', Year: '2011', imdbID: 'tt1201607', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjIyZGU4YzUtNDkzYi00ZDRhLTljYzctYTMxMDQ4M2E0Y2YxXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg'},
              
            {Title: "Die Hard", Year: "1988", imdbID: "tt0095016", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg"},
            {Title: "Die Hard 2", Year: "1990", imdbID: "tt0099423", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMzMzYzk3ZTEtZDg0My00MTY5LWE3ZmQtYzNhYjhjN2RhZGRjL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg"},
            {Title: "Die Hard with a Vengeance", Year: "1995", imdbID: "tt0112864", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZjI0ZWFiMmQtMjRlZi00ZmFhLWI4NmYtMjQ5YmY0MzIyMzRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"},
            {Title: "Live Free or Die Hard", Year: "2007", imdbID: "tt0337978", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNDQxMDE1OTg4NV5BMl5BanBnXkFtZTcwMTMzOTQzMw@@._V1_SX300.jpg"},
            
            {Title: "Mission: Impossible", Year: "1996", imdbID: "tt0117060", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTc3NjI2MjU0Nl5BMl5BanBnXkFtZTgwNDk3ODYxMTE@._V1_SX300.jpg"},
            {Title: "Mission: Impossible II", Year: "2000", imdbID: "tt0120755", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BOThhNTA1YjItYzk2Ny00M2Y1LWJlYWUtZDQyZDU0YmY5Y2M5XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"},
            {Title: "Mission: Impossible III", Year: "2006", imdbID: "tt0317919", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BN2RkYWVkZDQtNTMxMi00NWQ4LWE2ODctNmQzOWM2NjQzYzdlXkEyXkFqcGdeQXVyMjUzOTY1NTc@._V1_SX300.jpg"},
            {Title: "Mission: Impossible - Ghost Protocol", Year: "2011", imdbID: "tt1229238", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTY4MTUxMjQ5OV5BMl5BanBnXkFtZTcwNTUyMzg5Ng@@._V1_SX300.jpg"},
            {Title: "Mission: Impossible - Rogue Nation", Year: "2015", imdbID: "tt2381249", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BOTFmNDA3ZjMtN2Y0MC00NDYyLWFlY2UtNTQ4OTQxMmY1NmVjXkEyXkFqcGdeQXVyNTg4NDQ4NDY@._V1_SX300.jpg"},
            {Title: "Mission: Impossible - Fallout", Year: "2018", imdbID: "tt4912910", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_SX300.jpg"},
            
            {Title: "Lie to Me", Year: "2009–2011", imdbID: "tt1235099", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BMTc2MjA4MTM2OV5BMl5BanBnXkFtZTcwMTYzMzA1Mg@@._V1_SX300.jpg"},
            {Title: "Top Gun", Year: "1986", imdbID: "tt0092099", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BZjQxYTA3ODItNzgxMy00N2Y2LWJlZGMtMTRlM2JkZjI1ZDhhXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},
            {Title: "Top Gun: Maverick", Year: "2020", imdbID: "tt1745960", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BNTEyYTA5YWYtYmIxYS00NWRlLWExNjMtNjliZmVlZDgxNTBlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg"},
            {Title: "Mad Max: Fury Road", Year: "2015", imdbID: "tt1392190", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BN2EwM2I5OWMtMGQyMi00Zjg1LWJkNTctZTdjYTA4OGUwZjMyXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg"},
            {Title: "Ocean's Eleven", Year: "2001", imdbID: "tt0240772", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg"},
            {Title: "Jack Reacher", Year: "2012", imdbID: "tt0790724", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTM1NjUxMDI3OV5BMl5BanBnXkFtZTcwNjg1ODM3OA@@._V1_SX300.jpg"},
            {Title: "Eternal Sunshine of the Spotless Mind", Year: "2004", imdbID: "tt0338013", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_SX300.jpg"},
            {Title: "Oblivion", Year: "2013", imdbID: "tt1483013", Type: "movie", Poster: "https://m.media-amazon.com/images/M/MV5BMTQwMDY0MTA4MF5BMl5BanBnXkFtZTcwNzI3MDgxOQ@@._V1_SX300.jpg"},            
            {Title: "The Adventures of Jimmy Neutron: Boy Genius", Year: "1998–2006", imdbID: "tt0320808", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BMWRlNTRkM2ItNDkwMC00ZjNmLWI2ZDQtNWI0MTllMGU5OTVjXkEyXkFqcGdeQXVyNTUyMzE4Mzg@._V1_SX300.jpg"},
            {Title: "Avatar: The Last Airbender", Year: "2005–2008", imdbID: "tt0417299", Type: "series", Poster: "https://m.media-amazon.com/images/M/MV5BODc5YTBhMTItMjhkNi00ZTIxLWI0YjAtNTZmOTY0YjRlZGQ0XkEyXkFqcGdeQXVyODUwNjEzMzg@._V1_SX300.jpg"},   
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