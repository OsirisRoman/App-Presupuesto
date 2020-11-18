import React, { useState } from 'react';

import Error from '../Error/Error';
import { nanoid } from 'nanoid';

const Formulario = ({ setGasto, setMostrarGasto }) => {
  //State del gasto
  const [nombreGasto, setNombreGasto] = useState('');
  const [cantidadGasto, setCantidadGasto] = useState(0);
  const [error, setError] = useState(false);

  //Agregar Gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //validar
    if (
      cantidadGasto < 1 ||
      isNaN(cantidadGasto) ||
      nombreGasto.trim() === ''
    ) {
      setError(true);
      return;
    }
    setError(false);

    //construir el gasto
    const gasto = {
      nombreGasto,
      cantidadGasto,
      id: nanoid(),
    };

    //pasar el gasto al componente principal
    setMostrarGasto(true);
    setGasto(gasto);

    //resetear el form
    setNombreGasto('');
    setCantidadGasto(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>
      {error ? (
        <Error mensajeDeError='Uno de los datos ingresado no es válido' />
      ) : null}
      <div className='campo'>
        <label>Nombre del Gasto</label>
      </div>
      <input
        type='text'
        className='u-full-width'
        placeholder='Ej. Transporte'
        onChange={(e) => setNombreGasto(e.target.value)}
      />
      <div className='campo'>
        <label>Cantidad del Gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          value={cantidadGasto}
          onChange={(e) => setCantidadGasto(parseInt(e.target.value))}
        />
      </div>
      <input
        type='submit'
        className='button-primary u-full-width'
        placeholder='Ej. Transporte'
        value='Agregar Gasto'
      />
    </form>
  );
};

export default Formulario;
