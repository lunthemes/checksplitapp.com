import type { SplitBillLocaleCopy } from "./types";
import { splitBillEn } from "./en";

export const splitBillTr: SplitBillLocaleCopy = {
  metaTitle: "Restoran fişini tarayın ve kalemlere göre bölüşün | CheqSplit",
  metaDescription: "Tüm hesap tek yerde kalır. Bir kişi fişi CheqSplit ile tarar; diğerleri bağlantı veya QR kod üzerinden katılıp kendi siparişlerini doğrudan tarayıcıdan seçer.",
  softwareDescription: "Tüm hesap tek yerde kalır. Bir kişi fişi CheqSplit ile tarar; diğerleri bağlantı veya QR kod üzerinden katılıp kendi siparişlerini doğrudan tarayıcıdan seçer.",
  h1: "Restoran fişini tarayın ve kalemlere göre bölüşün",
  heroSubLine1: "",
  heroSubLine2: "",
  heroParagraph: "",
  seoBlockH2: "Tek bir restoran hesabını uygulamada veya tarayıcıda birlikte paylaşın",
  seoBlockP1: "Tüm hesap tek yerde kalır. Bir kişi fişi CheqSplit ile tarar; diğerleri bağlantı veya QR kod üzerinden katılıp kendi siparişlerini doğrudan tarayıcıdan seçer.",
  seoBlockP2: "Masadaki herkesin uygulamayı yüklemesi gerekmez. CheqSplit kalemleri, katılımcıları, ödemeleri ve son hesabı tek yerde tutar.",
  seoBlockP3: "",
  useCasesH2: "Gerçekte kimin ne sipariş ettiğine göre hesap bölüşme",
  useCases: [
    { title: "Kişisel siparişler", text: "Her kişiye yalnızca kendi sipariş ettiği yemek ve içecekleri atayın." },
    { title: "Paylaşılan kalemler", text: "Bir şişeyi, ortak tabağı veya tatlıyı yalnızca paylaşan kişiler arasında bölüştürün." },
    { title: "Ücretler ve bahşiş", text: "Servis ücreti, vergi ve bahşişi ekleyerek payların toplamının fişteki tutarla eşleşmesini sağlayın." },
  ],
  howSectionH2: "CheqSplit ile restoran hesabı nasıl bölüşülür?",
  howSectionSub: "",
  stepsSectionH2: "CheqSplit ile restoran hesabı nasıl bölüşülür?",
  steps: [
    { title: "Fişi tara", desc: "Fişin fotoğrafını çekin. CheqSplit kalemleri ve tutarları, bölüşmeden önce kontrol edebileceğiniz bir hesaba dönüştürür." },
    { title: "Hesabı kontrol et", desc: "CheqSplit'teki toplamı fişteki toplamla karşılaştırın ve herkes siparişini seçmeye başlamadan önce olası hataları düzeltin." },
    { title: "Hesabı bölüş", desc: "Tarama bir adı, miktarı veya fiyatı yanlış algıladıysa gerekli düzeltmeleri yapın." },
  ],
  features: [
    { title: "Restoran fişini tara", desc: "Fişin fotoğrafını çekin. CheqSplit kalemleri ve tutarları, bölüşmeden önce kontrol edebileceğiniz bir hesaba dönüştürür." },
    { title: "Bölüşmeye başlamadan toplamı kontrol et", desc: "CheqSplit'teki toplamı fişteki toplamla karşılaştırın ve herkes siparişini seçmeye başlamadan önce olası hataları düzeltin." },
    { title: "Her kalemi kontrol et ve düzenle", desc: "Tarama bir adı, miktarı veya fiyatı yanlış algıladıysa gerekli düzeltmeleri yapın." },
    { title: "Arkadaşlarını QR kod veya bağlantıyla davet et", desc: "Hesabın QR kodunu veya bağlantısını paylaşın. Herkes ortak hesabı hemen açabilir." },
    { title: "Uygulamayı yüklemeden tarayıcıdan devam et", desc: "Arkadaşlarınız bağlantıyı doğrudan tarayıcıda açabilir. Hesabı bölüşmek için CheqSplit'i yüklemeleri gerekmez." },
    { title: "Restoran hesabını online bölüş", desc: "Herkes aynı hesap üzerinde çalışır. Seçimler ve değişiklikler tek yerde tutulur; kimin ne yediğini ayrıca hesaplamanız gerekmez." },
    { title: "Herkes ne yediğini seçsin", desc: "Her katılımcı kendi kalemlerini seçer. Ortak yemek ve içecekler birden fazla kişi arasında bölüştürülebilir." },
    { title: "Kimin kime ne kadar borcu olduğunu gör", desc: "Kalemler atandıktan sonra CheqSplit tutarları hesaplar ve kimin kime ne kadar ödemesi gerektiğini açıkça gösterir." },
    { title: "Yapılan ödemeleri kaydet", desc: "Tamamlanan ödemeleri işaretleyerek bakiyeleri güncel tutun ve geriye hangi borçların kaldığını görün." },
    { title: "Hesabın nasıl bölündüğünü incele", desc: "Daha sonra sonuca dönüp herkesin kalemlerini, tutarlarını ve ödemelerini kontrol edebilirsiniz." }
  ],
  ctaTitle: "Arkadaşlarında uygulama olmasa bile hesabı bölüş",
  ctaBody: "Fişi tara, bağlantıyı veya QR kodu paylaş ve herkes kendi siparişlerini seçsin.",
  groupBridgeBefore: "Bu restoran hesabını aynı grubun otel, taksi veya aktiviteleriyle birlikte tutmanız mı gerekiyor? Tamamlanan hesabı seyahatin Faturalar sekmesinden Add Bill ile ekleyin, ardından ",
  groupBridgeLabel: "grup harcamalarını takip",
  groupBridgeAfter: " etmeye devam edin.",
  guideBridgeBefore: "Önce adım adım yöntemi mi tercih edersiniz? Okuyun: ",
  guideBridgeLabel: "restoran hesabı adil şekilde nasıl bölüşülür",
  guideBridgeAfter: ".",
  faq: [
    {
      q: "CheqSplit kalemlere ayrılmış restoran fişini tarayabilir mi?",
      a: "Evet. Fişin fotoğrafını çekin ve bölüşmeye başlamadan önce algılanan toplamı, kalemleri, miktarları ve fiyatları kontrol edin.",
    },
    {
      q: "Tüm katılımcıların CheqSplit uygulamasına ihtiyacı var mı?",
      a: "Hayır. Hesabı oluşturan kişi uygulamada hesabı oluşturup tarar; davet edilen kişiler ise bağlantıyı açıp Tarayıcıda devam et seçeneğini kullanabilir.",
    },
    {
      q: "Restoran hesabını tarayıcıdan bölüşebilir miyim?",
      a: "Davet edilen kişi ortak hesabı tarayıcıda açabilir, tükettiği kalemleri seçebilir, Summary bölümünü görüntüleyebilir ve oluşan bakiyeyi takip edebilir. Yeni bir hesap oluşturmak ve taramak için uygulama gerekir.",
    },
    {
      q: "Katılımcılar QR kod veya bağlantıyla katılabilir mi?",
      a: "Evet. Herkesin aynı restoran hesabını uygulamada veya tarayıcıda açabilmesi için QR kodu ya da davet bağlantısını paylaşın.",
    },
    {
      q: "Bir ortak kalemi birkaç kişi nasıl bölüşür?",
      a: "Kalemi paylaşan herkes onu seçer. CheqSplit fiyatı, o kalemi seçen tüm katılımcılar arasında otomatik olarak eşit bölüştürür.",
    },
    {
      q: "Fiş yanlış taranırsa ne yapmalıyım?",
      a: "Paylaşmadan önce algılanan hesabı kontrol edin. Yanlış kalemi veya fiyatı düzeltin, eksik satırı ekleyin ve gerekiyorsa vergi ya da bahşişi Ücretler ve Bahşiş bölümüne girin.",
    },
    {
      q: "Ödeme Kaydet ne işe yarar?",
      a: "Bir katılımcının başka bir katılımcıya CheqSplit dışında ödeme yaptığını kaydeder. Ortak hesap kaydını günceller ancak para transferi veya ödeme işlemi yapmaz.",
    },
    {
      q: "Her kişinin ne tükettiğini nasıl görebilirim?",
      a: "Summary sekmesini açın ve grafikte ilgili katılımcının bölümüne dokunarak toplam tutarını ve dahil edilen kalemleri görün.",
    },
    {
      q: "CheqSplit para transferi yapar mı?",
      a: "Hayır. CheqSplit bakiyeleri hesaplar ve katılımcıların girdiği ödeme kayıtlarını tutar. Para göndermez, almaz veya ödeme işlemez.",
    },
    {
      q: "Bu restoran hesabını bir seyahate ekleyebilir miyim?",
      a: "Evet. Önce restoran hesabının kalemlere göre bölüşümünü tamamlayın, ardından seyahatin Faturalar sekmesini açıp Add Bill'e dokunun.",
    },
  ],
  a11y: {
    hero: "Restoran fişini tarayın ve kalemlere göre bölüşün",
    nav: splitBillEn.a11y.nav,
    stepsRegion: "CheqSplit ile restoran hesabı nasıl bölüşülür?",
    features: "CheqSplit ile restoran hesabı nasıl bölüşülür?",
    faq: "Sık sorulan sorular",
  },
};
