import { CharacterCategory } from '../types';

// Datos base
export const BASE_DATA: CharacterCategory[] = [
  {
    key: 'Rol',
    accent: 'c1',
    list: [
      'protagonista', 'antagonista', 'deuteragonista', 'tritagonista', 'mentor', 'aliado', 'confidente', 'heraldo', 'guardián del umbral', 'embaucador', 'sombra', 'tentador', 'villano', 'antihéroe', 'líder', 'seguidor leal', 'traidor', 'mártir', 'cuidador', 'sabio', 'explorador', 'rebelde', 'visionario', 'forajido', 'justiciero', 'investigador', 'protector', 'usurpador', 'narrador'
    ]
  },
  {
    key: 'Profesión',
    accent: 'c2',
    list: [
      'médico', 'enfermero', 'psicólogo', 'psiquiatra', 'trabajador social', 'fisioterapeuta', 'paramédico', 'bombero', 'policía', 'abogado', 'juez', 'procurador', 'contador', 'economista', 'administrador', 'profesor de primaria', 'profesor de secundaria', 'catedrático', 'investigador', 'científico', 'biólogo', 'químico', 'físico', 'geólogo', 'meteorólogo', 'arquitecto', 'urbanista', 'topógrafo', 'ingeniero civil', 'ingeniero mecánico', 'ingeniero eléctrico', 'ingeniero industrial', 'ingeniero químico', 'ingeniero informático', 'programador', 'desarrollador web', 'analista de datos', 'científico de datos', 'administrador de sistemas', 'técnico de soporte', 'electricista', 'carpintero', 'fontanero', 'soldador', 'albañil', 'pintor de casas', 'mecánico automotriz', 'técnico de laboratorio', 'panadero', 'pastelero', 'cocinero', 'chef', 'camarero', 'barista', 'sommelier', 'carnicero', 'pescador', 'agricultor', 'ganadero', 'jardinero', 'paisajista', 'repartidor', 'mensajero', 'conductor de autobús', 'taxista', 'piloto comercial', 'tripulante de cabina', 'controlador aéreo', 'fotógrafo', 'periodista', 'editor', 'diseñador gráfico', 'ilustrador', 'diseñador de moda', 'sastre', 'peluquero', 'maquillador', 'actor', 'músico', 'cantante', 'compositor', 'director de cine', 'director de teatro', 'coreógrafo', 'bibliotecario', 'archivero', 'museólogo', 'curador de arte', 'arqueólogo', 'historiador', 'traductor', 'intérprete', 'guía turístico', 'recepcionista', 'gerente de tienda', 'vendedor', 'cajero', 'logista', 'almacenista', 'guardia de seguridad', 'detective privado', 'criminólogo', 'veterinario', 'cuidador de animales', 'entrenador canino', 'apicultor', 'joyero', 'relojero', 'minero', 'obrero de fábrica', 'piloto de drones'
    ]
  },
  {
    key: 'Interno',
    accent: 'c3',
    list: [
      'ambicioso', 'inseguro', 'idealista', 'pragmático', 'impulsivo', 'paciente', 'perfeccionista', 'paranoico', 'valiente', 'orgulloso', 'curioso', 'empático', 'frío', 'obstinado', 'creativo', 'melancólico', 'resiliente', 'introvertido', 'extrovertido', 'cínico', 'ingenuo', 'racional', 'emocional', 'disciplinado', 'caótico', 'calculador', 'temerario', 'cauteloso', 'perseverante', 'apático', 'compasivo', 'reservado', 'irascible', 'leal', 'desconfiado', 'optimista', 'pesimista', 'audaz', 'humilde', 'controlador', 'independiente'
    ]
  },
  {
    key: 'Externo',
    accent: 'c4',
    list: [
      'peligroso', 'admirado', 'subestimado', 'famoso', 'infame', 'misterioso', 'confiable', 'amenazante', 'carismático', 'torpe', 'elegante', 'ruidoso', 'discreto', 'extravagante', 'respetado', 'temido', 'popular', 'desconocido', 'polémico', 'influyente', 'accesible', 'distante', 'imponente', 'humilde', 'mediático', 'notorio', 'caritativo', 'autoritario', 'servicial', 'arrogante', 'simpático', 'antipático', 'diligente', 'caótico', 'estricto', 'flexible', 'provocador', 'solemne', 'jovial', 'sobrio'
    ]
  }
];

