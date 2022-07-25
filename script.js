const batu_div = document.getElementById("b");
const kertas_div = document.getElementById("k");
const gunting_div = document.getElementById("g");

function getComputerChoice() {
  const choices = ["b", "k", "g"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber];
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  switch (userChoice + computerChoice) {
    case "bg":
    case "kb":
    case "gk":
      console.log("PLAYER 1 WIN");
      break;
    case "bk":
    case "kg":
    case "gb":
      console.log("COM WIN");
      break;
    case "bb":
    case "kk":
    case "gg":
      console.log("DRAW");
      break;
  }
}

function main() {
  batu_div.addEventListener("click", function () {
    game("b");
  });

  kertas_div.addEventListener("click", function () {
    game("k");
  });

  gunting_div.addEventListener("click", function () {
    game("g");
  });
}

main();
