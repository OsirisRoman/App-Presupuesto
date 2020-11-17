import React from 'react';

const Error = ({ mensajeDeError }) => (
  <p className='alert alert-danger error'>{mensajeDeError}</p>
);

export default Error;
