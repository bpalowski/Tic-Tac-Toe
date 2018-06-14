$(document).ready(function(){
  //Default players turn to X
  var turn = "X"
  //Array stores values that we will check later for a winner
  var turns = ["#","#","#","#","#","#","#","#","#"];
  // Default computer turn
  var computersTurn = "O";
  // keeps track if its the computers turn
  var gameOn = false;

  var count = 0;

  //change players turn to X and computers to 0
  $('#turnX').click(function(){
    turn = 'O';
    computersTurn='X';
    $("#turnX").removeClass("btn-success");
    $("#turnO").addClass("btn-success");
    reset();
  });

  $('#turnO').click(function(){
    turn = 'X';
    computersTurn='O';
    $("#turnO").removeClass("btn-success");
    $("#turnX").addClass("btn-success");
    reset();
  });

  function computerTurn(){
    var taken = false;
    while(taken===false && count !== 5){
      var computersMove = (Math.random()*10).toFixed();
      var move = $("#" + computersMove).text();
      if(move==="#"){
        $("#" + computersMove).text(computersTurn);
        taken=true;
        turns[computersMove]= computersTurn;
      }
    }
  }

  function playerTurn(Turn, id){
    var spotTaken = $("#"+id).text();
    if(spotTaken==="#"){
      count++;
      turns[id] = turn;
      $("#" +id).text(turn);
      winCondition(turns, turn);
      if(gameOn===false){
        computerTurn();
        winCondition(turns, computersTurn);
      };
    }
  }
  function winCondition( turnArray, currentTurn){
    if(turnArray[0] === currentTurn && turnArray[1]===currentTurn && turnArray[2] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[2] === currentTurn && turnArray[4]===currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[0] === currentTurn && turnArray[3]===currentTurn && turnArray[6] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[0] === currentTurn && turnArray[4]===currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[1] === currentTurn && turnArray[4]===currentTurn && turnArray[7] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[2] === currentTurn && turnArray[5]===currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[3] === currentTurn && turnArray[4]===currentTurn && turnArray[5] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[6] === currentTurn && turnArray[7]===currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else if (turnArray[6] === currentTurn && turnArray[7]===currentTurn && turnArray[8] === currentTurn){
      gameOn = true;
      reset();
      alert("player " + currentTurn + "wins(Top row )");
    }
    else{
      gameOn = false;
    }
  }

  $(".tic").click(function(){
    var slot = $(this).attr('id');
    playerTurn(turn,slot);

  });
  function reset(){
    turns=["#","#","#","#","#","#","#","#","#"];
    count= 0;
    $(".tic").text("#");
    gameOn = false;
  }
});
