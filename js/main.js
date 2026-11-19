import { juegos, logros } from './datos.js';
import { pintarJuegos, pintarDetalleJuego } from './ui.js';

const listaJuegos = document.getElementById('lista-juegos');
const detalleJuego = document.getElementById('detalle-juego');
const listaLogrosJuego = document.getElementById('lista-logros-juego');
const formBuscador = document.getElementById('form-buscador');

if (listaJuegos) {
  pintarJuegos(juegos, listaJuegos);
}

if (formBuscador) {
  formBuscador.addEventListener('submit', (evento) => {
    evento.preventDefault();
  });
}

if (detalleJuego && listaLogrosJuego) {
  const parametros = new URLSearchParams(window.location.search);
  const idJuego = Number(parametros.get('id'));
  const juegoSeleccionado = juegos.find((juego) => juego.id === idJuego);
  const logrosAsociados = logros.filter((logro) => logro.juegoId === idJuego);

  pintarDetalleJuego(juegoSeleccionado, logrosAsociados, detalleJuego, listaLogrosJuego);
}