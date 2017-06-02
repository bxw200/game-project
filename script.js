var gameboard = []
var t = 60
var myVar=null
var score=0;
var replaceBoard=null;
var gameMode = "penguin";
var s3=null;
var s4=null;




document.addEventListener('DOMContentLoaded', function () {
var box =  document.getElementsByTagName("td")

//-----Restart Button Listener----//

//startTime()
document.getElementById("start").addEventListener("click", resetGame);
function resetGame(){
  resetTimer()
  scoreZero()
  if(gameMode=="penguin"){
  document.getElementById("b1").className="backgroundp";
  }else{
  document.getElementById("b1").className="backgroundm";
  }
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
  playsound1()
  myVar = setInterval(myTimer, 1000)
}

function myTimer() {
  if(t>0){
    t -= 1;
    }else{
    t = "Game Over";
    s3.pause()
    s4.pause()
  }
    document.getElementById("time").innerHTML = t;
}
//-----stop button is click, stop timer-----//
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
    if(gameMode == "penguin"){
    box[i].className="p"+gameboard[i];
  }else{
    box[i].className="m"+gameboard[i];
  }
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
      if(gameMode == "penguin"){
      document.getElementById(id).className = "p"+y
    }else{
      document.getElementById(id).className = "m"+y
      }
    }

  function playsound() {
    var s1=document.getElementById("sound1");
    var s2=document.getElementById("sound2");
    if(gameMode == "penguin"){
    s1.play();
    }else{
    s2.play();
    }
}
function playsound1() {
  if(gameMode == "penguin"){
    s3=document.getElementById("sound3");
    s4=document.getElementById("sound4");
    s3.pause();
  s4.play();
  }else{
    s4.pause();
  s3.play();

  }
}
  function scoreZero(){
    score=0;
    document.getElementById("score").innerHTML = score;
  };
  function scoreAdd(){
    score++;
    document.getElementById("score").innerHTML = score;
  }



//monster test//
  document.getElementById("gamemode").addEventListener("click", changeGameMode);
  function changeGameMode(){
    if(gameMode=="penguin"){
      gameMode="monster"
      document.getElementById("gamemode").innerText="Penguin"
    }else{
      gameMode="penguin"
      document.getElementById("gamemode").innerText="Monster"
    }
  }

});
