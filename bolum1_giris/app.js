// * =======================================================
// *                       KONSOL
// * =======================================================
// * Konsolda mesaj vermek için console.log() fonksiyonu kullanılır.
console.log("Hello Javascript");
console.log("Javascript javadan kolay bir dildir..");
console.error("Bu bir hatadir");
console.warn("Bu bir uyaridir");

//alert("Dikkat et Mucahit abi.."); // ? Ekrana pop-up mesaj çıkarır.

// * =======================================================
// *                 DEĞİŞKEN TANIMLAMA
// * =======================================================

//************************ VAR ****************************
// ? var keyword ile değişken tanımlanabilir.
// ? Ancak, modern JS var keyword'unun kullanımı azaldı.
//? Çünkü, var global değişken gibi düşünülebilir.
// ? Günümüzde programcılar global değişken gerekmedikçe VAR tercih etmemektedir.

var pi = 3.14;
console.log(pi);
console.log(typeof pi); //number

pi = "3";
console.log(pi);
console.log(typeof pi); //string

pi = true;
console.log(pi);
console.log(typeof pi); //Boolean

isim = "Mucahit";
console.log(isim);
console.log(typeof isim);

var gel;
console.log(gel);
console.log(typeof gel);

//************************ CONST ****************************
// ? const ve let Modern JS ile gelmiş yeni değişken tanımlama keyword'leridir.
// ! CONST: Sadece başlangıçta değer atılabilir.
// ! Sonradan değeri değiştirilemez (non-primitive'ler hariç).

const piSayisi = 3.14;
console.log(piSayisi);
//piSayisi = 3;

//************************ LET ****************************
// ? Eğerki değişkenimİzin değerinin değişmesi gerekiyor ise const kullanamayız.
// ? Bunun yerine LET kullanabiliriz.
// ! LET Block-scope bir değişkendir. VAR ise global-scope bir tanımlamadır.
// * Block-scope: Sadece tanımlı olduğu alanda geçerlidir.

let fiyat;
console.log(fiyat);
fiyat = 5.5;
console.log(fiyat);
console.log(typeof fiyat);
// TODO String tanımlamak için 3 farklı karakter kullanılabilir.
let isim1 = "mucahit";
console.log(isim1);
let isim2 = "refik";
console.log(isim2);
let isim3 = `sefik`;
console.log(isim3);

const dil = null;
console.log(dil);
console.log(typeof dil);
// * =======================================================
// *                 ARİTMETİK OPERATÖRLER
// * =======================================================

const tatli = 120;
const ice = 20;
const cola = 5;

let toplamFiyat = tatli + ice + cola;

console.log(toplamFiyat, cola);
console.log("TOPLAM: " + toplamFiyat);

const ad = "Mucahit";
const soyAd = "Sivas";
console.log(ad + soyAd);
console.log(ad + " " + soyAd);

console.log(`Benim adim ${ad} soyadim ${soyAd}`);

const yil = 2021;
const dogumTarihi = 1992;
const sene = yil - dogumTarihi;

console.log("Yas:" + sene); //TODO sonucu sene degiskenine atayarak yazdirma
console.log("Yas:" + yil - dogumTarihi); // ! Hata---> NaN = Not a Number
console.log("Yas:" + (yil - dogumTarihi)); // ? Normal yazdirma
console.log(`Benim yasim : ${yil - dogumTarihi} dur`); //* Template Literal ile yazdırma.

// ? Us alma operatoru
const taban = 2;
const us = 10;
const sonuc = taban ** us;
console.log(sonuc);

// ? Mod alma (%)
const sayi = 123;
const birler = sayi % 10;
const onlar = Math.floor(sayi / 10) % 10;
const yuzler = Math.floor(sayi / 100);

console.log(`Birler: ${birler} `);
console.log(`Onlar: ${onlar} `);
console.log(`Yuzler : ${yuzler}`);

let a = 20;
let b = ++a;
let c = --a;
console.log(`sayilarimiz ${a} , ${b} , ${c} dir`);

// * =======================================================
// *         KARŞILAŞTIRMA ve LOJİK OPERATÖRLER
// * =======================================================
// ! 3'lü karşılaştırma operatörü kullanıldığında hem veri tipi hem de içerik kontrolü yapılır.
const sayi1 = 100;
const sayi2 = "100";
console.log(typeof sayi1, typeof sayi2);
console.log(sayi1 == sayi2); // ! true
console.log(sayi1 === sayi2); // ? false

console.log(sayi1 !== sayi2); //  ? veritipi ve rakamlar -- true
console.log(sayi1 != sayi2); // ? sadece rakamlar -- false

const s1 = 5;
const s2 = -7;
const isim22 = "Mucahit";
console.log(Boolean(isim2));

const x = true;
const y = true;
const z = undefined;

console.log(x && y && z);

// * =======================================================
// *                      TERNARY
// * =======================================================

//const age13 = +prompt("Yasinizi giriniz:");
const name1 = prompt("Adinizi giriniz:");
const age = Number(prompt("Yasinizi giriniz:"));
// TODO Gosterim-1
age >= 18
  ? console.log(`${name1} ehliyet alabilir`)
  : console.log(`${name1} ehliyet alamaz`);

//TODO Gosterim-2
const result =
  age >= 18 ? `${name1} ehliyet alabilir` : `${name1} ehliyet alamaz`;

console.log(result);
