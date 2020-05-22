import React from 'react';

import {connect} from 'react-redux'
import { Container, Image} from 'semantic-ui-react'
import { Switch, Route, useRouteMatch} from "react-router-dom";
import logoSite from '../img/logoImg.png'

import { setFilms, setFilmsError, setCollections, addFilms } from '../actions/film';

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
            <SerchBlock itemFound= {props.filmObj.found} textError= {props.filmObj.textError} setFilms={props.setFilms} setFilmsError={props.setFilmsError}/>
            <SerchFilmPage  filmObj={props.filmObj}/>
          </Route>
          <Route exact path="/series">
            <SerchBlock />
            <SerchSeriesPage />
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
  const { activePage } = state.menu;
  //Фільми з колекції які завантажуються статично
  const masCollection = state.filmColection.collection.mas;
  //Фільми які завантажуються динамічно
  const filmObj = state.filmColection.films;
  return { activePage, masCollection, filmObj};
};
  
  
//Функція зв'язує actions з props 
const mapDispatchToProps = dispatch=>({
  setCollections : films => dispatch(setCollections(films)),
  setFilms : objectWithFilms => dispatch(setFilms(objectWithFilms)),
  setFilmsError : strError => dispatch(setFilmsError(strError)),

})

export default connect(mapStateToProps, mapDispatchToProps)(mainPage);





function SerchFilmPage (props) {
let match = useRouteMatch();

return (
    <div>
        <CardList films={props.filmObj.mas} currentURL={`${match.url}`}/>
    </div>
);
}




class SerchSeriesPage extends React.Component {
    
    render(){
        return (
            <div>
            <h2>SerchSeries</h2>
            </div>
        );
    }
}

