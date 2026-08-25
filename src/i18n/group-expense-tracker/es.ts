import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerEs: GroupExpenseTrackerCopy = {
  metaTitle: "Controla los gastos del grupo y descubre quién debe cuánto a quién | CheqSplit",
  metaDescription: "Reúne todos los gastos compartidos en un solo sitio, indica quién pagó y quién participó en cada gasto y consulta en cualquier momento los saldos del grupo.",
  softwareDescription: "Reúne todos los gastos compartidos en un solo sitio, indica quién pagó y quién participó en cada gasto y consulta en cualquier momento los saldos del grupo.",
  h1: "Controla los gastos del grupo y descubre quién debe cuánto a quién",
  heroText: "Reúne todos los gastos compartidos en un solo sitio, indica quién pagó y quién participó en cada gasto y consulta en cualquier momento los saldos del grupo.",
  downloadCta: "Descarga gratis",
  secondaryCta: "",
  nav: {
    how: "Cómo funciona el seguimiento de gastos de grupo",
    faq: "Preguntas frecuentes",
  },
  timelineH2: "Un historial compartido en lugar de gastos perdidos entre mensajes",
  timelineText: "Una persona paga el hotel, otra compra las entradas y otra se encarga del taxi. En lugar de buscarlo todo después entre mensajes, CheqSplit guarda cada gasto en un único historial compartido.",
  howH2: "Cómo funciona el seguimiento de gastos de grupo",
  steps: [
    {
      title: "Invita al grupo al viaje",
      text: "Después de crear el viaje y ponerle un nombre, invita a los participantes mediante un enlace o código QR.",
      imageAlt: "Invita al grupo al viaje",
    },
    {
      title: "Añade cada gasto",
      text: "Abre la pestaña Gastos y pulsa Agregar Gasto. Introduce la descripción y el importe, indica quién pagó y selecciona quién participó en ese gasto.",
      imageAlt: "Añade cada gasto",
    },
    {
      title: "Elige quién compartió el gasto",
      text: "Selecciona Todos o Personalizado y marca únicamente a las personas a las que corresponde ese gasto.",
      imageAlt: "Elige quién compartió el gasto",
    },
    {
      title: "Consulta el historial de gastos compartidos",
      text: "Cada gasto aparece en la pestaña Gastos con el importe, quién pagó y los participantes.",
      imageAlt: "Consulta el historial de gastos compartidos",
    },
    {
      title: "Comprueba quién debe cuánto a quién",
      text: "Abre Resumen para ver quién tiene que recibir dinero y quién tiene que pagar. CheqSplit calcula los saldos, pero no transfiere dinero.",
      imageAlt: "Comprueba quién debe cuánto a quién",
    }
  ],
  subsetH2: "Usa el reparto adecuado para cada gasto",
  subsetText: "No todos los gastos corresponden a todo el grupo. Asigna el taxi solo a quienes viajaron en él, las entradas a quienes participaron y los gastos realmente comunes a todo el grupo. Para una cuenta detallada de restaurante, utiliza la pestaña Cuentas y Agregar Factura.",
  receiptBridgeH2: "Añade al viaje una cuenta de restaurante dividida por conceptos",
  receiptBridgeText: "Cuando tengáis una cuenta de restaurante detallada, utiliza primero el reparto por conceptos para asignar lo que tomó cada uno, incluidos los cargos y la propina. Después abre la pestaña Cuentas del viaje y pulsa Agregar Factura.",
  receiptBridgeCta: "Ver cómo funciona el reparto del ticket",
  reportH2: "Mantén un registro que el grupo pueda consultar más adelante",
  reportText: "Archiva el viaje y exporta un informe PDF con gastos, totales, tablas y gráfico. Es mucho más fácil de revisar que intentar reconstruir las cuentas de memoria.",
  fitsH2: "Cuándo viene bien CheqSplit",
  fits: [
    "Un fin de semana o unas vacaciones con amigos",
    "Un viaje en grupo con alojamiento, transporte, comidas, entradas o actividades",
    "Varios gastos de viaje pagados por distintas personas",
    "Una cuenta de restaurante detallada, añadida desde la pestaña Cuentas con Agregar Factura",
  ],
  faqH2: "Preguntas frecuentes sobre gastos de grupo",
  faq: [
    {
      q: "¿Pueden añadir gastos distintas personas?",
      a: "Sí. Cualquier participante puede abrir la pestaña Gastos y pulsar Agregar Gasto. Para un ticket detallado, utiliza la pestaña Cuentas y pulsa Agregar Factura.",
    },
    {
      q: "¿Un gasto puede corresponder solo a algunas personas?",
      a: "Sí. Elige Todos o Personalizado y selecciona únicamente a los participantes que hayan compartido ese gasto.",
    },
    {
      q: "¿Puedo escanear un ticket para un gasto de viaje?",
      a: "Utiliza el flujo para tickets de restaurante para hacer el reparto por conceptos, incluidos los impuestos y la propina. Después abre la pestaña Cuentas del viaje y pulsa Agregar Factura.",
    },
    {
      q: "¿Cómo sé quién debe pagar a quién?",
      a: "CheqSplit combina los gastos del grupo y muestra los saldos resultantes: quién debe cuánto y a quién. Calcula las partes de cada uno, pero no transfiere dinero.",
    },
    {
      q: "¿Puedo exportar el resultado?",
      a: "Sí. CheqSplit puede exportar un informe PDF detallado con gastos, totales, tablas y un gráfico. También puedes archivar un viaje una vez terminado.",
    },
  ],
  ctaTitle: "Todos los gastos del grupo en un único registro",
  ctaBody: "Crea un viaje, añade los gastos a medida que surjan y deja que CheqSplit muestre quién debe cuánto a quién.",
  internalRestaurantBefore: "¿Necesitas dividir una sola cena por conceptos? Usa el ",
  internalRestaurantLabel: "reparto de la cuenta de restaurante",
  internalRestaurantAfter: " para escanear, invitar y asignar conceptos en tiempo real.",
  guideBridgeBefore: "¿Prefieres primero el método paso a paso? Lee ",
  guideBridgeLabel: "cómo dividir los gastos de viaje con amigos",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Controla los gastos del grupo y descubre quién debe cuánto a quién",
    timeline: "Un historial compartido en lugar de gastos perdidos entre mensajes",
    how: "Cómo funciona el seguimiento de gastos de grupo",
    subset: "Usa el reparto adecuado para cada gasto",
    receipt: "Añade al viaje una cuenta de restaurante dividida por conceptos",
    report: "Mantén un registro que el grupo pueda consultar más adelante",
    fits: "Cuándo viene bien CheqSplit",
    faq: "Preguntas frecuentes sobre gastos de grupo",
  },
};
