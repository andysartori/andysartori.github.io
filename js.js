// console.log('hello');

// stores state of the board
  var column1 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column2 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column3 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column4 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column5 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column6 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column7 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var divsColumn1 = ['r1c1', 'r2c1', 'r3c1', 'r4c1', 'r5c1', 'r6c1',];
  var divsColumn2 = ['r1c2', 'r2c2', 'r3c2', 'r4c2', 'r5c2', 'r6c2',];
  var divsColumn3 = ['r1c3', 'r2c3', 'r3c3', 'r4c3', 'r5c3', 'r6c3',];
  var divsColumn4 = ['r1c4', 'r2c4', 'r3c4', 'r4c4', 'r5c4', 'r6c4',];
  var divsColumn5 = ['r1c5', 'r2c5', 'r3c5', 'r4c5', 'r5c5', 'r6c5',];
  var divsColumn6 = ['r1c6', 'r2c6', 'r3c6', 'r4c6', 'r5c6', 'r6c6',];
  var divsColumn7 = ['r1c7', 'r2c7', 'r3c7', 'r4c7', 'r5c7', 'r6c7',];
  var allcolumns = [ column1, column2, column3, column4, column5, column6, column7];
  var alldivs = [divsColumn1, divsColumn2, divsColumn3, divsColumn4, divsColumn5, divsColumn6, divsColumn7];

  var won = false;     // nobody won yet
  var turn = true;     // Telling computer that to start variable is equal to true

  /*When button is clicked check the value of turn */
  var button0 = document.querySelector('#token0'); // clear button
  var button1 = document.querySelector('#token1'); // button row 1column1
  var button2 = document.querySelector('#token2');
  var button3 = document.querySelector('#token3');
  var button4 = document.querySelector('#token4');
  var button5 = document.querySelector('#token5');
  var button6 = document.querySelector('#token6');
  var button7 = document.querySelector('#token7');

  // var verticalWinningCondition = function () {
  //   for (var num = 0; num < column1.length; num++){
  //     if ((column1[num] && column1[num+1] && column1[num+2] && column1[num+3])!= 'blank'){
  //       console.log('winner', turn);
  //     }
  //   }
  // }

  var horizontalWinningCondition = function () {
    for (var row = 0; row < column1.length ; row++){  // all columns are same so use column1
      for (var col = 0; col < allcolumns.length - 3; col++) { //do not check outside board
       if (allcolumns[col][row] === 'green'  && allcolumns[col+1][row] === 'green'  && allcolumns[col+2][row] === 'green'  && allcolumns[col+3][row] === 'green') { // check 4 consecutive places
         alert('green won');
         won = true;
       } else if (allcolumns[col][row] === 'red'  && allcolumns[col+1][row] === 'red'  && allcolumns[col+2][row] === 'red'  && allcolumns[col+3][row] === 'red'){
         alert('red won');
         won = true;
       }
      }
    }
  }

  var verticalWinningCondition = function () {
    for (var row = 0; row < column1.length ; row++){  // all columns are same so use column1
      for (var col = 0; col < allcolumns.length - 3; col++) {
       if (allcolumns[col][row] === 'green'  && allcolumns[col][row+1] === 'green'  && allcolumns[col][row+2] === 'green'  && allcolumns[col][row+3] === 'green') {
         alert('green won');
         won = true;
       } else if (allcolumns[col][row] === 'red'  && allcolumns[col][row+1] === 'red'  && allcolumns[col][row+2] === 'red'  && allcolumns[col][row+3] === 'red'){
         alert('red won');
         won = true;
       }
      }
    }
  }



  // console.log(button0);
  var clearbuttonpushed = function(){ // re-start game button
    won = false; // set value back to nobody won
    allcolumns.forEach(function(element){
      element.fill('blank'); //put back blank
    });
    alldivs.forEach(function(div){
      div.forEach(function(id){
        document.getElementById(id).setAttribute('class', 'transparent'); // remove color visual from board
      });
    });
  };

  // console.log(button1);
  var columnbuttonpushed = function() {    // when button is pushed function is called
    if (!won) {
      var buttonNumber = event.target.id.replace("token","") -1 ;  //
              // iterate over column array of the button that was pushed
      //console.log(event.target.id);           // event.target.id is a string typeof
      for (var posColChecking = 5; posColChecking > -1; posColChecking--) { // stepping through array to find empty values
        if (allcolumns[buttonNumber][posColChecking] == 'blank') { // allclumns is the outmost array -  buttonNumber used to represent column array . check position to see if it is blank. if it is blank that is where we want to fill in a token
          // console.log(posColChecking)
          if (turn == true){
            document.getElementById(alldivs[buttonNumber][posColChecking]).setAttribute('class', 'green'); // get id of th element
            allcolumns[buttonNumber][posColChecking] = 'green'; // setting the array of our column to green
          }
          else {
            document.getElementById(alldivs[buttonNumber][posColChecking]).setAttribute('class', 'red');
            allcolumns[buttonNumber][posColChecking] = 'red';
          }
          horizontalWinningCondition(); // checks if someone won every turn
          verticalWinningCondition();
          turn = !turn; // flip value turn
          return
        }
      }
    }
  }





  button0.addEventListener('click', clearbuttonpushed);
  button1.addEventListener('click', columnbuttonpushed); // column1buttonpushed is a callback function
  button2.addEventListener('click', columnbuttonpushed);
  button3.addEventListener('click', columnbuttonpushed);
  button4.addEventListener('click', columnbuttonpushed);
  button5.addEventListener('click', columnbuttonpushed);
  button6.addEventListener('click', columnbuttonpushed);
  button7.addEventListener('click', columnbuttonpushed);






  // first token dropped is green, then red, then green keeps alternating

  // set winning conditions.
  //If there are 4 greens in a horizontal row // if else statements
  //If there are 4 greens in a diagonal row // if else statements
  //If there are 4 greens in a vertical row // if else statements
  //or
  //If there are 4 reds in a horizontal row // if else statements
  //If there are 4 reds in a diagonal row // if esle statements
  //If there are 4 reds in a vertical row // if else statements
