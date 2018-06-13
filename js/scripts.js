//Global Variables
var turn = 0;
var gameOver = false;
var spaceArray = [["","",""],["","",""],["","",""]];
console.log(spaceArray);
console.log(turn);

//Constructors
function Player(name) {
  this.name = name;
};

function Game (gameEnd) {
  this.gameEnd = gameEnd;
}

function Space (xCoordinate, yCoordinate) {
  this.xCoordinate = xCoordinate;
  this.yCoordinate = yCoordinate;
}

function Board (arrayBoard) {
  this.arrayBoard = arrayBoard;
}

//Functions
function turnSequence (arrayBoard, xCoordinate, yCoordinate) {
  if (arrayBoard[xCoordinate][yCoordinate] === "") {
    if (turn%2 === 0) {
      arrayBoard[xCoordinate].splice(yCoordinate, 1, "X");
      $("#"+ xCoordinate +"-"+ yCoordinate).append("<img src='img/X.png' alt='x'>");
      turn ++;
      console.log(arrayBoard);
      console.log(turn);
    } else {
      arrayBoard[xCoordinate].splice(yCoordinate, 1, "O");
      $("#"+ xCoordinate +"-"+ yCoordinate).append("<img src='img/O.png' alt='o'>");
      turn ++;
      console.log(arrayBoard);
      console.log(turn);
    }
  }
}

$(document).ready(function(){
  var newGame = new Game (gameOver);

  var newBoard = new Board (spaceArray);
  $("#board").click(function(){
    var show = $("#00").val();
    alert(show);
  })
  $("#0-0").click(function(){
    var xIndex = 0;
    var yIndex = 0;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#0-1").click(function(){
    var xIndex = 0;
    var yIndex = 1;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#0-2").click(function(){
    var xIndex = 0;
    var yIndex = 2;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#1-0").click(function(){
    var xIndex = 1;
    var yIndex = 0;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#1-1").click(function(){
    var xIndex = 1;
    var yIndex = 1;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#1-2").click(function(){
    var xIndex = 1;
    var yIndex = 2;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#2-0").click(function(){
    var xIndex = 2;
    var yIndex = 0;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#2-1").click(function(){
    var xIndex = 2;
    var yIndex = 1;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
  $("#2-2").click(function(){
    var xIndex = 2;
    var yIndex = 2;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
  });
});
