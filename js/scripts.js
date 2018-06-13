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
function winCheck (arrayBoard) {
  //Horizontal
  if(arrayBoard[0][0] === "X" && arrayBoard[0][1] === "X" && arrayBoard[0][2] === "X"){
    alert("x wins");
  }
  if(arrayBoard[1][0] === "X" && arrayBoard[1][1] === "X" && arrayBoard[1][2] === "X"){
    alert("x wins");
  }
  if(arrayBoard[2][0] === "X" && arrayBoard[2][1] === "X" && arrayBoard[2][2] === "X"){
    alert("x wins");
  }
  if(arrayBoard[0][0] === "O" && arrayBoard[0][1] === "O" && arrayBoard[0][2] === "O"){
    alert("o wins");
  }
  if(arrayBoard[1][0] === "O" && arrayBoard[1][1] === "O" && arrayBoard[1][2] === "O"){
    alert("o wins");
  }
  if(arrayBoard[2][0] === "O" && arrayBoard[2][1] === "O" && arrayBoard[2][2] === "O"){
    alert("o wins");
  }

  //Vertical
  if(arrayBoard[0][0] === "X" && arrayBoard[1][0] === "X" && arrayBoard[2][0] === "X"){
    alert("x wins");
  }
  if(arrayBoard[0][1] === "X" && arrayBoard[1][1] === "X" && arrayBoard[2][1] === "X"){
    alert("x wins");
  }
  if(arrayBoard[0][2] === "X" && arrayBoard[1][2] === "X" && arrayBoard[2][2] === "X"){
    alert("x wins");
  }
  if(arrayBoard[0][0] === "O" && arrayBoard[1][0] === "O" && arrayBoard[2][0] === "O"){
    alert("o wins");
  }
  if(arrayBoard[0][1] === "O" && arrayBoard[1][1] === "O" && arrayBoard[2][1] === "O"){
    alert("o wins");
  }
  if(arrayBoard[0][2] === "O" && arrayBoard[1][2] === "O" && arrayBoard[2][2] === "O"){
    alert("o wins");
  }
  //Diagonal
  if(arrayBoard[0][0] === "X" && arrayBoard[1][1] === "X" && arrayBoard[2][2] === "X"){
    alert("x wins");
  }
  if(arrayBoard[0][2] === "X" && arrayBoard[1][1] === "X" && arrayBoard[2][0] === "X"){
    alert("x wins");
  }
  if(arrayBoard[0][0] === "O" && arrayBoard[1][1] === "O" && arrayBoard[2][2] === "O"){
    alert("o wins");
  }
  if(arrayBoard[0][2] === "O" && arrayBoard[1][1] === "O" && arrayBoard[2][0] === "O"){
    alert("o wins");
  }

  //Draw
  if(arrayBoard[0][0] !== "" && arrayBoard[0][1] !== "" && arrayBoard[0][2] !== "" &&  arrayBoard[1][0] !== "" && arrayBoard[1][1] !== "" && arrayBoard[1][2] !== "" && arrayBoard[2][0] !== "" && arrayBoard[2][1] !== "" && arrayBoard[2][2] !== ""){
    alert("draw");
  }
}

$(document).ready(function(){
  var newGame = new Game (gameOver);
  var newBoard = new Board (spaceArray);

  $("#0-0").click(function(){
    var xIndex = 0;
    var yIndex = 0;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
  });
  $("#0-1").click(function(){
    var xIndex = 0;
    var yIndex = 1;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
  });
  $("#0-2").click(function(){
    var xIndex = 0;
    var yIndex = 2;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
  });
  $("#1-0").click(function(){
    var xIndex = 1;
    var yIndex = 0;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
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
    winCheck(newBoard.arrayBoard);
  });
  $("#2-0").click(function(){
    var xIndex = 2;
    var yIndex = 0;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
  });
  $("#2-1").click(function(){
    var xIndex = 2;
    var yIndex = 1;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
  });
  $("#2-2").click(function(){
    var xIndex = 2;
    var yIndex = 2;
    var newSpace = new Space (xIndex, yIndex);
    turnSequence(newBoard.arrayBoard, newSpace.xCoordinate, newSpace.yCoordinate);
    winCheck(newBoard.arrayBoard);
  });
});


//   var cell0 = $("#00").val();
//   var cell1 = $("#01").val();
//   var cell2 = $("#02").val();
//   var cell3 = $("#10").val();
//   var cell4 = $("#11").val();
//   var cell5 = $("#12").val();
//   var cell6 = $("#20").val();
//   var cell7 = $("#21").val();
//   var cell8 = $("#22").val();
//   var cells = [cell0, cell1, cell2, cell3, cell4, cell5, cell5, cell6, cell7, cell8]
// });
