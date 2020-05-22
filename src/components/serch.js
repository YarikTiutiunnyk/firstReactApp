import React from 'react'
import { connect } from "react-redux";
import { Input, Button, Header } from 'semantic-ui-react'

import { setSerchString } from '../actions/serch';
//import { setFilms, setFilmsError } from '../actions/film';

//params
//itemFound= {this.props.filmObj.found} textError= {this.props.filmObj.textError, setFilms, setFilmsError


class InputExampleActionIconButton extends React.Component {
    constructor(props) {
      super(props);
      this.state = { input: "" };

      this.handleClickButton = this.handleClickButton.bind(this);
      this.updateInput = this.updateInput.bind(this);
      
    }
  
    updateInput = input => {
      this.setState({ input });
    };
  
    handleClickButton () {
      //зберігаємо стрічку пошуку в Store
      this.props.setSerchString(this.state.input);
      //робимо запит на OMD та зберігаємо данні в Store
      serchOMDBFilms(this.state.input, this.props.setFilms, this.props.setFilmsError );
      //обнуляємо форму вводу
      this.setState({ input: "" });
    };
  
    render() {
      return (
        <div className='SerchContainer'>
        <Input 
            disabled={false} 
            fluid size='large' 
            onChange={e => this.updateInput(e.target.value)} 
            value={this.state.input} 
            action={<Button className='lll' onClick={this.handleClickButton} icon= 'search'></Button>} 
            placeholder='Search...' />
        <Header
          as='h4'
          content={`We found ${this.props.itemFound} item`}
          subheader={this.props.textError}
        />
        </div>

      );
    }
  }


export default connect(
    null,
    { setSerchString }
  )(InputExampleActionIconButton);

//шукаємо фільми на OMDB та зберігао  
function serchOMDBFilms (inputStr, funcSetFilmsToStote, funcSetFilmsErrorToStote, page = 1){

  if (inputStr !== '') {
    inputStr = inputStr.replace( / /g, "+" );
    const url = `http://www.omdbapi.com/?apikey=27156496&s=${inputStr}&page=${page}&type=movie`;
    //console.log(`request: ${url}`);
    
    let objToStore = {
      found: 0,
      mas:[ ]
    }; 

    fetch(url)
    .then(result => {
      //console.log(result);
      return result.json();
    })
    .then(json => {
      //console.log(json);
      if (json.Response === "True") {
        objToStore.mas = json.Search;
        objToStore.found = json.totalResults;
        funcSetFilmsToStote(objToStore);
      }else{
        funcSetFilmsErrorToStote(json.Error)
      }
        
    })
    .catch(error => console.log('*****Fatch failed***** :', error))
  }
}