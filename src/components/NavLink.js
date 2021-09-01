import React from 'react';
import PropTypes from 'prop-types';

const NavLink = (props) => {
  const { title } = props;
  return <span>{title}</span>;
};

NavLink.defaultProps = {
  title: '',
};

NavLink.propTypes = {
  title: PropTypes.string,
};

export default NavLink;
