import type { Dictionary } from "../types";

export const tr: Dictionary = {
  meta: {
    title: "CheqSplit: masrafları bölüş, fişleri tara, ortak harcamaları takip et",
    description:
      "CheqSplit, masrafları paylaşmanıza, fişleri taramanıza, ortak harcamaları izlemenize ve yemekten, seyahatten, alışverişten veya grup planlarından sonra kimin kime ne kadar borçlu olduğunu net göstermenize yardımcı olur.",
    ogDescription:
      "Adil paylaş: fiş taraması, kalemler, net bakiyeler. Restoran, geziler, ev arkadaşları, arkadaş grupları.",
    twitterDescription:
      "Ortak giderleri tablo, hesap kâğıdı ve sınırsız mesaj telaşı olmadan bölüştürmek için pratik yol.",
    softwareDescription:
      "CheqSplit, masrafları bölüşmeye, fişleri taramaya, ortak harcamaları takip etmeye ve kimin kime ne kadar borçlu olduğunu net görmeye yardımcı olur: yemek, grup seyahatleri, alışveriş, günlük planlar.",
  },
  nav: { features: "Özellikler", how: "Nasıl çalışır", useCases: "Kullanım alanları", faq: "S.S.S." },
  header: { download: "Uygulamayı ücretsiz indir" },
  hero: {
    title: "Harcamaları paylaşın, fişleri tarayın ve gerisini uygulamaya bırakın",
    body: "CheqSplit, masrafları paylaşmanıza, fişleri taramanıza, ortak giderleri izlemenize ve kimin kime ne kadar borçlu olduğunu anında görmenize yardımcı olur: restoranda, yolculukta, market alışverişinde, grup içinde. Uygulamayı ücretsiz indirebilirsiniz.",
    alts: [
      "CheqSplit gezi ekranı",
      "CheqSplit uygulaması: ortak harcama",
      "Hesap böl, fiş satırları CheqSplit",
    ],
  },
  heroSlide2: {
    title: "Restoran hesaplarını daha hızlı bölün",
    description: "Fişi tarayın, ürünleri kişilere atayın ve herkesin payını net görün — arkadaş yemekleri, buluşmalar ve grup sofraları için ideal.",
    button: "Hesapları nasıl böleceğini ve fişleri nasıl tarayacağını öğren",
  },
  features: {
    title: "Neden CheqSplit?",
    items: [
      { title: "Hemen fişi kaydet", desc: "Taramayla: kalem, vergi, toplam anında, elle yazma derdi yok." },
      { title: "Kalem kalem böl", desc: "Her satır doğru kişiye; körü körüne yarı yarıya değil, gerçek tüketime göre." },
      { title: "Her şey bir yerde", desc: "Restoran, pazar, turlar, tüm bütçe aynı akışta." },
      { title: "Kimin kime ne kadar borçlu", desc: "Bakiyeleri uygulama hesaplar, herkes ne ödeyeceğini bilir." },
    ],
  },
  how: {
    title: "CheqSplit nasıl çalışır",
    subtitle:
      "Beş adım: masrafları bölüşmek, fişleri taramak, ortak harcamaları takip etmek ve kimin kime ne kadar borçlu olduğunu görmek – yeni geziden herkesin anlayacağı rapora.",
    stepPill: (n) => `ADIM ${n}`,
    steps: [
      {
        label: "Birkaç saniyede geziyi aç",
        body: "İsim ver, arkadaşlarını link veya QR ile davet et, ortak harcamaları anında bölüştürmeye başla.",
        imageAlt: "CheqSplit: gezi ekranı",
        bullets: [
          "Hemen başlarsın",
          "Link veya QR ile davet",
          "Yemek, tatil, her türlü ekip",
        ],
      },
      {
        label: "Hesabı, kaleme göre böl",
        body: "Hepiniz aynı fişi telefonda görürsünüz; anlık olarak, kime ne ait, işaretlersiniz.",
        imageAlt: "CheqSplit: fiş taraması",
        bullets: [
          "Kimin, neye ne kadar ödeyeceğini işaretle",
          "Paylaşımlı yemekler, bahşiş, ekler",
          "Bir bakışta, kimin kime, ne",
        ],
      },
      {
        label: "Ortak giderleri ekle",
        body: "Kimin ödediğini ve tutarı kiminle paylaşacağınızı belirtin.",
        imageAlt: "CheqSplit: paylaşılan gider",
        bullets: [
          "Her üye gideri ekler",
          "Bütün gruba veya yalnızca seçtiğiniz kişilere böl",
          "Hepsi tek, ortak akışta dursun",
        ],
      },
      {
        label: "Kimin, kime ne borçlu, gör",
        body: "CheqSplit toplamı ve kişi başı harcamaları hesaplar; kimin kime ne kadar göndermesi gerektiğini gösterir.",
        imageAlt: "CheqSplit: bakiyeler",
        bullets: [
          "Giderlerin toplamı",
          "Her kişi için net sonuç",
          "Açık: kimin, kime, ne",
        ],
      },
      {
        label: "Geziyi ve raporu sakla",
        body: "Bitti: geziyi arşivle ya da harcamalar, özet ve okunur grafik içeren, ayrıntılı bir PDF dışa aktar.",
        imageAlt: "CheqSplit: gezi raporu",
        bullets: [
          "Geçmiş gezilerin arşivi",
          "Ayrıntılı PDF rapor",
          "Miktarlar, tablolar, grafikler",
        ],
      },
    ],
  },
  useCases: {
    title: "Her türlü paylaşılan gider",
    intro: "Birkaç kişi aynı harcamayı paylaştığında—akşam yemeği, hafta sonu gezisi, aile alışverişi—CheqSplit her şeyi toparlar. Fişi tarar, satırları eşleştirirsin, indirim ve ücretleri eklersin, sonunda net bir kapanış alırsın.",
    items: [
      { title: "Restoran", desc: "Kalemler, adil böl, ödeyebilir gibi." },
      { title: "Grup seyahatleri", desc: "Uçuş, oda, yemek, tek pencere." },
      { title: "Aile", desc: "Sepet, gün, evin masrafı." },
      { title: "Ortak alışveriş", desc: "Hediye, toplu, arkadaş proje." },
    ],
  },
  cta: {
    title: "Giderleri daha net bölüştürmek ister misiniz?",
    body: "CheqSplit’i ücretsiz indirin — binlerce grup hesabı kavgası olmadan hallediyor.",
    sectionAria: "CheqSplit’i ücretsiz indir",
    imgAlt: "CheqSplit açılış, hesap böl",
    badgeAlts: {
      appStore: "App Store’da ücretsiz indir",
      play: "Google Play’de ücretsiz indir",
    },
    playSoon: "Yakında",
    playDisabledHint: "Henüz yok",
    groupAria: "Uygulamayı ücretsiz indir",
  },
  faq: {
    title: "Sıkça sorulan sorular",
    items: [
      { q: "CheqSplit nedir?", a: "Ücretsiz ortak masraf ve hesap uygulaması: fiş taraması, satırları kişilere atama, kimin kime ne kadar borçlu olduğunu tek ekranda görmek." },
      { q: "Fişi satır satır bölebiliyor musunuz?", a: "Evet. Her kalemi tüketene göre ayrı ayrı paylaşabilirsiniz." },
      { q: "Arkadaşlarla tatile uygun mu?", a: "Evet. Gezi açar, gider eklersiniz, kişileri ve fişleri eklersiniz; sonda anlaşılır bir rapor alırsınız." },
      { q: "Sadece restoran için mi?", a: "Hayır. Kafe, market, gezi, ortak alışveriş, birkaç kişinin aynı kasadan ödediği her senaryo için uygundur." },
      { q: "Çevrimdışı çalışıyor mu?", a: "Bazı veriler cihazda kalabilir, ancak geziyi paylaşmak ve grup ile senkron kalmak için internet gerekir." },
      { q: "Birini geziye nasıl davet ederim?", a: "Bir gezi oluşturun, harcamaları girin, davet bağlantısını paylaşın; katılan aynı bakiyeleri sizinle birlikte görür." },
    ],
  },
  footer: {
    tagline: "Grupta masrafları paylaşmak: kolay, adil, net.",
    product: "Ürün",
    company: "Şirket",
    legal: "Yasal",
    about: "Hakkında",
    contact: "İletişim",
    privacy: "Gizlilik politikası",
    terms: "Hizmet şartları",
    deleteAccount: "Hesabı sil",
    deleteData: "Verilerinizi silin",
    rights: "Tüm haklar saklıdır.",
  },
  a11y: {
    keyFeatures: "Ana özellikler",
    primaryNav: "Birincil gezinme",
    openMenu: "Menüyü aç",
    howSection: "Nasıl çalışır",
    logoHome: "CheqSplit ana sayfa",
  },
};
