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

const tekCift1 = function (sayiniz) {
  6;
  return sayiniz % 2 == 0 ? "CIFT" : "TEK";
};

console.log(tekCift1(42));

//ORNEK: Buyuk sayiyi bulma

// ! 3.YÖNTEM  : ARROW (OK) FONKSIYONLARI

const sayi1 = Number(prompt("1.sayiyi giriniz:"));
const sayi2 = Number(prompt("2.sayiyi giriniz:"));

const topla = (sayi1, sayi2) => sayi1 + sayi2;

alert(topla(sayi1, sayi2));
console.log(topla(sayi1, sayi2));

const topla2 = (a, b) => a + b;
console.log(topla2(sayi1, sayi2));
