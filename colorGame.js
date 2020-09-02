var numberSquares=6;
var colors =[];
var pickedColor;

var squares = document.querySelectorAll(".square");
var h = document.querySelector("h1");
var messageDisplay = document.getElementById("message");
var colorDisplay = document.getElementById("colorDisplay");
var newGame = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  //mode buttons
  setModeButtons();
  //square listeners
  setSquareListeners();
  reset();
}

newGame.addEventListener("click", function(){
  reset();
});

function setModeButtons(){
  for(var i=0; i<modeButtons.length;i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");

      this.textContent==="Easy"? numberSquares=3:numberSquares=6;

      reset();
    });
  }
}
function setSquareListeners(){
  for(var i=0; i<squares.length;i++){
    //add initial colors to squares
    squares[i].addEventListener("click", function(){
      //grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare to pickedColor
      if(clickedColor===pickedColor){
        changeColors(clickedColor);
        messageDisplay.textContent="Correct!";
        h.style.backgroundColor=clickedColor;
        newGame.textContent="Play Again?";
      }else{
        this.style.backgroundColor="#232323";
        messageDisplay.textContent="Try Again";
      }
    });
  }
}

function changeColors(color){
  //loop through all squares
  for(var i=0; i<colors.length; i++){
    //change each all squares
    squares[i].style.backgroundColor=color;
  }
}
function pickColor(){
  var random=Math.floor(Math.random()*colors.length);
  return colors[random];
}

function generateRandomColors(num){
  //make a array
  var arr=[];
  //add num random to array
  for(var i =0; i<num;i++){
    //get random color, push to array
    arr.push(randomColor());

  }
  return arr;
}
function randomColor(){
  //pick red
  var r=Math.floor(Math.random()*255);
  //pick green
  var g=Math.floor(Math.random()*255);
  //pick blue
  var b=Math.floor(Math.random()*255);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
  //generate all new Colors
  colors= generateRandomColors(numberSquares);
  pickedColor=pickColor();
  colorDisplay.textContent=pickedColor;
  //change colors of squares
  for(var i=0; i<squares.length;i++){
    if(colors[i]){
      squares[i].style.backgroundColor= colors[i];
      squares[i].style.display="block";
    }else{
      squares[i].style.display="none";
    }

  }
  h.style.backgroundColor="steelblue";
  newGame.textContent="New Colors";
  messageDisplay.textContent="";
}
