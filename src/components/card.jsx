import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Icon, Image, Placeholder } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import logo404 from '../img/404logolong.png';

class FilmCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgIsloading: true };

    this.handleImageLoaded = this.handleImageLoaded.bind(this);
  }

  handleImageLoaded() {
    this.setState({ imgIsloading: false });
    //console.log(`image loaded (${this.state.imgIsloading})`);
  }

  render() {
    const { imgIsloading } = this.state;
    const imageStyle = imgIsloading ? { display: 'none' } : {};
    return (
      <Card>
        {imgIsloading && (
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        )}
        <Image
          src={this.props.Poster === 'N/A' ? logo404 : this.props.Poster}
          wrapped
          ui={false}
          onLoad={this.handleImageLoaded}
          style={imageStyle}
        />

        <Card.Content>
          <Card.Header>
            <Link to={`${this.props.currentURL}/${this.props.imdbID}`}>
              {this.props.Title === 'N/A'
                ? 'Film name not found'
                : this.props.Title}
            </Link>
          </Card.Header>
          <Card.Meta>
            <span className="date">{`Published in ${this.props.Year}`}</span>
          </Card.Meta>
          <Card.Description></Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Icon name="film" />
          {` ${this.props.Type}`}
        </Card.Content>
      </Card>
    );
  }
}

/*function FilmCard2(props) {
  const [imgIsLoaded, setImgIsLoaded] = useState(true);

  function handleImageLoaded() {
    setImgIsLoaded(!imgIsLoaded);
    console.log(`image loaded (${imgIsLoaded})`);
  }

  let img1 = (
    <Image
      src={props.Poster === 'N/A' ? logo404 : props.Poster}
      wrapped
      ui={false}
      onLoad={handleImageLoaded}
    />
  );

  return (
    <Card>
      {imgIsLoaded ? (
        <Placeholder>
          <Placeholder.Image square />
        </Placeholder>
      ) : (
        img1
      )}

      <Card.Content>
        <Card.Header>
          <Link to={`${props.currentURL}/${props.imdbID}`}>
            {props.Title === 'N/A' ? 'Film name not found' : props.Title}
          </Link>
        </Card.Header>
        <Card.Meta>
          <span className="date">{`Published in ${props.Year}`}</span>
        </Card.Meta>
        <Card.Description></Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Icon name="film" />
        {` ${props.Type}`}
      </Card.Content>
    </Card>
  );
}
);*/
FilmCard.propTypes = {
  Poster: PropTypes.string.isRequired,
  imdbID: PropTypes.string.isRequired,
  Title: PropTypes.string.isRequired,
  Year: PropTypes.string.isRequired,
  Type: PropTypes.string.isRequired,
  currentURL: PropTypes.string.isRequired
};

export default FilmCard;
