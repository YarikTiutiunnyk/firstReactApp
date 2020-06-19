import { setSerchFilmsString, setSerchSeriesString } from './serch';

export const setCollections = (masfilms) => ({
  type: 'SET_COLLECTION',
  payload: masfilms
});
//-------------------------------------------------
export const setFilms = (objectWithFilms) => ({
  type: 'SET_FILMS',
  payload: objectWithFilms
});

export const addFilms = (objectWithFilms) => ({
  type: 'ADD_FILMS',
  payload: objectWithFilms
});

export const setFilmsError = (strError) => ({
  type: 'SET_FILMS_ERROR',
  payload: strError
});
//-------------------------------------------------
export const setSeries = (objectWithFilms) => ({
  type: 'SET_SERIES',
  payload: objectWithFilms
});

export const addSeries = (objectWithFilms) => ({
  type: 'ADD_SERIES',
  payload: objectWithFilms
});

export const setSeriesError = (strError) => ({
  type: 'SET_SERIES_ERROR',
  payload: strError
});
//-------------------------------------------------

export function itemsFetchData(
  inputStr,
  funcSetItemsToStote,
  funcSetItemsErrorToStote,
  page = 1,
  type = 'movie'
) {
  return (dispatch) => {
    //зберігаємо стрічку пошуку в Store
    if (page === 1) {
      if (type === 'movie') {
        dispatch(setSerchFilmsString(inputStr));
      } else {
        dispatch(setSerchSeriesString(inputStr));
      }
    }

    //робимо запит на OMD та зберігаємо данні в Store
    if (inputStr !== '') {
      inputStr = inputStr.replace(/ /g, '+');
      const url = `https://www.omdbapi.com/?apikey=27156496&s=${inputStr}&page=${page}&type=${type}`;
      //console.log(`request: ${url}`);

      let objToStore = {
        found: '0',
        mas: []
      };

      fetch(url)
        .then((result) => {
          if (!result.ok) {
            throw Error(result.statusText);
          }
          return result.json();
        })
        .then((json) => {
          //console.log(json);
          if (json.Response === 'True') {
            objToStore.mas = json.Search;
            objToStore.found = json.totalResults;
            funcSetItemsToStote(objToStore);
          } else {
            funcSetItemsErrorToStote(json.Error);
          }
        })
        .catch((error) => console.log('*****Fatch failed***** :', error));
    }
  };
}
