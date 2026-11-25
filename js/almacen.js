// lee todos los registros de una coleccion en localstorage
export function obtenerTodos(coleccion) {
  const datos = localStorage.getItem(coleccion);
  // si no hay nada guardado todavia devuelve un array vacio
  if (!datos) {
    return [];
  }
  // convierte el texto json guardado a un array de objetos
  return JSON.parse(datos);
}

// busca y devuelve un unico registro por su id
export function obtenerPorId(coleccion, id) {
  const lista = obtenerTodos(coleccion);
  const encontrado = lista.find((item) => item.id === id);
  return encontrado || null;
}

// añade un nuevo registro con id unico basado en la fecha actual
export function crear(coleccion, dato) {
  const lista = obtenerTodos(coleccion);
  const nuevo = {
    ...dato,
    id: Date.now()
  };

  lista.push(nuevo);
  // guarda el array actualizado como texto json en localstorage
  localStorage.setItem(coleccion, JSON.stringify(lista));
  return nuevo;
}

// reemplaza los datos del registro que coincide con el id
export function actualizar(coleccion, id, dato) {
  const lista = obtenerTodos(coleccion);
  const nuevaLista = lista.map((item) => {
    if (item.id === id) {
      return { ...item, ...dato, id };
    }
    return item;
  });

  localStorage.setItem(coleccion, JSON.stringify(nuevaLista));
  return nuevaLista;
}

// reemplaza los datos del registro que coincide con el id
export function borrar(coleccion, id) {
    const lista = obtenerTodos(coleccion);
  const nuevaLista = lista.filter((item) => item.id !== id);
  localStorage.setItem(coleccion, JSON.stringify(nuevaLista));
}