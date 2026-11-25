// comprueba que el campo no este vacio ni tenga solo espacios
export function validarObligatorio(valor) {
  if (!valor || valor.trim() === '') {
    return 'Este campo es obligatorio.';
  }
  return null;
}

// valida la longitud minima y maxima usando los atributos del html
export function validarLongitud(valor, min, max) {
  const texto = valor.trim();
  if (min > 0 && texto.length < min) {
    return `Debe tener al menos ${min} caracteres.`;
  }
  if (max > 0 && texto.length > max) {
    return `No puede superar los ${max} caracteres.`;
  }
  return null;
}

// comprueba el formato del correo con una expresion regular
export function validarEmail(valor) {
  const texto = valor.trim();
  const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!patron.test(texto)) {
    return 'Introduce un correo electrónico válido.';
  }
  return null;
}

// exige al menos 8 caracteres, una mayuscula y un numero
export function validarPassword(valor) {
  if (valor.length < 8) {
    return 'La contraseña debe tener al menos 8 caracteres.';
  }
  if (!/[A-Z]/.test(valor)) {
    return 'La contraseña debe incluir al menos una letra mayúscula.';
  }
  if (!/[0-9]/.test(valor)) {
    return 'La contraseña debe incluir al menos un número.';
  }
  return null;
}

// comprueba que ambas contraseñas sean iguales
export function validarRepetirPassword(valor, passwordOriginal) {
  if (valor !== passwordOriginal) {
    return 'Las contraseñas no coinciden.';
  }
  return null;
}

// valida que la fecha exista, no sea futura y cumpla la edad minima
export function validarFechaNacimiento(valor, edadMinima = 12) {
  // añade la hora local para evitar desfases de zona horaria
  const fechaNacimiento = new Date(`${valor}T00:00:00`);
  const hoy = new Date();

  if (Number.isNaN(fechaNacimiento.getTime())) {
    return 'Introduce una fecha válida.';
  }
  if (fechaNacimiento > hoy) {
    return 'La fecha de nacimiento no puede ser futura.';
  }

  // calcula la edad exacta restando un año si aun no ha cumplido este año
  let edad = hoy.getFullYear() - fechaNacimiento.getFullYear();
  const diferenciaMes = hoy.getMonth() - fechaNacimiento.getMonth();
  if (diferenciaMes < 0 || (diferenciaMes === 0 && hoy.getDate() < fechaNacimiento.getDate())) {
    edad--;
  }

  if (edad < edadMinima) {
    return `Debes tener al menos ${edadMinima} años para registrarte.`;
  }
  return null;
}

// exige marcar la casilla de condiciones
export function validarCondiciones(aceptado) {
  if (!aceptado) {
    return 'Debes aceptar las condiciones de uso.';
  }
  return null;
}

// valida el telefono solo si es obligatorio o si el usuario ha escrito algo
export function validarTelefono(valor, esObligatorio) {
  // quita espacios en blanco antes de comprobar los 9 digitos
  const limpio = valor.replace(/\s+/g, '');

  if (!limpio) {
    if (esObligatorio) {
      return 'El teléfono es obligatorio si prefieres que te llamemos.';
    }
    return null;
  }

  // acepta 9 digitos empezando por 6, 7, 8 o 9
  const patron = /^[6789]\d{8}$/;
  if (!patron.test(limpio)) {
    return 'Introduce un teléfono válido de 9 dígitos (empezando por 6, 7, 8 o 9).';
  }
  return null;
}