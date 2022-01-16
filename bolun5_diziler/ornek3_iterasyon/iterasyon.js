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

const dolarKur = document.querySelector(".dolar");
const yuroKur = document.querySelector(".yuro");

const dolar = document.querySelector(".dolar-fiyat");
const yuro = document.querySelector(".yuro-fiyat");

dolarKur.onchange = function () {
  dolarKur.value < 0
    ? alert("Dolar Kur 0'da kucuk olamaz.")
    : (dolar.innerHTML = tlFiyatlar.map((tl) =>
        Math.round(tl / dolarKur.value)
      ));
};

yuroKur.onchange = function () {
  yuroKur.value < 0
    ? alert("Yuro Kur 0'dan kucuk olamaz..Zorlama kardesim!!!!")
    : (yuro.innerHTML = tlFiyatlar.map((tl) => Math.round(tl / yuroKur.value)));
};

// ======================================================
//                       FILTER METODU
// ======================================================
// tlFiyatlar listesinde fiyatı 250 TL den az olanlari ayri
// bir diziye saklayalim.

const kucuk250 = tlFiyatlar.filter((l) => l < 250);

console.log(kucuk250);

//fiyati 350 'den kucuk olanlari yaziriniz

tlFiyatlar.filter((c) => c < 350).forEach((s) => console.log(s));

//Kucukten buyuge siralama
console.log(tlFiyatlar.sort((a, b) => a - b));

// ======================================================
//                       PIPELINE
// ======================================================

//-------------- ÖRNEK -------------------
// maası 4000 $'dan düsük olanlara %50 zam yapmak istiyoruz
// ve bunu ayri dizi olarak saklamak istiyoruz.

const maaslar = [3000, 5000, 4000, 6000, 6500, 2500];

const zamliMaaslar = maaslar
  .filter((muc) => muc <= 4000)
  .map((muc) => muc * 1.5);

console.log(zamliMaaslar);

//Maasi 4000'den buyuk olanlara %25 zam yaparak sonuclari yazdiralim.

maaslar
  .filter((a) => a > 4000)
  .map((a) => a * 1.22)
  .forEach((a) => console.log(a));

//-------------- ÖRNEK -------------------

const adlar = [
  "Samet",
  "Hakkı",
  "Duygu",
  "Emrullah",
  "Bilal",
  "Ali",
  "Ahmet",
  "Hasan",
  "Defne",
  "Serdar",
];

const isimBul = (harf) => {
  const buyukHarf = harf.toUpperCase();
  adlar.filter((c) => c.startsWith(buyukHarf)).forEach((x) => console.log(x));
};

isimBul("a");
isimBul("E");
isimBul("s");
// ======================================================
//                       REDUCE METODU
// ======================================================

//! const maaslar = [3000, 5000, 4000, 6000, 6500, 2500];
//maaslarin toplamini bulunuz.

const toplamMaas = maaslar.reduce((x, y) => x + y, 0);
console.log(toplamMaas);

const toplamMaas1 = maaslar.reduce((x, y, length) => {
  console.log(`${length}. iterasyon : ${x}`);
  return x + y;
});
console.log(toplamMaas1);

// 4000 den buyuk olan maaslarin toplamini hesaplayiniz?
const buyukDortBin = maaslar.filter((c) => c > 4000).reduce((a, b) => a + b, 0);
console.log(buyukDortBin);

//Maasi ortalamanin altinda olanlara %20 zam yapalim.

const ortalamaMaas = maaslar.reduce((z, y) => z + y, 0) / maaslar.length;
console.log(ortalamaMaas);

const yeniMaaslar = maaslar.filter((k) => k < ortalamaMaas).map((m) => m * 1.2);
console.log(yeniMaaslar);
