export const juegos = [
  {
    id: 1,
    titulo: 'Resident Evil 0 HD Remaster',
    genero: 'Survival Horror',
    sinopsis: 'En 1998, el equipo Bravo de S.T.A.R.S. investiga una serie de asesinatos en las montañas Arklay. La agente Rebecca Chambers y el exconvicto Billy Coen deberán colaborar para sobrevivir en el tren Ecliptic Express y las instalaciones de Umbrella.',
    totalLogros: 47,
    perdibles: 26,
    nota: '6,8',
    duracion: '10 HORAS',
    portada: ''
  },
  {
    id: 2,
    titulo: 'Resident Evil HD Remaster',
    genero: 'Survival Horror',
    sinopsis: 'En 1998, un equipo de fuerzas especiales es enviado a investigar unos extraños asesinatos a las afueras de Raccoon City. Tras ser atacados por una jauría de perros sedientos de sangre, se ven obligados a refugiarse en una mansión cercana, donde los suministros escasean y la muerte acecha en cada esquina.',
    totalLogros: 44,
    perdibles: 12,
    nota: '8,3',
    duracion: '11 HORAS',
    portada: ''
  },
  {
    id: 3,
    titulo: 'Resident Evil 2',
    genero: 'Survival Horror',
    sinopsis: 'Un virus letal sume a los habitantes de Raccoon City en el caos. El policía novato Leon S. Kennedy y la estudiante universitaria Claire Redfield deberán sobrevivir en la comisaría y descubrir qué se oculta tras los laboratorios de Umbrella.',
    totalLogros: 44,
    perdibles: 29,
    nota: '8,9',
    duracion: '9 HORAS',
    portada: ''
  },
  {
    id: 4,
    titulo: 'Resident Evil 3',
    genero: 'Survival Horror',
    sinopsis: 'Jill Valentine intenta escapar de una Raccoon City devastada por el brote del virus T mientras es perseguida sin descanso por Nemesis, un arma biológica programada para eliminar a los miembros de S.T.A.R.S.',
    totalLogros: 32,
    perdibles: 11,
    nota: '7,7',
    duracion: '6 HORAS',
    portada: ''
  },
  {
    id: 5,
    titulo: 'Resident Evil 4',
    genero: 'Survival Horror',
    sinopsis: 'Seis años después de la catástrofe biológica en Raccoon City, el agente Leon S. Kennedy es enviado a un remoto pueblo europeo para rescatar a la hija secuestrada del presidente de los Estados Unidos.',
    totalLogros: 46,
    perdibles: 11,
    nota: '9,2',
    duracion: '16 HORAS',
    portada: ''
  },
  {
    id: 6,
    titulo: 'Resident Evil 5',
    genero: 'Acción y Terror',
    sinopsis: 'El agente de la BSAA Chris Redfield viaja a la zona autónoma de Kijuju, en África, junto a su compañera Sheva Alomar para investigar una amenaza bioterrorista vinculada al pasado de Umbrella.',
    totalLogros: 70,
    perdibles: 0,
    nota: '8,6',
    duracion: '12 HORAS',
    portada: ''
  },
  {
    id: 7,
    titulo: 'Resident Evil 6',
    genero: 'Acción y Terror',
    sinopsis: 'Cuatro campañas entrelazadas protagonizadas por Leon S. Kennedy, Chris Redfield, Jake Muller y Ada Wong frente a ataques bioterroristas globales provocados por el virus C.',
    totalLogros: 70,
    perdibles: 0,
    nota: '6,9',
    duracion: '21 HORAS',
    portada: ''
  },
  {
    id: 8,
    titulo: 'Resident Evil 7: Biohazard',
    genero: 'Survival Horror',
    sinopsis: 'Ethan Winters viaja a una plantación abandonada en Dulvey, Luisiana, tras recibir un mensaje de su esposa desaparecida, adentrándose en la residencia de la familia Baker.',
    totalLogros: 58,
    perdibles: 17,
    nota: '8,3',
    duracion: '9 HORAS',
    portada: ''
  },
  {
    id: 9,
    titulo: 'Resident Evil Village',
    genero: 'Survival Horror',
    sinopsis: 'Años después de los sucesos de Luisiana, Ethan Winters busca a su hija secuestrada Rose en una aldea europea aislada dominada por la Madre Miranda y cuatro jerarcas.',
    totalLogros: 56,
    perdibles: 29,
    nota: '8,3',
    duracion: '10 HORAS',
    portada: ''
  },
  {
    id: 10,
    titulo: 'Resident Evil Requiem',
    genero: 'Survival Horror',
    sinopsis: 'La analista del FBI Grace Ashcroft y el agente Leon S. Kennedy investigan una serie de muertes vinculadas al pasado de Raccoon City en una historia que entrelaza terror y supervivencia.',
    totalLogros: 49,
    perdibles: 22,
    nota: '9,1',
    duracion: '11 HORAS',
    portada: ''
  }
];

