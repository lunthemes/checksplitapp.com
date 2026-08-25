import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideEs: TripExpensesGuideCopy = {
  metaTitle: "Cómo dividir los gastos de viaje con amigos | CheqSplit",
  metaDescription: "Crea un único viaje, registra quién pagó y quién participó en cada gasto y revisa los saldos antes de que termine el viaje.",
  h1: "Cómo dividir los gastos de viaje con amigos",
  answer: "Crea un único viaje, registra quién pagó y quién participó en cada gasto y revisa los saldos antes de que termine el viaje.",
  answerFollow: "Si registráis cada gasto en el momento, el grupo no tendrá que rehacer todas las cuentas al final del viaje.",
  rulesH2: "Acordad las reglas de los gastos antes del viaje",
  rulesBody: "Antes del primer pago, decidid qué costes comparte todo el grupo y cuáles corresponden solo a algunas personas. El alojamiento suele repartirse entre todos; un taxi o una entrada de museo puede ser solo para algunos participantes. Registra por separado quién pagó y quién participa en el gasto, porque quien adelanta el dinero no tiene por qué formar parte de ese reparto. Añade cada gasto mientras el importe y las personas implicadas aún están frescos. Si utilizáis varias monedas, acordad de antemano cómo registrarlas: CheqSplit no convierte divisas. Unas reglas claras desde el principio mantienen el historial coherente hasta el reparto final.",
  stepsH2: "Cómo dividir los gastos de viaje en 5 pasos",
  steps: [
    { title: "Crea el viaje con antelación", desc: "Ponle un nombre, añade a las personas implicadas e introduce cualquier gasto que ya exista para que todo el grupo parta de un único registro." },
    { title: "Registra quién pagó", desc: "Indica claramente quién pagó cada gasto: entradas, alojamiento, transporte, restaurante o cualquier actividad que alguien haya pagado para el grupo." },
    { title: "Selecciona a los participantes", desc: "Incluye a todo el mundo únicamente cuando el gasto sea realmente compartido por todos. Para un taxi, una actividad o un restaurante, selecciona solo a las personas implicadas." },
    { title: "Añade los gastos cuanto antes", desc: "Introduce los importes mientras aún los recuerdas bien. En CheqSplit, abre la pestaña Gastos y pulsa Agregar Gasto. Cualquier participante puede añadir un gasto." },
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
  productBody: "CheqSplit permite crear un viaje, registrar quién pagó y quién participó en cada gasto, mantener visible el historial común y comprobar quién debe cuánto a quién. Añade taxi, hotel o entradas desde Gastos con Agregar Gasto y una cuenta de restaurante detallada desde Cuentas con Agregar Factura. Al terminar, archiva el viaje y exporta un informe PDF. CheqSplit calcula los saldos, pero no transfiere dinero ni convierte divisas.",
  productCta: "Controlar gastos de grupo y de viaje con CheqSplit",
  receiptNoteBefore: "Si un gasto del viaje es una cuenta de restaurante detallada, utiliza primero ",
  receiptNoteLabel: "el método de reparto por conceptos",
  receiptNoteAfter: ", incluidos cargos y propina. Después abre la pestaña Cuentas del viaje y pulsa Agregar Factura.",
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
      a: "Utiliza el flujo para tickets de restaurante para hacer el reparto por conceptos, incluidos los impuestos y la propina. Después abre la pestaña Cuentas del viaje y pulsa Agregar Factura.",
    },
    {
      q: "¿CheqSplit convierte divisas?",
      a: "No. La conversión de divisas no es una función confirmada de CheqSplit. Registra los importes tal como aparecen en el gasto.",
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
