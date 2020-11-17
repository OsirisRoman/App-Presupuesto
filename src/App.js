import { useState } from 'react';
import Pregunta from './Componentes/PreguntaPresupuesto/PreguntaPresupuesto';
import Formulario from './Componentes/Formulario/Formulario';

function App() {
  //Definir el state del presupuesto y del restante
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          <Pregunta setPresupuesto={setPresupuesto} setRestante={setRestante} />
          <div className='row'>
            <div className='one-half column'>
              <Formulario />
            </div>
            <div className='one-half column'>2</div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
