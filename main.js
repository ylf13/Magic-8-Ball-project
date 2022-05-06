//  Magic 8 ball
var userName = " ";

var userName = "Jane" ? console.log("Hello Jane!") : console.log("Hello!");
var userQuestion =
  "Am I able to grasp the concept of HTML , CSS and JavaScript?";
console.log(userQuestion);

var randomNumber = Math.floor(Math.random() * 8);

var eightBall = "";

if (randomNumber === 0) {
  console.log("It is certain");
} else if (randomNumber === 1) {
  console.log("It is decidely so");
} else if (randomNumber === 2) {
  console.log("Reply hazy try again");
} else if (randomNumber === 3) {
  console.log("Cannot predict now");
} else if (randomNumber === 4) {
  console.log("Do not count on it");
} else if (randomNumber === 5) {
  console.log("My sources say no");
} else if (randomNumber === 6) {
  console.log("Outlook not so good");
} else {
  console.log("Signs point to yes");
}

console.log(eightBall);
