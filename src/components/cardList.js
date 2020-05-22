import React from 'react';
//import { connect } from "react-redux";
import { Card } from 'semantic-ui-react';

import  FilmCard  from './card';


const CardList = ({ films, currentURL }) => (
    <Card.Group itemsPerRow={4} stackable >
        {films && films.length
        ? films.map((film, index) => {
            return (
                <FilmCard key={`key-${film.imdbID}`} Title={film.Title}  Year={film.Year} imdbID={film.imdbID} Type={film.Type} Poster={film.Poster} currentURL={currentURL}/>
            );
          })
        : "Array of filma is ampty"}

    </Card.Group>
  );
  
/*const mapStateToProps = state => {
    const { films } = state.filmColection;
    return { films };
};*/

export default CardList;
  //export default connect(mapStateToProps)(CardList);
  