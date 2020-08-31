const changeDice = (diceName) => {
    let tempRandomNumber = Math.floor(Math.random()*6)+1;
      switch(tempRandomNumber){
        case 1:
          document.querySelector(diceName).setAttribute("src", "images/dice1.png");
          break;
        case 2:
          document.querySelector(diceName).setAttribute("src", "images/dice2.png");
          break;
        case 3:
          document.querySelector(diceName).setAttribute("src", "images/dice3.png");
          break;
        case 4:
          document.querySelector(diceName).setAttribute("src", "images/dice4.png");
          break;
        case 5:
          document.querySelector(diceName).setAttribute("src", "images/dice5.png");
          break;
        case 6:
          document.querySelector(diceName).setAttribute("src", "images/dice6.png");
          break;
      };
  return tempRandomNumber;
};
setTimeout("changeDice(''.img1')", 5000);
setTimeout("changeDice(''.img2')", 5000);
let randomNumber1 = changeDice(".img1");
let randomNumber2 = changeDice(".img2");
if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML = "🏁 Player 1 wins"
}
else if (randomNumber2>randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 wins 🏁"
}
else {document.querySelector("h1").innerHTML = "Draw :-0"}
