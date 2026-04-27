import type { Dictionary } from "../types";

export const tr: Dictionary = {
  meta: {
    title: "CheqSplit: masrafları paylaş, fiş tara, grup faturalarını izle",
    description:
      "CheqSplit masrafları paylaşmaya, fişleri taramaya, paylaşılan faturaları takip etmeye ve yemekten, seyahatten, alışverişten veya grup planlarından sonra kimin kime ne borçlu olduğunu göstermeye yardımcı olur.",
    ogDescription:
      "Adil böl: fiş taraması, kalemler, hesap. Restoran, geziler, ev arkadaşları, arkadaş grupları.",
    twitterDescription:
      "Tablo ve tıkanıklık olmadan ortak giderler ve fatura çözümü.",
    softwareDescription:
      "CheqSplit masrafları paylaşmaya, fiş taramaya, ortak harcamaları ve borç alacak tablosunu göstermeye yardımcı olur: yemek, gezi veya gruplar.",
  },
  nav: { features: "Özellikler", how: "Nasıl çalışır", useCases: "Kullanım alanları", faq: "S.S.S." },
  header: { download: "Uygulamayı indir" },
  hero: {
    title:
      "Giderleri paylaş, fişi tara, grupta kimin kime ne borçlu olduğunu anında gör",
    body: "CheqSplit, masrafları bölüştürmek, fişleri taramak, paylaşılan giderler ve net bakiyeleri görmek isteyen ekiplere: restoran, yol, market, ekip hâli.",
    alts: [
      "CheqSplit gezi ekranı",
      "CheqSplit uygulaması: ortak harcama",
      "Hesap böl, fiş satırları CheqSplit",
    ],
  },
  features: {
    title: "Neden CheqSplit?",
    items: [
      { title: "Hemen fişte", desc: "Taramayla: kalem, vergi, toplam anında." },
      { title: "Kalem kalem böl", desc: "Her satır doğru insana, kör köran yarım değil." },
      { title: "Her şey bir yerde", desc: "Restoran, pazar, turlar, tüm bütçe aynı akışta." },
      { title: "Kim kime", desc: "Bakiyeleri uygulama halleder, herkes ne ödeyeceğini bilir." },
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
        body: "Detaylı fatura, satırlar doğru kişide, toplar eşit.",
        imageAlt: "CheqSplit: fiş taraması",
        bullets: ["Satıra böl", "Ortak tabak, bahşiş, harç", "Açık"],
      },
      {
        label: "Paylaşılan tüm gideri izle",
        body: "Kategori ve not, tek bir zaman hattı.",
        imageAlt: "CheqSplit: paylaşılan gider",
        bullets: ["Kategoriler", "Fiş not", "Takıma tek bant"],
      },
      {
        label: "Bakiyeyi hızlı kapa",
        body: "Her ödeme ile güncellenen hesap, daha az telaşlı sohbet.",
        imageAlt: "CheqSplit: bakiyeler",
        bullets: ["Net", "Opsiyon hatırlatıcı", "Özet dışa al"],
      },
      {
        label: "Temiz rapor paylaş",
        body: "Grafi, toplamlar, kim nerede, gönderin veya sonra açın.",
        imageAlt: "CheqSplit: gezi raporu",
        bullets: ["Görüntüle", "Bağlantı veya görüntü", "Gizliliğe dikkat"],
      },
    ],
  },
  useCases: {
    title: "Her türlü paylaşılan gider",
    intro: "Birden çok cüzdan: akşam, turla, aile, CheqSplit buna. Taramak, eşleştir, indirim, ücret, açık kapanış.",
    items: [
      { title: "Restoran", desc: "Kalemler, adil böl, ödeyebilir gibi." },
      { title: "Grup gezileri", desc: "Uçuş, oda, yemek, tek pencere." },
      { title: "Aile", desc: "Sepet, gün, evin masrafı." },
      { title: "Ortak alışveriş", desc: "Hediye, toplu, arkadaş proje." },
    ],
  },
  cta: {
    title: "Daha zekâlı bölmek mi?",
    body: "Binler ekip, hesap kavgasız.",
    sectionAria: "CheqSplit indir",
    imgAlt: "CheqSplit açılış, hesap böl",
    badgeAlts: { appStore: "App Store’da al", play: "Google Play’de al" },
    playSoon: "Yakında",
    playDisabledHint: "Henüz yok",
    groupAria: "İndir",
  },
  faq: {
    title: "Sıkça sorular",
    items: [
      { q: "CheqSplit ne?", a: "Bölüşülmüş hesap: fiş, satır, bakımlı borç-hesabı, kim kime." },
      { q: "Kalemle mi bölüyor?", a: "Evet, satırla kişi, tüketene göre." },
      { q: "Grup tatili olur mu?", a: "Gezi, gider, insan, fiş, nihayet rapor." },
      { q: "Resto için?", a: "Cafe, pazar, kaçamak, çoğu cüzdan aynı yerdeyse uyar." },
      { q: "Oflayn?", a: "Kısım yerel, fakat tura katılım eşi internet ister." },
      { q: "Kimseyi nasıl dave ederim?", a: "Gezi, harcamalar, bağ, katıl, bakayım bakiyeyi." },
    ],
  },
  footer: {
    tagline: "Grupta pay en kolay, adil, net.",
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
