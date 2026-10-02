class Tester {
  nombre: string = 'Maya';

  iniciarPruebas(): void {
    console.log('Iniciando pruebas de automatización');
  }
}

const tester = new Tester();
console.log(tester.nombre);
tester.iniciarPruebas();
