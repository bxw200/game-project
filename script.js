var gameboard = []
var t = 60
var myVar=null
var score=0;
var replaceBoard=null;



document.addEventListener('DOMContentLoaded', function () {
var box =  document.getElementsByTagName("td")

//-----Restart Button Listener----//

//startTime()
document.getElementById("restart").addEventListener("click", resetGame);
function resetGame(){
  resetTimer()
  scoreZero()
  // check()
}
function resetTimer(){
  stopTime()
  t=60;
  startTime()
}

//----timer Button-----//
function startTime(){
  clearGameBoard()
  scoreZero()
  setRandomPic()
  setMatchingPic()
  updateGameBoard()
  myVar = setInterval(myTimer, 1000)
}

function myTimer() {
  if(t>0){
    t -= 1;
    }else{
    t = "Game Over";
  }
    document.getElementById("time").innerHTML = t;
}
//-----stop button is click, stop timer-----//
document.getElementById("stop").addEventListener("click", stopTime);
function stopTime(){
  clearInterval(myVar);
  t = (myVar);
}
//image random funtion//
function setRandomPic(){
  for(var i=0; i<32; i++){
    var x = 1+Math.floor(Math.random()*5);
    gameboard.push(x);
    console.log(gameboard)
  }
}

function setMatchingPic(){
  var y = [1,2,3,4,5]
  for (var i=32; i < 34; i++) {

    var x = y[Math.floor(Math.random()*(y.length-1))];
    gameboard.push(x)
    var index = y.indexOf(x);
    y.splice(index, 1);
  }
}

function updateGameBoard(){
  for(var i=0; i<34;i++){
    box[i].className="p"+gameboard[i];

}}

function clearGameBoard(){
  for(var i=0; i<34;i++){
    box[i].className=""
    gameboard.pop()
  }
}
//
// function check(){
// if(document.getElementById("32").innerHTML === document.getElementById("33").innerHTML){
//   clearGameBoard()
//   setRandomPic()
//   updateGameBoard()
// }}

//function to listen to click on the gameboard//
function returnNum(e) {
  //console.log("clicked id" + e.getAttribute("id"));
}

var cells = document.getElementsByTagName("td");
//console.log(cells);

for (var i=0; i < cells.length; i++) {
  cells[i].addEventListener("click", function (e) {
    var selectedId = e.target.getAttribute("id")
    var selectedClass = e.target.getAttribute("class")
    var matchPenguin16 =  document.getElementById("32");
    var matchPenguin17 =  document.getElementById("33");
    if(selectedId != "33" && selectedId != "32" && t > 0){

    if(selectedClass == matchPenguin16.className || selectedClass == matchPenguin17.className){
      e.target.classList.remove(selectedClass);
      scoreAdd();
      playsound();
      replace(selectedId)
    }
  }})
  }

  function replace(id){
      var y = 1+Math.floor(Math.random()*5);
      document.getElementById(id).className = "p"+y
    }

  function playsound() {
    var sound = document.getElementById("sound");
    sound.play();
}
  function scoreZero(){
    score=0;
    document.getElementById("score").innerHTML = score;
  };
  function scoreAdd(){
    score++;
    document.getElementById("score").innerHTML = score;
  }
});