export const logros = [
  {
    id: 101,
    juegoId: 1,
    titulo: 'S is for S.T.A.R.S.',
    descripcion: 'Termina el juego con rango S.',
    categoria: 'Recompensa',
    perdible: true,
    recompensa: 'Lanzacohetes con munición infinita',
    guia: 'Completa la campaña en dificultad Normal o Difícil en menos de 3 horas y 30 minutos.'
  },
  {
    id: 102,
    juegoId: 1,
    titulo: 'Leech-Shaped Hole in my Heart',
    descripcion: 'Completa el modo Leech Hunter con rango E o superior.',
    categoria: 'Recompensa',
    perdible: false,
    recompensa: 'Subfusil infinito para Rebecca y Billy',
    guia: 'Recoge al menos 90 amuletos de sanguijuela en una partida de Leech Hunter y sal por la puerta principal de la mansión.'
  },
  {
    id: 201,
    juegoId: 2,
    titulo: 'En menos que canta un zombi',
    descripcion: 'Completa el juego en 3 horas.',
    categoria: 'Recompensa',
    perdible: true,
    recompensa: 'Lanzacohetes con munición infinita',
    guia: 'Completa la partida en dificultad Normal o superior evitando combates innecesarios; el reloj sigue corriendo en el menú de pausa.'
  },
  {
    id: 202,
    juegoId: 2,
    titulo: 'Y sin pagar un céntimo',
    descripcion: 'Consigue todos los trajes.',
    categoria: 'Recompensa',
    perdible: false,
    recompensa: 'Trajes alternativos para Chris Redfield y Jill Valentine',
    guia: 'Completa la historia dos veces con Chris y dos veces con Jill en cualquier orden de finales.'
  },
  {
    id: 203,
    juegoId: 2,
    titulo: 'Guardar es de cobardes',
    descripcion: 'Completa el juego sin guardar.',
    categoria: 'Dificultad',
    perdible: true,
    recompensa: 'Partida completa sin usar cintas de tinta',
    guia: 'Juega en dificultad Muy Fácil o Fácil para minimizar el riesgo de muerte y memoriza los puntos críticos.'
  },
  {
    id: 204,
    juegoId: 2,
    titulo: 'Retrasando lo inevitable',
    descripcion: 'Salva a Richard con la ayuda de un suero.',
    categoria: 'Perdible',
    perdible: true,
    recompensa: 'Escopeta de asalto de Richard',
    guia: 'Tras hablar con Richard en el pasillo del primer piso del ala este, baja a la sala de guardado de Rebecca y vuelve con el suero antes de que expire el tiempo.'
  },
  {
    id: 301,
    juegoId: 3,
    titulo: 'Exterminio de alimañas completo',
    descripcion: 'Destruye todos los Mr. Raccoon.',
    categoria: 'Recompensa',
    perdible: true,
    recompensa: 'Cuchillo de combate indestructible',
    guia: 'Localiza las 15 figuras repartidas entre las campañas de Leon, Claire y los escenarios B.'
  },
  {
    id: 302,
    juegoId: 3,
    titulo: 'Minimalista',
    descripcion: 'Completa el juego sin abrir el baúl de objetos.',
    categoria: 'Dificultad',
    perdible: true,
    recompensa: 'Gestión pura de inventario sin almacenamiento',
    guia: 'Recoge únicamente las riñoneras imprescindibles y descarta las llaves cuando aparezca el icono de verificación.'
  },
  {
    id: 401,
    juegoId: 4,
    titulo: 'Jill Valentine',
    descripcion: 'Completa el juego en dificultad Infierno con rango S.',
    categoria: 'Dificultad',
    perdible: true,
    recompensa: 'Superación del máximo desafío en menos de 2 horas',
    guia: 'Desbloquea primero el lanzacohetes infinito en la tienda de puntos y guarda un máximo de 5 veces.'
  },
  {
    id: 501,
    juegoId: 5,
    titulo: 'Revolución a cuerda',
    descripcion: 'Destruye todos los castellanos mecánicos.',
    categoria: 'Recompensa',
    perdible: true,
    recompensa: 'Cuchillo primario indestructible',
    guia: 'Destruye el castellano mecánico oculto en cada uno de los 16 capítulos de la historia principal.'
  },
  {
    id: 601,
    juegoId: 6,
    titulo: 'Insignia de honor',
    descripcion: 'Encuentra todos los emblemas de la BSAA.',
    categoria: 'Recompensa',
    perdible: false,
    recompensa: 'Trajes alternativos y figuras extra',
    guia: 'Dispara a los 30 emblemas azules repartidos a lo largo de los capítulos 1-1 al 6-3.'
  },
  {
    id: 701,
    juegoId: 7,
    titulo: 'Reliquias',
    descripcion: 'Consigue todos los emblemas de serpiente.',
    categoria: 'Recompensa',
    perdible: false,
    recompensa: 'Archivos secretos y figuras de colección',
    guia: 'Destruye los 80 emblemas distribuidos a razón de 4 por capítulo entre las cuatro campañas.'
  },
  {
    id: 801,
    juegoId: 8,
    titulo: 'Sr. Ninguna Parte',
    descripcion: 'Destruye todas las estatuillas de Mr. Everywhere.',
    categoria: 'Recompensa',
    perdible: true,
    recompensa: 'Botas de andar rápido y secretos de defensa',
    guia: 'Rompe las 20 estatuillas en una misma partida antes de cruzar el punto de no retorno en la mina de sal.'
  },
  {
    id: 901,
    juegoId: 9,
    titulo: 'Padre veloz',
    descripcion: 'Completa la historia en menos de 3 horas.',
    categoria: 'Dificultad',
    perdible: true,
    recompensa: 'Puntos de desafío para desbloquear armas infinitas',
    guia: 'Juega en dificultad Fácil tras terminar la historia una vez y omite las zonas opcionales de tesoro.'
  },
  {
    id: 1001,
    juegoId: 10,
    titulo: 'You Little Rascal!',
    descripcion: 'Destruye todos los recuerdos de Mr. Raccoon.',
    categoria: 'Recompensa',
    perdible: true,
    recompensa: 'Desbloqueo de mejoras especiales en el menú de bonificación',
    guia: 'Localiza y destruye los 25 recuerdos repartidos entre el centro de cuidados y Raccoon City.'
  },
  {
    id: 1002,
    juegoId: 10,
    titulo: 'Speed Demon',
    descripcion: 'Completa la historia principal liberando Elpis en menos de cuatro horas.',
    categoria: 'Dificultad',
    perdible: true,
    recompensa: 'Puntos de desafío para armas especiales',
    guia: 'Prioriza los objetivos principales con Grace y Leon evitando combates opcionales y guarda manualmente por zonas.'
  }
];