let cards = document.getElementById("cards");
let titleFormImgs = document.getElementById("titleFormImgs");
let pictureFormImgs = document.getElementById("pictureFormImgs");
let descriptionFormImgs = document.getElementById("descriptionFormImgs");
let btnDeletePic = document.querySelectorAll("btnDeletePic");

let btnOpenFormImgs = document.getElementById("btnOpenFormImgs");
let btnCloseFormImgs = document.getElementById("btnCloseFormImgs");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");

let btnOpenContact = document.getElementById("btnOpenContact");
let btnCloseContact = document.getElementById("btnCloseContact");
let extraDivContact = document.getElementById("extraDivContact");

let btnOpenTeam = document.getElementById("btnOpenTeam");
let btnCloseTeam = document.getElementById("btnCloseTeam");
let extraDivTeam = document.getElementById("extraDivTeam");


btnOpenFormImgs.addEventListener("click", function() {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block"
  } else {
    extraDivFormImgs.style.display = "none"
  }
})

btnCloseFormImgs.addEventListener("click", function() {
  extraDivFormImgs.style.display = "none"
})

btnOpenContact.addEventListener("click", function() {
  if (extraDivContact.style.display == "none") {
    extraDivContact.style.display = "block"
  } else {
    extraDivContact.style.display = "none"
  }
})

btnCloseContact.addEventListener("click", function() {
  extraDivContact.style.display = "none"
})

btnOpenTeam.addEventListener("click", function() {
  if (extraDivTeam.style.display == "none") {
    extraDivTeam.style.display = "block"
  } else {
    extraDivTeam.style.display = "none"
  }
})

btnCloseTeam.addEventListener("click", function() {
  extraDivTeam.style.display = "none"
})

window.addEventListener("click", function(event) {
  if (event.target == extraDivFormImgs) {
    extraDivFormImgs.style.display = "none"
  }  if (event.target == extraDivContact) {
    extraDivContact.style.display = "none"
  } if (event.target == extraDivTeam) {
    extraDivTeam.style.display = "none"
  }
})

document.getElementById("formImgs").onsubmit = function () { return false };
document.getElementById("formContact").onsubmit = function () { return false };

document.getElementById("submitFormImgs").addEventListener("click", function () {
  if ((titleFormImgs.value == "") || (pictureFormImgs.value == "") || (descriptionFormImgs.value == "")) {
    titleFormImgs.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");

    alert("Por favor, preencha os 3 campos!");
  } else {
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    cardContent.innerHTML += `<img src="${pictureFormImgs.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h2 class="cardTitle">${titleFormImgs.value}</h2>`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionFormImgs.value}</h4>`;

    let divBtnDeletePic = document.createElement("div");
    divBtnDeletePic.setAttribute("class", "divBtnDeletePic");
    card.appendChild(divBtnDeletePic);

    let btnDeletePic = document.createElement("img");
    btnDeletePic.setAttribute("src", "./imgs/btnDeletePic.svg");
    btnDeletePic.setAttribute("class", "btnDeletePic");
    divBtnDeletePic.appendChild(btnDeletePic);
    btnDeletePic.addEventListener("click", function () { card.remove() });

    card.addEventListener("mouseover", function() {
      divBtnDeletePic.style.display = "block";
    })
    card.addEventListener("mouseout", function() {
      divBtnDeletePic.style.display = "none";
    })

    titleFormImgs.focus();

    document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})