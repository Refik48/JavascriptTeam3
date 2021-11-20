// ======================================================
//                   GETELEMENTBYID()
// ======================================================
const paragraf = document.getElementById("par");
paragraf.style.backgroundColor = "black";
paragraf.style.color = "white";
paragraf.style.fontSize = "20px";

const buton = document.getElementById("btn");

buton.style.color = "yellow";
buton.style.backgroundColor = "black";
buton.style.width = "100px";
buton.style.height = "30px";
buton.style.fontSize = "17px";
buton.innerHTML = "ARA";

// ======================================================
//                   GETELEMENTSBYTAGNAME()
// ======================================================
const resim = document.getElementsByTagName("img");
resim[0].style.width = "300px";
resim[1].style.width = "310px";
resim[0].style.height = "200px";
resim[1].style.height = "210px";
resim[0].style.border = "5px solid red";

// ======================================================
//                   GETELEMENTSBYCLASSNAME()
// ======================================================
const h1 = document.getElementsByClassName("h1");
h1[0].style.color = "red";
h1[0].style.textAlign = "center";
h1[0].innerHTML = "DOM selector cok ilginc";

// ======================================================
//                   QUERYSELECTOR()
// ======================================================
const baslik = document.querySelector(".title");
baslik.innerHTML = "DOM selector  👀😜🤦‍♂️👌😁";

const body = document.querySelector("#body");
body.style.backgroundImage = "linear-gradient(green,blue)";

// ======================================================
//                        EVENTS
// ======================================================
//TODO     3.yontem
document.querySelector(".h1").onmouseover = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "white";
  h1.style.backgroundColor = "black";
};
document.querySelector(".h1").onmouseout = function () {
  const h1 = document.querySelector(".h1");
  h1.style.color = "black";
  h1.style.backgroundColor = "red";
};

//* addEventListener()  -- 4.yontem

document.querySelector("#btn").addEventListener("mouseover", function () {
  const btn = document.querySelector("#btn");
  btn.style.width = "200px";
  btn.style.backgroundColor = "red";
});

document.querySelector("#btn").addEventListener("mouseout", () => {
  const btn = document.querySelector("#btn");
  btn.style.width = "100px";
  btn.style.backgroundColor = "green";
});
