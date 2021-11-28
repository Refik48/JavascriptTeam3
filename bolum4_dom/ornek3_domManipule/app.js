//Ac butonuna her tikladigimda lamba_on olsun
document.querySelector(".on").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
};
//Kapa butonuna her tikladigimda lamba_off olsun
document.querySelector(".off").onclick = function () {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
};
//resimin uzerine mouse her geldiginde lamba_on resmini goster
document.querySelector(".resim").addEventListener("mouseover", () => {
  document.querySelector(".resim").src = "./img/lamba_on.gif";
});

//resimin uzerine mouse her ayrildiginda lamba_off resmini goster
document.querySelector(".resim").addEventListener("mouseout", () => {
  document.querySelector(".resim").src = "./img/lamba_off.gif";
});
//Klavyeden bir tusa basildiginda bu fonksiyon devreye girsin.
document.querySelector(".textbox").onkeyup = function () {
  const checkbox = document.querySelector(".checkbox");
  const textbox = document.querySelector(".textbox");
  if (checkbox.checked == true) {
    textbox.value = textbox.value.toUpperCase();
  } else {
    textbox.value = textbox.value.toLowerCase();
  }
};
//HTML'de .input-div'in altina yeni bir h1 ekleme
const sonDiv = document.querySelector(".input-div");
const h1 = document.createElement("h1");
const yazi = document.createTextNode("Programlama Dilleri");
h1.appendChild(yazi);
// document.body.appendChild(h1); 1.yol
sonDiv.after(h1); // 2.yol // sonDiv in sonrasina ekledik. ama index.html de gozukmez.Sonrasina index.htmlde ne eklersek ekleyelim, ekledigimiz araya giremez
//sonDiv.before(h1); // 3.yol
h1.className = "yeni-h1"; //olusturdugumuz  h1 elemanina class adi tanimladim

//*Ekle butonuna her tiklandiginda bu fonksiyon calissin
document.querySelector(".ekle").onclick = function () {
  //ekleme yapilacak listeyi alalim
  const liste = document.querySelector(".liste");
  // input elemanina girilen yeni satirin degerini alalim.
  const satir = document.querySelector(".dil");

  //yeni girilen satiri saklamak icin bir li olusturalim.
  const yeniLi = document.createElement("li");
  //yeni li icin textnode olusturalim.
  const textNode = document.createTextNode(satir.value);
  //bu textNodu li'ye baglayalim
  yeniLi.appendChild(textNode);
  //yeni eklene satiri var olan ul'ye baglayalim.
  liste.appendChild(yeniLi);
  //input icinde kalan veriyi silelim.
  satir.value = "";
};

//* Sil butonuna her tiklandiginda
document.querySelector(".sil").onclick = function () {
  const liste = document.querySelector(".liste");

  liste.removeChild(liste.lastElementChild); // en son elemani siler
  //liste.removeChild(liste.firstElementChild) // ilk elemani siler
};
