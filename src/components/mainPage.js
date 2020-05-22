import React from 'react';

import {connect} from 'react-redux'
import { Container, Image, Button, Segment} from 'semantic-ui-react'
import { Switch, Route, useRouteMatch} from "react-router-dom";
import logoSite from '../img/logoImg.png'

import { setCollections, setFilms, addFilms, setFilmsError, setSeries, addSeries, setSeriesError } from '../actions/film';
import { setSerchFilmsString, setSerchSeriesString} from '../actions/serch';
import { serchOMDBFilms } from './serch'

import CardList from './cardList';
import Menu from './menu';
import SerchBlock from './serch';


function mainPage (props) {
  //let match = useRouteMatch();

  return (
    <Container>
        <Image centered src= {logoSite}   />
        <Menu />     
        <Switch>  
          <Route exact path="/films">
            <SerchBlock itemFound= {props.filmObj.found} textError= {props.filmObj.textError} setItems={props.setFilms} setItemsError={props.setFilmsError} setSerchString={props.setSerchFilmsString} type='movie'/>
            <SerchFilmPage  filmObj={props.filmObj} setFilms={props.addFilms} setFilmsError={props.setFilmsError} serchStringFilms={props.serchStringFilms}/>
          </Route>
          <Route exact path="/series">
            <SerchBlock itemFound= {props.seriesObj.found} textError= {props.seriesObj.textError} setItems={props.setSeries} setItemsError={props.setSeriesError} setSerchString={props.setSerchSeriesString} type='series'/>
            <SerchSeriesPage filmObj={props.seriesObj} setFilms={props.addSeries} setFilmsError={props.setSeriesError} serchStringFilms={props.serchStringSeries}/>
          </Route>
          <Route exact path="/">
            <CardList films={props.masCollection} currentURL='/collection'/>
          </Route>

        </Switch> 
           
      </Container>
  );
}

//Функція зв'язує redux state з props 
const mapStateToProps = state => {
  //Фільми з колекції які завантажуються статично
  const masCollection = state.filmColection.collection.mas;
  //Фільми які завантажуються динамічно
  const filmObj = state.filmColection.films;
  const serchStringFilms = state.serch.serchStringFilms;
  //Серіали які завантажуються динамічно
  const seriesObj = state.filmColection.series;
  const serchStringSeries = state.serch.serchStringSeries;

  return { masCollection, filmObj, serchStringFilms, seriesObj, serchStringSeries};
};
  
  
//Функція зв'язує actions з props 
const mapDispatchToProps = dispatch=>({
  setCollections : films => dispatch(setCollections(films)),

  setFilms : objectWithFilms => dispatch(setFilms(objectWithFilms)),
  addFilms: objectWithFilms => dispatch(addFilms(objectWithFilms)),
  setFilmsError : strError => dispatch(setFilmsError(strError)),
  
  setSeries : objectWithSeries => dispatch(setSeries(objectWithSeries)), 
  addSeries : objectWithSeries => dispatch(addSeries(objectWithSeries)), 
  setSeriesError : strError => dispatch(setSeriesError(strError)),
  
  setSerchFilmsString : str => dispatch(setSerchFilmsString(str)),
  setSerchSeriesString : str => dispatch(setSerchSeriesString(str)),

})

export default connect(mapStateToProps, mapDispatchToProps)(mainPage);





function SerchFilmPage (props) {
let match = useRouteMatch();

function handleClick(e) {
  e.preventDefault();
  console.log('По ссылке кликнули.');
  serchOMDBFilms(props.serchStringFilms, props.setFilms, props.setFilmsError, Math.ceil(props.filmObj.count/10)+1 )
}

return (

    <div>
        <CardList films={props.filmObj.mas} currentURL={`${match.url}`}/>
        <Segment basic textAlign='center'>
          <Button onClick={handleClick} disabled={props.filmObj.count >= props.filmObj.found }  primary size='huge' style={{ marginTop: '1.5em', minWidth: '10em', marginBottom: '50px'}}> More  </Button>
        </Segment>
    </div>
);
}


function SerchSeriesPage (props) {
  let match = useRouteMatch();
  
  function handleClick(e) {
    e.preventDefault();
    console.log('По ссылке кликнули.');
    console.log(props);

    serchOMDBFilms(props.serchStringFilms, props.setFilms, props.setFilmsError, Math.ceil(props.filmObj.count/10)+1, 'series' )
  }
  
  return (
  
      <div>
          <CardList films={props.filmObj.mas} currentURL={`${match.url}`}/>
          <Segment basic textAlign='center'>
            <Button onClick={handleClick} disabled={props.filmObj.count >= props.filmObj.found }  primary size='huge' style={{ marginTop: '1.5em', minWidth: '10em', marginBottom: '50px'}}> More  </Button>
          </Segment>
      </div>
  );
  }



/*class SerchSeriesPage extends React.Component {
    
    render(){
        return (
          <div>
            <h2>SerchSeries</h2>   
          </div>
        );
    }
}*/

