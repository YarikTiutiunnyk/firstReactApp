import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Segment,
  Container,
  Header,
  Image,
  Grid,
  Button,
  Icon,
  List,
  Embed
} from 'semantic-ui-react';

export default function FilmDetailPage(props) {
  return (
    <div>
      <Segment
        inverted
        textAlign="center"
        style={{ minHeight: 500, padding: '8em 0em' }}
        vertical
      >
        <Grid container stackable verticalAlign="middle">
          <Grid.Column floated="left" width={6}>
            <Image rounded centered src={props.filmInf.Poster} size="medium" />
            <Button
              as={Link}
              to={props.backPage}
              primary
              size="huge"
              style={{ marginTop: '1.5em' }}
            >
              <Icon name="left arrow" />
              Go back
            </Button>
          </Grid.Column>
          <Grid.Column width={8}>
            <Header
              inverted
              as="h1"
              style={{
                fontSize: '3em',
                fontWeight: 'normal',
                marginBottom: 0
              }}
            >
              {props.filmInf.Title}
            </Header>
            <Header
              inverted
              as="h2"
              style={{
                fontSize: '1.7em',
                fontWeight: 'normal',
                marginTop: '1.5em'
              }}
            >
              {props.filmInf.Plot}
            </Header>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment style={{ minHeight: 500, padding: '2em 0em' }} vertical>
        <Container>
          <Grid stackable verticalAlign="middle">
            <Grid.Row>
              <Grid.Column width={6}>
                <Header as="h3" style={{ fontSize: '2em' }}>
                  Additional information
                </Header>
                <List size="huge">
                  <List.Item>
                    <List.Icon name="calendar alternate" />
                    <List.Content>
                      {props.filmInf.Year === 'N/A'
                        ? 'Year is unknown'
                        : props.filmInf.Year}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="time" />
                    <List.Content>
                      {props.filmInf.Runtime === 'N/A'
                        ? 'Runtime is unknown'
                        : props.filmInf.Runtime}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="video" />
                    <List.Content>
                      {props.filmInf.Genre === 'N/A'
                        ? 'Genres are unknown'
                        : props.filmInf.Genre}{' '}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="address book" />
                    <List.Content>
                      {props.filmInf.Writer === 'N/A'
                        ? 'Writer is unknown'
                        : props.filmInf.Writer}{' '}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="hand paper" />
                    <List.Content>
                      {props.filmInf.Director === 'N/A'
                        ? 'Director is unknown'
                        : props.filmInf.Director}{' '}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="users" />
                    <List.Content>
                      {props.filmInf.Actors === 'N/A'
                        ? 'Actors are unknown'
                        : props.filmInf.Actors}{' '}
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name="star" />
                    <List.Content>
                      {props.filmInf.imdbRating === 'N/A'
                        ? 'Rating is unknown'
                        : props.filmInf.imdbRating}{' '}
                    </List.Content>
                  </List.Item>
                </List>
              </Grid.Column>
              <Grid.Column width={8} floated="right">
                <Embed
                  style={{ width: 'auto' }}
                  autoplay={true}
                  id={props.video.idYoutubeVideo}
                  placeholder={props.video.urlVideoImg}
                  source="youtube"
                  iframe={{
                    allowFullScreen: true
                  }}
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    </div>
  );
}
FilmDetailPage.propTypes = {
  filmInf: PropTypes.object.isRequired,
  video: PropTypes.object.isRequired,
  backPage: PropTypes.string.isRequired
};
