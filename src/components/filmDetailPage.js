import React from 'react';
import { useParams } from "react-router-dom";
import { Segment, Container, Header, Image, Grid, Button, Icon, List } from 'semantic-ui-react'



export default function FilmDetail() {
    let { filmId } = useParams();
    

    return (
        <FilmDetailPage filmId={filmId}></FilmDetailPage>     
    );
}
  
    
class FilmDetailPage extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            Title: "",
            Year:"Unknown",
            Released: "Unknown",
            Runtime: "N/A",
            Genre: "N/A",
            Director : "N/A",
            Writer : "N/A",
            Actors : "N/A",
            Plot : "N/A",
            Poster : "N/A",
            imdbRating: "N/A",
            Response: "N/A"
        }
      }

    componentDidMount() {

        const url = `http://www.omdbapi.com/?apikey=27156496&i=${this.props.filmId}&plot=full`;

        fetch(url)
        .then(result => {
            console.log(result);
            return result.json();
        })
        .then(json => {
            console.log(json);
            if (json.Response == "True") {
                this.setState({
                    Title: json.Title,
                    Year: json.Year,
                    Released: json.Released,
                    Runtime: json.Runtime,
                    Genre: json.Genre,
                    Director : json.Director,
                    Writer : json.Writer,
                    Actors : json.Actors,
                    Plot : json.Plot,
                    Poster : json.Poster,
                    imdbRating: json.imdbRating,
                    Response: json.Response}
                )
    
    
            }else{
            
            }
            
        })
        .catch(error => console.log('*****Fatch failed***** :', error))
    




    }


    render(){
        console.log(this.state);
        

        return (
            <div>
                <Segment inverted textAlign='center' style={{ minHeight: 500, padding: '8em 0em' }} vertical >
                    <Grid container stackable verticalAlign='middle'>
                        <Grid.Column floated='left' width={6}>
                        
                            <Image rounded centered src= {this.state.Poster} size='medium'  />
                            <Button primary size='huge' style={{ marginTop: '1.5em' }}>
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
                <Segment  style={{ minHeight: 500, padding: '2em 10em' }} vertical >
                <List size='huge'>
                    <List.Item>
                        <List.Icon name='time' />
                        <List.Content>{this.props.Runtime}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='history' />
                        <List.Content>{this.props.Released}</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='video' />
                        <List.Content>{this.props.Genre} </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href='http://www.semantic-ui.com'>{this.props.Genre}</a>
                        </List.Content>
                    </List.Item>
                </List>
        
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