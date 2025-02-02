import React from 'react';
import Gasto from '../Gasto/Gasto';
import PropTypes from 'prop-types';

const Listado = ({ gastos }) => (
  <div className='gastos-realizados'>
    <h2>Listado de gastos</h2>
    {gastos.map((gasto) => (
      <Gasto key={gasto.id} gasto={gasto} />
    ))}
  </div>
);

Listado.propTypes = {
  gastos: PropTypes.array.isRequired,
};

export default Listado;
