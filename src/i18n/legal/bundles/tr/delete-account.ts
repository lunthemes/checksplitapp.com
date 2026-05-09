import type { DeleteAccountPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteAccountTr: DeleteAccountPage = {
  metaTitle: "Hesabınızı silin – CheqSplit",
  metaDescription:
    "CheqSplit hesabınızın ve ilişkili kişisel verilerin silinmesini nasıl talep edeceğiniz.",
  h1: "Hesabınızı silin",
  lastUpdatedPrefix: "Son güncelleme:",
  lastUpdatedDate: "16 Nisan 2026",
  intro:
    `Bu sayfa, <strong>CheqSplit</strong> tarafından işlenen CheqSplit hesabınızın ve ilişkili kişisel verilerin silinmesini nasıl talep edeceğinizi açıklar (Google Play’de bu geliştirici kaydında listelenen uygulama).`,
  howTitle: "Hesap silme talebi nasıl yapılır",
  howSteps: [
    `CheqSplit hesabınıza bağlı adresten ${mail} adresine e-posta gönderin (Firebase / Google oturumu için kullandığınız aynı adres, uygunsa).`,
    "Konu satırı: <strong>Hesap silme talebi</strong>.",
    "İletide CheqSplit hesabınızın ve ilişkili verilerin silinmesini istediğinizi açıkça belirtin. Google ile oturum açıyorsanız kimliği eşleştirmemiz için Google hesabı e-postanızı yazın.",
  ],
  howNote:
    "Talebi işlemeden önce kimliğinizi doğrulamak için yanıt verebiliriz. Talebi doğrulayamazsak ek bilgi isteyebiliriz.",
  whatDeleteTitle: "Ne siliyoruz",
  whatDeleteIntro: "Doğrulanmış bir talebi işledikten sonra şunları silmeyi veya anonimleştirmeyi hedefliyoruz:",
  whatDeleteList: [
    "Arka ucumuzda tutulan kimlik doğrulama profil verileriniz (ör. hesabınızla ilişkili Firebase Authentication kullanıcı kaydı).",
    "Veritabanlarımızda kullanıcı tanımlayıcınız altında saklanan uygulama verileri (ör. geziler, hesaplar ve hesaba bağlı içerik), aşağıdaki teknik ve yasal kısıtlara tabi.",
  ],
  retainTitle: "Ne korunabilir (ve neden)",
  retainBullets: [
    {
      label: "Toplu veya kimliği kaldırılmış veriler",
      text: "makul şekilde size yeniden bağlanamayan.",
    },
    {
      label: "Tutmamız gereken kayıtlar",
      text: "yasanın gerektirdiği süreyle sınırlı olarak (ör. vergi, muhasebe veya dolandırıcılık önleme yükümlülükleri).",
    },
    {
      label: "Yalnızca cihazınızda tutulan veriler",
      text: "uygulamayı kaldırana veya uygulama verilerini temizleyene kadar; başka bir kullanıcının telefonunu uzaktan silemeyiz. Paylaşılan hesapların zaten alınmış kopyalarını diğer katılımcılar saklayabilir.",
    },
    {
      label: "Abonelik ve satın alma kayıtları",
      text: "Apple veya Google ve ödeme/abonelik sağlayıcılarımız tarafından işlenir; bunlar kendi politikalarına ve yasal gerekliliklerine göre saklanabilir; CheqSplit hesabınızı silmek App Store / Play faturalama sistemlerindeki makbuzları silmez.",
    },
  ],
  timingTitle: "Süreler",
  timingBody:
    "Doğrulanmış silme taleplerini makul bir süre içinde, genellikle <strong>30 gün</strong> içinde işleriz; yasa veya olağanüstü durumlar (ör. anlaşmazlık veya kötüye kullanım soruşturması) daha uzun süre gerektirmediği sürece.",
  privacySeeAlso: "Genel gizlilik uygulamaları için bkz.",
  privacyLinkText: "Gizlilik Politikası",
  relatedNavLabel: "İlgili:",
  relatedDeleteData: "Verilerinizi silin (hesabı silmeden)",
  relatedTerms: "Hizmet Şartları",
};
