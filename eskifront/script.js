const metinler = [
  "Kendi Öğrenme Temponuzu Yaratın",
  "HOP",
  "Öğrenme Yolculuğunuzu Takip Edin",
  "LEARN",
  "Kelimelerle Fark Yaratın",
  "SKIP",
];
let metinIndeksi = 0;

function metniDegistir() {
  metinIndeksi = (metinIndeksi + 1) % metinler.length;
  const dynamicTextElement = document.getElementById("dynamicText");
  dynamicTextElement.textContent = metinler[metinIndeksi];
}
setInterval(metniDegistir, 1500);
