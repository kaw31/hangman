window.onload = function () {

  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
        'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
        'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  
  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;           // Word getHint
  var word ;              // Selected word
  var guess ;             // Guess
  var guesses = [ ];      // Stored guesses
  var lives ;             // Lives
  var counter ;           // Count correct guesses
  var space;              // Number of spaces in word '-'

  // Get elements
  var showLives = document.getElementById("mylives");
  var showCatagory = document.getElementById("scatagory");
  var getHint = document.getElementById("hint");
  var showClue = document.getElementById("clue");
  var showAnswer = document.getElementById("answer");



  // create alphabet ul
  var buttons = function () {
    myButtons = document.getElementById('buttons');
    letters = document.createElement('ul');

    for (var i = 0; i < alphabet.length; i++) {
      letters.id = 'alphabet';
      list = document.createElement('li');
      list.id = 'letter';
      list.innerHTML = alphabet[i];
      check();
      myButtons.appendChild(letters);
      letters.appendChild(list);
    }
  }
    
  
  // Select Catagory
  var selectCat = function () {
    if (chosenCategory === categories[0]) {
      catagoryName.innerHTML = "Category: Sport Teams";
    } else if (chosenCategory === categories[1]) {
      catagoryName.innerHTML = "Category: Films";
    } else if (chosenCategory === categories[2]) {
      catagoryName.innerHTML = "Category: TV Shows";
    } else if (chosenCategory === categories[3]) {
      catagoryName.innerHTML = "Category: Rock Bands";
    } else if (chosenCategory === categories[4]) {
      catagoryName.innerHTML = "Category: Books";
    }
  }

  // Create guesses ul
   result = function () {
    wordHolder = document.getElementById('hold');
    correct = document.createElement('ul');

    for (var i = 0; i < word.length; i++) {
      correct.setAttribute('id', 'my-word');
      guess = document.createElement('li');
      guess.setAttribute('class', 'guess');
      if (word[i] === " ") {
        guess.innerHTML = " ";
        space = 1;
      } else {
        guess.innerHTML = "_";
      }

      guesses.push(guess);
      wordHolder.appendChild(correct);
      correct.appendChild(guess);
    }
  }
  
   // Show lives
   comments = function () {
    showLives.innerHTML = "Lives: " + lives;
    if (lives < 1) {
      showLives.innerHTML = "Game Over";
      showAnswer.innerHTML = "Answer: " + word;
    }
    for (var i = 0; i < guesses.length; i++) {
      if (counter + space === guesses.length) {
        showLives.innerHTML = "You Win!";
        document.getElementById("buttons").style.visibility = "hidden";
      }
    }
  }

      // Animate man
  var animate = function () {
    var drawMe = lives ;
    drawArray[drawMe]();
  }

  
   // Hangman
  canvas =  function(){

    myStickman = document.getElementById("stickman");
    ctx = myStickman.getContext('2d');
    ctx.beginPath();
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = 4;
    
    ctx.beginPath(); //vertical bar
            ctx.moveTo(50,270);
            ctx.lineTo(50,25);
            ctx.stroke();
        ctx.beginPath(); //vertical bar long piece
            ctx.moveTo(65,270);
            ctx.lineTo(65,85);
            ctx.stroke();
        ctx.beginPath(); //vertical bar short piece
            ctx.moveTo(65,64);
            ctx.lineTo(65,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar
            ctx.moveTo(48,25);
            ctx.lineTo(175,25);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar short piece
            ctx.moveTo(49,40);
            ctx.lineTo(86,40);
            ctx.stroke();
        ctx.beginPath(); //horizontal bar long piece
            ctx.moveTo(106,40);
            ctx.lineTo(175,40);
            ctx.stroke();
        ctx.beginPath(); //small vertical bar
            ctx.moveTo(173,25);
            ctx.lineTo(173,40);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,80);
            ctx.lineTo(100,25);
            ctx.stroke();
        ctx.beginPath(); //cross bar
            ctx.moveTo(50,100);
            ctx.lineTo(120,25);
            ctx.stroke();
        ctx.beginPath(); //ground
            ctx.moveTo(35,270);
            ctx.lineTo(265,270);
            ctx.stroke();
      
    
    
  };
    
    
    rope = function() {
        myStickman = document.getElementById("stickman");
        context = myStickman.getContext('2d');
        context.beginPath();
        context.moveTo(150,40);
        context.lineTo(150,80);
        context.stroke();
       };
    
  
    head = function(){
      myStickman = document.getElementById("stickman");
      context = myStickman.getContext('2d');
      context.beginPath();
      context.arc(150, 93, 15, 0, Math.PI*2, true);
      context.stroke();
    }
    
  draw = function(pathFromx, pathFromy, pathTox, pathToy) {
    
    context.moveTo(pathFromx, pathFromy);
    context.lineTo(pathTox, pathToy);
    context.stroke(); 
  }


   torso = function() {
     draw (150, 110, 150, 180);
   };
  
   rightArm = function() {
     draw (150, 120, 190, 130);
   };
  
   leftArm = function() {
     draw (150, 120, 110, 130);
   };
  
   rightLeg = function() {
     draw (150, 178, 200, 230);
   };
  
   leftLeg = function() {
     draw (150, 178, 100, 230);
   };
  
  drawArray = [rightLeg, leftLeg, rightArm, leftArm, torso, head, rope];

    
  // OnClick Function
   check = function () {
    list.onclick = function () {
      var guess = (this.innerHTML);
      this.setAttribute("class", "active");
      this.onclick = null;
      for (var i = 0; i < word.length; i++) {
        if (word[i] === guess) {
          guesses[i].innerHTML = guess;
          counter += 1;
        } 
      }
      var j = (word.indexOf(guess));
      if (j === -1) {
        lives -= 1;
        comments();
        animate();
      } else {
        comments();
      }
    }
  }
  
    
  // Play
  play = function () {
    categories = [
        ["ARSENAL", "HOUSTON TEXANS", "CHICAGO BULLS", "NEW YORK YANKEES", "HARLEQUINS", " LIVERPOOL", "BOSTON BRUINS", "AC MILAN", "DALLAS COWBOYS", "LA LAKERS"],
        ["PULP FICTION", "THE BIG LEBOWSKI", "GLADIATOR", "SAVING PRIVATE RYAN", "MYSTIC RIVER", "FIGHT CLUB", "TROPIC THUNDER", "DJANGO UNCHAINED", "THE DARK KNIGHT", "FROZEN"],
        ["GAME OF THRONES", "BREAKING BAD", "FRIENDS", "MR BEAN", "FARGO", "WESTWORLD", "STRANGER THINGS", "HOUSE OF CARDS", "THE WALKING DEAD", "FAWLTY TOWERS" ],
        ["LYNYRD SKYNYRD", "FOO FIGHTERS", "ZZ TOP", "GUNS N ROSES", "SLIPKNOT", "KINGS OF LEON", "LED ZEPPELIN", "ROYAL BLOOD", "BIFFY CLYRO", "BLACK SABBATH"],
        ["IT", "THE DA VINCI CODE", "GONE GIRL", "PRIDE AND PREJUDICE", "THE HOBBIT", "THE HUNGER GAMES", "THE LORD OF THE RINGS", "HARRY POTTER", "HAMLET", "THE BFG"]
    ];

    chosenCategory = categories[Math.floor(Math.random() * categories.length)];
    word = chosenCategory[Math.floor(Math.random() * chosenCategory.length)];
    word = word.replace(/\s/g, " ");
    console.log(word);  
    buttons();
    guesses = [ ];
    lives = 7;
    counter = 0;
    space = 0;
    result();
    comments();
    selectCat();
    canvas();
  }

  play();
  
  // Hint

    hint.onclick = function() {

      hints = [
        ["Thierry Henry", "J.J. Watt", "Michael Jordon", "Derek Jeter", "Chris Robshaw", "Steven Gerrard", "NHL team", "Maldini", "Jerry Jones", "Kobe Bryant"],
        ["Royale with cheese", "I'm the dude", "Are you not entertained?", "D-Day", "Sean Penn won Best Actor", "First rule is...", "Jungle comedy", "The D is silent", "Why so serious?", "Let it Go"],
        ["Westeros", "Heisenberg", "I'll be there for you", "Yellow Mini", "North Dakota", "Western playground", "The Upside Down", "Frank Underwood", "Caaarrrlll", "Basil!"],
          ["Freebird", "Best of You", "Long beards", "Sweet Child o' Mine", "Wear masks", "Sex is on Fire", "Stairway to Heaven", "Upcoming British band", "Scottish three-man group", "Ozzy Osbourne"],
          ["Pennywise the Clown", "Dan Brown's novel", "Made into film with Ben Affleck", "Jane Austen's classic", "Tolkien's childhood classic", "Katniss Everdeen", "Middle Earth", "You're a Wizard", "To be or not to be", "Roald Dahl's classic"]
    ];

    var catagoryIndex = categories.indexOf(chosenCategory);
    var hintIndex = chosenCategory.indexOf(word);
    showClue.innerHTML = "Hint: " +  hints [catagoryIndex][hintIndex];
  };

   // Reset

  document.getElementById('reset').onclick = function() {
    correct.parentNode.removeChild(correct);
    letters.parentNode.removeChild(letters);
    showAnswer.innerHTML = "";
    showClue.innerHTML = "";
    document.getElementById("buttons").style.visibility = "visible";
    ctx.clearRect(0, 0, 400, 400);
    play();
  }



}