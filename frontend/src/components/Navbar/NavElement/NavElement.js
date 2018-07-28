
import React from 'react';
import PropTypes from 'prop-types';

import { NavLink } from 'react-router-dom';

 import './style.css';

export default class NavElement extends React.Component {
  constructor(props) {
    super(props);

}

  render() {

    const {
      onClick,
      className,
      children,
    } = this.props;
    return (
      <NavLink to={this.props.link} activeClassName="active">
      <button
      className = {className}
      type = "button">

      <img src={this.props.url} alt="" />
      <p>{this.props.txt}</p>
      {children}

      </button>
      </NavLink>

    );
    }
}
NavElement.propTypes = {
  url: PropTypes.string.isRequired,
  txt: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};
