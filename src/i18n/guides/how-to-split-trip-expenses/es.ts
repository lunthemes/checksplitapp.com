import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideEs: TripExpensesGuideCopy = {
  metaTitle: "Cómo dividir los gastos de viaje con amigos | CheqSplit",
  metaDescription: "Crea un único viaje, registra quién pagó y quién participó en cada gasto y revisa los saldos antes de que termine el viaje.",
  h1: "Cómo dividir los gastos de viaje con amigos",
  answer: "Crea un único viaje, registra quién pagó y quién participó en cada gasto y revisa los saldos antes de que termine el viaje.",
  answerFollow: "Si registráis cada gasto en el momento, el grupo no tendrá que rehacer todas las cuentas al final del viaje.",
  rulesH2: "Acordad las reglas de los gastos antes del viaje",
  rulesBody: "Antes del primer pago, acordad qué gastos comparte todo el grupo y cuáles corresponden solo a algunas personas. Registrad por separado quién pagó y los participantes y añadid cada gasto cuanto antes. Elegid una moneda de grupo para los saldos. Para otra moneda, comprobad el tipo de cambio de referencia y la fecha, introducid un tipo manual o el importe realmente cargado por el banco en la moneda del grupo. Unas reglas claras mantienen un registro coherente.",
  stepsH2: "Cómo dividir los gastos de viaje en 5 pasos",
  steps: [
    { title: "Crea un grupo para tu viaje", desc: "En la pantalla de inicio, toca Crear grupo, ponle un nombre, elige su moneda e invita a los participantes mediante enlace o código QR." },
    { title: "Registra quién pagó", desc: "Indica claramente quién pagó cada gasto: entradas, alojamiento, transporte, restaurante o cualquier actividad que alguien haya pagado para el grupo." },
    { title: "Selecciona a los participantes", desc: "Incluye a todo el mundo únicamente cuando el gasto sea realmente compartido por todos. Para un taxi, una actividad o un restaurante, selecciona solo a las personas implicadas." },
    { title: "Añade los gastos cuanto antes", desc: "Abre Gastos y toca Añadir gasto. Introduce descripción, importe y moneda, elige una categoría opcional y quién pagó, y después Todos o Personalizado para los participantes. Cualquier participante puede añadir un gasto." },
    { title: "Revisa los saldos", desc: "Antes de cerrar o exportar el viaje, comprueba el historial compartido y quién debe cuánto a quién. Añade primero cualquier gasto que falte." }
  ],
  exampleH2: "Ejemplo: dividir un viaje de fin de semana entre cuatro amigos",
  exampleIntro: "Alex, Blair, Casey y Dana pasan un fin de semana juntos. El hotel y las entradas del museo corresponden a los cuatro. El taxi lo comparten solo Alex, Blair y Casey.",
  exampleExpenseCaption: "Gastos",
  exampleExpenseRows: [
    {
      expense: "Hotel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taxi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Entradas del museo",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Pagado frente a parte correspondiente",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "debe recibir €265.00" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "debe €90.00" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "debe €135.00" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "debe €40.00" }
  ],
  exampleSettle: "Blair paga €90 a Alex, Casey le paga €135 y Dana €40. Esos tres pagos suman €265, exactamente lo que Alex debe recibir.",
  exampleNote: "Reparto: hotel €100 por persona; taxi €15 por persona para los tres pasajeros; entradas €20 por persona. Dana no utilizó el taxi, así que su parte es de €120 en lugar de €135. CheqSplit calcula estos saldos, pero no transfiere dinero.",
  productH2: "Controla los gastos compartidos del viaje con CheqSplit",
  productBody: "Crea un grupo desde el inicio, elige su moneda e invita a los participantes. En Gastos, Añadir gasto permite registrar hotel, taxi o entradas: importe, moneda, pagador y participantes con Todos o Personalizado; la categoría es opcional. En Recibos, Añadir recibo abre el escaneo o la carga. Revisa los artículos y divide por artículo o a partes iguales. Para otras monedas, usa el tipo de referencia y su fecha, un tipo manual o el cargo bancario real en la moneda del grupo. Revisa los saldos, exporta un informe PDF o archiva el grupo. CheqSplit no transfiere dinero.",
  productCta: "Controlar gastos de grupo y de viaje con CheqSplit",
  receiptNoteBefore: "Si un gasto del viaje es una cuenta de restaurante detallada, utiliza primero ",
  receiptNoteLabel: "el método de reparto por conceptos",
  receiptNoteAfter: " directamente desde la pestaña Recibos del grupo con Añadir recibo. Escanea o sube el recibo, revisa los artículos y el total y divide por artículo o a partes iguales; se vincula automáticamente al grupo.",
  faqH2: "Preguntas frecuentes sobre cómo dividir gastos de viaje",
  faq: [
    {
      q: "¿Todos los gastos deben incluir a todo el grupo?",
      a: "No. Selecciona únicamente a los participantes implicados en ese gasto.",
    },
    {
      q: "¿Cuándo conviene registrar un gasto?",
      a: "Lo antes posible, mientras el importe, quién pagó y las personas implicadas todavía estén claros.",
    },
    {
      q: "¿Cómo debe gestionarse una cuenta de restaurante?",
      a: "En el grupo, abre Recibos y toca Añadir recibo para escanear o subir uno. Revisa los artículos y el total detectados; el recibo se vincula automáticamente al grupo. Después divide por artículo o a partes iguales.",
    },
    {
      q: "¿CheqSplit convierte divisas?",
      a: "Sí. Los gastos del grupo pueden estar en otra moneda. Comprueba el tipo de referencia y su fecha, introduce un tipo manual o el cargo bancario real en la moneda del grupo. CheqSplit utiliza el importe convertido para los saldos del grupo; no transfiere dinero.",
    },
  ],
  ctaTitle: "Todo el viaje en un único registro compartido",
  ctaBody: "Crea un viaje para el grupo, añade los gastos a medida que surjan y deja que CheqSplit muestre quién debe cuánto a quién al final.",
  crumbGuides: "Guías",
  crumbCurrent: "Gastos de viaje",
  colExpense: "Gasto",
  colPayer: "Pagado por",
  colParticipants: "Participantes",
  colAmount: "Importe",
  colPerson: "Persona",
  colPaid: "Pagado",
  colShare: "Parte",
  colResult: "Resultado",
};
