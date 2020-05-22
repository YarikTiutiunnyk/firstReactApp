import React, { Component } from 'react'
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { Menu } from 'semantic-ui-react'

import { setActivePage } from '../actions/menu';

class MenuExampleBasic extends Component {
  constructor(props) {
    super(props);
    this.state = {activeItem: 'collections'};

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  //state = {activeItem: 'collections'}


  handleItemClick = (e, { name }) => {
    this.setState({ activeItem: name })
    this.props.setActivePage(name);
  }
  render() {
    const { activeItem } = this.state

    return (
      <Menu widths={3} stackable={true}>
        <Menu.Item
          as={Link} to='/'
          name='collections'
          active={activeItem === 'collections'}
          onClick={this.handleItemClick}
        >
          My collectoons
        </Menu.Item>

        <Menu.Item
          as={Link} to='/films'
          name='films'
          active={activeItem === 'films'}
          onClick={this.handleItemClick}
        >
          Serch films
        </Menu.Item>    

        <Menu.Item
          as={Link} to='/series'
          name='series'
          active={activeItem === 'series'}
          onClick={this.handleItemClick}
        >
          Serch series
        </Menu.Item>
      </Menu>
    )
  }
}

//Функція зв'язує redux state з props 
const mapStateToProps = state => {
  const { activePage } = state.menu;
  return { activePage};
};

export default connect(
  mapStateToProps,
  { setActivePage }
)(MenuExampleBasic);