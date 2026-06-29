// Atractivos turísticos del municipio. Al clonar la plantilla, reemplaza el array
// por el inventario real del municipio. Mientras esté vacío, la sección de turismo
// se muestra "en preparación".
//
// Cada entrada debe seguir esta forma:
//   {
//     slug, nombre, tipo, ubicacion, descripcionCorta, descripcionLarga,
//     portada, galeria: [{ src, alt }, ...], coordenadas: { lat, lon },
//     horario, destacado: boolean,
//   }

// Atractivos de Aconchi. Sin fotos inventadas: `portada` usa el placeholder hasta
// contar con imágenes reales del municipio. `coordenadas` y `horario` quedan
// pendientes (no especificados en la fuente).
const PLACEHOLDER = "/images/placeholder.jpg";

export const atractivos = [
  {
    slug: "aguas-termales-el-agua-caliente",
    nombre: "Aguas Termales El Agua Caliente",
    tipo: "Sitio natural",
    ubicacion: "Aconchi, Sonora",
    descripcionCorta:
      "Manantial de aguas termales medicinales que alcanzan los 59 °C, a 4 km del centro.",
    descripcionLarga:
      "Manantial de aguas termales medicinales que alcanzan los 59 °C, reconocido por sus propiedades terapéuticas. Ubicado a 4 km del centro por la carretera Hermosillo-Arizpe.",
    portada: PLACEHOLDER,
    galeria: [],
    coordenadas: null,
    horario: null,
    destacado: true,
  },
  {
    slug: "templo-san-pedro-y-san-pablo",
    nombre: "Templo de San Pedro y San Pablo",
    tipo: "Patrimonio",
    ubicacion: "Aconchi, Sonora",
    descripcionCorta:
      "Templo franciscano de finales del siglo XVIII; alberga un venerado Cristo negro.",
    descripcionLarga:
      "Templo de arquitectura franciscana de finales del siglo XVIII, con el escudo de la orden en el arco de la puerta principal. Alberga un Cristo negro de inexplicable procedencia, uno de los más venerados de la región.",
    portada: PLACEHOLDER,
    galeria: [],
    coordenadas: null,
    horario: null,
    destacado: true,
  },
];

export function getAtractivoPorSlug(slug) {
  return atractivos.find((a) => a.slug === slug) || null;
}

export function getAtractivosCercanos(slugActual, limit = 3) {
  return atractivos
    .filter((a) => a.slug !== slugActual)
    .slice(0, limit);
}

// Platillos y dulces típicos del municipio (gastronomía).
export const gastronomia = {
  platillos: [],
  dulces: [],
};

// Artesanías típicas del municipio.
export const artesanias = [];

export default atractivos;
