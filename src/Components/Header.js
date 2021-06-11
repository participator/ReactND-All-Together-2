import React from 'react';
import PropTypes from 'prop-types';

const Header = ( props ) => {
  const { title, username } = props;
  
  return (
    <div>
    	<h2>{ title }</h2>
    	<div className="name sender">{ username }</div>
	</div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired
};

export default Header;