// Datos avanzados
export const ADVANCED_DATA: Record<string, CharacterCategory> = {
  // Básicas
  tematica: {
    key: 'Temática',
    accent: 'c5',
    list: [
      'fantasía', 'ciencia ficción', 'histórico', 'noir', 'superhéroes', 'postapocalíptico', 'steampunk', 'ciberpunk', 'western', 'terror', 'misterio', 'romance', 'aventura', 'thriller', 'comedia', 'slice of life', 'mitología', 'espionaje', 'policíaco', 'distopía', 'space opera', 'ucronía', 'bélico', 'drama', 'surrealista'
    ]
  },
  especie: {
    key: 'Especie',
    accent: 'c6',
    list: [
      'humano', 'elfo', 'enano', 'orco', 'vampiro', 'hada', 'ángel', 'demonio', 'androide', 'alienígena', 'metamorfo', 'licántropo', 'gnomo', 'trasgo', 'sirena', 'ciborg', 'driada', 'centauro', 'medusa', 'dragón'
    ]
  },
  alineamiento: {
    key: 'Alineamiento moral',
    accent: 'c7',
    list: [
      'legal bueno', 'neutral bueno', 'caótico bueno', 'legal neutral', 'neutral verdadero', 'caótico neutral', 'legal malvado', 'neutral malvado', 'caótico malvado'
    ]
  },
  objeto: {
    key: 'Objeto de interés',
    accent: 'c8',
    list: [
      'llave antigua', 'mapa incompleto', 'reloj de bolsillo', 'medallón familiar', 'caja musical', 'diario perdido', 'anillo con inscripción', 'brújula que no apunta al norte', 'pluma estilográfica', 'cámara analógica', 'cáliz agrietado', 'botella con mensaje', 'tarjeta perforada', 'chip misterioso', 'gema opalescente', 'libro encadenado', 'máscara ritual', 'moneda con error', 'fotografía descolorida', 'llave USB encriptada', 'caja fuerte portátil', 'amuletos rotos', 'navaja grabada', 'linterna eterna', 'orbe de cristal', 'estatuilla de jade', 'piedra imantada', 'panfleto antiguo', 'billete fuera de circulación', 'sello de cera', 'tiza azul', 'naipes marcados', 'radiotransmisor', 'prisma arcoíris', 'espejo biselado', 'llavero con coordenadas', 'broche real', 'pergamino sellado', 'concha parlante', 'frasco fosforescente'
    ]
  },
  orientacion: {
    key: 'Orientación sexual',
    accent: 'c19',
    list: [
      'heterosexual', 'homosexual', 'bisexual', 'pansexual', 'asexual', 'demisexual', 'aromántico', 'gris-asexual', 'fluido', 'en cuestionamiento', 'no especificado'
    ]
  },
  formato: {
    key: 'Formato/Medio',
    accent: 'c20',
    list: [
      'videojuego', 'serie de TV', 'película', 'corto animado', 'anime', 'manga', 'novela', 'cómic', 'obra de teatro', 'documental', 'podcast', 'radio', 'teatro musical', 'performance art', 'instalación interactiva', 'realidad virtual', 'streaming', 'web serie', 'miniserie', 'película animada', 'stop motion', 'pixel art', '3D animado', '2D tradicional', 'live action'
    ]
  },
  genero: {
    key: 'Género',
    accent: 'c23',
    list: [
      'masculino', 'femenino', 'no binario', 'género fluido', 'agénero', 'bigénero', 'pangénero', 'demigénero', 'género neutro', 'género queer', 'género no conforme', 'género variante', 'género expansivo', 'género creativo', 'género místico', 'género tecnológico', 'género orgánico', 'género cósmico', 'género elemental', 'género híbrido'
    ]
  },

  // Estilos
  estiloAutor: {
    key: 'Estilo de autor',
    accent: 'c21',
    list: [
      'Disney', 'Pixar', 'Studio Ghibli', 'Cory Loftis', 'Hayao Miyazaki', 'Wes Anderson', 'Tim Burton', 'Guillermo del Toro', 'Christopher Nolan', 'Quentin Tarantino', 'Alfred Hitchcock', 'Stanley Kubrick', 'David Fincher', 'Martin Scorsese', 'Steven Spielberg', 'James Cameron', 'Ridley Scott', 'Denis Villeneuve', 'Bong Joon-ho', 'Park Chan-wook', 'Akira Kurosawa', 'Federico Fellini', 'Ingmar Bergman', 'Jean-Luc Godard', 'François Truffaut', 'Pedro Almodóvar', 'Alejandro González Iñárritu', 'Alfonso Cuarón', 'Carlos Reygadas', 'Fernando Meirelles', 'Walter Salles'
    ]
  },
  tipoEstilo: {
    key: 'Tipo de estilo',
    accent: 'c22',
    list: [
      'realismo', 'impresionismo', 'expresionismo', 'surrealismo', 'cubismo', 'abstracto', 'minimalista', 'barroco', 'renacentista', 'gótico', 'art deco', 'art nouveau', 'pop art', 'arte conceptual', 'arte digital', 'pixel art', 'low poly', 'high poly', 'cel shading', 'toon shading', 'realismo fotográfico', 'estilo anime', 'estilo manga', 'estilo cartoon', 'estilo cómic', 'estilo noir', 'estilo western', 'estilo cyberpunk', 'estilo steampunk', 'estilo victoriano', 'estilo medieval'
    ]
  },

  // Características físicas
  edad: {
    key: 'Edad',
    accent: 'c9',
    list: [
      'niño (5-12)', 'adolescente (13-17)', 'joven adulto (18-25)', 'adulto joven (26-35)', 'adulto maduro (36-50)', 'adulto mayor (51-65)', 'anciano (66+)', 'inmortal', 'edad desconocida', 'edad variable'
    ]
  },
  altura: {
    key: 'Altura',
    accent: 'c9',
    list: [
      'muy bajo', 'bajo', 'promedio', 'alto', 'muy alto', 'gigante', 'enano', 'altura variable', 'altura desconocida'
    ]
  },
  complexion: {
    key: 'Complexión',
    accent: 'c9',
    list: [
      'delgado', 'atlético', 'robusto', 'corpulento', 'frágil', 'musculoso', 'esbelto', 'redondeado', 'angular', 'elegante'
    ]
  },
  caracteristicas: {
    key: 'Características distintivas',
    accent: 'c9',
    list: [
      'cicatriz facial', 'tatuaje visible', 'piercings múltiples', 'tic nervioso', 'cojera', 'ojos de diferente color', 'cabello blanco', 'marca de nacimiento', 'protesis', 'quemadura', 'temblor en las manos', 'voz ronca', 'risa peculiar', 'forma de caminar única', 'gesto característico', 'postura distintiva', 'olor particular', 'sonrisa especial', 'mirada penetrante', 'aura misteriosa'
    ]
  },

  // Antecedentes
  claseSocial: {
    key: 'Clase social',
    accent: 'c10',
    list: [
      'aristócrata', 'burgués', 'clase media alta', 'clase media', 'clase trabajadora', 'pobre', 'indigente', 'nuevo rico', 'noble caído', 'ascendente social', 'descendente social', 'sin clase definida'
    ]
  },
  origen: {
    key: 'Lugar de origen',
    accent: 'c10',
    list: [
      'ciudad grande', 'pueblo pequeño', 'zona rural', 'extranjero', 'nómada', 'isla remota', 'montaña', 'desierto', 'selva', 'tundra', 'suburbio', 'barrio marginal', 'zona industrial', 'zona residencial', 'sin hogar fijo', 'origen desconocido'
    ]
  },
  educacion: {
    key: 'Educación',
    accent: 'c10',
    list: [
      'autodidacta', 'educación básica', 'educación media', 'universitaria', 'militar', 'religiosa', 'técnica', 'artística', 'científica', 'filosófica', 'comercial', 'médica', 'legal', 'sin educación formal', 'educación especializada', 'educación internacional'
    ]
  },
  historiaFamiliar: {
    key: 'Historia familiar',
    accent: 'c10',
    list: [
      'huérfano', 'familia numerosa', 'hijo único', 'adoptado', 'exiliado', 'familia disfuncional', 'familia tradicional', 'familia moderna', 'padres separados', 'padres fallecidos', 'familia extendida', 'sin familia', 'familia adoptiva', 'familia reconstituida', 'familia monoparental'
    ]
  },

  // Motivaciones
  motivacion: {
    key: 'Motivación principal',
    accent: 'c11',
    list: [
      'venganza', 'amor', 'poder', 'conocimiento', 'redención', 'supervivencia', 'justicia', 'libertad', 'reconocimiento', 'riqueza', 'paz interior', 'protección', 'descubrimiento', 'revolución', 'tradición', 'innovación', 'equilibrio', 'caos', 'orden', 'destrucción'
    ]
  },
  objetivoCorto: {
    key: 'Objetivo a corto plazo',
    accent: 'c11',
    list: [
      'encontrar trabajo', 'resolver misterio', 'escapar', 'proteger a alguien', 'conseguir dinero', 'encontrar refugio', 'hacer amigos', 'aprender habilidad', 'vengarse', 'reconciliarse', 'viajar', 'estudiar', 'trabajar', 'descansar', 'luchar', 'huir', 'buscar', 'encontrar', 'crear', 'destruir'
    ]
  },
  sueno: {
    key: 'Sueño/aspiración',
    accent: 'c11',
    list: [
      'fama', 'riqueza', 'paz interior', 'descubrimiento', 'revolución', 'familia', 'carrera exitosa', 'viajar por el mundo', 'ayudar a otros', 'ser recordado', 'vivir en paz', 'tener poder', 'ser libre', 'encontrar el amor', 'cumplir misión', 'dejar legado', 'ser feliz', 'cambiar el mundo', 'encontrar verdad', 'alcanzar perfección'
    ]
  },

  // Relaciones
  estadoCivil: {
    key: 'Estado civil',
    accent: 'c12',
    list: [
      'soltero', 'casado', 'divorciado', 'viudo', 'comprometido', 'en relación', 'separado', 'poliamoroso', 'asexual', 'aromántico', 'complicado', 'no especificado'
    ]
  },
  relacionFamiliar: {
    key: 'Relación familiar',
    accent: 'c12',
    list: [
      'padre', 'madre', 'hijo', 'hija', 'hermano', 'hermana', 'abuelo', 'abuela', 'tío', 'tía', 'primo', 'prima', 'sobrino', 'sobrina', 'padrastro', 'madrastra', 'hijastro', 'hijastra', 'hermanastro', 'hermanastra', 'sin familia'
    ]
  },
  conexionSocial: {
    key: 'Conexión social',
    accent: 'c12',
    list: [
      'líder de banda', 'miembro de culto', 'espía', 'informante', 'mentor', 'discípulo', 'líder comunitario', 'activista', 'influencer', 'celebridad', 'anónimo', 'recluso', 'nómada', 'inmigrante', 'refugiado', 'exiliado', 'turista', 'estudiante', 'profesor', 'trabajador'
    ]
  },

  // Habilidades
  habilidadEspecial: {
    key: 'Habilidad especial',
    accent: 'c13',
    list: [
      'artes marciales', 'hacking', 'diplomacia', 'supervivencia', 'medicina', 'ingeniería', 'magia', 'psíquico', 'combate', 'estrategia', 'persuasión', 'observación', 'memoria fotográfica', 'intuición', 'empatía', 'liderazgo', 'creatividad', 'análisis', 'adaptación', 'resistencia'
    ]
  },
  talentoArtistico: {
    key: 'Talento artístico',
    accent: 'c13',
    list: [
      'música', 'pintura', 'escritura', 'danza', 'escultura', 'fotografía', 'cine', 'teatro', 'poesía', 'dibujo', 'canto', 'actuación', 'diseño', 'arquitectura', 'moda', 'gastronomía', 'jardinería', 'artesanía', 'decoración', 'iluminación'
    ]
  },
  conocimiento: {
    key: 'Conocimiento especializado',
    accent: 'c13',
    list: [
      'historia antigua', 'botánica', 'astronomía', 'criminología', 'psicología', 'filosofía', 'teología', 'lingüística', 'arqueología', 'paleontología', 'geología', 'meteorología', 'oceanografía', 'antropología', 'sociología', 'economía', 'política', 'derecho', 'medicina', 'tecnología'
    ]
  },

  // Debilidades
  miedo: {
    key: 'Miedo',
    accent: 'c14',
    list: [
      'alturas', 'espacios cerrados', 'oscuridad', 'agua', 'arañas', 'serpientes', 'multitudes', 'soledad', 'fracaso', 'éxito', 'cambio', 'responsabilidad', 'intimidad', 'rechazo', 'abandono', 'enfermedad', 'muerte', 'locura', 'pérdida de control', 'incertidumbre'
    ]
  },
  vicio: {
    key: 'Vicio',
    accent: 'c14',
    list: [
      'alcohol', 'drogas', 'juego', 'trabajo', 'compras', 'comida', 'sexo', 'poder', 'fama', 'dinero', 'tecnología', 'deportes', 'apuestas', 'tabaco', 'medicamentos', 'internet', 'redes sociales', 'televisión', 'videojuegos', 'coleccionismo'
    ]
  },
  trauma: {
    key: 'Trauma',
    accent: 'c14',
    list: [
      'pérdida de ser querido', 'accidente', 'guerra', 'abuso', 'traición', 'abandono', 'violencia', 'catástrofe natural', 'enfermedad', 'pobreza', 'discriminación', 'aislamiento', 'humillación', 'tortura', 'secuestro', 'violación', 'muerte cercana', 'fracaso público', 'pérdida de memoria', 'experiencia paranormal'
    ]
  },

  // Entorno
  epoca: {
    key: 'Época',
    accent: 'c15',
    list: [
      'prehistórica', 'antigua', 'medieval', 'renacentista', 'industrial', 'victoriana', 'belle époque', 'art deco', 'guerra fría', 'contemporánea', 'futuro cercano', 'futuro lejano', 'postapocalíptica', 'alternativa', 'paralela', 'atemporal'
    ]
  },
  clima: {
    key: 'Clima',
    accent: 'c15',
    list: [
      'desértico', 'tropical', 'ártico', 'templado', 'lluvioso', 'seco', 'húmedo', 'ventoso', 'nevado', 'tormentoso', 'soleado', 'nublado', 'variable', 'extremo', 'artificial', 'controlado'
    ]
  },
  entornoUrbano: {
    key: 'Entorno urbano',
    accent: 'c15',
    list: [
      'metrópolis', 'ciudad pequeña', 'suburbio', 'barrio marginal', 'zona rural', 'pueblo fantasma', 'ciudad flotante', 'ciudad subterránea', 'colonia espacial', 'estación orbital', 'ciudad amurallada', 'distrito comercial', 'zona residencial', 'área industrial', 'centro histórico', 'nuevo desarrollo'
    ]
  },

  // Elementos narrativos
  tipoConflicto: {
    key: 'Tipo de conflicto',
    accent: 'c16',
    list: [
      'interno', 'interpersonal', 'social', 'ambiental', 'sobrenatural', 'tecnológico', 'político', 'económico', 'religioso', 'cultural', 'generacional', 'de género', 'racial', 'de clase', 'de poder', 'de ideología', 'de supervivencia', 'de identidad', 'de lealtad', 'de fe'
    ]
  },
  arcoPersonaje: {
    key: 'Arco de personaje',
    accent: 'c16',
    list: [
      'redención', 'caída', 'crecimiento', 'estancamiento', 'transformación', 'regresión', 'evolución', 'revolución', 'adaptación', 'resistencia', 'aceptación', 'negación', 'superación', 'fracaso', 'éxito', 'equilibrio', 'desequilibrio', 'armonía', 'conflicto', 'resolución'
    ]
  },
  funcionTrama: {
    key: 'Función en la trama',
    accent: 'c16',
    list: [
      'catalizador', 'obstáculo', 'aliado temporal', 'antagonista secreto', 'mentor', 'heraldo', 'guardián', 'embaucador', 'sombra', 'tentador', 'víctima', 'testigo', 'investigador', 'protector', 'destructor', 'creador', 'mediador', 'provocador', 'estabilizador', 'agitador'
    ]
  },

  // Características únicas
  poder: {
    key: 'Poder/Don',
    accent: 'c17',
    list: [
      'telepatía', 'regeneración', 'suerte extrema', 'memoria fotográfica', 'intuición', 'empatía', 'manipulación del tiempo', 'teletransportación', 'invisibilidad', 'vuelo', 'superfuerza', 'supervelocidad', 'control mental', 'manipulación de elementos', 'curación', 'precognición', 'telequinesis', 'metamorfosis', 'inmortalidad', 'control de la realidad'
    ]
  },
  condicion: {
    key: 'Condición especial',
    accent: 'c17',
    list: [
      'inmortal', 'viajero temporal', 'múltiples personalidades', 'amnesia', 'síndrome de Estocolmo', 'trastorno de identidad', 'autismo', 'síndrome de Asperger', 'TDAH', 'depresión', 'ansiedad', 'TEPT', 'trastorno bipolar', 'esquizofrenia', 'trastorno obsesivo-compulsivo', 'fobia social', 'agorafobia', 'claustrofobia', 'acrofobia', 'hipocondría'
    ]
  },
  marca: {
    key: 'Marca distintiva',
    accent: 'c17',
    list: [
      'ojo de diferente color', 'cabello blanco', 'voz única', 'aura especial', 'cicatriz mágica', 'tatuaje místico', 'piercing sagrado', 'marca de nacimiento especial', 'protesis avanzada', 'implante tecnológico', 'marca de clan', 'símbolo sagrado', 'tatuaje tribal', 'piercing ritual', 'marca de guerra', 'cicatriz de honor', 'tatuaje de esclavo', 'marca de hereje', 'símbolo de poder', 'marca de destino'
    ]
  },

  // Elementos culturales
  religion: {
    key: 'Religión',
    accent: 'c18',
    list: [
      'creyente devoto', 'agnóstico', 'ateo', 'místico', 'fanático', 'tolerante', 'fundamentalista', 'liberal', 'conservador', 'progresista', 'tradicionalista', 'reformista', 'sincretista', 'panteísta', 'animista', 'chamánico', 'monoteísta', 'politeísta', 'panteísta', 'humanista'
    ]
  },
  cultura: {
    key: 'Cultura',
    accent: 'c18',
    list: [
      'tradicionalista', 'moderno', 'cosmopolita', 'nacionalista', 'universalista', 'conservador', 'progresista', 'revolucionario', 'reaccionario', 'adaptativo', 'resistente', 'asimilado', 'marginal', 'dominante', 'subordinada', 'emergente', 'decadente', 'renaciente', 'híbrida', 'pura'
    ]
  },
  valores: {
    key: 'Valores',
    accent: 'c18',
    list: [
      'familia', 'honor', 'libertad', 'justicia', 'conocimiento', 'poder', 'amor', 'lealtad', 'verdad', 'belleza', 'sabiduría', 'valentía', 'compasión', 'humildad', 'dignidad', 'respeto', 'tolerancia', 'solidaridad', 'responsabilidad', 'integridad'
    ]
  }
};
