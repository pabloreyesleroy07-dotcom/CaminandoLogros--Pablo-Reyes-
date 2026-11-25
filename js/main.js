import { juegos, logros } from './datos.js';
import { pintarJuegos, pintarDetalleJuego, pintarUsuarios, pintarMensajes } from './ui.js';
import { obtenerTodos, obtenerPorId, crear, actualizar, borrar } from './almacen.js';
import {
  validarObligatorio,
  validarLongitud,
  validarEmail,
  validarPassword,
  validarRepetirPassword,
  validarFechaNacimiento,
  validarCondiciones,
  validarTelefono
} from './validacion.js';

function mostrarError(campo, spanError, mensaje) {
  campo.setAttribute('aria-invalid', 'true');
  spanError.textContent = mensaje;
}

function limpiarError(campo, spanError) {
  campo.removeAttribute('aria-invalid');
  spanError.textContent = '';
}

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

const formRegistro = document.getElementById('form-registro');
const listaUsuarios = document.getElementById('lista-usuarios');

if (formRegistro && listaUsuarios) {
  const regUsuario = document.getElementById('reg-usuario');
  const regCorreo = document.getElementById('reg-correo');
  const regPassword = document.getElementById('reg-password');
  const regRepetir = document.getElementById('reg-repetir');
  const regFecha = document.getElementById('reg-fecha');
  const regCondiciones = document.getElementById('reg-condiciones');

  const errorUsuario = document.getElementById('error-reg-usuario');
  const errorCorreo = document.getElementById('error-reg-correo');
  const errorPassword = document.getElementById('error-reg-password');
  const errorRepetir = document.getElementById('error-reg-repetir');
  const errorFecha = document.getElementById('error-reg-fecha');
  const errorCondiciones = document.getElementById('error-reg-condiciones');

  const tituloForm = document.getElementById('titulo-form-registro');
  const btnGuardar = document.getElementById('btn-guardar-usuario');
  const textoBtnGuardar = btnGuardar.querySelector('span');
  const btnCancelar = document.getElementById('btn-cancelar-edicion');

  let idEditando = null;
  const tocados = {};

  function comprobarUsuario() {
    let error = null;
    if (regUsuario.required) {
      error = validarObligatorio(regUsuario.value);
    }
    if (!error) {
      error = validarLongitud(regUsuario.value, regUsuario.minLength, regUsuario.maxLength);
    }
    if (error) {
      mostrarError(regUsuario, errorUsuario, error);
      return false;
    }
    limpiarError(regUsuario, errorUsuario);
    return true;
  }

  function comprobarCorreo() {
    let error = null;
    if (regCorreo.required) {
      error = validarObligatorio(regCorreo.value);
    }
    if (!error) {
      error = validarEmail(regCorreo.value);
    }
    if (error) {
      mostrarError(regCorreo, errorCorreo, error);
      return false;
    }
    limpiarError(regCorreo, errorCorreo);
    return true;
  }

  function comprobarPassword() {
    let error = null;
    if (idEditando === null && regPassword.required) {
      error = validarObligatorio(regPassword.value);
    }
    if (!error && regPassword.value !== '') {
      error = validarPassword(regPassword.value);
    }
    if (error) {
      mostrarError(regPassword, errorPassword, error);
      return false;
    }
    limpiarError(regPassword, errorPassword);
    return true;
  }

  function comprobarRepetir() {
    let error = null;
    if (idEditando === null && regRepetir.required) {
      error = validarObligatorio(regRepetir.value);
    }
    if (!error) {
      error = validarRepetirPassword(regRepetir.value, regPassword.value);
    }
    if (error) {
      mostrarError(regRepetir, errorRepetir, error);
      return false;
    }
    limpiarError(regRepetir, errorRepetir);
    return true;
  }

  function comprobarFecha() {
    let error = null;
    if (regFecha.required) {
      error = validarObligatorio(regFecha.value);
    }
    if (!error) {
      error = validarFechaNacimiento(regFecha.value);
    }
    if (error) {
      mostrarError(regFecha, errorFecha, error);
      return false;
    }
    limpiarError(regFecha, errorFecha);
    return true;
  }

  function comprobarCondiciones() {
    const error = validarCondiciones(regCondiciones.checked);
    if (error) {
      mostrarError(regCondiciones, errorCondiciones, error);
      return false;
    }
    limpiarError(regCondiciones, errorCondiciones);
    return true;
  }

  function limpiarTodosLosErrores() {
    limpiarError(regUsuario, errorUsuario);
    limpiarError(regCorreo, errorCorreo);
    limpiarError(regPassword, errorPassword);
    limpiarError(regRepetir, errorRepetir);
    limpiarError(regFecha, errorFecha);
    limpiarError(regCondiciones, errorCondiciones);
  }

  function limpiarTocados() {
    tocados.usuario = false;
    tocados.correo = false;
    tocados.password = false;
    tocados.repetir = false;
    tocados.fecha = false;
    tocados.condiciones = false;
  }

  function salirModoEdicion() {
    idEditando = null;
    tituloForm.textContent = 'Registro de usuario';
    textoBtnGuardar.textContent = 'Registrar usuario';
    btnCancelar.hidden = true;
    formRegistro.reset();
    limpiarTocados();
    limpiarTodosLosErrores();
  }

  regUsuario.addEventListener('blur', () => {
    tocados.usuario = true;
    comprobarUsuario();
  });
  regUsuario.addEventListener('input', () => {
    if (tocados.usuario) {
      comprobarUsuario();
    }
  });

  regCorreo.addEventListener('blur', () => {
    tocados.correo = true;
    comprobarCorreo();
  });
  regCorreo.addEventListener('input', () => {
    if (tocados.correo) {
      comprobarCorreo();
    }
  });

  regPassword.addEventListener('blur', () => {
    tocados.password = true;
    comprobarPassword();
  });
  regPassword.addEventListener('input', () => {
    if (tocados.password) {
      comprobarPassword();
    }
    if (tocados.repetir) {
      comprobarRepetir();
    }
  });

  regRepetir.addEventListener('blur', () => {
    tocados.repetir = true;
    comprobarRepetir();
  });
  regRepetir.addEventListener('input', () => {
    if (tocados.repetir) {
      comprobarRepetir();
    }
  });

  regFecha.addEventListener('blur', () => {
    tocados.fecha = true;
    comprobarFecha();
  });
  regFecha.addEventListener('input', () => {
    if (tocados.fecha) {
      comprobarFecha();
    }
  });

  regCondiciones.addEventListener('change', () => {
    tocados.condiciones = true;
    comprobarCondiciones();
  });

  btnCancelar.addEventListener('click', salirModoEdicion);

  formRegistro.addEventListener('submit', (evento) => {
    evento.preventDefault();

    tocados.usuario = true;
    tocados.correo = true;
    tocados.password = true;
    tocados.repetir = true;
    tocados.fecha = true;
    tocados.condiciones = true;

    const usuarioValido = comprobarUsuario();
    const correoValido = comprobarCorreo();
    const passwordValida = comprobarPassword();
    const repetirValido = comprobarRepetir();
    const fechaValida = comprobarFecha();
    const condicionesValidas = comprobarCondiciones();

    if (!usuarioValido) {
      regUsuario.focus();
      return;
    }
    if (!correoValido) {
      regCorreo.focus();
      return;
    }
    if (!passwordValida) {
      regPassword.focus();
      return;
    }
    if (!repetirValido) {
      regRepetir.focus();
      return;
    }
    if (!fechaValida) {
      regFecha.focus();
      return;
    }
    if (!condicionesValidas) {
      regCondiciones.focus();
      return;
    }

    const datosUsuario = {
      nombreUsuario: regUsuario.value.trim(),
      correo: regCorreo.value.trim(),
      fechaNacimiento: regFecha.value,
      condiciones: regCondiciones.checked
    };

    if (idEditando !== null) {
      actualizar('usuarios', idEditando, datosUsuario);
      salirModoEdicion();
    } else {
      crear('usuarios', datosUsuario);
      formRegistro.reset();
      limpiarTocados();
    }

    pintarUsuarios(obtenerTodos('usuarios'), listaUsuarios);
  });

  listaUsuarios.addEventListener('click', (evento) => {
    const boton = evento.target;
    if (boton.tagName !== 'BUTTON') {
      return;
    }

    const accion = boton.dataset.accion;
    const id = Number(boton.dataset.id);

    if (accion === 'borrar') {
      if (confirm('¿Seguro que quieres borrar este usuario?')) {
        borrar('usuarios', id);
        if (idEditando === id) {
          salirModoEdicion();
        }
        pintarUsuarios(obtenerTodos('usuarios'), listaUsuarios);
      }
    }

    if (accion === 'editar') {
      const usuario = obtenerPorId('usuarios', id);
      if (!usuario) {
        return;
      }

      limpiarTodosLosErrores();
      limpiarTocados();

      regUsuario.value = usuario.nombreUsuario;
      regCorreo.value = usuario.correo;
      regFecha.value = usuario.fechaNacimiento;
      regCondiciones.checked = usuario.condiciones;
      regPassword.value = '';
      regRepetir.value = '';

      idEditando = id;
      tituloForm.textContent = `Editando usuario: ${usuario.nombreUsuario}`;
      textoBtnGuardar.textContent = 'Guardar cambios';
      btnCancelar.hidden = false;
      regUsuario.focus();
    }
  });

  pintarUsuarios(obtenerTodos('usuarios'), listaUsuarios);
}

