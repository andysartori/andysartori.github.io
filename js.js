console.log('hello');

// stores state of the board
  var column1 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var column2 = ['blank', 'blank', 'blank', 'blank', 'blank', 'blank'];
  var divsColumn1 = ['r1c1', 'r2c1', 'r3c1', 'r4c1', 'r5c1', 'r6c1',];
  var divsColumn2 = ['r1c2', 'r2c2', 'r3c2', 'r4c2', 'r5c2', 'r6c2',];

  var turn = true;     // Telling computer that to start variable is equal to true

  /*When button is clicked check the value of turn */
  var button1 = document.querySelector('#token1');
  var button2 = document.querySelector('#token2');




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
        /*Flipping the value of Turn*/
        turn = !turn;
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
        /*Flipping the value of Turn*/
        turn = !turn;
        return
      }
    }
  }

  button1.addEventListener('click', column1buttonpushed);
  button2.addEventListener('click', column2buttonpushed);






  // first token dropped is green, then red, then green keeps alternating

  // set winning conditions.
  //If there are 4 greens in a horizontal row // if else statements
  //If there are 4 greens in a diagonal row // if else statements
  //If there are 4 greens in a vertical row // if else statements
  //or
  //If there are 4 reds in a horizontal row // if else statements
  //If there are 4 reds in a diagonal row // if esle statements
  //If there are 4 reds in a vertical row // if else statements
