import React from 'react';
import { connect } from 'react-redux';
import { Input, Button, Header } from 'semantic-ui-react';
import PropTypes from 'prop-types';

import { itemsFetchData } from '../actions/film';

//import { setFilms, setFilmsError } from '../actions/film';

export class InputExampleActionIconButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { input: '' };

    this.handleClickButton = this.handleClickButton.bind(this);
    this.updateInput = this.updateInput.bind(this);
  }

  updateInput(input) {
    this.setState({ input });
  }

  handleClickButton() {
    this.props.itemsFetchData(
      this.state.input,
      this.props.setItems,
      this.props.setItemsError,
      1,
      this.props.type
    );
    //обнуляємо форму вводу
    this.setState({ input: '' });
  }

  render() {
    return (
      <div className="SerchContainer">
        <Input
          disabled={false}
          fluid
          size="large"
          onChange={(e) => this.updateInput(e.target.value)}
          value={this.state.input}
          action={
            <Button
              className="lll"
              onClick={this.handleClickButton}
              icon="search"
            ></Button>
          }
          placeholder="Search..."
        />
        <Header
          as="h4"
          content={`We found ${this.props.itemFound} item`}
          subheader={this.props.textError}
        />
      </div>
    );
  }
}
InputExampleActionIconButton.propTypes = {
  setItems: PropTypes.func.isRequired,
  setItemsError: PropTypes.func.isRequired,
  type: PropTypes.string,
  itemFound: PropTypes.string.isRequired,
  textError: PropTypes.string.isRequired
};

export default connect(null, { itemsFetchData })(InputExampleActionIconButton);
//export default InputExampleActionIconButton;
