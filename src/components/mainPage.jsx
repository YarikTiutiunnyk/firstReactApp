import React from 'react';

import { connect } from 'react-redux';
import {
  Container,
  Image,
  Button,
  Segment,
  Dimmer,
  Loader
} from 'semantic-ui-react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import logoSite from '../img/logoImg.png';

import {
  setCollections,
  setFilms,
  addFilms,
  setFilmsError,
  setSeries,
  addSeries,
  setSeriesError,
  itemsFetchData
} from '../actions/film';
import { setSerchFilmsString, setSerchSeriesString } from '../actions/serch';

import CardList from './cardList';
import Menu from './menu';
import SerchBlock from './serch';

export function mainPage(props) {
  //let match = useRouteMatch();

  return (
    <Container>
      <Image centered src={logoSite} />
      <Menu />
      <Switch>
        <Route exact path="/firstReactApp/films">
          <SerchBlock
            itemFound={props.filmObj.found}
            textError={props.filmObj.textError}
            setItems={props.setFilms}
            setItemsError={props.setFilmsError}
            type="movie"
          />
          <SerchFilmPage
            filmObj={props.filmObj}
            setFilms={props.addFilms}
            setFilmsError={props.setFilmsError}
            serchStringFilms={props.serchStringFilms}
            fetchData={props.fetchData}
          />
        </Route>
        <Route exact path="/firstReactApp/series">
          <SerchBlock
            itemFound={props.seriesObj.found}
            textError={props.seriesObj.textError}
            setItems={props.setSeries}
            setItemsError={props.setSeriesError}
            type="series"
          />
          <SerchSeriesPage
            filmObj={props.seriesObj}
            setFilms={props.addSeries}
            setFilmsError={props.setSeriesError}
            serchStringFilms={props.serchStringSeries}
            fetchData={props.fetchData}
          />
        </Route>
        <Route exact path="/firstReactApp/">
          <CardList
            films={props.masCollection}
            currentURL="/firstReactApp/collection"
          />
        </Route>
      </Switch>
    </Container>
  );
}
mainPage.propTypes = {
  filmObj: PropTypes.object.isRequired,
  setFilms: PropTypes.func.isRequired,
  setFilmsError: PropTypes.func.isRequired,
  setSerchFilmsString: PropTypes.func.isRequired,
  addFilms: PropTypes.func.isRequired,
  serchStringFilms: PropTypes.string.isRequired,

  seriesObj: PropTypes.object.isRequired,
  setSeries: PropTypes.func.isRequired,
  setSeriesError: PropTypes.func.isRequired,
  setSerchSeriesString: PropTypes.func.isRequired,
  addSeries: PropTypes.func.isRequired,
  serchStringSeries: PropTypes.string.isRequired,

  masCollection: PropTypes.array.isRequired
};

//Функція зв'язує redux state з props
const mapStateToProps = (state) => {
  //Фільми з колекції які завантажуються статично
  const masCollection = state.filmColection.collection.mas;
  //Фільми які завантажуються динамічно
  const filmObj = state.filmColection.films;
  const serchStringFilms = state.serch.serchStringFilms;
  //Серіали які завантажуються динамічно
  const seriesObj = state.filmColection.series;
  const serchStringSeries = state.serch.serchStringSeries;

  return {
    masCollection,
    filmObj,
    serchStringFilms,
    seriesObj,
    serchStringSeries
  };
};

//Функція зв'язує actions з props
const mapDispatchToProps = (dispatch) => ({
  setCollections: (films) => dispatch(setCollections(films)),

  setFilms: (objectWithFilms) => dispatch(setFilms(objectWithFilms)),
  addFilms: (objectWithFilms) => dispatch(addFilms(objectWithFilms)),
  setFilmsError: (strError) => dispatch(setFilmsError(strError)),

  setSeries: (objectWithSeries) => dispatch(setSeries(objectWithSeries)),
  addSeries: (objectWithSeries) => dispatch(addSeries(objectWithSeries)),
  setSeriesError: (strError) => dispatch(setSeriesError(strError)),

  setSerchFilmsString: (str) => dispatch(setSerchFilmsString(str)),
  setSerchSeriesString: (str) => dispatch(setSerchSeriesString(str)),
  fetchData: (name, setItems, setItemsError, page, type) =>
    dispatch(itemsFetchData(name, setItems, setItemsError, page, type))
});

export default connect(mapStateToProps, mapDispatchToProps)(mainPage);

export function SerchFilmPage(props) {
  let match = useRouteMatch();

  function handleClick(e) {
    e.preventDefault();
    //console.log('По ссылке кликнули.');
    props.fetchData(
      props.serchStringFilms,
      props.setFilms,
      props.setFilmsError,
      Math.ceil(props.filmObj.count / 10) + 1
    );
  }

  return (
    <div>
      <Segment basic>
        <Dimmer active={props.filmObj.isLoading} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <CardList films={props.filmObj.mas} currentURL={`${match.url}`} />
      </Segment>

      <Segment basic textAlign="center">
        <Button
          onClick={handleClick}
          disabled={props.filmObj.count >= props.filmObj.found}
          primary
          size="huge"
          style={{ marginTop: '0.5em', minWidth: '10em', marginBottom: '50px' }}
        >
          {' '}
          More{' '}
        </Button>
      </Segment>
    </div>
  );
}
SerchFilmPage.propTypes = {
  filmObj: PropTypes.shape({
    mas: PropTypes.array,
    count: PropTypes.number,
    found: PropTypes.string,
    isLoading: PropTypes.bool
  }),
  serchStringFilms: PropTypes.string.isRequired,
  setFilms: PropTypes.func.isRequired,
  setFilmsError: PropTypes.func.isRequired
};

export function SerchSeriesPage(props) {
  let match = useRouteMatch();

  function handleClick(e) {
    e.preventDefault();
    //console.log('По ссылке кликнули.');
    props.fetchData(
      props.serchStringFilms,
      props.setFilms,
      props.setFilmsError,
      Math.ceil(props.filmObj.count / 10) + 1,
      'series'
    );
  }

  return (
    <div>
      <Segment basic>
        <Dimmer active={props.filmObj.isLoading} inverted>
          <Loader inverted>Loading</Loader>
        </Dimmer>
        <CardList films={props.filmObj.mas} currentURL={`${match.url}`} />
      </Segment>

      <Segment basic textAlign="center">
        <Button
          onClick={handleClick}
          disabled={props.filmObj.count >= props.filmObj.found}
          primary
          size="huge"
          style={{ marginTop: '0.5em', minWidth: '10em', marginBottom: '50px' }}
        >
          {' '}
          More{' '}
        </Button>
      </Segment>
    </div>
  );
}
SerchSeriesPage.propTypes = {
  filmObj: PropTypes.shape({
    mas: PropTypes.array,
    count: PropTypes.number,
    found: PropTypes.string,
    isLoading: PropTypes.bool
  }),
  serchStringFilms: PropTypes.string.isRequired,
  setFilms: PropTypes.func.isRequired,
  setFilmsError: PropTypes.func.isRequired
};
