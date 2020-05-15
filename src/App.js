import React from 'react';
import './App.css';
import { Container, Card, Icon, Image } from 'semantic-ui-react'



function getCard(props) {
  return (<Card >
    <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
      <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>
        Matthew is a musician living in Nashville.
      </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>
      <Icon name='paper plane' color= 'orange'/>
      22 Friends
      </a>
    </Card.Content>
  </Card>)
}




class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    
    return (
      <div className="App">
        <h1>
          Srart!
        </h1>
        <div id='myConteiner'> 
        <iframe id="player" type="text/html" width="640" height="360"
          src="https://www.youtube.com/embed/RlfooqeZcdY"
          frameBorder="0"></iframe>
        </div>

        
        
        
      </div>
    );
  }
}

export default App;

/*
style={{ maxWidth: "900px"}}

<Container>
      <Card.Group itemsPerRow={4} stackable >
      <Card >
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
          <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
          <Icon name='paper plane' color= 'orange'/>
          22 Friends
          </a>
        </Card.Content>
      </Card>

      <Card >
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
          <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
          <Icon name='paper plane' color= 'orange'/>
          22 Friends
          </a>
        </Card.Content>
      </Card>

      <Card >
        <Image src='https://react.semantic-ui.com/images/avatar/large/matthew.png' wrapped ui={false} />
        <Card.Content>
          <Card.Header>Matthew</Card.Header>
          <Card.Meta>
          <span className='date'>Joined in 2015</span>
          </Card.Meta>
          <Card.Description>
            Matthew is a musician living in Nashville.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <a>
          <Icon name='paper plane' color= 'orange'/>
          22 Friends
          </a>
        </Card.Content>
      </Card>





      </Card.Group>
      </Container>
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
*/