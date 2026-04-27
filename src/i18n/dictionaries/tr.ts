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
  header: { download: "Uygulamayı indir" },
  hero: {
    title:
      "Giderleri paylaş, fişi tara, grupta kimin kime ne borçlu olduğunu anında gör",
    body: "CheqSplit, masrafları paylaşmanıza, fişleri taramanıza, ortak giderleri izlemenize ve kimin kime ne kadar borçlu olduğunu anında görmenize yardımcı olur: restoranda, yolculukta, market alışverişinde, grup içinde.",
    alts: [
      "CheqSplit gezi ekranı",
      "CheqSplit uygulaması: ortak harcama",
      "Hesap böl, fiş satırları CheqSplit",
    ],
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
    title: "CheqSplit nasıl işler",
    subtitle: "Geziden herkesin inandığı sade beş adım.",
    stepPill: (n) => `Adım ${n}`,
    steps: [
      {
        label: "Geziyi anında aç",
        body: "İsim ver, arkadaşlarını ekle, sonsuz menü dolaşmaya gerek yok.",
        imageAlt: "CheqSplit: gezi ekranı",
        bullets: ["Hızlı oluştur", "Kolay davet", "Akşam veya tatil"],
      },
      {
        label: "Kaleme göre böl",
        body: "Ayrıntılı fiş: her satır doğru kişide, toplam uyuşur, sürpriz yok.",
        imageAlt: "CheqSplit: fiş taraması",
        bullets: ["Satıra böl", "Ortak tabak, bahşiş, harç", "Açık"],
      },
      {
        label: "Paylaşılan tüm gideri izle",
        body: "Kategori ve not, tek bir zaman hattı.",
        imageAlt: "CheqSplit: paylaşılan gider",
        bullets: ["Kategoriler", "Fiş notu", "Grubun tüm gideri tek akışta"],
      },
      {
        label: "Bakiyeyi hızlı kapa",
        body: "Her ödeme ile güncellenen hesap, daha az telaşlı sohbet.",
        imageAlt: "CheqSplit: bakiyeler",
        bullets: ["Net bakiye özeti", "Opsiyon hatırlatıcı", "Özeti dışa al"],
      },
      {
        label: "Temiz rapor paylaş",
        body: "Grafik, toplamlar, kimin nereye ne ödediği: paylaşın veya sonra tekrar açın.",
        imageAlt: "CheqSplit: gezi raporu",
        bullets: ["Özet görünüm", "Bağlantı veya görsel paylaşım", "Gizliliğe özen"],
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
    body: "Binlerce grup, CheqSplit ile hesap kavgası olmadan hallediyor.",
    sectionAria: "CheqSplit indir",
    imgAlt: "CheqSplit açılış, hesap böl",
    badgeAlts: { appStore: "App Store’da al", play: "Google Play’de al" },
    playSoon: "Yakında",
    playDisabledHint: "Henüz yok",
    groupAria: "İndir",
  },
  faq: {
    title: "Sıkça sorulan sorular",
    items: [
      { q: "CheqSplit nedir?", a: "Ortak masraf ve hesap uygulaması: fiş taraması, satırları kişilere atama, kimin kime ne kadar borçlu olduğunu tek ekranda görmek." },
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
    privacy: "Gizlilik",
    terms: "Kullanım koşulları",
    rights: "Tüm haklar saklıdır.",
  },
  a11y: {
    keyFeatures: "Ana özellikler",
    primaryNav: "Birincil gezinme",
    howSection: "Nasıl çalışır",
    logoHome: "CheqSplit ana sayfa",
  },
};
