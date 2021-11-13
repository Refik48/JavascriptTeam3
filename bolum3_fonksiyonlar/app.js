// * =======================================================
// *                    FONKSİYONLAR
// * =======================================================

// ! 1.YÖNTEM  : FUNCTION DECLARATION
// Fonksiyonun tanımlanması
// function yazdiralim() {
//   console.log("Seyrani bey");
// }
// yazdiralim(); //! call \ invoke
// // Ornek: Parametreli Fonksiyon
// function yazdiralim2(ad, soyad) {
//   console.log(`Adiniz ${ad} soyadiniz ${soyad} dir`);
// }
// yazdiralim2("Refik", "Gulak");
// Ornek: Parametreli, donus degerli Fonksiyon
// const dogum = Number(prompt("Dogum tarihinizi giriniz:"));

// function yasHesapla(dogum) {
//   const yasim = 2021 - dogum;
//   return yasim;
// }
// console.log(yasHesapla(dogum));

// console.log(`Yasiniz: ${yasHesapla(1992)}`);
// alert(`Yasiniz: ${yasHesapla(1992)}`);

// const yas = yasHesapla(1976);
// console.log(`Yasiniz: ${yas}`);

// Örnek: Klavyeden girilen sayinin tek veya cift oldugunu donduren bir fonksiyon yaziniz.

//const sayiniz = prompt("Sayinizi giriniz:");

// console.log(tekCift(sayiniz));

// function tekCift(sayiniz) {
//   const sonuc = sayiniz % 2 == 0 ? `${sayiniz} Cifttir` : `${sayiniz} Tektir`;
//   return sonuc;
// }
// ! 2.YÖNTEM  : FUNCTION EXPRESSION

// const tekCift1 = function (sayiniz) {
//   6;
//   return sayiniz % 2 == 0 ? "CIFT" : "TEK";
// };

// console.log(tekCift1(42));

//ORNEK: Buyuk sayiyi bulma

// ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI

// const sayi1 = Number(prompt("1.sayiyi giriniz:"));
// const sayi2 = Number(prompt("2.sayiyi giriniz:"));

// const topla = (sayi1, sayi2) => sayi1 + sayi2;

// alert(topla(sayi1, sayi2));
// console.log(topla(sayi1, sayi2));

// const topla2 = (a, b) => a + b;
// console.log(topla2(sayi1, sayi2));

//Ornek:

const tekMi2 = (sayi) => (sayi % 2 == 0 ? "cift" : "tek");

console.log(tekMi2(5)); // call - invoke
console.log(tekMi2(6));

//* Ornek: us alma
// const taban = prompt("taban giriniz");
// const us = prompt("us giriniz");

// const usAl = (k, l) => k ** l;
// //bizim kullanicidan aldigimiz degerleri fonksiyon ismine bakmadan sadece degerleri kullaniyor.(parametrelerin - argumanlarin)

// console.log(usAl(taban, us)); // invoke

// * Ornek: Menü
// ! Ok fonksiyonunda birden fazla ifade (EXPRESSION) var ise fonksiyonda suslu parantez kullanmalıyız.

const menu = () => {
  console.log("==============================");
  console.log("      JAVASCRIPT              ");
  console.log("==============================");
};

menu(); //invoke

//Ornek: Bilgi ver fonksiyonu
//1.yontem
const bilgiVer = (ad, soyad, dogum) => {
  const bilgi = `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;
  return bilgi;
};

console.log(bilgiVer("Mucahit", "Cakmak", 1992)); //invoke

//2.yontem
const bilgiVer1 = (ad, soyad, dogum) =>
  `Adim ${ad}, Soyadim ${soyad} ve yasim ${2021 - dogum}`;

console.log(bilgiVer1("Mucahit", "Yildiz", 1994)); //invoke

// * ORNEK: SILINDIRIN HACMINI HESAPLAYAN BIR FONKSIYON YAZINIZ.

const r = prompt("Yaricapi giriniz");
const h = prompt("Yukseklik giriniz");

const hacimHesaplama = (r, h) => Math.PI * r * r * h;

//* en yakin sayiya yuvarlar -- Math.round
console.log("Silindirin Hacmi:" + Math.round(hacimHesaplama(r, h)));

//* Virgulden sonra kac basamak istersek -- toFixed
console.log("Silindirin Hacmi:" + hacimHesaplama(r, h).toFixed(2));

//* en yakin tabana yuvarlar -- Math.floor
console.log("Silindirin Hacmi:" + Math.floor(hacimHesaplama(r, h)));
