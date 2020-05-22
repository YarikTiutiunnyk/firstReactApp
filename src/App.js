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
          <Route path='/series/:filmId' component={FilmDetail}/> 
          <Route path='/films/:filmId' component={FilmDetail}/>
          <Route path='/collection/:filmId' component={FilmDetail}/>
          <Route path="/">
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









/*
style={{ maxWidth: "900px"}}


return (  
      <Container>
        <Menu />
        
        <Switch>  
          <Route path="/films">
            <SerchBlock itemFound= {this.props.filmObj.found} textError= {this.props.filmObj.textError} setFilms={this.props.setFilms} setFilmsError={this.props.setFilmsError}/>
            <SerchFilmPage  filmObj={this.props.filmObj}/>
          </Route>
          <Route path="/series">
            <SerchBlock />
            <SerchSeries />
          </Route>
          <Route path="/">
            <CardList films={this.props.masCollection} currentURL=''/>
          </Route>

        </Switch> 
           
      </Container>
    );
*/
