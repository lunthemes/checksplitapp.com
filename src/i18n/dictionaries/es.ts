import type { Dictionary } from "../types";

export const es: Dictionary = {
  meta: {
    title: "CheqSplit: divide gastos, escanea recibos y controla cuentas compartidas",
    description:
      "Con CheqSplit dividir gastos, escanear recibos y seguir lo que paga el grupo es más sencillo: verás con claridad quién debe cuánto a quién, ya sea en un restaurante, de viaje, de compras o en un plan con amigos.",
    ogDescription:
      "Divide gastos con criterio: recibos escaneados, gastos compartidos, saldos claros. Restaurantes, viajes, piso compartido, familia.",
    twitterDescription:
      "Dividir gastos y saldar cuentas sin hojas de cálculo ni cadenas interminables en el chat.",
    softwareDescription:
      "CheqSplit te ayuda a dividir gastos, escanear recibos, llevar al día los pagos en grupo y ver quién debe cuánto a quién, en el día a día, de viaje o con amigos.",
  },
  nav: {
    features: "Funciones",
    how: "Cómo funciona",
    useCases: "Casos de uso",
    faq: "Preguntas frecuentes",
  },
  header: { download: "Descargar la app gratis" },
  hero: {
    title: "Divide los gastos, escanea los recibos y deja que la app se encargue del resto",
    body: "Con CheqSplit escaneas recibos, sigues los gastos compartidos y ves al instante quién debe cuánto a quién, tras una cena, un viaje, la compra o cualquier plan en grupo. La app es gratis para descargar.",
    alts: [
      "CheqSplit: viaje y gasto compartido en grupo",
      "App CheqSplit con gasto compartido",
      "CheqSplit: dividir la cuenta, líneas del recibo",
    ],
  },
  heroSlide2: {
    title: "Divide cuentas de restaurante más rápido",
    description: "Escanea el recibo, asigna los artículos y ve claramente la parte de cada persona — perfecto para cenas con amigos, citas y comidas en grupo.",
    button: "Más información",
  },
  features: {
    title: "Por qué CheqSplit",
    items: [
      {
        title: "Escanea al momento",
        desc: "Carga en segundos los ítems, el IVA y el total del ticket, sin teclear todo a mano.",
      },
      {
        title: "Dividir línea a línea",
        desc: "Cada apunte del recibo va a quien corresponde, en vez de repartir todo a ciegas por mitades.",
      },
      {
        title: "Tus gastos, un solo hilo",
        desc: "Restaurante, viaje, compra: lo que aporta el grupo, con orden, en un solo lugar.",
      },
      {
        title: "Quién le debe cuánto a quién",
        desc: "Los saldos se recalculan y cada uno sabe qué le toca, sin cuentas a mano en el chat.",
      },
    ],
  },
  how: {
    title: "Cómo funciona CheqSplit",
    subtitle:
      "Cinco pasos: dividir gastos, escanear recibos, llevar los gastos compartidos y ver quién debe a quién – de la primera cena a un informe con el que todo el grupo se entienda.",
    stepPill: (n) => `PASO ${n}`,
    steps: [
      {
        label: "Crea un viaje en unos segundos",
        body: "Ponle nombre, invita a tu gente por enlace o código QR y pasa a dividir los gastos compartidos al instante.",
        imageAlt: "CheqSplit: viaje en grupo",
        bullets: [
          "Puesta en marcha inmediata",
          "Invitación por enlace o QR",
          "Cena, vacaciones, cualquier grupo de amigos",
        ],
      },
      {
        label: "Reparte la cuenta por partidas",
        body: "Cada uno ve el mismo ticket en el móvil y, al instante, marca lo suyo.",
        imageAlt: "CheqSplit: escanear y dividir un ticket",
        bullets: [
          "Anota quién paga qué",
          "Raciones a compartir, propina, cargos",
          "A simple vista, quién debe a quién y cuánto",
        ],
      },
      {
        label: "Añade los gastos compartidos",
        body: "Indica quién pagó y con quiénes conviene repartir cada importe.",
        imageAlt: "CheqSplit: móvil, gastos de grupo",
        bullets: [
          "Gastos aportados por todos",
          "A todo el grupo o solo a quienes elijas",
          "Todo queda en un solo hilo",
        ],
      },
      {
        label: "Mira, quién debe a quién",
        body: "CheqSplit suma el total, lo que corresponde a cada uno y quién debería transferir dinero a quién.",
        imageAlt: "CheqSplit: resumen de saldos, quién debe a quién",
        bullets: [
          "Gasto total del grupo",
          "Resultado por participante",
          "Clarísimo: quién, a quién, cuánto",
        ],
      },
      {
        label: "Guarda el viaje y el informe",
        body: "Archiva viajes cerrados o exporta un PDF detallado, con importes, totales y un gráfico fácil de leer.",
        imageAlt: "CheqSplit: informe del viaje o del grupo",
        bullets: [
          "Archivo de viajes hechos",
          "Informe PDF fiel al detalle",
          "Cifras, tablas y gráficos",
        ],
      },
    ],
  },
  useCases: {
    title: "Cualquier gasto que compartas",
    intro: "Cenas, escapadas, gastos de compra, familia: si varias personas ponen dinero, CheqSplit pone orden. Escanea el recibo, asigna posiciones, ajusta descuentos o propina y reparte la cuenta con claridad, sin hojas de cálculo improvisadas.",
    items: [
      { title: "Restaurantes y bares", desc: "Cuenta por raciones, cervezas, cierre limpio, sin rencores." },
      { title: "Viajes en grupo", desc: "Billete, cama, comida: lo que aporta cada uno, en un solo hilo de gasto." },
      { title: "Casa y familia", desc: "Compra, regalos, caja común, sin dejar a nadie a ciegas." },
      { title: "Compras compartidas", desc: "Regalos, pedidos, cosas a medias con amigos, pagos claros a la hora de saldar." },
    ],
  },
  cta: {
    title: "¿Listo para dejar de recalcular en el chat?",
    body: "Descarga gratis CheqSplit: divide gastos con criterio, con saldos claros y sin hojas de cálculo improvisadas.",
    sectionAria: "Descargar CheqSplit gratis",
    imgAlt: "Pantalla inicial de CheqSplit, dividir gasto en grupo",
    badgeAlts: {
      appStore: "Descargar gratis en el App Store",
      play: "Descargar gratis en Google Play",
    },
    playSoon: "Pronto",
    playDisabledHint: "Aún no disponible",
    groupAria: "Descargar la aplicación gratis",
  },
  faq: {
    title: "Preguntas frecuentes",
    items: [
      {
        q: "¿Qué es CheqSplit?",
        a: "Una app gratuita para compartir cuentas y llevar el control del gasto en grupo: recibos escaneados, reparto por filas, saldo claro de quién a quién, todo junto en la misma app.",
      },
      {
        q: "¿Puedo repartir un recibo artículo por artículo?",
        a: "Sí. Asigna cada línea a quien corresponde y cada uno paga lo que le toca, sin adivinar ‘a medias’.",
      },
      {
        q: "¿Sirve para un viaje con amigos o familia?",
        a: "Sí. Crea un viaje, añade gastos compartidos, invita a la gente, adjunta recibos y, al cierre, obtén un resumen con quién debe a quién.",
      },
      {
        q: "¿Solo es para restaurantes?",
        a: "No. Sirve para el súper, bares, escapadas, compras a medias: siempre que varias personas compartan un gasto.",
      },
      {
        q: "¿Funciona sin conexión?",
        a: "Puedes trabajar con parte de la información almacenada en el dispositivo, pero compartir un viaje y sincronizarte con el resto requiere internet.",
      },
      {
        q: "¿Cómo invito a alguien?",
        a: "Crea un viaje en la app, registra gastos y comparte el enlace del viaje. Quien se una verá el mismo resumen y sus saldos.",
      },
    ],
  },
  footer: {
    tagline: "Dividir gastos en grupo, con claridad y sin sorpresas: justo, sencillo, al instante.",
    product: "Producto",
    company: "Empresa",
    legal: "Aviso legal",
    about: "Acerca de",
    contact: "Contacto",
    privacy: "Privacidad",
    terms: "Términos",
    rights: "Todos los derechos reservados.",
  },
  a11y: {
    keyFeatures: "Funciones principales",
    primaryNav: "Navegación principal",
    openMenu: "Abrir menú",
    howSection: "Cómo funciona",
    logoHome: "Inicio de CheqSplit",
  },
};
