// Hitos históricos del municipio de Aconchi (línea del tiempo).
// Datos verificados provistos por el ayuntamiento. Shape de cada hito:
//   { ano, titulo, descripcion, datoCurioso?, imagen?, align: 'left'|'right' }
export const hitos = [
  {
    ano: "Época prehispánica",
    titulo: "Pueblo ópata",
    descripcion:
      "El territorio es habitado por el grupo étnico de los ópatas, señores del Río Sonora.",
    datoCurioso: null,
    imagen: null,
    align: "left",
  },
  {
    ano: "1616",
    titulo: "Expedición de títulos",
    descripcion:
      "Se lleva a cabo una expedición de títulos de terrenos por compra a las autoridades virreinales.",
    datoCurioso: null,
    imagen: null,
    align: "right",
  },
  {
    ano: "1639",
    titulo: "Fundación de la misión",
    descripcion:
      "El jesuita portugués Bartolomé Castaño funda la misión de San Pedro de Aconchi para evangelizar a las comunidades ópatas.",
    datoCurioso: null,
    imagen: null,
    align: "left",
  },
  {
    ano: "1930",
    titulo: "Supresión del municipio",
    descripcion:
      "Por Ley Número 68, Aconchi es suprimido e incorporado al municipio de Arizpe; en 1931 pasa a Baviácora por Ley Número 88.",
    datoCurioso: null,
    imagen: null,
    align: "right",
  },
  {
    ano: "1932",
    titulo: "Municipio libre e independiente",
    descripcion:
      "El 13 de abril, por Ley Número 74, Aconchi es rehabilitado definitivamente como municipio libre e independiente.",
    datoCurioso: null,
    imagen: null,
    align: "left",
  },
  {
    ano: "Actualidad",
    titulo: "Ruta del Río Sonora",
    descripcion:
      "Aconchi forma parte de la Ruta del Río Sonora, reconocida por sus aguas termales, arquitectura colonial y tradición carpintera.",
    datoCurioso: null,
    imagen: null,
    align: "right",
  },
];

export function getHitoByYear(year) {
  return hitos.find((h) => h.ano === String(year)) ?? null;
}

export default hitos;
