console.log('hello');

      // make clear button clear board // event handler clear all the divs


      var button = document.querySelector('#column1');  // click drop token and lower dot // when clicked will append a green div
      var thirtySix = document.querySelector('#thirtySix');
      console.log(button);
      var doSomeStuff = function() {
      	var color = thirtySix.classList.add('green');
      	}
      button.addEventListener('click', doSomeStuff);

      // next Sequential click will be opposite color // use toggle

      // first token dropped is green, then red, then green keeps alternating

      // set winning conditions.
      //If there are 4 greens in a horizontal row // if else statements
      //If there are 4 greens in a diagonal row // if else statements
      //If there are 4 greens in a vertical row // if else statements
      //or
      //If there are 4 reds in a horizontal row // if else statements
      //If there are 4 reds in a diagonal row // if esle statements
      //If there are 4 reds in a vertical row // if else statements
