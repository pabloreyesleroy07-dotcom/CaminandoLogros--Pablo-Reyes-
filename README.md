# Diseño de Interfaces Web - Proyecto Órbita 1 y 2

Aplicación web orientada a la planificación de runs y seguimiento de logros en videojuegos, permitiendo a los jugadores filtrar retos según las recompensas reales que aportan dentro del juego (objetos, armas, elementos cosméticos) y consultar guías directas sin saturación de contenidos ni vídeos innecesarios.

Este repositorio actúa como centro de documentación y base para las siguientes fases de desarrollo del módulo de Diseño de Interfaces Web.

---

## Documentación del Proyecto

Los documentos principales de especificación técnica, diseño y trazabilidad del proyecto se encuentran en:

- **[Documento BRIEF del proyecto (Órbita 1)](./BRIEF.md)**: recoge el problema validado con datos de la investigación, el alcance del MVP, los arquetipos de usuario, los criterios de éxito comprobables y las restricciones técnicas y ambientales (WSG 2.4).
- **[Documentación de la Órbita 2 (ORBITA2.md)](./Orbita2.md)**: recoge los enlaces de entrega, la ubicación en Figma, la lista de comprobación y el resumen de decisiones del sistema visual (color, tipografía, espaciado, retícula, componentes y prototipo).
- **[Registro de uso de IA (CHANGELOG.md)](./CHANGELOG.md)**: documenta cada sesión de trabajo asistida por herramientas de IA con fecha, modelo, prompt, resultado y cambios aplicados.

---

## Ecosistema de Diseño y Entregables

El proyecto vincula la investigación, la arquitectura, el sistema visual y los prototipos a través de los siguientes entornos:

