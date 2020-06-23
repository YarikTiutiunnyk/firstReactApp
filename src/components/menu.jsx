import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Menu } from 'semantic-ui-react';

import { setActivePage } from '../actions/menu';

export class MenuExampleBasic extends Component {
  handleItemClick = (name) => {
    this.props.setActivePage(name);
  };

  render() {
    const activeItem = this.props.activePage;

    return (
      <Menu widths={3} stackable={true}>
        <Menu.Item
          as={Link}
          to="/firstReactApp/"
          name="collections"
          active={activeItem === 'collections'}
          onClick={this.handleItemClick.bind(this, 'collections')}
        >
          My collections
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/firstReactApp/films"
          name="films"
          active={activeItem === 'films'}
          onClick={this.handleItemClick.bind(this, 'films')}
        >
          Search films
        </Menu.Item>

        <Menu.Item
          as={Link}
          to="/firstReactApp/series"
          name="series"
          active={activeItem === 'series'}
          onClick={this.handleItemClick.bind(this, 'series')}
        >
          Search series
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
