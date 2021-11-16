// Butona her tiklandiginda calisir.

function hesapla() {
  // ! Class'lara erişim için .class_adı
  // ! id'li bir HTML elemanına erisim için ise #id
  const r = document.getElementById("r").value;
  const h = document.querySelector(".h").value;
  const sonuc = (Math.PI * r * r * h).toFixed(1);

  document.querySelector(".hacim").innerHTML = sonuc;
}
