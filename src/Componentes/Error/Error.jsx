import React from 'react';
import PropTypes from 'prop-types';

const Error = ({ mensajeDeError }) => (
  <p className='alert alert-danger error'>{mensajeDeError}</p>
);

Error.propTypes = {
  mensajeDeError: PropTypes.string.isRequired,
};

export default Error;
