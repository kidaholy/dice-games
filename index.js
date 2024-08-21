var probability = Math.floor(Math.random() * 6);
var probability2 = Math.floor(Math.random() * 6);
var Ethiopia = probability;
var America = probability2;



if (probability === 0) {
  document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
}
else if (probability === 1) {
  document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}
else if (probability === 2) {
  document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}
else if (probability === 3) {
  document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}
else if (probability === 4) {
  document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}
else if (probability === 5) {
  document.querySelector(".img1").setAttribute("src", "./images/dice6.png");
}



if (probability2 === 0) {
  document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}
else if (probability2 === 1) {
  document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}
else if (probability2 === 2) {
  document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}
else if (probability2 === 3) {
  document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}
else if (probability2 === 4) {
  document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}
else if (probability2 === 5) {
  document.querySelector(".img2").setAttribute("src", "./images/dice6.png");
}

var result;

if (Ethiopia > America) {
  document.querySelector("h1").innerHTML = "Ethiopia Wins!";
  document.querySelector(".heading .usa-flag").removeAttribute("src");
  document.querySelector("h1").style.fontSize = "6rem";
  result = "Ethiopia";
}

else if (Ethiopia < America) {
  document.querySelector("h1").innerHTML = "America Wins!";
  document.querySelector(".heading img").removeAttribute("src");
  document.querySelector("h1").style.fontSize = "6rem";
  result = "America";
}

else if (Ethiopia === America) {
  document.querySelector("h1").innerHTML = "Draw!";
  document.querySelector(".heading img").removeAttribute("src");
  document.querySelector(".heading .usa-flag").removeAttribute("src");
  result = "draw";
}

let score = JSON.parse(localStorage.getItem('score')) || {
  Ethiopia: 0,
  America: 0,
  draw: 0
};

if (result === 'Ethiopia') {
  score.Ethiopia += 1;
} else if (result === 'America') {
  score.America += 1;
} else if (result === 'draw') {
  score.draw += 1;
}

localStorage.setItem('score', JSON.stringify(score));

document.querySelector("#Ethiopia").innerHTML = (score.Ethiopia);
document.querySelector("#America").innerHTML = (score.America);
document.querySelector("#draw").innerHTML = (score.draw);
