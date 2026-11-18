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

## Desarrollo Web en Entorno Cliente (DWEC)

En esta parte del repositorio se desarrolla la aplicación funcional de **CaminandoLogros** con HTML, CSS y JavaScript modular (`ES Modules`), partiendo de los tokens y vistas definidas en DIW y respetando la restricción WSG 2.4 (peso inicial inferior a 500 KB por página).

### Estructura de código
- `index.html` y vistas secundarias (`juego.html`, `logros.html`, `crear-run.html`, `mis-runs.html`): páginas HTML de la aplicación.
- `css/variables.css` y `css/styles.css`: tokens de color, tipografía y espaciado extraídos de Figma junto con los estilos de componentes.
- `js/datos.js`: catálogo de juegos y listado de logros relacionados mediante `juegoId`.
- `js/ui.js`: funciones encargadas de construir y pintar los elementos en el DOM.
- `js/main.js`: lógica principal de navegación, lectura de parámetros y eventos.
- `img/`: iconos SVG exportados desde Figma.

### Backlog

Ordenado por prioridad y dividido en tareas pequeñas para probar cada pieza por separado:

1. **Estructura base y datos de ejemplo (Hito 1):** organizar las carpetas (`css/`, `js/`, `img/`), configurar ESLint y definir las entidades `juegos` y `logros` en `datos.js`.
2. **Menú de navegación (Hito 1):** barra superior común en todas las vistas con enlaces a `Explorar`, `Mis Runs` y `Crear Run`.
3. **Listado principal de juegos (Hito 1):** generar desde JavaScript la cuadrícula de tarjetas de juegos en `index.html` leyendo desde `datos.js`.
4. **Ficha detalle de juego (Hito 1):** cargar en `juego.html` la información del título seleccionado y su listado de logros asociados.
5. **Buscador de juegos:** filtrar el catálogo de `Explorar` por nombre en tiempo real.
6. **Filtro de logros por categoría:** filtrar los logros dentro de un juego por `Todos`, `Perdibles`, `Dificultad` y `Recompensas`.
7. **Alta de run con validación:** formulario en `crear-run.html` para crear una run personalizada eligiendo juego, nombre y logros, guardándola en `localStorage`.
8. **Seguimiento en Mis Runs:** mostrar en `mis-runs.html` las partidas guardadas y permitir marcar logros como completados para calcular el progreso.
9. **Cambio de tema claro/oscuro:** conectar el botón de la cabecera con `data-theme="dark"` y guardar la preferencia del usuario.
10. **Conversión a SPA:** gestionar las rutas y el cambio de vistas desde JavaScript sin recargar la página.

### Mapa de pantallas

- **Explorar (`index.html`):** vista principal con el buscador y el listado en cuadrícula de los juegos disponibles. Muestra la portada, el título, el total de logros, los logros perdibles y la etiqueta de género de cada juego.
- **Detalle de juego (`juego.html`):** ficha individual a la que se accede al pulsar un juego desde Explorar. Muestra la portada, el título, el género, la sinopsis, los indicadores de nota, total de logros y duración estimada, los botones de acción (`Crear Run` y `Ver Logros`) y el listado de logros del juego.
- **Ver logros (`logros.html`):** vista extendida de los logros de un juego concreto con su etiqueta de categoría, la recompensa que desbloquea dentro del juego y los pasos para conseguirlo. (Enlazada para próximos hitos).
- **Crear Run (`crear-run.html`):** vista con formulario para configurar una nueva run seleccionando el juego, un nombre de partida y los logros objetivo. (Enlazada en el menú para próximos hitos).
- **Mis Runs (`mis-runs.html`):** vista con el listado de runs guardadas agrupadas por juego y el porcentaje de logros completados en cada una. (Enlazada en el menú para próximos hitos).