let characters = [
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
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "0",
  "!",
  "?",
  "{",
  "}",
  "-",
  "+",
  "=",
  "[",
  "]",
  "|",
  "~",
  "`",
  "@",
];

let passElOne = document.querySelector("#pass-el-one");
let passElTwo = document.querySelector("#pass-el-two");
let passElThree = document.querySelector("#pass-el-three");
let passElFour = document.querySelector("#pass-el-four");
let generateBtn = document.querySelector("#generate");
let lengthValue = document.querySelector("#myNumberInput");

document.addEventListener("DOMContentLoaded", function () {
  setPassLength();
});
//get random letter from characters array
function randomCharacter() {
  let randomNumber = Math.floor(Math.random() * characters.length);
  return characters[randomNumber];
}

//ability to set password length
function setPassLength() {
  let inputValue = lengthValue.value;
  lengthValue.onchange = function () {
    const value = parseInt(this.value);
    if (value < 8 || value > 30) {
      alert("Please enter a number between 8 and 30.");
      this.value = ""; // Clear the input
    } else if (inputValue === "") {
      return 12;
    }
  };
  return inputValue;
}

//generating the password
function generatePassword(length) {
  let password = "";
  for (let i = 0; i < length; i++) {
    password += randomCharacter();
  }
  return password;
}

// rendering password to screen
function renderPassword() {
  passElOne.textContent = "";
  passElTwo.textContent = "";
  passElThree.textContent = "";
  passElFour.textContent = "";

  let length = setPassLength();
  passElOne.textContent += generatePassword(length);
  passElTwo.textContent += generatePassword(length);
  passElThree.textContent += generatePassword(length);
  passElFour.textContent += generatePassword(length);
}

//ability to copy to clipboard
function copyToClipboard(e) {
  let password = e.target;

  // Check if the div is empty
  if (password.textContent.trim() === "") {
    return; // Do nothing if empty
  }

  navigator.clipboard.writeText(password.textContent).then((res) => {
    let copiedElement = document.createElement("span");
    copiedElement.textContent = "Copied!";
    copiedElement.classList.add("copied");
    password.appendChild(copiedElement);
    setTimeout(() => {
      password.removeChild(copiedElement);
    }, 1000);
  });
}

passElOne.addEventListener("click", copyToClipboard);
passElTwo.addEventListener("click", copyToClipboard);
passElThree.addEventListener("click", copyToClipboard);
passElFour.addEventListener("click", copyToClipboard);

generateBtn.addEventListener("click", renderPassword);

document.getElementById("myNumberInput").addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9\.]/g, "");
});
window.onload = function () {
  let lengthValue = document.querySelector("#myNumberInput");
  lengthValue.value = ""; // Clear the value
};
