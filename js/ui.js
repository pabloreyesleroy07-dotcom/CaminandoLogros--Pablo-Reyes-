export function pintarJuegos(juegos, contenedor) {
  contenedor.innerHTML = '';

  juegos.forEach((juego) => {
    const tarjeta = document.createElement('article');
    tarjeta.className = 'tarjeta-juego';

    tarjeta.innerHTML = `
      <a href="juego.html?id=${juego.id}" class="enlace-tarjeta">
        <div class="portada-juego" aria-hidden="true"></div>
        <h3>${juego.titulo}</h3>
        <p class="subtitulo-tarjeta">${juego.totalLogros} logros · ${juego.perdibles} perdibles</p>
        <span class="etiqueta">${juego.genero}</span>
      </a>
    `;

    contenedor.appendChild(tarjeta);
  });
}

export function pintarDetalleJuego(juego, logrosJuego, contenedorDetalle, contenedorLogros) {
  if (!juego) {
    contenedorDetalle.innerHTML = `
      <div class="vista-pendiente">
        <h1>Juego no encontrado</h1>
        <p>No existe ningún título con ese identificador.</p>
        <a href="index.html" class="btn-secundario">Volver a explorar</a>
      </div>
    `;
    contenedorLogros.innerHTML = '';
    return;
  }

  contenedorDetalle.innerHTML = `
    <div class="portada-detalle" aria-hidden="true"></div>
    <div class="info-detalle">
      <h1>${juego.titulo}</h1>
      <p class="subtitulo-detalle">${juego.genero} · ${juego.totalLogros} logros · ${juego.perdibles} perdibles</p>
      <p class="sinopsis-detalle">${juego.sinopsis}</p>

      <div class="pildoras-detalle">
        <span class="pildora">NOTA: ${juego.nota}</span>
        <span class="pildora">LOGROS: ${juego.totalLogros}</span>
        <span class="pildora">DURACION: ${juego.duracion}</span>
      </div>

      <div class="acciones-detalle">
        <a href="crear-run.html?juegoId=${juego.id}" class="btn-primario">
          <img src="img/plus.svg" alt="">
          <span>Crear Run</span>
        </a>
        <a href="logros.html?juegoId=${juego.id}" class="btn-secundario">
          <img src="img/plus.svg" alt="">
          <span>Ver Logros</span>
        </a>
      </div>
    </div>
  `;

  contenedorLogros.innerHTML = '';

  if (logrosJuego.length === 0) {
    contenedorLogros.innerHTML = '<p>No hay logros registrados para este juego todavía.</p>';
    return;
  }

  logrosJuego.forEach((logro) => {
    const item = document.createElement('article');
    item.className = 'tarjeta-logro';

    item.innerHTML = `
      <div class="cabecera-logro">
        <h3>${logro.titulo}</h3>
        <span class="etiqueta">${logro.categoria}</span>
      </div>
      <p class="descripcion-logro">${logro.descripcion}</p>
      <div class="extra-logro">
        <p><strong>Recompensa:</strong> ${logro.recompensa}</p>
        <p><strong>Guía:</strong> ${logro.guia}</p>
      </div>
    `;

    contenedorLogros.appendChild(item);
  });
}