import type { TripExpensesGuideCopy } from "./types";

export const tripExpensesGuideTr: TripExpensesGuideCopy = {
  metaTitle: "Arkadaşlarla seyahat harcamaları nasıl bölüşülür? | CheqSplit",
  metaDescription: "Tek bir seyahat oluşturun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin ve seyahat bitmeden önce bakiyeleri kontrol edin.",
  h1: "Arkadaşlarla seyahat harcamaları nasıl bölüşülür?",
  answer: "Tek bir seyahat oluşturun, her harcamada kimin ödediğini ve kimlerin katıldığını kaydedin ve seyahat bitmeden önce bakiyeleri kontrol edin.",
  answerFollow: "Her harcamayı gerçekleştiğinde kaydederseniz seyahat sonunda tüm hesabı baştan çıkarmanız gerekmez.",
  rulesH2: "Seyahatten önce harcama kurallarında anlaşın",
  rulesBody: "İlk ödeme yapılmadan önce hangi masrafların tüm grup tarafından, hangilerinin yalnızca bazı kişiler tarafından paylaşılacağını belirleyin. Konaklama çoğu zaman herkesi kapsar; taksi veya müze bileti ise yalnızca bazı katılımcılara ait olabilir. Ödemeyi yapan kişi ile masrafa katılanları ayrı kaydedin; parayı ödeyen kişi her zaman o paylaşımın içinde olmayabilir. Tutar ve katılımcılar hâlâ aklınızdayken harcamaları ekleyin. Birden fazla para birimi kullanıyorsanız bunları nasıl kaydedeceğinize baştan karar verin — CheqSplit döviz dönüşümü yapmaz. Başta belirlenen açık kurallar, son hesaplaşmaya kadar tutarlı bir kayıt sağlar.",
  stepsH2: "Seyahat harcamalarını 5 adımda bölüşün",
  steps: [
    { title: "Seyahati erkenden oluşturun", desc: "Seyahate bir ad verin, katılımcıları ekleyin ve önceden oluşmuş masrafları girin; böylece tüm grup tek bir kayıttan başlasın." },
    { title: "Kimin ödediğini kaydedin", desc: "Bilet, konaklama, ulaşım, restoran veya grup adına ödenmiş bir etkinlik olsun, her harcamada kimin ödediğini açıkça belirtin." },
    { title: "Katılımcıları seçin", desc: "Yalnızca masraf gerçekten herkes tarafından paylaşılıyorsa tüm grubu dahil edin. Taksi, etkinlik veya restoran için yalnızca ilgili kişileri seçin." },
    { title: "Harcamaları geciktirmeden ekleyin", desc: "Tutarları hâlâ hatırlıyorken kaydedin. CheqSplit'te Masraflar sekmesini açıp Masraf Ekle'e dokunun. Her katılımcı harcama ekleyebilir." },
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
  productBody: "CheqSplit ile bir seyahat oluşturabilir, her harcamanın ödeyenini ve katılımcılarını kaydedebilir, ortak geçmişi görebilir ve kimin kime ne kadar borcu olduğunu takip edebilirsiniz. Taksi, otel ve biletleri Masraflar sekmesinden Masraf Ekle ile; ayrıntılı restoran fişini Faturalar sekmesinden Add Bill ile ekleyin. Seyahat bitince arşivleyin ve PDF raporu dışa aktarın. CheqSplit bakiyeleri hesaplar ancak para transferi veya döviz dönüşümü yapmaz.",
  productCta: "Grup ve seyahat harcamalarını CheqSplit ile takip et",
  receiptNoteBefore: "Seyahat harcamalarından biri kalemlere ayrılmış restoran hesabıysa önce ",
  receiptNoteLabel: "fiş bölüşme yöntemini",
  receiptNoteAfter: ", servis ve bahşiş dahil olacak şekilde kullanın. Ardından seyahatin Faturalar sekmesini açıp Add Bill'e dokunun.",
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
      a: "Kalemlere göre bölüşüm için restoran fişi akışını kullanın; vergi ve bahşişi de dahil edin. Ardından seyahatin Faturalar sekmesini açıp Add Bill'e dokunun.",
    },
    {
      q: "CheqSplit para birimlerini dönüştürüyor mu?",
      a: "Hayır. Döviz dönüşümü, doğrulanmış bir CheqSplit özelliği değildir. Tutarları harcamada göründüğü şekliyle kaydedin.",
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
