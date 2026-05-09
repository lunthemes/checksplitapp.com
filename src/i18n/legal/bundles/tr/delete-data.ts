import type { DeleteDataPage } from "../../types";

const mail = '<a class="font-medium text-brand-600 underline hover:text-brand-700" href="mailto:support@cheqsplitapp.com">support@cheqsplitapp.com</a>';

export const deleteDataTr: DeleteDataPage = {
  metaTitle: "Verilerinizi silin (hesabı silmeden) – CheqSplit",
  metaDescription:
    "Hesabı kapatmadan CheqSplit uygulama verilerini kaldırın. Google Play «veri silme» bilgisi.",
  h1: "Verilerinizi silin (hesabı silmeden)",
  lastUpdatedPrefix: "Son güncelleme:",
  lastUpdatedDate: "16 Nisan 2026",
  intro:
    "<strong>CheqSplit</strong> (Google Play’deki bu uygulama), hesabı <strong>kapatmadan</strong> uygulama verilerinizin bir kısmını veya tamamını kaldırmanıza izin verir. Bu sayfa, Google Play’in «veri silme» talepleri için gereken bağlantıdır.",
  step1Title: "Adım 1 — Uygulamada (en hızlısı)",
  step1Intro: "İçeriği kendiniz silebilirsiniz:",
  step1Bullets: [
    {
      label: "Geziler, hesaplar ve taslaklar",
      text: "Her ekranın desteklediği şekilde uygulamadan öğe kaldırın veya arşivleyin (ör. bir geziyi silin, bir hesabı temizleyin, taslağı atın).",
    },
    {
      label: "Yalnızca yerel veriler",
      text: "Uygulama depolamasını temizlemek veya kaldırmak yalnızca cihazda saklanan verileri kaldırır.",
    },
  ],
  step1Note:
    "Uygulamada yaptığınız değişiklikler, hesabın bulut özellikleri kullandığı yerlerde sunucularımızla senkronize olur; uygulamada içerik kaldırmak, teknik olarak mümkün olduğu ölçüde aktif çalışma alanından kaldırır.",
  step2Title: "Adım 2 — Sunucu tarafı temizlik için e-posta",
  step2Intro:
    "Sistemlerimizden belirli verilerin kaldırılması gerekiyorsa (ör. uygulamada silemediğiniz kopyalar veya bir hata), bize ulaşın:",
  step2Steps: [
    `Hesabınıza bağlı adresten ${mail} adresine yazın (veya kimliğinizi nasıl doğrulayabileceğimizi anlatın).`,
    "Konu: <strong>Veri silme talebi (hesap kapatılmadan)</strong>.",
    "Ne silineceğini listeleyin (ör. «2025 öncesi tüm geziler», «X adlı gezi», «… tarihli fiş görselleri»).",
  ],
  step2Note:
    "Hesaba bağlı verileri değiştirmeden veya silmeden önce kimliğinizi doğrulamanızı isteyebiliriz.",
  vsTitle: "Ne siliyoruz / ne tutuyoruz",
  vsBullets: [
    {
      label: "Talep üzerine / uygulamada silinen:",
      text: "Kullanıcı tarafından oluşturulan geziler, hesaplar, kalemler, katılımcı etiketleri ve benzeri içerik; siz kaldırdığınızda veya doğrulanmış e-posta talebinden sonra kaldırdığımızda, aşağıdaki yedekler ve yasal saklamalarla birlikte.",
    },
    {
      label: "Geçici olarak tutulabilir:",
      text: "Normal yedekleme döngülerinde süresi dolana kadar şifreli yedekler veya kopyalar (genelde kısa süre).",
    },
    {
      label: "Yasa gerekiyorsa daha uzun tutulabilir:",
      text: "Vergi, dolandırıcılık önleme veya yasal süreç için asgari kayıtlar.",
    },
    {
      label: "Diğer kullanıcıların kopyaları:",
      text: "Bir hesabı paylaştıysanız diğer katılımcıların kendi kopyası olabilir; başkasının cihazındaki veriyi silemeyiz.",
    },
    {
      label: "Abonelikler:",
      text: "Apple / Google satın alma geçmişi mağaza politikalarına tabidir; uygulama verilerini silmek mağaza makbuzlarını silmez.",
    },
  ],
  timingTitle: "Süreler",
  timingBody:
    "Doğrulanmış <strong>kısmi</strong> silme taleplerini yasa veya güvenlik aksini gerektirmediği sürece <strong>30 gün</strong> içinde tamamlamayı hedefliyoruz.",
  accountInsteadLead: "Tüm hesabı silmek için bkz.",
  accountInsteadLinkText: "Hesabınızı silin",
  accountInsteadTail: ".",
  privacyLead: "Genel gizlilik:",
  privacyLinkText: "Gizlilik Politikası",
  privacyTail: ".",
};
