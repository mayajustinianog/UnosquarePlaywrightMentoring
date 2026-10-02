const Resultado: string = 'Passed';

function evaluarPrueba(resultado: string): void {
  if (resultado === 'Passed') {
    console.log('Exito!');
  } else {
    console.log('Error!');
  }
}

evaluarPrueba(Resultado);
