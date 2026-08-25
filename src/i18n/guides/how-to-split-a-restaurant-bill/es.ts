import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideEs: RestaurantBillGuideCopy = {
  metaTitle: "Cómo dividir una cuenta de restaurante de forma justa | CheqSplit",
  metaDescription: "Comprueba el ticket final, asigna los platos individuales, reparte las consumiciones compartidas entre las personas correspondientes y asegúrate de que todas las cantidades suman el total de la cuenta.",
  h1: "Cómo dividir una cuenta de restaurante de forma justa",
  answer: "Comprueba el ticket final, asigna los platos individuales, reparte las consumiciones compartidas entre las personas correspondientes y asegúrate de que todas las cantidades suman el total de la cuenta.",
  choiceH2: "Elige entre dividir a partes iguales o repartir por conceptos",
  choiceBody: "Dividir a partes iguales es la opción más rápida cuando los pedidos son parecidos y todos están de acuerdo en compartir el total por igual. Si cada persona ha pedido platos o bebidas diferentes, normalmente es más justo repartir por conceptos: asigna primero a cada uno lo suyo. Los platos para compartir, botellas y postres deben repartirse únicamente entre quienes los hayan consumido. Después añade cargos de servicio, impuestos y propina para que todas las partes sumen exactamente el total del ticket. Si las cantidades no cuadran, probablemente falte alguna línea o algún cargo. Así, el reparto refleja la cuenta real en lugar de basarse en una estimación.",
  stepsH2: "Cómo dividir una cuenta de restaurante de forma justa en 5 pasos",
  steps: [
    { title: "Comprueba el ticket", desc: "Confirma cada concepto y el total final antes de empezar a repartir los importes." },
    { title: "Asigna los pedidos individuales", desc: "Asigna a cada persona únicamente los platos y bebidas que ha pedido. Empieza por los platos más evidentes." },
    { title: "Reparte las consumiciones compartidas", desc: "Incluye únicamente a quienes hayan compartido el plato o la botella. Divide a partes iguales o según el porcentaje acordado." },
    { title: "Comprueba los importes pendientes", desc: "Busca conceptos sin asignar, errores de escaneo y cualquier impuesto o propina que todavía no se haya incluido." },
    { title: "Muestra el resultado", desc: "Cada persona debe poder ver su parte y el saldo resultante para que todos estén de acuerdo antes de marcharse." }
  ],
  exampleH2: "Ejemplo: dividir una cuenta de restaurante entre cuatro personas",
  exampleIntro: "Maya, Noah, Owen y Priya comparten una misma cuenta. Maya y Noah también comparten una botella de vino. Se aplica un 10 % de servicio al subtotal de comida y bebida.",
  exampleReceiptCaption: "Ticket",
  exampleReceiptRows: [
    { item: "Pasta (Maya)", amount: "€15.00" },
    { item: "Hamburguesa (Noah)", amount: "€15.00" },
    { item: "Pescado a la parrilla (Owen)", amount: "€20.00" },
    { item: "Ensalada (Priya)", amount: "€10.00" },
    { item: "Botella de vino (Maya y Noah)", amount: "€20.00" },
    { item: "Subtotal", amount: "€80.00" },
    { item: "Servicio (10 %)", amount: "€8.00" },
    { item: "Total del ticket", amount: "€88.00" }
  ],
  exampleShareCaption: "Importe a pagar",
  exampleShareRows: [
    { person: "Maya (pasta €15 + media botella de vino €10 + servicio €2.50)", amount: "€27.50" },
    { person: "Noah (hamburguesa €15 + media botella de vino €10 + servicio €2.50)", amount: "€27.50" },
    { person: "Owen (pescado €20 + servicio €2.00)", amount: "€22.00" },
    { person: "Priya (ensalada €10 + servicio €1.00)", amount: "€11.00" },
    { person: "Total de las cuatro partes", amount: "€88.00" }
  ],
  exampleNote: "El servicio se reparte proporcionalmente al gasto en comida y bebida de cada persona: Maya y Noah tienen €25 cada uno del subtotal de €80, Owen €20 y Priya €10. Las cuatro partes suman exactamente los €88 del total del ticket.",
  productH2: "Divide una cuenta de restaurante por conceptos con CheqSplit",
  productBody: "CheqSplit sigue los mismos pasos: escanea el ticket del restaurante, comparte la cuenta mediante enlace o QR, asigna los platos individuales y las consumiciones compartidas, añade cargos y propina por separado y muestra quién debe cuánto a quién. CheqSplit calcula los saldos, pero no transfiere dinero.",
  productCta: "Dividir un ticket de restaurante con CheqSplit",
  faqH2: "Preguntas frecuentes sobre cómo dividir una cuenta",
  faq: [
    {
      q: "¿La cuenta debe dividirse siempre a partes iguales?",
      a: "Solo si el grupo está de acuerdo y los pedidos son parecidos. Si cada persona ha pedido cosas diferentes, asigna los conceptos de forma que el total de cada uno corresponda a lo que realmente ha consumido.",
    },
    {
      q: "¿Cómo debe repartirse una consumición compartida?",
      a: "Entre las personas que lo hayan compartido, a partes iguales o según un porcentaje acordado cuando las cantidades no sean iguales.",
    },
    {
      q: "¿Por qué a veces no coinciden los totales?",
      a: "Comprueba los conceptos sin asignar, los errores de escaneo o escritura y los impuestos o la propina en Tasas y Propina para que el reparto coincida con el total del ticket.",
    },
  ],
  ctaTitle: "¿Listos para dividir la cuenta directamente en la mesa?",
  ctaBody: "Escanea la cuenta, asigna cada concepto a quienes lo han pedido y comprueba claramente quién debe cuánto a quién.",
  crumbGuides: "Guías",
  crumbCurrent: "Cuenta del restaurante",
  colItem: "Producto",
  colAmount: "Importe",
  colPerson: "Persona",
  colDue: "Importe a pagar",
};