const formContacto = document.getElementById('form-contacto');
const listaMensajes = document.getElementById('lista-mensajes');

if (formContacto && listaMensajes) {
  const conNombre = document.getElementById('con-nombre');
  const conCorreo = document.getElementById('con-correo');
  const conTelefono = document.getElementById('con-telefono');
  const conLlamada = document.getElementById('con-llamar');
  const conMotivo = document.getElementById('con-motivo');
  const conMensaje = document.getElementById('con-mensaje');

  const errorNombre = document.getElementById('error-con-nombre');
  const errorCorreo = document.getElementById('error-con-correo');
  const errorTelefono = document.getElementById('error-con-telefono');
  const errorMotivo = document.getElementById('error-con-motivo');
  const errorMensaje = document.getElementById('error-con-mensaje');
  const contadorMensaje = document.getElementById('contador-mensaje');

  const tituloForm = document.getElementById('titulo-form-contacto');
  const btnEnviar = document.getElementById('btn-enviar-contacto');
  const textoBtnEnviar = btnEnviar.querySelector('span');
  const btnCancelar = document.getElementById('btn-cancelar-contacto');

  let idEditando = null;
  const tocados = {};

  const nombreGuardado = localStorage.getItem('contacto_nombre');
  const correoGuardado = localStorage.getItem('contacto_correo');
  if (nombreGuardado) {
    conNombre.value = nombreGuardado;
  }
  if (correoGuardado) {
    conCorreo.value = correoGuardado;
  }

  function actualizarContador() {
    const escritos = conMensaje.value.length;
    const maximo = conMensaje.maxLength;
    contadorMensaje.textContent = `${escritos} / ${maximo} caracteres`;
  }

  conMensaje.addEventListener('input', actualizarContador);
  actualizarContador();

  function comprobarNombre() {
    let error = null;
    if (conNombre.required) {
      error = validarObligatorio(conNombre.value);
    }
    if (!error) {
      error = validarLongitud(conNombre.value, conNombre.minLength, conNombre.maxLength);
    }
    if (error) {
      mostrarError(conNombre, errorNombre, error);
      return false;
    }
    limpiarError(conNombre, errorNombre);
    return true;
  }

  function comprobarCorreo() {
    let error = null;
    if (conCorreo.required) {
      error = validarObligatorio(conCorreo.value);
    }
    if (!error) {
      error = validarEmail(conCorreo.value);
    }
    if (error) {
      mostrarError(conCorreo, errorCorreo, error);
      return false;
    }
    limpiarError(conCorreo, errorCorreo);
    return true;
  }

  function comprobarTelefono() {
    const error = validarTelefono(conTelefono.value, conLlamada.checked);
    if (error) {
      mostrarError(conTelefono, errorTelefono, error);
      return false;
    }
    limpiarError(conTelefono, errorTelefono);
    return true;
  }

  function comprobarMotivo() {
    let error = null;
    if (conMotivo.required) {
      error = validarObligatorio(conMotivo.value);
    }
    if (error) {
      mostrarError(conMotivo, errorMotivo, error);
      return false;
    }
    limpiarError(conMotivo, errorMotivo);
    return true;
  }

  function comprobarMensaje() {
    let error = null;
    if (conMensaje.required) {
      error = validarObligatorio(conMensaje.value);
    }
    if (!error) {
      error = validarLongitud(conMensaje.value, conMensaje.minLength, conMensaje.maxLength);
    }
    if (error) {
      mostrarError(conMensaje, errorMensaje, error);
      return false;
    }
    limpiarError(conMensaje, errorMensaje);
    return true;
  }

  function limpiarTodosLosErrores() {
    limpiarError(conNombre, errorNombre);
    limpiarError(conCorreo, errorCorreo);
    limpiarError(conTelefono, errorTelefono);
    limpiarError(conMotivo, errorMotivo);
    limpiarError(conMensaje, errorMensaje);
  }

  function limpiarTocados() {
    tocados.nombre = false;
    tocados.correo = false;
    tocados.telefono = false;
    tocados.motivo = false;
    tocados.mensaje = false;
  }

  function salirModoEdicion() {
    idEditando = null;
    tituloForm.textContent = 'Contacto';
    textoBtnEnviar.textContent = 'Enviar mensaje';
    btnCancelar.hidden = true;
    formContacto.reset();
    conTelefono.required = false;
    limpiarTocados();
    limpiarTodosLosErrores();
    actualizarContador();
  }

  conNombre.addEventListener('blur', () => {
    tocados.nombre = true;
    comprobarNombre();
  });
  conNombre.addEventListener('input', () => {
    if (tocados.nombre) {
      comprobarNombre();
    }
  });

  conCorreo.addEventListener('blur', () => {
    tocados.correo = true;
    comprobarCorreo();
  });
  conCorreo.addEventListener('input', () => {
    if (tocados.correo) {
      comprobarCorreo();
    }
  });

  conTelefono.addEventListener('blur', () => {
    tocados.telefono = true;
    comprobarTelefono();
  });
  conTelefono.addEventListener('input', () => {
    if (tocados.telefono) {
      comprobarTelefono();
    }
  });

  conLlamada.addEventListener('change', () => {
    conTelefono.required = conLlamada.checked;
    tocados.telefono = true;
    comprobarTelefono();
  });

  conMotivo.addEventListener('blur', () => {
    tocados.motivo = true;
    comprobarMotivo();
  });
  conMotivo.addEventListener('change', () => {
    if (tocados.motivo) {
      comprobarMotivo();
    }
  });

  conMensaje.addEventListener('blur', () => {
    tocados.mensaje = true;
    comprobarMensaje();
  });
  conMensaje.addEventListener('input', () => {
    if (tocados.mensaje) {
      comprobarMensaje();
    }
  });

  btnCancelar.addEventListener('click', salirModoEdicion);

  formContacto.addEventListener('submit', (evento) => {
    evento.preventDefault();

    tocados.nombre = true;
    tocados.correo = true;
    tocados.telefono = true;
    tocados.motivo = true;
    tocados.mensaje = true;

    const nombreValido = comprobarNombre();
    const correoValido = comprobarCorreo();
    const telefonoValido = comprobarTelefono();
    const motivoValido = comprobarMotivo();
    const mensajeValido = comprobarMensaje();

    if (!nombreValido) {
      conNombre.focus();
      return;
    }
    if (!correoValido) {
      conCorreo.focus();
      return;
    }
    if (!telefonoValido) {
      conTelefono.focus();
      return;
    }
    if (!motivoValido) {
      conMotivo.focus();
      return;
    }
    if (!mensajeValido) {
      conMensaje.focus();
      return;
    }

    const datosMensaje = {
      nombre: conNombre.value.trim(),
      correo: conCorreo.value.trim(),
      telefono: conTelefono.value.trim(),
      prefieroLlamada: conLlamada.checked,
      motivo: conMotivo.value,
      mensaje: conMensaje.value.trim()
    };

    localStorage.setItem('contacto_nombre', datosMensaje.nombre);
    localStorage.setItem('contacto_correo', datosMensaje.correo);

    if (idEditando !== null) {
      actualizar('mensajes', idEditando, datosMensaje);
      salirModoEdicion();
    } else {
      crear('mensajes', datosMensaje);
      formContacto.reset();
      conTelefono.required = false;
      limpiarTocados();
      actualizarContador();
    }

    pintarMensajes(obtenerTodos('mensajes'), listaMensajes);
  });

  listaMensajes.addEventListener('click', (evento) => {
    const boton = evento.target;
    if (boton.tagName !== 'BUTTON') {
      return;
    }

    const accion = boton.dataset.accion;
    const id = Number(boton.dataset.id);

    if (accion === 'borrar') {
      if (confirm('¿Seguro que quieres borrar este mensaje?')) {
        borrar('mensajes', id);
        if (idEditando === id) {
          salirModoEdicion();
        }
        pintarMensajes(obtenerTodos('mensajes'), listaMensajes);
      }
    }

    if (accion === 'editar') {
      const mensaje = obtenerPorId('mensajes', id);
      if (!mensaje) {
        return;
      }

      limpiarTodosLosErrores();
      limpiarTocados();

      conNombre.value = mensaje.nombre;
      conCorreo.value = mensaje.correo;
      conTelefono.value = mensaje.telefono;
      conLlamada.checked = mensaje.prefieroLlamada;
      conTelefono.required = mensaje.prefieroLlamada;
      conMotivo.value = mensaje.motivo;
      conMensaje.value = mensaje.mensaje;
      actualizarContador();

      idEditando = id;
      tituloForm.textContent = `Editando mensaje de: ${mensaje.nombre}`;
      textoBtnEnviar.textContent = 'Guardar cambios';
      btnCancelar.hidden = false;
      conNombre.focus();
    }
  });

  pintarMensajes(obtenerTodos('mensajes'), listaMensajes);
}