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
