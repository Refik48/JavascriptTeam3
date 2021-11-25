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
sonDiv.after(h1); // 2.yol
//sonDiv.before(h1); // 3.yol
