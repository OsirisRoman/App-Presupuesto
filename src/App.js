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
      setRestante(restante - gasto.cantidadGasto);
      setMostrarGasto(false);
    }
  }, [gasto, gastos, mostrarGasto, restante]);

  return (
    <div className='container'>
      <header>
        <h1>Gasto Semanal</h1>
        <div className='container'>
          <h5
            className='u-text-center'
            style={{ textAlign: 'center', color: 'white' }}>
            Un administrador de gastos para un presupuesto incial que hace uso
            de formularios y su validación respectiva además de algunos react
            hooks 🎉
          </h5>
        </div>
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
