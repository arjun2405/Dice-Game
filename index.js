var randomNumber1 = Math.floor((Math.random()*6)+1);
var randomNumber2 = Math.floor((Math.random()*6)+1);

var randomImage1 = "images/dice"+randomNumber1+".png";
var randomImage2 = "images/dice"+randomNumber2+".png";

document.querySelector(".dice1 img").setAttribute("src",randomImage1);
document.querySelector(".dice2 img").setAttribute("src",randomImage2);

if(randomNumber1>randomNumber2){
  document.querySelector("h1").innerText="🚩 Player 1 wins!";
}
else if(randomNumber2>randomNumber1){
  document.querySelector("h1").innerText="Player 2 wins! 🚩";
}
else if(randomNumber1==randomNumber2){
  document.querySelector("h1").innerText="Draw!";
}
