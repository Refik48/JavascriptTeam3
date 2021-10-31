// * =======================================================
// *                   KARAR YAPILARI
// * =======================================================

// //************************ IF-ELSE ***********************
const s1 = Number(prompt("Birinci sayiyi giriniz:"));
const islem = prompt("islemi giriniz");
const s2 = Number(prompt("Ikinci sayiyi giriniz:"));
let sonuc = 0;
if (islem == "+") {
  sonuc = s1 + s2;
} else if (islem == "-") {
  sonuc = s1 - s2;
  20;
} else if (islem == "*") {
  sonuc = s1 * s2;
} else if (islem == "/") {
  sonuc = s1 / s2;
} else {
  alert("yanlis islem yaptiniz");
}
console.log(`Isleminizin sonucu ${s1} ${islem} ${s2} = ${sonuc} dir`);
//*------------------------------------------------------------
const age = Number(prompt("Yasinizi giriniz"));
const saglik = prompt("Saglikli misiniz e/h");

const result =
  age > 18 && saglik == "e" ? "Askere gidebilir" : "Askere gidemez";
console.log(`Bu kisinin sonucu ${result} dir`);
alert(`Bu kisinin sonucu ${result} dir`);

//************************ SWITCH-CASE ***********************
const gunNo = Number(prompt("Gun numarasi giriniz"));
switch (gunNo) {
  case 1:
    gunAdi = "Pazartesi";
    break;
  case 2:
    gunAdi = "Sali";
    break;
  case 3:
    gunAdi = "Carsamba";
    break;
  case 4:
    gunAdi = "Persembe";
    break;
  case 5:
    gunAdi = "Cuma";
    break;
  case 6:
    gunAdi = "Cumartesi";
    break;
  case 7:
    gunAdi = "Pazar";
    break;
  default:
    alert("Gun numararasi 1-7 arasinda olmalidir.");
    console.log(`Gun numararasi 1-7 arasinda olmalidir.`);
    break;
}
alert(`Bugun gunlerden ${gunAdi} dir`);
console.log(`Bugun gunlerden ${gunAdi} dir`);

//************************ TERNARY ************************
// ÖRNEK
const maas = prompt("Maasinizi giriniz:");
const calismaSuresi = prompt("Calisma suresini giriniz:");
const zamliMaas =
  calismaSuresi > 10 ? maas * 1.5 : calismaSuresi > 5 ? maas * 1.2 : maas * 1.1;
console.log(zamliMaas);

// ÖRNEK
const borç = 0;
const maaş = 3000;
console.log(!borç && maaş > 2825.9 ? "Kredi Alabilir 🤑" : "Kredi Alamaz 🥺");

// * =======================================================
// *                     DÖNGÜLER
// * =======================================================

//************************ FOR ****************************

// ORNEK
