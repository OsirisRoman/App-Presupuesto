import React from 'react';

const Formulario = () => {
  return (
    <form>
      <h2>Agrega tus gastos aquí</h2>
      <div className='campo'>
        <label>Nombre del Gasto</label>
      </div>
      <input
        type='text'
        className='u-full-width'
        placeholder='Ej. Transporte'
      />
      <div className='campo'>
        <label>Cantidad del Gasto</label>
        <input type='number' className='u-full-width' placeholder='Ej. 300' />
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
