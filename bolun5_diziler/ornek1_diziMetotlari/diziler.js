const dogum = 1980;
const yaslar = [30, 25, 45, 80];
const isimler = [
  "Ahmet",
  "Mehmet",
  "Ali",
  "Mucahit",
  20,
  50,
  false,
  true,
  22.5,
  2021 - dogum,
  yaslar,
];
console.log(isimler);
//TODO ========= DİZİYİ DEĞİŞTİREN METOTLAR ==============
const h1 = document.getElementById("meyveler");
let meyveler = ["Elma", "Armut", "Muz", "Nar", "Kivi"];
console.log(meyveler);
//!pop() -> son elemani siler ve silinen diziyi dondurur
meyveler.pop(); // ['Elma', 'Armut', 'Muz', 'Nar']
console.log(meyveler);

//!push() -> dIZININ SONUNA BIR YADA DAHA FAZLA ELEMAN ekler ve dizinin son eleman sayisini dondurur.
const manav = meyveler.push("Cilek", "Karpuz");
console.log(manav);
//! reverse() -> Dizinin tamamini ters cevirir
meyveler.reverse();
console.log(meyveler);
//! shift() -> ilk elemani siler ve bu haliyle diziyi dondurur.
meyveler.shift();
console.log(meyveler);
//! unshift() -> ilk eleman ekler ve bu haliyle diziyi dondurur
meyveler.unshift("Mongo");
console.log(meyveler);
//! sort() -> diziyi alfabetik olarak siralar
meyveler.sort();
console.log(meyveler);
meyveler.splice();

//TODO ========= DİZIYE ERISIM METOTLARI ==============

const sayilar = [3, 5, 2, "2", "iki", 2, "bes", 5];
console.log(sayilar.includes("bes"));//true
console.log(sayilar.includes(5)); //true
console.log(sayilar.includes(10));//false


