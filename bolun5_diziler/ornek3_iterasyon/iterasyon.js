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

// const hayvanlar = ["deve", "fil", "monkey", "mouse", "cat", "dog", "bird"];
// const ara = prompt("Aramak istediginiz hayvan turunu yaziniz:").toLowerCase();
// const bulDondur = function () {
//   let hayvanSayisi = 0;
//   for (let i in hayvanlar) {
//     if (hayvanlar[i] == ara) {
//       hayvanSayisi++;
//     }
//   }
//   return hayvanSayisi;
// };

// bulDondur(ara);

// bulDondur(ara) == 0
//   ? console.log(`Aradiginiz hayvan turu bulunamadi`)
//   : console.log(`Aradiginiz ${ara} ' den ${bulDondur(ara)} adet vardir`);
// ======================================================
//                   FOR OF DÖNGÜSÜ
// ======================================================

// for of dongusu, for in dongusunun bir cok veri yapisini kapsayacak sekilde guncellenmis halidir.
// Bu dongude dizi icersindeki veriye erisirken indisleme kullanmaya gerek yoktur.
const arabalar = ["Bmw", "Ford", "Seat"];
let yazi = ""; // Degisken olusturdum ve ilk deger olarak string dondurecegim icin hic birsey manasina ("")  yazdim. Eger toplama olsaydi sifir(0), carpma olsaydi bir(1) degerini verecektim.

for (let x of arabalar) {
  console.log(x);
  yazi += x + " ";
}
console.log(yazi);

// ======================================================
//                   FOREACH METODU
// ======================================================

//-------------- ÖRNEK -------------------
let ogrenciler = ["John", "Ali", "Can"];

function yaz(a) {
  console.log(a);
}
ogrenciler.forEach(yaz);

ogrenciler.forEach((z) => console.log(z));

console.log(ogrenciler);

//-------------- ÖRNEK -------------------
const fiyatlar = [200, 300, 125, 450, 333, 133];
let toplam = 0;
fiyatlar.forEach((f) => (toplam += f));
console.log(toplam);
document.querySelector(".toplam").innerHTML = `${toplam} TL`;

//-------------- ÖRNEK -------------------
// forEach ile Parametre kullanım detaylari
toplam = 0;
fiyatlar.forEach((a, i, dizi) => {
  toplam += a;
  console.log(`${i} . iterasyon: ${toplam}`);
});
console.log(toplam);

//-------------- ÖRNEK -------------------
// fiyatlar dizisinde her bir fiyata %10 zam yapalım.
let toplamFiyat = 0;

let zamliFiyatlar = [];
fiyatlar.forEach((deger, indis) => {
  zamliFiyatlar[indis] = (deger * 1.1).toFixed(1);
  toplamFiyat += Number(zamliFiyatlar[indis]);
});
console.log(zamliFiyatlar);
console.log(toplamFiyat);

// ======================================================
//                       MAP METODU
// ======================================================

//-------------- ÖRNEK -------------------
// ornek= Dizinin her bir elemaninin 5 katini aliniz.Please
const rakamlar = [3, 5, 8, 3, -2, 5, -7, 9];
const besKat = rakamlar.map((x) => x * 5);
console.log(besKat);
console.log(rakamlar);

//-------------- ÖRNEK -------------------
// isimler dizisin içerisindeki her ismi büyük harf olarak
// yeni bir diziye saklayalım.
const isimler = [
  "Ahmet",
  "mehmet",
  "ismet",
  "SAFFET",
  "Can",
  "Canan",
  "Cavidan",
];

// map() metodu normal şartlarda bir dizi döndürür.
const buyuk = isimler.map((ad) => ad.toUpperCase());
console.log(buyuk);
buyuk.forEach((ad) => console.log(ad));

// map() metodundan sonra eğer forEach gibi bir terminal işlemi
// kullanılırsa map() metodu bir dizi döndürmez.
isimler.map((ad) => ad.toUpperCase()).forEach((ad) => console.log(ad));

//-------------- ÖRNEK -------------------
// tlFiyatlar dizisindeki ürün fiyatlarini HTLM inputlarina girilen
// Dolar ve Euro paritelerine göre dolar ve euroya çevirerek HTML de
// gösteriniz.
tlFiyatlar = [120, 340, 550, 245, 322.5, 987];

const dolarKur = document.querySelector(".dolar").value;
const yuroKur = document.querySelector(".yuro").value;

const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

const dolarFiyatlar = tlFiyatlar.map((tl) => tl / dolarKur);
const yuroFiyatlar = tlFiyatlar.map((tl) => tl / yuroKur);

dolar.innerHTML = dolarFiyatlar;
yuro.innerHTML = dolarFiyatlar;

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
