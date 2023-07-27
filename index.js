const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "*",
  "&",
  "$",
  "#",
  "!",
  "?",
  "<",
  ">",
  "+",
];

let passLenght = document.getElementById("PaswordLenght");
let passDisplay = document.querySelectorAll(".passwords");
let btnPass = document.getElementById("generatePass");

let num = passLenght.min;
passLenght.value = num;
passLenght.addEventListener("input", () => (num = passLenght.value));

function generatePass(num = 8) {
  let passArray = [];
  for (let g = 1; g <= num; g++) {
    let passGenerado = "";
    for (let i = 1; i < num; i++) {
      let randomPass = Math.floor(Math.random() * characters.length);
      passGenerado += characters[randomPass];
    }
    passArray.push(passGenerado);
  }
  return passArray;
}

function copyToClipboard(e) {
  let textCoppied = e.target;
  navigator.clipboard.writeText(textCoppied.textContent).then(() => {
    alert("Copied to clipboard");
  });
}

function renderPass() {
  let passwordLenght = generatePass(num);
  for (let i = 0; i < passDisplay.length; i++) {
    passDisplay[i].textContent = passwordLenght[i];
    passDisplay[i].style.color = "#4ADF86";
    passDisplay[i].addEventListener("click", copyToClipboard);
  }
}

btnPass.addEventListener("click", renderPass);
