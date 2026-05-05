import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyEs: PrivacyPage = {
  metaTitle: "Política de privacidad — CheqSplit",
  metaDescription:
    "Cómo CheqSplit recopila, utiliza y protege su información cuando usa nuestra aplicación móvil.",
  h1: "Política de privacidad",
  lastUpdatedPrefix: "Última actualización:",
  lastUpdatedDate: "25 de marzo de 2026",
  intro:
    'CheqSplit («nosotros», «nuestro» o «nos») se compromete a proteger su privacidad. Esta Política de privacidad explica cómo recopilamos, utilizamos y protegemos su información cuando usa nuestra aplicación móvil.',
  s1Title: "1 — Información que recopilamos",
  s1Intro:
    "CheqSplit recopila los datos mínimos necesarios para ofrecer la funcionalidad de división de cuentas:",
  s1Bullets: [
    {
      label: "Autenticación",
      text: "Puede usar CheqSplit con una sesión anónima, o vincular o iniciar sesión con correo electrónico y contraseña (almacenados y verificados por Firebase Authentication), o iniciar sesión con Google. Si usa correo/contraseña o Google, recibimos los identificadores que Firebase asocia a su cuenta (normalmente el correo y, en Google, su nombre) para que pueda iniciar sesión en otros dispositivos y recuperar el acceso. Las contraseñas las gestiona Firebase; no almacenamos su contraseña en texto plano.",
    },
    {
      label: "Datos de cuentas y viajes",
      text: "Información que introduce voluntariamente, incluidos nombres de artículos, cantidades, precios, nombres de participantes, nombres de viajes y datos relacionados con gastos compartidos.",
    },
    {
      label: "Imágenes de recibos y escaneo",
      text: "Las fotos que toma o importa pueden analizarse en su dispositivo mediante reconocimiento de texto local (OCR). Cuando el escaneo inteligente de recibos está activado en la app, partes de la imagen del recibo y/o el texto extraído pueden enviarse al servicio de IA generativa de Google (Gemini) para ayudar a detectar líneas y totales. Revise y corrija siempre los ítems antes de compartir una cuenta.",
    },
    {
      label: "Suscripciones",
      text: "Si compra un plan premium, Apple procesa el pago. Usamos RevenueCat para validar derechos; RevenueCat recibe un identificador de usuario de la app y datos relacionados con la compra según se describe en su política.",
    },
    {
      label: "Información del dispositivo",
      text: "Datos básicos del dispositivo y diagnósticos para el funcionamiento de la app y informes de fallos.",
    },
  ],
  s2Title: "2 — Cómo usamos su información",
  s2Intro: "Usamos la información recopilada para:",
  s2List: [
    "Proporcionar funciones de división y uso compartido de cuentas",
    "Permitir la colaboración en tiempo real con otros participantes",
    "Guardar el historial de sus cuentas para su comodidad",
    "Mejorar el rendimiento de la app y corregir errores",
  ],
  s3Title: "3 — Almacenamiento y seguridad de los datos",
  s3Intro: "Sus datos se almacenan de forma segura mediante los servicios de Google Firebase:",
  s3List: [
    "Los datos de cuentas se guardan en Firebase Realtime Database con reglas de seguridad que garantizan que solo los participantes autorizados pueden acceder a cuentas concretas.",
    "Los datos se cifran en tránsito mediante HTTPS.",
    "No almacenamos información de pago ni procesamos pagos.",
  ],
  s4Title: "4 — Compartición de datos",
  s4Intro:
    "No vendemos, intercambiamos ni alquilamos su información personal a terceros. Sus datos solo pueden compartirse:",
  s4List: [
    "Con otros participantes a los que invite a dividir una cuenta (pueden ver los ítems de la cuenta y el nombre para mostrar que elija)",
    "Con proveedores de servicios (Firebase/Google) para alojamiento e infraestructura",
    "Si la ley lo exige o para proteger nuestros derechos",
  ],
  s5Title: "5 — Conservación de datos",
  s5Body:
    "Los datos de cuentas se conservan mientras los mantenga en la app. Puede eliminar sus cuentas en cualquier momento. Las sesiones completadas se guardan localmente en su dispositivo y pueden borrarse desde los ajustes de la app.",
  s6Title: "6 — Sus derechos",
  s6Intro: "Tiene derecho a:",
  s6List: [
    "Acceder a los datos almacenados en la app",
    "Eliminar sus cuentas e historial de sesiones",
    "Solicitar información sobre los datos que conservamos",
  ],
  s7Title: "7 — Privacidad infantil",
  s7Body:
    "CheqSplit no está destinado a menores de 13 años. No recopilamos a sabiendas información personal de menores.",
  s8Title: "8 — Servicios de terceros",
  s8Intro: "Nuestra app utiliza los siguientes servicios de terceros:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Autenticación, Realtime Database e infraestructura relacionada. Enlace: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Procesamiento en la nube opcional para entender recibos cuando el escaneo inteligente está disponible. Enlace: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} y aplican las políticas de privacidad de Google.`,
    },
    {
      label: "RevenueCat",
      text: `Estado de suscripción y gestión de compras dentro de la app. Enlace: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "Distribución de la app y compras dentro de la app a través de App Store.",
    },
    {
      label: "OCR en el dispositivo",
      text: "El reconocimiento de texto de imágenes de recibos puede ejecutarse en su dispositivo con las API locales de Apple (y en Android, OCR del dispositivo/fabricante cuando corresponda).",
    },
  ],
  s9Title: "9 — Cambios en esta política",
  s9Body:
    'Podemos actualizar esta Política de privacidad ocasionalmente. Le notificaremos los cambios publicando la nueva política en la app y actualizando la fecha de «Última actualización».',
  s10Title: "10 — Contáctenos",
  s10Intro: "Si tiene preguntas sobre esta Política de privacidad, contáctenos:",
  emailLabel: "Correo electrónico:",
  developerLabel: "Desarrollador:",
  developerName: "Lunthemes",
  relatedNavLabel: "Vea también:",
  relatedTerms: "Términos del servicio",
  relatedDeleteAccount: "Eliminar su cuenta",
  relatedDeleteData: "Eliminar sus datos",
};
