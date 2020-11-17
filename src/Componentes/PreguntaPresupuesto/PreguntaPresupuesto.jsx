import React, { Fragment, useState } from 'react';
import Error from '../Error/Error';

const Pregunta = ({ setPresupuesto, setRestante }) => {
  //State de la cantidad
  const [cantidad, setCantidad] = useState(0);
  //State del error
  const [error, setError] = useState(false);

  //Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    //validar
    if (cantidad < 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }

    //si se pasa la validación
    setError(false);
    setPresupuesto(cantidad);
    setRestante(cantidad);
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error ? <Error mensajeDeError='El presupuesto no es válido.' /> : null}
      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Aquí tu presupuesto'
          onChange={(e) => setCantidad(parseInt(e.target.value))}
        />

        <input
          type='submit'
          className='button-primary u-full-width'
          placeholder='Definir Presupuesto'
        />
      </form>
    </Fragment>
  );
};

export default Pregunta;
