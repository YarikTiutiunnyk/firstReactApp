import React from 'react';
import './App.css';

import {connect} from 'react-redux'
import { Container} from 'semantic-ui-react'
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";

import { setFilms } from './actions/film';

import CardList from './components/cardList';
//import  FilmCard  from './components/card';








class App extends React.Component {

  componentDidMount() {
    const url = 'http://www.omdbapi.com/?apikey=27156496&s=Harry+Potter&page=1&type=movie'

    fetch(url)
    .then(result => result.json())
    .then(result => {
      
      //let obj = JSON.parse('{ "name":"John", "age":30, "city":"New York"}');
      //console.log(obj);

      this.props.setFilms(result.Search);
      
    })

  }

  render() {
    //console.log(this.props);
    
    const {setFilms} = this.props;
    /*const newFilm = [
      {
        id: 0,
        title: "" + new Date()
      }
    ]*/
    const newFilm = [{
      Title: 'Harry Potter and the Sorcerer\'s Stone',
      Year: '2001',
      imdbID: 'tt0241527',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg'
    }]

    
    
    return (  
      <Container>

        <Switch>
          <Route exact path="/">
            <CardList/>
            <button onClick={setFilms.bind(this, newFilm)}>add new film </button>
          </Route>
          <Route path="/:id">
            <About />
          </Route> 
        </Switch> 
           
      </Container>
    );
  }
}



function About() {
  let match = useRouteMatch();

  console.log(match);
  

  return (
    <div>
      <h2>{match.params.id}</h2>

    </div>
  );
}

/*
function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      

      
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}*

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}*/





//Функція зв'язує redux state з props 
const mapStateToProps = state=>{
  return {...state}
}

//Функція зв'язує actions з props 
const mapDispatchToProps = dispatch=>({
  setFilms : films => dispatch(setFilms(films))
  //setFilms : films => dispatch(addFilm(films))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
//export default connect()(App);



/*
<iframe id="player" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/RlfooqeZcdY"
          frameBorder="0"></iframe>

style={{ maxWidth: "900px"}}

    <h2>
      {films[0].title}
    </h2>
    <button onClick={setFilms.bind(this, newFilm)}>start </button>


*/

/*
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Привет, мир!</h1>
        <h2>Сейчас {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

          The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected 
*/