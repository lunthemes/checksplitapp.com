import type { PrivacyPage } from "../../types";

const link = (href: string, text: string) =>
  `<a class="font-medium text-brand-600 underline hover:text-brand-700" href="${href}">${text}</a>`;

export const privacyTr: PrivacyPage = {
  metaTitle: "Gizlilik Politikası – CheqSplit",
  metaDescription:
    "CheqSplit, mobil uygulamamızı kullandığınızda bilgilerinizi nasıl topladığını, kullandığını ve koruduğunu açıklar.",
  h1: "Gizlilik Politikası",
  lastUpdatedPrefix: "Son güncelleme:",
  lastUpdatedDate: "25 Mart 2026",
  intro:
    'CheqSplit (“biz”, “bizim” veya “bize”) gizliliğinizi korumayı taahhüt eder. Bu Gizlilik Politikası, mobil uygulamamızı kullandığınızda bilgilerinizi nasıl topladığımızı, kullandığımızı ve koruduğumuzu açıklar.',
  s1Title: "1 — Topladığımız Bilgiler",
  s1Intro: "CheqSplit, hesap bölme işlevini sağlamak için gerekli minimum veriyi toplar:",
  s1Bullets: [
    {
      label: "Kimlik doğrulama",
      text: "CheqSplit’i anonim bir oturumla kullanabilir veya e-posta ve parola ile bağlanabilir veya oturum açabilirsiniz (Firebase Authentication tarafından saklanır ve doğrulanır) veya Google ile oturum açabilirsiniz. E-posta/parola veya Google kullanırsanız, Firebase’in hesabınızla ilişkilendirdiği tanımlayıcıları (genellikle e-posta ve Google için adınız) alırız; böylece diğer cihazlarda oturum açabilir ve erişimi kurtarabilirsiniz. Parolalar Firebase tarafından yönetilir; düz metin olarak parolanızı saklamayız.",
    },
    {
      label: "Hesap ve gezi verileri",
      text: "Gönüllü olarak girdiğiniz bilgiler: kalem adları, miktarlar, fiyatlar, katılımcı adları, gezi adları ve ilgili ortak gider verileri.",
    },
    {
      label: "Fiş görselleri ve tarama",
      text: "Çektiğiniz veya içe aktardığınız fotoğraflar, cihaz üzerinde metin tanıma (OCR) ile analiz edilebilir. Uygulamada akıllı fiş tarama etkin olduğunda, fiş görüntüsünün bir kısmı ve/veya çıkarılan metin, kalemleri ve toplamları tespit etmeye yardımcı olmak için Google’ın üretken yapay zekâ (Gemini) hizmetine gönderilebilir. Bir hesabı paylaşmadan önce kalemleri her zaman gözden geçirin ve düzeltin.",
    },
    {
      label: "Abonelikler",
      text: "Premium plan satın alırsanız ödemeyi Apple işler. Yetkileri doğrulamak için RevenueCat kullanırız; RevenueCat, politikalarında açıklandığı gibi bir uygulama kullanıcı tanımlayıcısı ve satın alma ile ilgili veri alır.",
    },
    {
      label: "Cihaz bilgisi",
      text: "Uygulama işlevselliği ve çökme raporlama için temel cihaz ve tanılama verileri.",
    },
  ],
  s2Title: "2 — Bilgilerinizi Nasıl Kullanırız",
  s2Intro: "Toplanan bilgileri şunlar için kullanırız:",
  s2List: [
    "Hesap bölme ve paylaşma işlevini sunmak",
    "Diğer katılımcılarla gerçek zamanlı iş birliğini sağlamak",
    "Kolaylığınız için hesap geçmişinizi saklamak",
    "Uygulama performansını iyileştirmek ve hataları düzeltmek",
  ],
  s3Title: "3 — Veri Saklama ve Güvenlik",
  s3Intro: "Verileriniz Google Firebase hizmetleri kullanılarak güvenli şekilde saklanır:",
  s3List: [
    "Hesap verileri Firebase Realtime Database’de saklanır; güvenlik kuralları yalnızca yetkili katılımcıların belirli hesaplara erişmesini sağlar.",
    "Veriler aktarımda HTTPS ile şifrelenir.",
    "Ödeme bilgisi saklamayız ve ödeme işlemez.",
  ],
  s4Title: "4 — Veri Paylaşımı",
  s4Intro:
    "Kişisel bilgilerinizi üçüncü taraflara satmayız, takas etmeyiz veya kiralamayız. Verileriniz yalnızca şu durumlarda paylaşılabilir:",
  s4List: [
    "Bir hesabı bölmeye davet ettiğiniz diğer katılımcılarla (hesap kalemlerini ve seçtiğiniz görünen adı görebilirler)",
    "Barındırma ve altyapı için hizmet sağlayıcılarla (Firebase/Google)",
    "Yasa gereği veya haklarımızı korumak için",
  ],
  s5Title: "5 — Veri Saklama Süresi",
  s5Body:
    "Hesap verileri, uygulamada tuttuğunuz sürece saklanır. Hesapları istediğiniz zaman silebilirsiniz. Tamamlanan oturumlar cihazınızda yerel olarak saklanır ve uygulama ayarlarından temizlenebilir.",
  s6Title: "6 — Haklarınız",
  s6Intro: "Şunlara hakkınız vardır:",
  s6List: [
    "Uygulamada saklanan verilerinize erişmek",
    "Hesaplarınızı ve oturum geçmişinizi silmek",
    "Sakladığımız veriler hakkında bilgi talep etmek",
  ],
  s7Title: "7 — Çocukların Gizliliği",
  s7Body:
    "CheqSplit 13 yaşın altındaki çocuklar için tasarlanmamıştır. Bilerek çocuklardan kişisel bilgi toplamayız.",
  s8Title: "8 — Üçüncü Taraf Hizmetleri",
  s8Intro: "Uygulamamız şu üçüncü taraf hizmetlerini kullanır:",
  s8Bullets: [
    {
      label: "Google Firebase",
      text: `Kimlik doğrulama, Realtime Database ve ilgili altyapı. Bağlantı: ${link("https://firebase.google.com/support/privacy", "https://firebase.google.com/support/privacy")}`,
    },
    {
      label: "Google AI (Gemini)",
      text: `Akıllı tarama kullanılabildiğinde fişleri anlamak için isteğe bağlı bulut işleme. Bağlantı: ${link("https://ai.google.dev/gemini-api/terms", "https://ai.google.dev/gemini-api/terms")} ve Google gizlilik politikaları geçerlidir.`,
    },
    {
      label: "RevenueCat",
      text: `Abonelik durumu ve uygulama içi satın alma yönetimi. Bağlantı: ${link("https://www.revenuecat.com/privacy", "https://www.revenuecat.com/privacy")}`,
    },
    {
      label: "Apple",
      text: "App Store üzerinden uygulama dağıtımı ve uygulama içi satın almalar.",
    },
    {
      label: "Cihaz üzerinde OCR",
      text: "Fiş görsellerinden metin tanıma, Apple’ın cihaz üzerindeki API’leriyle cihazınızda çalışabilir (Android’de uygun olduğunda cihaz/üretici OCR).",
    },
  ],
  s9Title: "9 — Bu Politikadaki Değişiklikler",
  s9Body:
    'Bu Gizlilik Politikasını zaman zaman güncelleyebiliriz. Değişiklikleri uygulamada yeni Gizlilik Politikasını yayınlayarak ve “Son güncelleme” tarihini güncelleyerek bildiririz.',
  s10Title: "10 — Bize Ulaşın",
  s10Intro: "Bu Gizlilik Politikası hakkında sorularınız varsa bize ulaşın:",
  emailLabel: "E-posta:",
  developerLabel: "Geliştirici:",
  developerName: "Lunthemes",
  relatedNavLabel: "Ayrıca bakın:",
  relatedTerms: "Hizmet Şartları",
  relatedDeleteAccount: "Hesabınızı silin",
  relatedDeleteData: "Verilerinizi silin",
};
