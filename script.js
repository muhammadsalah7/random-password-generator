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

let pwLength = document.getElementById("myNumberInput");

pwLength.addEventListener("input", function () {
  this.value = this.value.replace(/[^0-9\.]/g, ""); // Allow decimal point optionally
});
pwLength.onchange = function () {
  const value = parseInt(this.value);
  if (value < 8 || value > 30) {
    alert("Please enter a number between 8 and 30.");
    this.value = ""; // Clear the input
  } else {
    return;
  }
};
