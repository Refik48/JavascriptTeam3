// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//                        DİZİLERDE İTERASYON
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// ======================================================
//                     FOR DÖNGÜSÜ
// ======================================================

const kordinatlar = [120, 100, -100, 240, 254];
let negatif = 0;
let pozitif = 0;
for (let i = 0; i < kordinatlar.length; i++) {
  kordinatlar[i] < 0 ? negatif++ : pozitif++;
}
console.log(
  `Negatif kordinat sayisi: ${negatif} Pozitif kordinat sayisi: ${pozitif}`
);
// ======================================================
//                   FOR IN DÖNGÜSÜ
// ======================================================

//-------------------------------------------------------
// SORU: Bir hayvanat bahçesinde bulunan hayvan türlerinin
// bir dizide saklandığı varsayalım.Bu hayvanları türüne
// göre aramamızı sağlayacak ve o türden kaç adet bulunduğu
//  ana programa döndürecek fonksiyonu yazınız. Eğer o
// türden bir hayvan yok ise bulunamadığını yazdırsın.
//--------------------------------------------------------

const hayvanlar = ["deve", "fil", "monkey", "mouse", "cat", "dog", "bird"];
const ara = prompt("Aramak istediginiz hayvan turunu yaziniz:").toLowerCase();
const bulDondur = function () {
  let hayvanSayisi = 0;
  for (let i in hayvanlar) {
    if (hayvanlar[i] == ara) {
      hayvanSayisi++;
    }
  }
  return hayvanSayisi;
};

bulDondur(ara);

bulDondur(ara) == 0
  ? console.log(`Aradiginiz hayvan turu bulunamadi`)
  : console.log(`Aradiginiz ${ara} ' den ${bulDondur(ara)} adet vardir`);
// ======================================================
//                   FOR OF DÖNGÜSÜ
// ======================================================

// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir. Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.

// ======================================================
//                   FOREACH METODU
// ======================================================

//-------------- ÖRNEK -------------------




// ======================================================
//                       MAP METODU
// ======================================================

//-------------- ÖRNEK -------------------





// ======================================================
//                       FILTER METODU
// ======================================================
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri
// bir diziye saklayalim.





// ======================================================
//                       PIPELINE
// ======================================================

//-------------- ÖRNEK -------------------





// ======================================================
//                       REDUCE METODU
// ======================================================
