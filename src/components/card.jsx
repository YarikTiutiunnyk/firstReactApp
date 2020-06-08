import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import logo404 from '../img/404logolong.png'

const FilmCard = ( props ) =>(
    <Card >
      <Image src={props.Poster === 'N/A' ? logo404: props.Poster } wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <Link to = {`${props.currentURL}/${props.imdbID}`}>{props.Title === 'N/A'? 'Film name not found': props.Title}</Link>
        </Card.Header>
        <Card.Meta>
        <span className='date'>{`Published in ${props.Year}`}</span>
        </Card.Meta>
        <Card.Description>
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra> 
        <Icon name='film'/>
        {` ${props.Type}`}   
      </Card.Content>
    </Card>
);
FilmCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  currentURL: PropTypes.string.isRequired,
}

  export default FilmCard;