import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';


const FilmCard = ( props ) =>(
    <Card >
      <Image src={props.Poster || 'https://react.semantic-ui.com/images/avatar/large/matthew.png' } wrapped ui={false} />
      <Card.Content>
        <Card.Header>
          <Link to = {`/${props.imdbID}`}>{props.Title || ''}</Link>
        </Card.Header>
        <Card.Meta>
        <span className='date'>{`Published in ${props.Year}`}</span>
        </Card.Meta>
        <Card.Description>
          
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
        <Icon name='film'/>
        {` ${props.Type}`}
        </a>
      </Card.Content>
    </Card>
);

  export default FilmCard;