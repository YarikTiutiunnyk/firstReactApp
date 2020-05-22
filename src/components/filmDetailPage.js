import React from 'react';
import { Link, useRouteMatch } from "react-router-dom";
import { Segment, Container, Header, Image, Grid, Button, Icon, List, Embed } from 'semantic-ui-react'

import logo404 from '../img/404logolong.png'


export default function FilmDetail() {
    let match = useRouteMatch();
    
    return (
        <FilmDetailPage match={match}></FilmDetailPage>     
    );
}
  
    
class FilmDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Year:"Year is unknown",
            Released: "Release date is unknown",
            Runtime: "Runtime is unknown",
            Genre: "Genres is unknown",
            Director : "Director is unknown",
            Writer : "Writer is unknown",
            Actors : "Actors is unknown",
            Plot : "Describe isn't available",
            Poster : "N/A",
            imdbRating: "Rating is unknown",
            Response: "N/A",
            backPage: "/",
            urlVideoImg: "",
            idYoutubeVideo: ""
        }
      }

    componentDidMount() {
        //зберігаємо сторінку з якої прийшли
        if (this.props.match.path.indexOf("films") !== -1) {
            this.setState({
                backPage: "/films"}
            )      
        } else if (this.props.match.path.indexOf("series") !== -1) {
            this.setState({
                backPage: "/series"}
            )
        }

        //витягуємо данні
        const url = `http://www.omdbapi.com/?apikey=27156496&i=${this.props.match.params.filmId}&plot=full`;
        fetch(url)
        .then(result => {
            //console.log(result);
            return result.json();
        })
        .then(json => {
            //console.log(json);
            if (json.Response === "True") {
                this.setState({
                    Title: json.Title,
                    Year: json.Year,
                    Released: json.Released,
                    Runtime: json.Runtime,
                    Genre: json.Genre,
                    Director : json.Director,
                    Writer : json.Writer,
                    Actors : json.Actors,
                    Plot : json.Plot === "N/A"? "Describe isn't available": json.Plot,
                    Poster : json.Poster === "N/A"? logo404: json.Poster,
                    imdbRating: json.imdbRating,
                    Response: json.Response 
                })

                //serch video on YouTube
                const urlSerchVideo = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${json.Title.replace( / /g, "+" )}+trailer&type=video&key=AIzaSyDbvAZjWhs15-sw8XRVAzguPtIYYwqg7XE`;
                fetch(urlSerchVideo)
                .then(result => {
                    //console.log(result);
                    return result.json();
                })
                .then(json => {
                    //console.log(json);
                    this.setState({
                        urlVideoImg: json.items[0].snippet.thumbnails.medium.url,
                        idYoutubeVideo: json.items[0].id.videoId}
                    );     
                })
                .catch(error => console.log('*****Fatch failed***** :', error))

            }else{
                this.setState({
                    Response: json.Response}
                )
            }       
        })
        .catch(error => console.log('*****Fatch failed***** :', error))
    
    }


    render(){
        //console.log(this.state);
        //console.log(this.props.match);
        
        return (
            <div>
                <Segment inverted textAlign='center' style={{ minHeight: 500, padding: '8em 0em' }} vertical >
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Column floated='left' width={6}>
                        
                            <Image rounded centered src= {this.state.Poster} size='medium'  />
                            <Button as={Link} to={this.state.backPage} primary size='huge' style={{ marginTop: '1.5em' }}>
                                <Icon name='left arrow' />
                                Go back 
                            </Button>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Header inverted as='h1' style={{ fontSize: '3em', fontWeight: 'normal', marginBottom: 0 }} >
                                {this.state.Title}
                            </Header >
                            <Header inverted as='h2'style={{ fontSize:  '1.7em', fontWeight: 'normal', marginTop: '1.5em'}} >
                                {this.state.Plot}
                            </Header>
                        </Grid.Column>
                    </Grid>                    
                </Segment>
                <Segment  style={{ minHeight: 500, padding: '2em 0em' }} vertical >
                    <Container>
                    <Grid stackable verticalAlign='middle'>
                        <Grid.Row>
                        <Grid.Column  width={6}>
                            <Header as='h3' style={{ fontSize: '2em' }}>
                                Additional information 
                            </Header>
                            <List size='huge'>
                                <List.Item>
                                    <List.Icon name='calendar alternate' />
                                    <List.Content>{this.state.Year === "N/A"? "Year is unknown": this.state.Year}</List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='time' />
                                    <List.Content>{this.state.Runtime === "N/A"? "Runtime is unknown": this.state.Runtime}</List.Content>
                                </List.Item>                    
                                <List.Item>
                                    <List.Icon name='video' />
                                    <List.Content>{this.state.Genre === "N/A"? "Genres are unknown": this.state.Genre} </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='address book' />
                                    <List.Content>{this.state.Writer === "N/A"? "Writer is unknown": this.state.Writer} </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='hand paper' />
                                    <List.Content>{this.state.Director === "N/A"? "Director is unknown": this.state.Director} </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='users' />
                                    <List.Content>{this.state.Actors === "N/A"? "Actors are unknown": this.state.Actors} </List.Content>
                                </List.Item>
                                <List.Item>
                                    <List.Icon name='star' />
                                    <List.Content>{this.state.imdbRating === "N/A"? "Rating is unknown": this.state.imdbRating} </List.Content>
                                </List.Item>
                            </List>
                            
                        </Grid.Column>
                        <Grid.Column  width={8} floated='right'>
                        <Embed style={{ width: 'auto' }}
                            autoplay={true}                       
                            id={this.state.idYoutubeVideo}
                            placeholder={this.state.urlVideoImg}
                            source='youtube'
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
}

  /* 
  <iframe id="player" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/RlfooqeZcdY"
          frameBorder="0"></iframe>
  */