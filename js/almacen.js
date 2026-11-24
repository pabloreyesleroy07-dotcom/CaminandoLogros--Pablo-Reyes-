export function obtenerTodos(coleccion) {
    const datos = localStorage.getItem(coleccion);
    if (!datos) {
        return [];
    }
    
    return JSON.parse(datos);
}

export function obtenerPorId(coleccion, id){
    const lista = obtenerTodos(coleccion);
    const encontrado = lista.find ((item) => item.id === id);
    return encontrado || null;

}

export function crear(coleccion, dato){
    const lista = obtenerTodos(coleccion, dato);
    const nuevo = {
        ...dato,
        id: Date.now()
    };

    lista.push(nuevo);
    localStorage.setItem(coleccion, JSON.stringify(lista));
    return nuevo;
}

export function actualizar(coleccion, id, dato){
    const lista = obtenerTodos(coleccion);
    const nuevaLista = lista.map((item) => {
        if (item.id === id){
            return {...item, ...dato, id};
        }
        return item;
    });
}

export function borrar(coleccion, id){
    const lista = obtenerTodos(coleccion);
    const nuevaLista = lista.filter((item) => item.id !== id);
    localStorage.setItem(coleccion, JSON.stringify(nuevaLista));
}