import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

import FilmCard from './card';

const CardList = ({ films, currentURL }) => (
  <Card.Group itemsPerRow={4} stackable>
    {films && films.length
      ? films.map((film, index) => {
          return (
            <FilmCard
              key={`${index}-${film.imdbID}`}
              Title={film.Title}
              Year={film.Year}
              imdbID={film.imdbID}
              Type={film.Type}
              Poster={film.Poster}
              currentURL={currentURL}
            />
          );
        })
      : ''}
  </Card.Group>
);
CardList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      Poster: PropTypes.string.isRequired,
      imdbID: PropTypes.string.isRequired,
      Title: PropTypes.string.isRequired,
      Year: PropTypes.string.isRequired,
      Type: PropTypes.string.isRequired
    })
  ),
  currentURL: PropTypes.string.isRequired
};

export default CardList;
//export default connect(mapStateToProps)(CardList);
