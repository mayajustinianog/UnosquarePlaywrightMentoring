interface CasoDePrueba {
  id: string;
  titulo: string;
  estado: 'Pass' | 'Fail';
}

const casoUno: CasoDePrueba = {
  id: 'TC-001',
  titulo: 'Login con credenciales válidas',
  estado: 'Pass',
};

console.log(casoUno);
