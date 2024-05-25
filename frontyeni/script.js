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

// Login modal
const openGirisModalBtn = document.getElementById("uyeGirisBtn");
const girisModal = document.getElementById("girisModal");

openGirisModalBtn.onclick = function () {
  girisModal.style.display = "block";
};
const closeGirisModalBtn = document.getElementById("closeGirisModalBtn");
closeGirisModalBtn.onclick = function () {
  girisModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Modalı gizle
  }
};

// Signup Modal
const openUyeOlModalBtn = document.getElementById("uyeOlBtn");
const uyeOlModal = document.getElementById("uyeOlModal");

openUyeOlModalBtn.onclick = function () {
  uyeOlModal.style.display = "block";
};
const closeUyeOlModalBtn = document.getElementById("closeUyeOlModalBtn");
closeUyeOlModalBtn.onclick = function () {
  uyeOlModal.style.display = "none";
};

// Contact Modal
const contactModalBtn = document.getElementById('contactBtn');
const contactModal = document.getElementById('contactModal');

contactModalBtn.onclick = function(){
  contactModal.style.display="block";
};

const contactModalCloseBtn = document.getElementById('contactModalCloseBtn');
contactModalCloseBtn.onclick = function(){
  contactModal.style.display = "none";
}
window.onclick = function (event) {
  if (event.target == contactModal) {
    contactModal.style.display = "none"; // Modalı gizle
  }
};

// A1-MODAL
const openModalBtn = document.getElementById("A1Open");

const modal = document.getElementById("A1Modal");

openModalBtn.onclick = function () {
  modal.style.display = "block"; // Modalı görünür yap
};

const closeModalBtn = document.getElementById("closeModalBtn");
closeModalBtn.onclick = function () {
  modal.style.display = "none"; // Modalı gizle
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none"; // Modalı gizle
  }
};

//A2-MODAL
const openModalBtnA2 = document.getElementById("A2Open");

const modalA2 = document.getElementById("A2Modal");

openModalBtnA2.onclick = function () {
  modalA2.style.display = "block"; // Modalı görünür yap
};

const closeModalBtnA2 = document.getElementById("closeModalBtnA2");
closeModalBtnA2.onclick = function () {
  modalA2.style.display = "none"; // Modalı gizle
};

window.onclick = function (event) {
  if (event.target == modalA2) {
    modalA2.style.display = "none"; // Modalı gizle
  }
};

//B1-Modal
const openModalBtnB1 = document.getElementById("B1Open");
const modalB1 = document.getElementById("B1Modal");

openModalBtnB1.onclick = function () {
  modalB1.style.display = "block"; // Modalı görünür yap
};

const closeModalBtnB1 = document.getElementById("closeModalBtnB1");
closeModalBtnB1.onclick = function () {
  modalB1.style.display = "none"; // Modalı gizle
};

window.onclick = function (event) {
  if (event.target == modalB1) {
    modalB1.style.display = "none"; // Modalı gizle
  }
};

//B2-Modal
const openModalBtnB2 = document.getElementById("B2Open");
const modalB2 = document.getElementById("B2Modal");

openModalBtnB2.onclick = function () {
  modalB2.style.display = "block"; // Modalı görünür yap
};

const closeModalBtnB2 = document.getElementById("closeModalBtnB2");
closeModalBtnB2.onclick = function () {
  modalB2.style.display = "none"; // Modalı gizle
};

window.onclick = function (event) {
  if (event.target == modalB2) {
    modalB2.style.display = "none"; // Modalı gizle
  }
};

//c1-Modal
const openModalBtnC1 = document.getElementById("C1Open");
const modalC1 = document.getElementById("C1Modal");

openModalBtnC1.onclick = function () {
  modalC1.style.display = "block"; // Modalı görünür yap
};

const closeModalBtnC1 = document.getElementById("closeModalBtnC1");
closeModalBtnC1.onclick = function () {
  modalC1.style.display = "none"; // Modalı gizle
};

window.onclick = function (event) {
  if (event.target == modalC1) {
    modalC1.style.display = "none"; // Modalı gizle
  }
};
//c2-Modal
const openModalBtnC2 = document.getElementById("C2Open");
const modalC2 = document.getElementById("C2Modal");

openModalBtnC2.onclick = function () {
  modalC2.style.display = "block"; // Modalı görünür yap
};

const closeModalBtnC2 = document.getElementById("closeModalBtnC2");
closeModalBtnC2.onclick = function () {
  modalC2.style.display = "none"; // Modalı gizle
};

window.onclick = function (event) {
  if (event.target == modalC2) {
    modalC2.style.display = "none"; // Modalı gizle
  }
};
