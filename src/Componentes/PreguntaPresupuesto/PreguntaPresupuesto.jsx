import React, { Fragment, useState } from 'react';

const Pregunta = () => {
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
  };

  return (
    <Fragment>
      <h2>Coloca tu Presupuesto</h2>
      {error ? (
        <h2 style={{ color: 'red' }}>Ingrese un presupuesto valido.</h2>
      ) : null}
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
