const nombrePrueba: string = 'Maya';
const aprobado: boolean = true;
const number: number = 3;
const hobbies: string[] = ['leer', 'música', 'testing'];

const hoy: Date = new Date();
const fechaFormateada: string =
  hoy.getFullYear() + '/' + (hoy.getMonth() + 1) + '/' + hoy.getDate();

console.log(nombrePrueba);
console.log(aprobado);
console.log(number);
console.log(hobbies);
console.log(fechaFormateada);
