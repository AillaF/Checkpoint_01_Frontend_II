// variáveis que chamam os itens do formulário para criação dos cards
let cards = document.getElementById("cards");
let titleFormImgs = document.getElementById("titleFormImgs");
let pictureFormImgs = document.getElementById("pictureFormImgs");
let descriptionFormImgs = document.getElementById("descriptionFormImgs");
let btnDeletePic = document.querySelectorAll("btnDeletePic");

// variáveis que chamam os botões do formulário de criação dos cards
let btnOpenFormImgs = document.getElementById("btnOpenFormImgs");
let btnCloseFormImgs = document.getElementById("btnCloseFormImgs");
let extraDivFormImgs = document.getElementById("extraDivFormImgs");

// variáveis que chamam os botões do formulário para entrar em contato
let btnOpenContact = document.getElementById("btnOpenContact");
let btnCloseContact = document.getElementById("btnCloseContact");
let extraDivContact = document.getElementById("extraDivContact");

// variáveis que chamam os botões do modal com informações da equipe
let btnOpenTeam = document.getElementById("btnOpenTeam");
let btnCloseTeam = document.getElementById("btnCloseTeam");
let extraDivTeam = document.getElementById("extraDivTeam");

// funções para abrir e fechar o formulário de criação dos cards
// para o botão de abrir/fechar
btnOpenFormImgs.addEventListener("click", function() {
  if (extraDivFormImgs.style.display == "none") {
    extraDivFormImgs.style.display = "block"
  } else {
    extraDivFormImgs.style.display = "none"
  }
})
// para o botão de fechar
btnCloseFormImgs.addEventListener("click", function() {
  extraDivFormImgs.style.display = "none"
})

// funções para abrir e fechar o formulário para entrar em contato
// para o botão de abrir/fechar
btnOpenContact.addEventListener("click", function() {
  if (extraDivContact.style.display == "none") {
    extraDivContact.style.display = "block"
  } else {
    extraDivContact.style.display = "none"
  }
})
// para o botão de fechar
btnCloseContact.addEventListener("click", function() {
  extraDivContact.style.display = "none"
})

// funções para abrir e fechar o modal com informações da equipe
// para o botão de abrir/fechar
btnOpenTeam.addEventListener("click", function() {
  if (extraDivTeam.style.display == "none") {
    extraDivTeam.style.display = "block"
  } else {
    extraDivTeam.style.display = "none"
  }
})
// para o botão de fechar
btnCloseTeam.addEventListener("click", function() {
  extraDivTeam.style.display = "none"
})

/* função para fechar qualquer um dos 3 modais (formulário de criar cards, formulário de entrar em contato e informações
da equipe) ao clicar fora do espaço reservado a eles próprios*/
window.addEventListener("click", function(event) {
  if (event.target == extraDivFormImgs) {
    extraDivFormImgs.style.display = "none"
  }  if (event.target == extraDivContact) {
    extraDivContact.style.display = "none"
  } if (event.target == extraDivTeam) {
    extraDivTeam.style.display = "none"
  }
})

// funções para impedir os formulários de atualizarem a página ao clicar no botão submit
document.getElementById("formImgs").onsubmit = function () { return false };
document.getElementById("formContact").onsubmit = function () { return false };

// função para criação dos cards
document.getElementById("submitFormImgs").addEventListener("click", function () {
  // para caso qualquer um dos campos não seja preenchido e o botão de enviar seja pressionado
  if ((titleFormImgs.value == "") || (pictureFormImgs.value == "") || (descriptionFormImgs.value == "")) {
    // para deixar o input de título selecionado
    titleFormImgs.focus();

    // para avisar ao usuário que ele esqueceu de preencher os campos
    alert("Por favor, preencha os 3 campos!");

  // para caso todos os campos tenham sido preenchidos corretamente
  } else {
    // para criar uma div para cada card dentro do espaço reservado no html
    let card = document.createElement("div");
    card.setAttribute("class", "card");
    cards.appendChild(card);

    // para criar uma div em cada card com imagem, título e descrição
    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "cardContent");
    card.appendChild(cardContent);

    // para criar os elementos de imagem, título e descrição com os valores fornecidos pelo usuário
    cardContent.innerHTML += `<img src="${pictureFormImgs.value}" class="cardPicture">`;
    cardContent.innerHTML += `<h2 class="cardTitle">${titleFormImgs.value}</h2>`;
    cardContent.innerHTML += `<h4 class="cardDescription">${descriptionFormImgs.value}</h4>`;

    // para criar uma div que terá o botão de deletar o card
    let divBtnDeletePic = document.createElement("div");
    divBtnDeletePic.setAttribute("class", "divBtnDeletePic");
    card.appendChild(divBtnDeletePic);

    // para criar o botão de deletar e sua função de deletar o próprio card
    let btnDeletePic = document.createElement("img");
    btnDeletePic.setAttribute("src", "./imgs/btnDeletePic.svg");
    btnDeletePic.setAttribute("class", "btnDeletePic");
    divBtnDeletePic.appendChild(btnDeletePic);
    btnDeletePic.addEventListener("click", function () { card.remove() });

    // para adicionar a função de hover na div que guarda o botão de deletar a imagem
    card.addEventListener("mouseover", function() { divBtnDeletePic.style.display = "block"; })
    card.addEventListener("mouseout", function() { divBtnDeletePic.style.display = "none"; })

    // para deixar o input de título selecionado depois de criar o card
    titleFormImgs.focus();

    // para limpar todos os campos após criar o card
    document.querySelectorAll("input").forEach((item) => item.value = "");
  }
})