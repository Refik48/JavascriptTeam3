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
// !Dizinin indeksi 1 (başlangıç noktasi) ile 2 arasina yeni eleman ekler
meyveler.splice(1,0,"Erik");
//!Diznin 4.elemanini siler uzerine "Karpuz" yazdik
meyveler.splice(4,1,"Karpuz");


//TODO ========= DİZIYE ERISIM METOTLARI ==============

const sayilar = [3, 5, 2, "2", "iki", 2, "bes", 5];
console.log(sayilar.includes("bes"));//true
console.log(sayilar.includes(5)); //true
console.log(sayilar.includes(10));//false
//!eslesen ilk indeksi dondurur.
const ikiIndeks=sayilar.indexOf(2);
console.log(ikiIndeks); // 2
const ikiString= sayilar.indexOf("iki");
console.log(ikiString);

console.log("2'nin son indeksi:" + sayilar.lastIndexOf(2));

//! Aranilan eleman bulunamaz ise -1 dondurur
// const ucIndeks=sayilar.indexOf("bes");

// ucIndeks < 0 ? alert("Aranilan nesne bulunamadi"):alert("Aranilan nesnenin indeksi:" + ucIndeks);

//!Join dizinin elemanlarini birlestirip string hale getirir.
const sayilar1 = sayilar.join("");//elemanlarin arasina istedigimiz sarti koyabiliriz.() icerisine bir sart yazmaz isek defoult olarak aralara virgul koyar. 
console.log(sayilar1);
//!toString() fonksiyonu dizinin elemanlarinin arasina virgul koyarak birlestirir ve tek bir string yapar. 
const sayilar2 = sayilar.toString();
console.log(sayilar2);


const arabalar = ["bmw", "mercedes", "audi","tofas", "kia","toyota"];
const arabalar1= arabalar.slice(2);
console.log(arabalar1);

const arabalar2= arabalar.slice(1,3);
console.log(arabalar2); // start indeksi dahil ama end indeksi dahil degil

//!========concat=====

const yazilar=["a","n","ad","sehir", "ulke"];
const rakamlar=[3,8,4,9,6];

const birlesik = yazilar.concat(rakamlar,[7,2,9],true,false);
console.log(birlesik);
console.log(typeof birlesik[4]);

h1.innerHTML = birlesik;