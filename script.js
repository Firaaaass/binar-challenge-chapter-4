const pBatu = document.querySelector(".b");
// const pBatuCom = document.querySelector(".b");
const pKertas = document.querySelector(".k");
// const pKertasCom = document.querySelector(".k");
const pGunting = document.querySelector(".g");
// const pGuntingCom = document.querySelector(".g");
const pVersus = document.querySelector(".teks-versus");
const pWin = document.querySelector(".player-win");
const pDraw = document.querySelector(".draw");
const pLost = document.querySelector(".computer-win");
const pRefresh = document.querySelector(".r");
const pHasil = document.querySelector(".hasil-akhir");

pWin.classList.add("hidden");
pDraw.classList.add("hidden");
pLost.classList.add("hidden");

function getComputerChoice() {
  const choices = ["b", "k", "g"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function win(userChoice, computerChoice) {
  console.log("PLAYER 1 WIN");
  pWin.classList.remove("hidden");
  pVersus.classList.add("hidden");
  //   pDraw.classList.add("hidden");
  //   pLost.classList.add("hidden");
}

function lost(userChoice, computerChoice) {
  console.log("COM WIN");
  pLost.classList.remove("hidden");
  pVersus.classList.add("hidden");
  //   pDraw.classList.add("hidden");
  //   pWin.classList.add("hidden");
}

function draw(userChoice, computerChoice) {
  console.log("DRAW");
  pDraw.classList.remove("hidden");
  pVersus.classList.add("hidden");
  //   pWin.classList.add("hidden");
  //   pLost.classList.add("hidden");
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "bg":
    case "kb":
    case "gk":
      win(userChoice, computerChoice);
      break;
    case "bk":
    case "kg":
    case "gb":
      lost(userChoice, computerChoice);
      break;
    case "bb":
    case "kk":
    case "gg":
      draw(userChoice, computerChoice);
      break;
  }
  //   pVersus.classList.add("hidden");
}

function main() {
  pBatu.addEventListener("click", function () {
    game("b");
    pBatu.style.backgroundColor = "#8c908d";
  });

  pKertas.addEventListener("click", function () {
    game("k");
    pKertas.style.backgroundColor = "#8c908d";
  });

  pGunting.addEventListener("click", function () {
    game("g");
    pGunting.style.backgroundColor = "#8c908d";
  });
}

main();

function Refresh() {
  pRefresh.addEventListener("click", function () {
    pWin.classList.add("hidden");
    pDraw.classList.add("hidden");
    pLost.classList.add("hidden");
    pVersus.classList.remove("hidden");
  });
}
// function hasilakhir(hasil) {
//     pHasil.
// }
// pRefresh.addEventListener("click", () => {
//     gameDiv.classList.toggle("hidden");
//     resultsDiv.classList.toggle("hidden");
