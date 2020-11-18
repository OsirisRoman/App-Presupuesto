//Un helper es un archivo que contiene funciones que pueden ser reutilizadas en otros módulos.

export const revisarPresupuesto = (presupuesto, restante) => {
  let claseCSS;

  if (presupuesto / 4 > restante) {
    claseCSS = 'alert alert-danger';
  } else if (presupuesto / 2 > restante) {
    claseCSS = 'alert alert-warning';
  } else {
    claseCSS = 'alert alert-success';
  }

  return claseCSS;
};
