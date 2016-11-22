console.log('hello');

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

  var turn = true;     // Telling computer that to start variable is equal to true

  /*When button is clicked check the value of turn */
  var button1 = document.querySelector('#token1');
  var button2 = document.querySelector('#token2');
  var button3 = document.querySelector('#token3');
  var button4 = document.querySelector('#token4');
  var button5 = document.querySelector('#token5');
  var button6 = document.querySelector('#token6');
  var button7 = document.querySelector('#token7');

  var verticalWinningCondition = function () {
    for (var num = 0; num < column1.length; num++){
      if (column1[num] && column1[num+1] && column1[num] != 'blank'){
        console.log('winner', turn);
      }
    }
  }



  console.log(button1);
  var column1buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column1[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn1[num]).setAttribute('class', 'green');
          column1[num] = 'green';
        }
        else {
          document.getElementById(divsColumn1[num]).setAttribute('class', 'red');
          column1[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }



  console.log(button2);
  var column2buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column2[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn2[num]).setAttribute('class', 'green');
          column2[num] = 'green';
        }
        else {
          document.getElementById(divsColumn2[num]).setAttribute('class', 'red');
          column2[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }


  console.log(button3);
  var column3buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column3[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn3[num]).setAttribute('class', 'green');
          column3[num] = 'green';
        }
        else {
          document.getElementById(divsColumn3[num]).setAttribute('class', 'red');
          column3[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }

  console.log(button4);
  var column4buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column4[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn4[num]).setAttribute('class', 'green');
          column4[num] = 'green';
        }
        else {
          document.getElementById(divsColumn4[num]).setAttribute('class', 'red');
          column4[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }

  console.log(button5);
  var column5buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column5[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn5[num]).setAttribute('class', 'green');
          column5[num] = 'green';
        }
        else {
          document.getElementById(divsColumn5[num]).setAttribute('class', 'red');
          column5[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }


  console.log(button6);
  var column6buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column6[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn6[num]).setAttribute('class', 'green');
          column6[num] = 'green';
        }
        else {
          document.getElementById(divsColumn6[num]).setAttribute('class', 'red');
          column6[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }


  console.log(button7);
  var column7buttonpushed = function() {
    for (var num = 5; num > -1; num--) {
      if (column7[num] == 'blank') {
        console.log(num)
        if (turn == true){
          document.getElementById(divsColumn7[num]).setAttribute('class', 'green');
          column7[num] = 'green';
        }
        else {
          document.getElementById(divsColumn7[num]).setAttribute('class', 'red');
          column7[num] = 'red';
        }
        verticalWinningCondition();
        turn = !turn; // flip value turn
        return
      }
    }
  }





  button1.addEventListener('click', column1buttonpushed);
  button2.addEventListener('click', column2buttonpushed);
  button3.addEventListener('click', column3buttonpushed);
  button4.addEventListener('click', column4buttonpushed);
  button5.addEventListener('click', column5buttonpushed);
  button6.addEventListener('click', column6buttonpushed);
  button7.addEventListener('click', column7buttonpushed);






  // first token dropped is green, then red, then green keeps alternating

  // set winning conditions.
  //If there are 4 greens in a horizontal row // if else statements
  //If there are 4 greens in a diagonal row // if else statements
  //If there are 4 greens in a vertical row // if else statements
  //or
  //If there are 4 reds in a horizontal row // if else statements
  //If there are 4 reds in a diagonal row // if esle statements
  //If there are 4 reds in a vertical row // if else statements
