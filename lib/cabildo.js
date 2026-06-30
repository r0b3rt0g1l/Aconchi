// Cabildo y gabinete de Aconchi — administración 2024-2027.
// El contenido REAL se carga desde el CMS (recurso `funcionarios`). Este array es
// solo el FALLBACK estático: placeholders "[PENDIENTE]" que la UI muestra como
// "Por designar" mientras el CMS no responde. NO inventar nombres. El shape
// mantiene `tipo` en minúsculas para alinear con CabildoSection, DirectorioGrid y
// el mapeo del CMS.
export const cabildo = [
  {
    id: 'presidente',
    tipo: 'presidente',
    orden: 1,
    nombre: '[PENDIENTE: por designar]',
    cargo: 'Presidente Municipal',
    administracion: '2024-2027',
    comisiones: [],
    bio: null,
    email: null,
    telefono: null,
    foto: null,
  },
  {
    id: 'sindica',
    tipo: 'sindica',
    orden: 2,
    nombre: '[PENDIENTE: por designar]',
    cargo: 'Síndico(a) Municipal',
    administracion: '2024-2027',
    comisiones: [],
    bio: null,
    email: null,
    telefono: null,
    foto: null,
  },
];

// Helpers de derivación. Aceptan cualquier lista de miembros (estática del
// fallback o dinámica del CMS) y devuelven la sub-vista correspondiente.
export function derivePresidente(lista) {
  if (!Array.isArray(lista)) return null;
  return lista.find((m) => m && m.tipo === 'presidente') || null;
}

export function deriveSindica(lista) {
  if (!Array.isArray(lista)) return null;
  return lista.find((m) => m && m.tipo === 'sindica') || null;
}

export function deriveRegidores(lista) {
  if (!Array.isArray(lista)) return [];
  return lista
    .filter((m) => m && m.tipo === 'regidor')
    .sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0));
}

export function deriveDIF(lista) {
  if (!Array.isArray(lista)) return null;
  return lista.find((m) => m && m.tipo === 'dif') || null;
}

// Gabinete / administración (secretaría, tesorería, contraloría). No es cabildo
// electo; se muestra en el directorio pero no en la vista de Cabildo de /gobierno.
export function deriveGabinete(lista) {
  if (!Array.isArray(lista)) return [];
  return lista
    .filter((m) => m && ['secretario', 'tesorero', 'contralor'].includes(m.tipo))
    .sort((a, b) => (a.orden ?? 0) - (b.orden ?? 0));
}

// Subordinados del directorio: todos MENOS las cabezas ya derivadas (presidente y
// síndica principales). Excluye por REFERENCIA de objeto —no por `tipo`— para que un
// 2º presidente/síndico (cargo repetido, p. ej. "Enlace Presidencial") NO se descarte:
// entra al grid como subordinado, sin duplicar a la cabeza. La página ya quitó a los
// regidores antes de llamar aquí.
export function deriveSubordinados(lista) {
  if (!Array.isArray(lista)) return [];
  const cabezas = new Set(
    [derivePresidente(lista), deriveSindica(lista)].filter(Boolean),
  );
  return lista.filter((m) => m && !cabezas.has(m));
}

// Ordena la lista por jerarquía según la posición del `tipo` en `ordenTipos`
// (los tipos no listados van al final); desempate por `orden` del CMS.
export function ordenarPorJerarquia(lista, ordenTipos = []) {
  if (!Array.isArray(lista)) return [];
  const rango = (t) => {
    const i = ordenTipos.indexOf(t);
    return i === -1 ? ordenTipos.length : i;
  };
  return [...lista].sort((a, b) => {
    const ra = rango(a?.tipo);
    const rb = rango(b?.tipo);
    if (ra !== rb) return ra - rb;
    return (a?.orden ?? 0) - (b?.orden ?? 0);
  });
}

// ¿El nombre es un placeholder "[PENDIENTE: …]"? (el cargo está confirmado pero la
// persona aún está por designar). Se usa para mostrar "Por designar" en la UI.
export function isPendingName(nombre) {
  return typeof nombre === 'string' && nombre.startsWith('[PENDIENTE');
}

// Exports legacy: calculados sobre el array estático.
export const presidente = derivePresidente(cabildo);
export const sindica = deriveSindica(cabildo);
export const regidores = deriveRegidores(cabildo);
export const dif = deriveDIF(cabildo);

export default cabildo;
