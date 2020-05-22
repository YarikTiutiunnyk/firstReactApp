import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
//https://jewelleryair.com/upload/iblock/1f7/1f7097a64eca7164ae908f5a538d677f.jpg
//https://static.tildacdn.com/tild6262-6135-4666-a662-363637373436/404logo.png
//https://react.semantic-ui.com/images/avatar/large/matthew.png
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

  export default FilmCard;