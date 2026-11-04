import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideTr: TripExpensesGuideCopy = {
  metaTitle: "Arkadaşlarla seyahat harcamaları nasıl bölüşülür? | CheqSplit",
  metaDescription: "Tek bir seyahat oluşturun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin ve seyahat bitmeden önce bakiyeleri kontrol edin.",
  h1: "Arkadaşlarla seyahat harcamaları nasıl bölüşülür?",
  answer: "Tek bir seyahat oluşturun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin ve seyahat bitmeden önce bakiyeleri kontrol edin.",
  answerFollow: "Her harcamayı gerçekleştiğinde kaydederseniz seyahat sonunda tüm hesabı baştan çıkarmanız gerekmez.",
  rulesH2: "Seyahatten önce harcama kurallarında anlaşın",
  rulesBody: "İlk ödemeden önce hangi masrafların herkese, hangilerinin yalnızca belirli kişilere ait olduğunu kararlaştırın. Ödeyeni katılımcılardan ayrı kaydedin ve harcamaları geciktirmeden ekleyin. Bakiyeler için grup para birimini seçin. Farklı para birimindeki harcamalarda referans kuru ve tarihi kontrol edin, manuel kur girin veya bankanın grup para biriminde gerçekten tahsil ettiği tutarı kullanın. Açık kurallar tutarlı bir kayıt sağlar.",
  stepsH2: "Seyahat harcamalarını 5 adımda bölüşün",
  steps: [
    { title: "Seyahatiniz için grup oluşturun", desc: "Ana ekranda Grup oluştur seçeneğine dokunun, gruba ad verin, para birimini seçin ve katılımcıları bağlantı veya QR koduyla davet edin." },
    { title: "Kimin ödediğini kaydedin", desc: "Bilet, konaklama, ulaşım, restoran veya grup adına ödenmiş bir etkinlik olsun, her harcamada kimin ödediğini açıkça belirtin." },
    { title: "Katılımcıları seçin", desc: "Yalnızca masraf gerçekten herkes tarafından paylaşılıyorsa tüm grubu dahil edin. Taksi, etkinlik veya restoran için yalnızca ilgili kişileri seçin." },
    { title: "Harcamaları geciktirmeden ekleyin", desc: "Harcamalar sekmesini açıp Harcama ekle seçeneğine dokunun. Açıklama, tutar ve para birimini girin, isteğe bağlı kategori ve ödeyeni seçin; katılımcılar için Herkes veya Özel seçeneğini kullanın. Her katılımcı harcama ekleyebilir." },
    { title: "Bakiyeleri kontrol edin", desc: "Seyahati kapatmadan veya dışa aktarmadan önce ortak geçmişi ve kimin kime ne kadar borcu olduğunu kontrol edin. Önce eksik harcamaları tamamlayın." }
  ],
  exampleH2: "Örnek: dört arkadaşın hafta sonu seyahatini bölüşme",
  exampleIntro: "Alex, Blair, Casey ve Dana birlikte bir hafta sonu geçiriyor. Otel ve müze biletleri herkese ait. Taksi yalnızca Alex, Blair ve Casey tarafından kullanılıyor.",
  exampleExpenseCaption: "Harcamalar",
  exampleExpenseRows: [
    {
      expense: "Otel",
      payer: "Alex",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€400.00",
    },
    {
      expense: "Taksi",
      payer: "Blair",
      participants: "Alex, Blair, Casey",
      amount: "€45.00",
    },
    {
      expense: "Müze biletleri",
      payer: "Dana",
      participants: "Alex, Blair, Casey, Dana",
      amount: "€80.00",
    }
  ],
  exampleBalanceCaption: "Ödenen ve pay",
  exampleBalanceRows: [
    { person: "Alex", paid: "€400.00", share: "€135.00", net: "€265.00 alacak" },
    { person: "Blair", paid: "€45.00", share: "€135.00", net: "€90.00 borçlu" },
    { person: "Casey", paid: "€0.00", share: "€135.00", net: "€135.00 borçlu" },
    { person: "Dana", paid: "€80.00", share: "€120.00", net: "€40.00 borçlu" }
  ],
  exampleSettle: "Blair Alex'e €90, Casey €135 ve Dana €40 öder. Bu üç ödeme toplam €265 eder; bu da Alex'in alması gereken tutarla aynıdır.",
  exampleNote: "Paylar: otel kişi başı €100; taksi üç yolcu için kişi başı €15; biletler kişi başı €20. Dana taksiye binmediği için payı €135 yerine €120 olur. CheqSplit bu bakiyeleri hesaplar ancak para transferi yapmaz.",
  productH2: "Ortak seyahat harcamalarını CheqSplit ile takip edin",
  productBody: "Ana ekrandan grup oluşturun, para birimini seçin ve katılımcıları davet edin. Harcamalar sekmesinde Harcama ekle ile otel, taksi veya biletleri kaydedin: tutar, para birimi, ödeyen ve Herkes veya Özel ile katılımcılar; kategori isteğe bağlıdır. Fişler sekmesindeki Fiş ekle tarama veya yüklemeyi açar. Kalemleri kontrol edip kalemlere göre veya eşit bölün. Diğer para birimleri için tarihli referans kuru, manuel kur veya grup para birimindeki gerçek banka tahsilatını kullanın. Bakiyeleri inceleyin, PDF raporu dışa aktarın veya grubu arşivleyin. CheqSplit para transferi yapmaz.",
  productCta: "Grup ve seyahat harcamalarını CheqSplit ile takip et",
  receiptNoteBefore: "Seyahat harcamalarından biri kalemlere ayrılmış restoran hesabıysa önce ",
  receiptNoteLabel: "fiş bölüşme yöntemini",
  receiptNoteAfter: " doğrudan grubun Fişler sekmesindeki Fiş ekle ile. Fişi tarayın veya yükleyin, kalemleri ve toplamı kontrol edin, ardından kalemlere göre veya eşit bölün; fiş gruba otomatik bağlanır.",
  faqH2: "Seyahat harcamalarını bölüşme hakkında sık sorulan sorular",
  faq: [
    {
      q: "Her harcamaya herkes dahil mi olmalı?",
      a: "Hayır. Yalnızca o harcamaya gerçekten dahil olan katılımcıları seçin.",
    },
    {
      q: "Bir harcama ne zaman kaydedilmeli?",
      a: "Mümkün olan en kısa sürede — tutar, ödeyen kişi ve katılımcılar hâlâ net olarak hatırlanıyorken.",
    },
    {
      q: "Restoran hesabı nasıl ele alınmalı?",
      a: "Grupta Fişler sekmesini açıp Fiş ekle seçeneğine dokunarak fişi tarayın veya yükleyin. Algılanan kalemleri ve toplamı kontrol edin; fiş gruba otomatik bağlanır. Ardından kalemlere göre veya eşit bölün.",
    },
    {
      q: "CheqSplit para birimlerini dönüştürüyor mu?",
      a: "Evet. Grup harcamaları farklı para biriminde olabilir. Referans kuru ve tarihi kontrol edin, manuel kur veya grup para birimindeki gerçek banka tahsilatını girin. CheqSplit grup bakiyeleri için çevrilmiş tutarı kullanır; para transferi yapmaz.",
    },
  ],
  ctaTitle: "Tüm seyahat tek bir ortak kayıtta",
  ctaBody: "Grup için bir seyahat oluşturun, harcamaları gerçekleştikçe ekleyin ve sonunda kimin kime ne kadar borcu olduğunu CheqSplit göstersin.",
  crumbGuides: "Rehberler",
  crumbCurrent: "Seyahat harcamaları",
  colExpense: "Harcama",
  colPayer: "Ödeyen",
  colParticipants: "Katılımcılar",
  colAmount: "Tutar",
  colPerson: "Kişi",
  colPaid: "Ödedi",
  colShare: "Pay",
  colResult: "Sonuç",
};
