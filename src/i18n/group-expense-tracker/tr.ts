import type { GroupExpenseTrackerCopy } from "./types";
import { groupExpenseTrackerEn } from "./en";

export const groupExpenseTrackerTr: GroupExpenseTrackerCopy = {
  metaTitle: "Grup harcamalarını takip edin, kimin kime ne kadar borcu olduğunu görün | CheqSplit",
  metaDescription: "Tüm ortak harcamaları tek yerde tutun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin; grubun bakiyelerini istediğiniz zaman kontrol edin.",
  softwareDescription: "Tüm ortak harcamaları tek yerde tutun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin; grubun bakiyelerini istediğiniz zaman kontrol edin.",
  h1: "Grup harcamalarını takip edin, kimin kime ne kadar borcu olduğunu görün",
  heroText: "Tüm ortak harcamaları tek yerde tutun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin; grubun bakiyelerini istediğiniz zaman kontrol edin.",
  downloadCta: "Ücretsiz indir",
  secondaryCta: "",
  nav: {
    how: "Grup harcama takibi nasıl çalışır?",
    faq: "Sık sorulan sorular",
  },
  timelineH2: "Dağınık mesajlar yerine ortak bir harcama geçmişi",
  timelineText: "Bir kişi oteli öder, bir başkası biletleri alır, başka biri taksiyi karşılar. Daha sonra mesajlar arasında aramak yerine CheqSplit her harcamayı tek bir ortak geçmişte tutar.",
  howH2: "Grup harcama takibi nasıl çalışır?",
  steps: [
    {
      title: "Grubu seyahate davet et",
      text: "Seyahati oluşturup adlandırdıktan sonra katılımcıları bağlantı veya QR kod ile davet edin.",
      imageAlt: "Grubu seyahate davet et",
    },
    {
      title: "Her harcamayı ekle",
      text: "Masraflar sekmesini açıp Masraf Ekle'e dokunun. Açıklamayı ve tutarı girin, kimin ödediğini belirtin ve harcamaya katılan kişileri seçin.",
      imageAlt: "Her harcamayı ekle",
    },
    {
      title: "Harcamayı kimlerin paylaştığını seç",
      text: "Everyone veya Custom seçeneğini kullanın ve yalnızca o harcamaya gerçekten katılan kişileri işaretleyin.",
      imageAlt: "Harcamayı kimlerin paylaştığını seç",
    },
    {
      title: "Ortak harcama geçmişini takip et",
      text: "Eklenen her harcama, tutarı, ödeyen kişi ve katılımcılarıyla birlikte Masraflar sekmesinde görünür.",
      imageAlt: "Ortak harcama geçmişini takip et",
    },
    {
      title: "Kimin kime ne kadar borcu olduğunu gör",
      text: "Kimin alacaklı, kimin borçlu olduğunu görmek için Özet bölümünü açın. CheqSplit bakiyeleri hesaplar ancak para transferi yapmaz.",
      imageAlt: "Kimin kime ne kadar borcu olduğunu gör",
    }
  ],
  subsetH2: "Her harcama için uygun paylaşım yöntemini seç",
  subsetText: "Her harcama tüm gruba ait değildir. Taksiyi yalnızca yolculuk edenlere, biletleri katılanlara ve gerçekten ortak giderleri tüm gruba ekleyin. Kalemlere ayrılmış restoran hesabı için Faturalar sekmesini ve Add Bill'i kullanın.",
  receiptBridgeH2: "Kalemlere ayrılmış restoran hesabını seyahate ekle",
  receiptBridgeText: "Grubun ayrıntılı bir restoran hesabı varsa önce yiyecek ve içecek kalemlerini, ücretleri ve bahşişi bölüştürün. Ardından seyahatin Faturalar sekmesini açıp Add Bill'e dokunun.",
  receiptBridgeCta: "Fiş bölüşmenin nasıl çalıştığını gör",
  reportH2: "Grubun daha sonra dönebileceği bir kayıt bırak",
  reportText: "Seyahati arşivleyin ve harcamaları, toplamları, tabloları ve grafiği içeren bir PDF raporu dışa aktarın. Bu kayıt, sonradan her şeyi hafızadan yeniden hesaplamaktan çok daha kolay kontrol edilir.",
  fitsH2: "CheqSplit hangi durumlarda kullanışlıdır?",
  fits: [
    "Arkadaşlarla bir hafta sonu veya tatil",
    "Konaklama, ulaşım, yemek, bilet veya aktiviteli bir grup seyahati",
    "Farklı kişilerin ödediği birkaç seyahat harcaması",
    "Faturalar sekmesinden Add Bill ile eklenen kalemlere ayrılmış restoran hesabı",
  ],
  faqH2: "Grup harcamaları hakkında sık sorulan sorular",
  faq: [
    {
      q: "Farklı kişiler harcama ekleyebilir mi?",
      a: "Evet. Her katılımcı Masraflar sekmesini açıp Masraf Ekle'e dokunabilir. Kalemlere ayrılmış bir fiş için Faturalar sekmesini ve Add Bill'i kullanın.",
    },
    {
      q: "Bir harcama yalnızca bazı kişilere ait olabilir mi?",
      a: "Evet. Everyone veya Custom seçeneğini kullanın ve yalnızca o harcamayı paylaşan katılımcıları seçin.",
    },
    {
      q: "Bir seyahat harcaması için fiş tarayabilir miyim?",
      a: "Kalemlere göre bölüşüm için restoran fişi akışını kullanın; vergi ve bahşişi de dahil edin. Ardından seyahatin Faturalar sekmesini açıp Add Bill'e dokunun.",
    },
    {
      q: "Kimin kime ödeme yapması gerektiğini nasıl anlarım?",
      a: "CheqSplit grubun harcamalarını birleştirir ve oluşan bakiyeleri, yani kimin kime ne kadar borcu olduğunu gösterir. Payları hesaplar ancak para transferi yapmaz.",
    },
    {
      q: "Sonucu dışa aktarabilir miyim?",
      a: "Evet. CheqSplit masrafları, toplamları, tabloları ve grafiği içeren ayrıntılı bir PDF raporu dışa aktarabilir. Tamamlanan bir seyahati ayrıca arşivleyebilirsiniz.",
    },
  ],
  ctaTitle: "Grubun tüm harcamalarını tek bir yerde takip edin",
  ctaBody: "Bir seyahat oluşturun, harcamaları gerçekleştikçe ekleyin ve kimin kime ne kadar borcu olduğunu CheqSplit göstersin.",
  internalRestaurantBefore: "Tek bir akşam yemeğini kalemlere göre mi bölüşmeniz gerekiyor? Tarama, davet ve canlı kalem ataması için ",
  internalRestaurantLabel: "restoran hesabı bölüştürücüyü",
  internalRestaurantAfter: " kullanın.",
  guideBridgeBefore: "Önce adım adım yöntemi mi tercih edersiniz? Okuyun: ",
  guideBridgeLabel: "arkadaşlarla seyahat harcamaları nasıl bölüşülür",
  guideBridgeAfter: ".",
  a11y: {
    nav: groupExpenseTrackerEn.a11y.nav,
    hero: "Grup harcamalarını takip edin, kimin kime ne kadar borcu olduğunu görün",
    timeline: "Dağınık mesajlar yerine ortak bir harcama geçmişi",
    how: "Grup harcama takibi nasıl çalışır?",
    subset: "Her harcama için uygun paylaşım yöntemini seç",
    receipt: "Kalemlere ayrılmış restoran hesabını seyahate ekle",
    report: "Grubun daha sonra dönebileceği bir kayıt bırak",
    fits: "CheqSplit hangi durumlarda kullanışlıdır?",
    faq: "Grup harcamaları hakkında sık sorulan sorular",
  },
};
