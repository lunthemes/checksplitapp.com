import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:lungusterus@gmail.com">lungusterus@gmail.com</a>';

export const deleteDataEs: DeleteDataPage = {
  metaTitle: "Eliminar sus datos (sin eliminar la cuenta) — CheqSplit",
  metaDescription:
    "Eliminar datos de la app CheqSplit sin cerrar su cuenta. Información de Google Play sobre «eliminar datos».",
  h1: "Eliminar sus datos (sin eliminar la cuenta)",
  lastUpdatedPrefix: "Última actualización:",
  lastUpdatedDate: "16 de abril de 2026",
  intro:
    "<strong>CheqSplit</strong> (esta app en Google Play) le permite eliminar parte o todos los datos de la app <strong>sin</strong> cerrar su cuenta. Esta página es el enlace exigido por Google Play para solicitudes de «eliminar datos».",
  step1Title: "Paso 1 — En la aplicación (más rápido)",
  step1Intro: "Puede eliminar el contenido usted mismo:",
  step1Bullets: [
    {
      label: "Viajes, cuentas y borradores",
      text: "Elimine o archive elementos en la app según lo permita cada pantalla (p. ej., eliminar un viaje, vaciar una cuenta, descartar un borrador).",
    },
    {
      label: "Datos solo locales",
      text: "Vaciar el almacenamiento de la app o desinstalar elimina los datos guardados solo en su dispositivo.",
    },
  ],
  step1Note:
    "Los cambios que haga en la app se sincronizan con nuestros servidores cuando su cuenta usa funciones en la nube; eliminar contenido en la app quita ese contenido de su espacio activo cuando sea técnicamente posible.",
  step2Title: "Paso 2 — Escríbanos para limpieza en el servidor",
  step2Intro:
    "Si necesita eliminar datos concretos de nuestros sistemas (p. ej., copias que no puede borrar en la app, o un error), contáctenos:",
  step2Steps: [
    `Correo a ${mail} desde la dirección vinculada a su cuenta (o describa cómo podemos verificarle).`,
    "Asunto: <strong>Solicitud de eliminación de datos (sin cierre de cuenta)</strong>.",
    "Liste qué eliminar (p. ej., «todos los viajes antes de 2025», «viaje llamado X», «imágenes de recibos desde la fecha …»).",
  ],
  step2Note:
    "Podemos pedirle que confirme su identidad antes de cambiar o eliminar datos vinculados a su cuenta.",
  vsTitle: "Qué eliminamos frente a qué conservamos",
  vsBullets: [
    {
      label: "Eliminado bajo solicitud / en la app:",
      text: "Viajes, cuentas, líneas, etiquetas de participantes y contenido similar creado por el usuario que usted elimina o que eliminamos tras una solicitud por correo verificada, sujeto a copias de seguridad y retenciones legales indicadas abajo.",
    },
    {
      label: "Puede conservarse temporalmente:",
      text: "Copias de seguridad o réplicas cifradas hasta que caduquen en los ciclos habituales de backup (normalmente a corto plazo).",
    },
    {
      label: "Puede conservarse más tiempo si la ley lo exige:",
      text: "Registros mínimos por impuestos, prevención del fraude o proceso legal.",
    },
    {
      label: "Copias de otros usuarios:",
      text: "Si compartió una cuenta, otros participantes pueden seguir teniendo su copia; no podemos eliminar datos en el dispositivo de otra persona.",
    },
    {
      label: "Suscripciones:",
      text: "El historial de compras con Apple / Google sigue las políticas de la tienda; eliminar datos de la app no borra los recibos de la tienda.",
    },
  ],
  timingTitle: "Plazos",
  timingBody:
    "Nos proponemos completar solicitudes verificadas de eliminación <strong>parcial</strong> en un máximo de <strong>30 días</strong>, salvo que la ley o la seguridad exijan lo contrario.",
  accountInsteadLead: "Para eliminar toda su cuenta en su lugar, vea",
  accountInsteadLinkText: "Eliminar su cuenta",
  accountInsteadTail: ".",
  privacyLead: "Privacidad general:",
  privacyLinkText: "Política de privacidad",
  privacyTail: ".",
};
