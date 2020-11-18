import { useState, useEffect } from 'react';
import Pregunta from './Componentes/PreguntaPresupuesto/PreguntaPresupuesto';
import Formulario from './Componentes/Formulario/Formulario';
import Listado from './Componentes/Listado/Listado';
import Restante from './Componentes/Restante/Restante';

function App() {
  //Definir el state del presupuesto y del restante
  const [presupuesto, setPresupuesto] = useState(0);
  const [restante, setRestante] = useState(0);
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGastos] = useState([]);
  const [gasto, setGasto] = useState({});
  const [mostrarGasto, setMostrarGasto] = useState(false);

  //UseEffect que registra los gastos
  useEffect(() => {
    if (mostrarGasto) {
      setGastos([...gastos, gasto]);
      setRestante(presupuesto - gasto.cantidadGasto);
      setMostrarGasto(false);
    }
  }, [gasto]);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='contenido-principal contenido'>
          {mostrarPregunta ? (
            <Pregunta
              setPresupuesto={setPresupuesto}
              setRestante={setRestante}
              setMostrarPregunta={setMostrarPregunta}
            />
          ) : (
            <div className='row'>
              <div className='one-half column'>
                <Formulario
                  setGasto={setGasto}
                  setMostrarGasto={setMostrarGasto}
                />
              </div>
              <div className='one-half column'>
                <Listado gastos={gastos} />
                <Restante presupuesto={presupuesto} restante={restante} />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
