import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { setActivePage } from '../actions/menu';

class MenuExampleBasic extends Component {
  constructor(props) {
    super(props);

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e, { name }) {
    this.props.setActivePage(name);
  }

  /*handleItemClick = (e, { name }) => {
    this.props.setActivePage(name);
  }*/
  render() {
    const activeItem = this.props.activePage;

    return (
      <Menu widths={3} stackable={true}>
        <Menu.Item
          as={Link}
          to="/firstReactApp/"
          name="collections"
          active={activeItem === 'collections'}
          onClick={this.handleItemClick}
        >
          My collectoons
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/firstReactApp/films"
          name="films"
          active={activeItem === 'films'}
          onClick={this.handleItemClick}
        >
          Serch films
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/firstReactApp/series"
          name="series"
          active={activeItem === 'series'}
          onClick={this.handleItemClick}
        >
          Serch series
        </Menu.Item>
      </Menu>
    );
  }
}
MenuExampleBasic.propTypes = {
  setActivePage: PropTypes.func.isRequired,
  activePage: PropTypes.string.isRequired
};

//Функція зв'язує redux state з props
const mapStateToProps = (state) => {
  const { activePage } = state.menu;
  return { activePage };
};

export default connect(mapStateToProps, { setActivePage })(MenuExampleBasic);
