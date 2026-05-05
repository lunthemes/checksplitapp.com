import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:lungusterus@gmail.com">lungusterus@gmail.com</a>';

export const deleteAccountEs: DeleteAccountPage = {
  metaTitle: "Eliminar su cuenta — CheqSplit",
  metaDescription:
    "Cómo solicitar la eliminación de su cuenta CheqSplit y los datos personales asociados.",
  h1: "Eliminar su cuenta",
  lastUpdatedPrefix: "Última actualización:",
  lastUpdatedDate: "16 de abril de 2026",
  intro:
    `Esta página explica cómo solicitar la eliminación de su cuenta CheqSplit y los datos personales asociados tratados por <strong>CheqSplit</strong> (la aplicación listada en Google Play en esta ficha de desarrollador).`,
  howTitle: "Cómo solicitar la eliminación de la cuenta",
  howSteps: [
    `Envíe un correo a ${mail} desde la dirección vinculada a su cuenta CheqSplit (la misma que usa para Firebase / inicio de sesión con Google, si aplica).`,
    "Use la línea de asunto: <strong>Solicitud de eliminación de cuenta</strong>.",
    "Indique claramente en el mensaje que desea eliminar su cuenta CheqSplit y los datos asociados. Si inició sesión con Google, mencione el correo de la cuenta de Google para que podamos verificar su identidad.",
  ],
  howNote:
    "Podemos responder para confirmar su identidad antes de procesar la solicitud. Si no podemos verificarla, podemos pedir información adicional.",
  whatDeleteTitle: "Qué eliminamos",
  whatDeleteIntro: "Tras procesar una solicitud verificada, nos proponemos eliminar o anonimizar:",
  whatDeleteList: [
    "Los datos de perfil de autenticación en nuestro backend (p. ej., el registro de usuario de Firebase Authentication asociado a su cuenta).",
    "Los datos de la app almacenados bajo su identificador de usuario en nuestras bases de datos (p. ej., viajes, cuentas y contenido relacionado vinculado a su cuenta), sujeto a las restricciones técnicas y legales indicadas a continuación.",
  ],
  retainTitle: "Qué puede conservarse (y por qué)",
  retainBullets: [
    {
      label: "Datos agregados o desidentificados",
      text: "que no puedan relacionarse razonablemente con usted.",
    },
    {
      label: "Registros que debemos conservar",
      text: "durante un tiempo limitado cuando la ley lo exija (por ejemplo, obligaciones fiscales, contables o de prevención del fraude).",
    },
    {
      label: "Datos solo en su dispositivo",
      text: "hasta que desinstale la app o borre los datos de la app; no podemos borrar de forma remota el teléfono de otro usuario. Otros participantes pueden conservar copias de cuentas compartidas que ya hayan recibido.",
    },
    {
      label: "Registros de suscripción y compras",
      text: "procesados por Apple o Google y nuestros proveedores de pago/suscripción pueden conservarse según sus políticas y requisitos legales; eliminar su cuenta CheqSplit no elimina los recibos en los sistemas de facturación de App Store / Play.",
    },
  ],
  timingTitle: "Plazos",
  timingBody:
    "Procesaremos las solicitudes de eliminación verificadas en un plazo razonable, normalmente en un máximo de <strong>30 días</strong>, salvo que la ley o circunstancias excepcionales (p. ej., disputa o investigación por abuso) exijan un plazo mayor.",
  privacySeeAlso: "Para prácticas generales de privacidad, consulte nuestra",
  privacyLinkText: "Política de privacidad",
  relatedNavLabel: "Relacionado:",
  relatedDeleteData: "Eliminar sus datos (sin eliminar la cuenta)",
  relatedTerms: "Términos del servicio",
};
