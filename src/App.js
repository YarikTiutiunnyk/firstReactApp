import React from 'react';
import './App.css';

import { Switch, Route } from "react-router-dom";

import FilmDetail from './components/filmDetailPage';
import MainPage from './components/mainPage';



class App extends React.Component {

  render() {
    //console.log(this.props);

    return (  
        <Switch>           
          <Route path='/firstReactApp/series/:filmId' component={FilmDetail}/> 
          <Route path='/firstReactApp/films/:filmId' component={FilmDetail}/>
          <Route path='/firstReactApp/collection/:filmId' component={FilmDetail}/>
          <Route path="/firstReactApp/">
            <MainPage />
          </Route> 
        </Switch> 
          
    );
  }
}

/*
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

})*/

//export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;

