import type { RestaurantBillGuideCopy } from "./types";

export const restaurantBillGuideTr: RestaurantBillGuideCopy = {
  metaTitle: "Restoran hesabı adil şekilde nasıl bölüşülür? | CheqSplit",
  metaDescription: "Son fişi kontrol edin, kişisel kalemleri atayın, ortak kalemleri doğru kişiler arasında bölüştürün ve tüm payların hesap toplamıyla eşleştiğinden emin olun.",
  h1: "Restoran hesabı adil şekilde nasıl bölüşülür?",
  answer: "Son fişi kontrol edin, kişisel kalemleri atayın, ortak kalemleri doğru kişiler arasında bölüştürün ve tüm payların hesap toplamıyla eşleştiğinden emin olun.",
  choiceH2: "Eşit bölüşüm ile kalemlere göre bölüşüm arasında seçim yapın",
  choiceBody: "Siparişler birbirine benziyorsa ve herkes toplamı eşit paylaşmayı kabul ediyorsa hesabı eşit bölmek en hızlı çözümdür. Farklı yemek ve içecekler sipariş edildiyse kalemlere göre bölüşmek genellikle daha adildir: önce herkesin kendi siparişlerini atayın. Ortak tabakları, şişeleri ve tatlıları yalnızca onları paylaşan kişiler arasında bölüştürün. Daha sonra servis ücreti, vergi ve bahşişi ekleyerek kişisel payların toplamının fişteki tutarla eşleşmesini sağlayın. Tutarlar uyuşmuyorsa muhtemelen bir kalem veya ücret atlanmıştır. Böylece bölüşüm tahmine değil, gerçek hesaba dayanır.",
  stepsH2: "Restoran hesabını 5 adımda adil şekilde bölüşün",
  steps: [
    { title: "Fişi kontrol edin", desc: "Tutarları bölmeye başlamadan önce her kalemi ve son toplamı doğrulayın." },
    { title: "Kişisel siparişleri atayın", desc: "Her kişiye yalnızca kendi sipariş ettiği yemek ve içecekleri verin. Önce kime ait olduğu açık olan kalemlerden başlayın." },
    { title: "Ortak kalemleri bölüştürün", desc: "Ortak tabağı veya şişeyi yalnızca paylaşan kişiler arasında bölün. Eşit veya üzerinde anlaşılan bir oranla paylaşın." },
    { title: "Kalan tutarları kontrol edin", desc: "Atanmamış kalemleri, tarama hatalarını ve henüz hesaba katılmamış vergi veya bahşişi kontrol edin." },
    { title: "Sonucu gösterin", desc: "Masadan kalkmadan önce herkes kendi payını ve son bakiyesini görebilsin." }
  ],
  exampleH2: "Örnek: restoran hesabını dört kişi arasında bölüşme",
  exampleIntro: "Maya, Noah, Owen ve Priya aynı hesabı paylaşıyor. Maya ile Noah ayrıca bir şişe şarabı paylaşıyor. Yiyecek ve içecek ara toplamına %10 servis ücreti uygulanıyor.",
  exampleReceiptCaption: "Fiş",
  exampleReceiptRows: [
    { item: "Makarna (Maya)", amount: "€15.00" },
    { item: "Burger (Noah)", amount: "€15.00" },
    { item: "Izgara balık (Owen)", amount: "€20.00" },
    { item: "Salata (Priya)", amount: "€10.00" },
    { item: "Bir şişe şarap (Maya ve Noah)", amount: "€20.00" },
    { item: "Ara toplam", amount: "€80.00" },
    { item: "Servis ücreti (%10)", amount: "€8.00" },
    { item: "Fiş toplamı", amount: "€88.00" }
  ],
  exampleShareCaption: "Ödenecek tutar",
  exampleShareRows: [
    { person: "Maya (makarna €15 + şarabın yarısı €10 + servis €2.50)", amount: "€27.50" },
    { person: "Noah (burger €15 + şarabın yarısı €10 + servis €2.50)", amount: "€27.50" },
    { person: "Owen (balık €20 + servis €2.00)", amount: "€22.00" },
    { person: "Priya (salata €10 + servis €1.00)", amount: "€11.00" },
    { person: "Dört payın toplamı", amount: "€88.00" }
  ],
  exampleNote: "Servis ücreti herkesin yiyecek ve içecek tutarına göre orantılı dağıtılır: Maya ve Noah'ın €80 ara toplam içindeki payı kişi başı €25, Owen'ın €20, Priya'nın ise €10'dur. Dört pay birlikte tam olarak €88'lik fiş toplamını verir.",
  productH2: "Restoran hesabını CheqSplit ile kalemlere göre bölüşün",
  productBody: "CheqSplit aynı adımları uygular: restoran fişini tarar, hesabı bağlantı veya QR kod ile paylaşır, kişisel ve ortak kalemleri atar, servis ve bahşişi ayrı tutar ve kimin kime ne kadar borcu olduğunu gösterir. CheqSplit bakiyeleri hesaplar ancak para transferi yapmaz.",
  productCta: "Restoran fişini CheqSplit ile bölüş",
  faqH2: "Restoran hesabını bölüşme hakkında sık sorulan sorular",
  faq: [
    {
      q: "Hesap her zaman eşit mi bölüşülmeli?",
      a: "Yalnızca grup bu konuda anlaşıyorsa ve siparişler birbirine benziyorsa. Siparişler farklıysa kalemleri, herkesin toplamı gerçekten tükettiği şeylere karşılık gelecek şekilde atayın.",
    },
    {
      q: "Ortak bir kalem nasıl bölüşülmeli?",
      a: "O kalemi paylaşan kişiler arasında — eşit olarak veya paylar farklıysa üzerinde anlaşılmış bir yüzdeye göre.",
    },
    {
      q: "Toplamlar neden bazen uyuşmaz?",
      a: "Atanmamış kalemleri, tarama veya yazım hatalarını ve Ücretler ve Bahşiş bölümündeki vergi ya da bahşişi kontrol edin; böylece bölüşüm fişteki toplamla eşleşir.",
    },
  ],
  ctaTitle: "Hesabı daha masadayken bölüşmeye hazır mısınız?",
  ctaBody: "Hesabı tara, kalemleri sipariş eden kişilere ata ve kimin kime ne kadar borcu olduğunu net şekilde gör.",
  crumbGuides: "Rehberler",
  crumbCurrent: "Restoran hesabı",
  colItem: "Kalem",
  colAmount: "Tutar",
  colPerson: "Kişi",
  colDue: "Ödenecek tutar",
};
