// Configuración del Municipio de Aconchi, Sonora. Administración 2024-2027.
// Construido sobre plantilla-municipal. Solo se llenan datos CONFIRMADOS; lo no
// confirmado se queda en null/'' con marca <<PENDIENTE>> (NO se inventa).
export const municipalConfig = {
  identidad: {
    nombreCorto: 'Aconchi',
    nombreOficial: 'Municipio de Aconchi',
    nombreCompleto: 'H. Ayuntamiento de Aconchi, Sonora',
    estado: 'Sonora',
    pais: 'México',
    administracion: '2024-2027',
    lema: '',
    fundacion: {
      anio: 1639,
      texto:
        'Misión de San Pedro de Aconchi, fundada en 1639 por el jesuita portugués Bartolomé Castaño, en territorio ópata de la Ruta del Río Sonora.',
    },
    municipioLibre: '1932', // rehabilitado el 13 de abril de 1932 (Ley Número 74)
    identidadEconomica: '', // <<PENDIENTE>>
    sitiosHistoricos: [
      'Templo de San Pedro y San Pablo',
      'Aguas Termales El Agua Caliente',
    ],
    ubicacionGeografica: 'Ruta del Río Sonora',
  },

  datos: {
    superficieKm2: 358.74,
    poblacion2020: 2563, // INEGI Censo 2020
    comunidades: 8,
    altitudMin: 500,
    altitudMax: 2200,
    altitudMedia: 612,
    densidad: null, // <<PENDIENTE>>
    idh: null, // <<PENDIENTE>>
    coordenadas: {
      latStr: '29°49′29″ N',
      lonStr: '110°13′28″ O',
      lat: 29.8247,
      lon: -110.2244,
    },
    lada: '623',
    cp: '84360',
    // Colindancias confirmadas (6 rumbos).
    colindancias: {
      norte: 'Huépac',
      noreste: 'Cumpas',
      sur: 'Baviácora',
      suroeste: 'Ures',
      oeste: 'Rayón',
      noroeste: 'San Felipe de Jesús',
    },
    hidrografia: 'Río Sonora, manantiales termales El Agua Caliente',
  },

  clima: {
    tipo: '', // <<PENDIENTE>>
    temperaturaMediaAnualC: null,
    precipitacionMediaAnualMm: null,
  },

  actividadesEconomicas: {
    principales: [], // <<PENDIENTE>>
    minerales: [],
  },

  // 8 localidades en total; por ahora solo la cabecera confirmada.
  localidades: [
    { nombre: 'Aconchi', tipo: 'cabecera', habitantes: null },
  ],

  contacto: {
    // PRIVACIDAD: teléfono/correo NO se publican como enlaces. Vacíos → la UI no
    // renderiza tel:/mailto:.
    direccion: '',
    cp: '84360',
    ciudad: 'Aconchi, Sonora',
    direccionCompleta: '',
    telefonos: [],
    email: '',
    horarios: '',
  },

  redes: {
    facebook: null,
    instagram: null,
    twitter: null,
    youtube: null,
  },

  enlacesExternos: {
    transparenciaAyuntamiento: null, // <<PENDIENTE>>
    transparenciaAyuntamientoSevac: null,
    transparenciaAyuntamientoLeyes: null,
    // Portal de Transparencia del Estado de Sonora — ficha de Aconchi (id 1094).
    transparenciaSonora:
      'https://transparencia.sonora.gob.mx/informacion-publica/organismos/9/municipios/1094/aconchi',
    plataformaNacionalTransparencia: 'https://www.plataformadetransparencia.org.mx',
    avisoPrivacidadPdf: null, // <<PENDIENTE>>
  },

  // Paleta blanco/cobre de la flota. Los nombres de variables se conservan de la
  // plantilla ('guinda' = carbón, 'dorado' = cobre); solo cambian los valores.
  // Sincronizada con app/globals.css (@theme).
  paleta: {
    guinda: '#23292E',
    guindaProfundo: '#15191D',
    guindaSuave: '#3A434B',
    dorado: '#B5732E',
    doradoSuave: '#C98A4E',
    crema: '#F4EFE7',
    texto: '#1A1A1A',
    textoSecundario: '#4A4A4A',
    fondo: '#FFFFFF',
    borde: '#E5E5E5',
  },

  servicios: {
    cloudinaryCloud: '', // <<PENDIENTE: se define al conectar el CMS>>
    siteUrl:
      process.env.NEXT_PUBLIC_SITE_URL || 'https://aconchi-gobierno.vercel.app',
  },

  developer: {
    nombre: 'Northa Digital',
    anioActual: 2026,
  },
};

export default municipalConfig;