- **Tablero de FigJam:** Contiene la hipótesis inicial, el análisis de referentes (PowerPyx y TrueAchievements), los datos de la encuesta de validación, las fichas de personas (Abraham y Alejandro), la matriz de MVP, el diagrama de flujo de usuario (*user flow*) y el árbol de contenidos (*sitemap*).
- **[Figma Design — Archivo completo (Órbitas 1 y 2)](https://www.figma.com/design/aLJ3mo94Ou8ULd9bTwfr4K/PABLO-REYES---DIW?node-id=0-1&t=dPbGHYCynFpLV3sY-1):** Incluye la portada, la guía de estilos documentada, la librería de iconos y componentes con Auto layout, los wireframes (originales y rediseñados) y los mockups del flujo principal con variables y modo oscuro (`Entrega Órbita 2`).
- **[Prototipo interactivo — CaminandoLogros](https://www.figma.com/proto/aLJ3mo94Ou8ULd9bTwfr4K/PABLO-REYES---DIW?node-id=656-472&p=f&t=KNdrS52t4GOSMG82-1&scaling=min-zoom&content-scaling=fixed&page-id=635%3A302&starting-point-node-id=656%3A472&show-proto-sidebar=1):** Recorrido navegable del flujo principal (*happy path*) que conecta la búsqueda de títulos con la ficha de juego, la creación de una *run* y el cambio de tema claro/oscuro.

---

## Estructura del Repositorio

- `README.md`: Presentación general del proyecto y enlaces al ecosistema de diseño.
- `BRIEF.md`: Brief técnico cerrado de la Órbita 1.
- `ORBITA2.md`: Enlaces a Figma/Prototipo, lista de comprobación y decisiones del sistema visual de la Órbita 2.
- `CHANGELOG.md`: Registro de trazabilidad y documentación del uso de herramientas de IA durante las sesiones de trabajo.

---

## Desarrollo Web en Entorno Cliente (DWEC)

En esta parte del repositorio se desarrolla la aplicación funcional de **CaminandoLogros** con HTML, CSS y JavaScript modular (`ES Modules`), partiendo de los tokens y vistas definidas en DIW y respetando la restricción WSG 2.4 (peso inicial inferior a 500 KB por página).

### Estructura de código

- `index.html`, `juego.html`, `logros.html`, `crear-run.html`, `mis-runs.html`, `usuarios.html` y `contacto.html`: páginas HTML de la aplicación.
- `css/variables.css` y `css/styles.css`: tokens de color, tipografía y espaciado extraídos de Figma junto con los estilos de componentes, formularios y estados de validación.
- `js/datos.js`: catálogo de juegos y listado de logros relacionados mediante `juegoId`.
- `js/almacen.js`: capa de persistencia sobre `localStorage` con operaciones CRUD (`obtenerTodos`, `obtenerPorId`, `crear`, `actualizar`, `borrar`).
- `js/validacion.js`: funciones puras de validación reutilizables para los formularios de registro y contacto.
- `js/ui.js`: funciones encargadas de construir y pintar los elementos en el DOM (juegos, logros, usuarios y mensajes).
- `js/main.js`: lógica principal de navegación, lectura de parámetros, recordatorio de datos en `localStorage`, validación de formularios y delegación de eventos.
- `img/`: iconos SVG exportados desde Figma.

### Backlog

Ordenado por prioridad y dividido en tareas pequeñas para probar cada pieza por separado:

- [x] **Estructura base y datos de ejemplo (Hito 1):** organizar las carpetas (`css/`, `js/`, `img/`), configurar ESLint y definir las entidades `juegos` y `logros` en `datos.js`.
- [x] **Menú de navegación (Hito 1 y Hito 2):** barra superior común en todas las vistas con enlaces a `Explorar`, `Mis Runs`, `Crear Run`, `Usuarios` y `Contacto`.
- [x] **Listado principal de juegos (Hito 1):** generar desde JavaScript la cuadrícula de tarjetas de juegos en `index.html` leyendo desde `datos.js`.
- [x] **Ficha detalle de juego (Hito 1):** cargar en `juego.html` la información del título seleccionado y su listado de logros asociados.
- [x] **Capa de datos en `localStorage` (Hito 2):** implementar el módulo `almacen.js` para centralizar la lectura, creación, actualización y borrado de registros.
- [x] **Módulo de validación (Hito 2):** implementar `validacion.js` con comprobaciones de obligatoriedad, longitud, correo, contraseña, edad mínima y teléfono.
- [x] **Registro y gestión de usuarios (Hito 2):** formulario con validación en tiempo real (`blur` e `input`) y listado con edición precargada y borrado en `usuarios.html`.
- [x] **Formulario de contacto y recordatorio en `localStorage` (Hito 2):** validación entre campos (teléfono obligatorio si se prefiere llamada), contador de caracteres, listado de mensajes con edición y borrado, y persistencia de nombre y correo en `localStorage`.
- [ ] **Buscador de juegos:** filtrar el catálogo de `Explorar` por nombre en tiempo real.
- [ ] **Filtro de logros por categoría:** filtrar los logros dentro de un juego por `Todos`, `Perdibles`, `Dificultad` y `Recompensas`.
- [ ] **Alta de run con validación:** formulario en `crear-run.html` para crear una run personalizada eligiendo juego, nombre y logros, guardándola en `localStorage`.
- [ ] **Seguimiento en Mis Runs:** mostrar en `mis-runs.html` las partidas guardadas y permitir marcar logros como completados para calcular el progreso.
- [ ] **Cambio de tema claro/oscuro:** conectar el botón de la cabecera con `data-theme="dark"` y guardar la preferencia del usuario.
- [ ] **Conversión a SPA:** gestionar las rutas y el cambio de vistas desde JavaScript sin recargar la página.

### Mapa de pantallas

**Secciones principales (enlazadas en el menú de navegación):**
- **Explorar (`index.html`):** vista principal con el buscador y el listado en cuadrícula de los juegos disponibles. Muestra la portada, el título, el total de logros, los logros perdibles y la etiqueta de género de cada juego.
- **Mis Runs (`mis-runs.html`):** vista con el listado de runs guardadas agrupadas por juego y el porcentaje de logros completados en cada una. *(Enlazada en el menú para próximos hitos).*
- **Crear Run (`crear-run.html`):** vista con formulario para configurar una nueva run seleccionando el juego, un nombre de partida y los logros objetivo. *(Enlazada en el menú para próximos hitos).*
- **Usuarios (`usuarios.html`):** vista con el formulario de alta y edición de cuentas de usuario y el listado de usuarios registrados con opciones para editar y borrar.
- **Contacto (`contacto.html`):** vista con el formulario de soporte o sugerencias sobre juegos y logros, autorrelleno de nombre y correo desde `localStorage` y listado de mensajes enviados con opciones para editar y borrar.

**Vistas de detalle (enlazadas desde cada ficha de juego):**
- **Detalle de juego (`juego.html?id=...`):** ficha individual a la que se accede al pulsar cualquier tarjeta desde Explorar. Muestra la portada, el título, el género, la sinopsis, los indicadores de nota, total de logros y duración estimada, los botones de acción (`Crear Run` y `Ver Logros`) y el listado de logros asociados al juego.
- **Ver logros (`logros.html?juegoId=...`):** vista extendida de los logros de un juego concreto con su etiqueta de categoría, la recompensa que desbloquea dentro del juego y los pasos para conseguirlo. *(Enlazada desde la ficha de juego para próximos hitos).*

---

## Hito 2

### Mapa de validación

#### Formulario de registro (`usuarios.html`)

| Campo | Regla de validación | Mensaje de error |
| :--- | :--- | :--- |
| Nombre de usuario (`reg-usuario`) | Obligatorio. Longitud entre 3 y 20 caracteres (leída de `minLength` y `maxLength`). | `Este campo es obligatorio.` / `Debe tener al menos 3 caracteres.` / `No puede superar los 20 caracteres.` |
| Correo electrónico (`reg-correo`) | Obligatorio. Formato de correo válido (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). | `Este campo es obligatorio.` / `Introduce un correo electrónico válido.` |
| Contraseña (`reg-password`) | Obligatoria al crear (opcional al editar). Mínimo 8 caracteres, al menos una mayúscula (`/[A-Z]/`) y al menos un número (`/[0-9]/`). | `Este campo es obligatorio.` / `La contraseña debe tener al menos 8 caracteres.` / `La contraseña debe incluir al menos una letra mayúscula.` / `La contraseña debe incluir al menos un número.` |
| Repetir contraseña (`reg-repetir`) | Obligatoria al crear. Debe coincidir exactamente con el campo contraseña. | `Este campo es obligatorio.` / `Las contraseñas no coinciden.` |
| Fecha de nacimiento (`reg-fecha`) | Obligatoria. Fecha válida, no posterior a la fecha actual y edad mínima de 12 años. | `Este campo es obligatorio.` / `Introduce una fecha válida.` / `La fecha de nacimiento no puede ser futura.` / `Debes tener al menos 12 años para registrarte.` |
| Condiciones de uso (`reg-condiciones`) | Casilla marcada obligatoria (`checked === true`). | `Debes aceptar las condiciones de uso.` |

#### Formulario de contacto (`contacto.html`)

| Campo | Regla de validación | Mensaje de error |
| :--- | :--- | :--- |
| Nombre (`con-nombre`) | Obligatorio. Longitud entre 2 y 50 caracteres (leída de `minLength` y `maxLength`). | `Este campo es obligatorio.` / `Debe tener al menos 2 caracteres.` / `No puede superar los 50 caracteres.` |
| Correo electrónico (`con-correo`) | Obligatorio. Formato de correo válido (`/^[^\s@]+@[^\s@]+\.[^\s@]+$/`). | `Este campo es obligatorio.` / `Introduce un correo electrónico válido.` |
| Teléfono (`con-telefono`) | Opcional salvo que se marque «Prefiero que me llaméis». Si tiene contenido, debe tener 9 dígitos empezando por 6, 7, 8 o 9 (`/^[6789]\d{8}$/`). | `El teléfono es obligatorio si prefieres que te llamemos.` / `Introduce un teléfono válido de 9 dígitos (empezando por 6, 7, 8 o 9).` |
| Prefiero que me llaméis (`con-llamar`) | Casilla booleana opcional. Al activarla cambia `required` en el campo teléfono y lanza su validación. | No genera error propio; condiciona la obligatoriedad de `Teléfono`. |
| Motivo (`con-motivo`) | Obligatorio. Debe seleccionarse una opción distinta al valor vacío inicial. | `Este campo es obligatorio.` |
| Mensaje (`con-mensaje`) | Obligatorio. Longitud entre 15 y 300 caracteres con contador en tiempo real. | `Este campo es obligatorio.` / `Debe tener al menos 15 caracteres.` / `No puede superar los 300 caracteres.` |

### Qué se ha hecho

- **Capa de datos (`js/almacen.js`):** implementadas las funciones `obtenerTodos`, `obtenerPorId`, `crear`, `actualizar` y `borrar` serializando colecciones en `localStorage` para `usuarios` y `mensajes`.
- **Validación accesible (`js/validacion.js` y `js/main.js`):** validación en `blur` y en `input` una vez tocado el campo (`tocados`), leyendo las restricciones desde los atributos HTML (`required`, `minLength`, `maxLength`), actualizando `aria-invalid` y enlazando los mensajes mediante `aria-describedby`.
- **CRUD completo de usuarios (`usuarios.html`):** alta sin almacenar contraseñas, listado dinámico en `js/ui.js`, edición reutilizando el mismo formulario con modo edición y borrado con confirmación previa mediante delegación de eventos.
- **Contacto y recordatorio en `localStorage` (`contacto.html`):** validación condicional entre la preferencia de llamada y el teléfono, contador de caracteres en el `textarea`, persistencia del nombre y correo en `localStorage` para autorrellenar el formulario y listado de mensajes enviados con edición y borrado confirmado.
- **Estilos de formularios y estados (`css/styles.css`):** estilos coherentes con los tokens de `variables.css` para campos, bordes de error con `[aria-invalid="true"]` y tarjetas de registros.

### Qué falta

- Conectar el buscador de `index.html` para filtrar el catálogo de juegos en tiempo real.
- Implementar el filtrado de logros por categoría en `juego.html` y `logros.html`.
- Desarrollar la creación y seguimiento de *runs* personalizadas en `crear-run.html` y `mis-runs.html` apoyándose en `almacen.js`.
- Activar el cambio de tema claro/oscuro desde el botón de la cabecera y la navegación SPA.

### Qué ha costado más

- **Reutilizar los formularios para crear y editar registros:** gestionar el estado `idEditando` en ambos formularios (manteniendo las contraseñas obligatorias al registrar pero opcionales al editar un usuario, y sincronizando la obligatoriedad del teléfono al editar un mensaje), además de restaurar textos, botones y errores al cancelar o terminar la edición.
- **Coordinar las validaciones cruzadas y los eventos en tiempo real:** lograr que los errores no salten antes de que el usuario salga del campo (`blur`), que desaparezcan al corregir (`input`) y que marcar o desmarcar la casilla de llamada actualice al momento el estado del campo teléfono.