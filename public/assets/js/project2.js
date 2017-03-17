$('#signupbtn').modal('toggle');
$('#go').modal('toggle');

// <!-- create a trivia game about citizenship
// start the game
// set the time
// Create questions. ...
// create the answer options.
// all answer are final
// give the correct answer
// Keeping score. ...
// reset the game
// Make it extra special!
//  -->
$(document).ready(function() {
  /**
   * Randomize array element order in-place.
   * Using Durstenfeld shuffle algorithm.
   **/
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };


  var triviaGame = {
      questions: [
        question1 = {
          question: "What is the 'supreme law of the land?'",
          choice1: "The Declaration of independence",
          choice2: "The U.S. Constitution",
          choice3: "The Supreme Court",
          choice4: "The President of the United States",
          answer: "choice2"
        },

        question2 = {
          question: "What is one purpose of the U.S. Constitution?",
          choice1: "Protects the basic rights of Americans",
          choice2: "Defines state laws",
          choice3: "Establishes treaties",
          choice4: "Declares war",
          answer: "choice1"
        },

        question3 = {
          question: "What do we call the first ten amendments to the Constitution?",
          choice1: "The Bill of Rights",
          choice2: "The List of Ten",
          choice3: "The Ten Commandments",
          choice4: "The Bill of Lading",
          answer: "choice1"
        },

        question4 = {
          question: "Which is a right or freedom from the First Amendment?",
          choice1: "Right to free exercise of religion",
          choice2: "Right to avoid taxes",
          choice3: "Right to bear arms",
          choice4: "Right to vote",
          answer: "choice1"
        },

        question5 = {
          question: "What was the purpose of the Declaration of Independence?",
          choice1: "Announced our independence from Germany",
          choice2: "Announced our independence from Great Britain",
          choice3: "Formed an alliance with South America",
          choice4: "Freed the slaves",
          answer: "choice2"
        },

        question6 = {
          question: "What is the economic system in the United States?",
          choice1: "Fascist",
          choice2: "Anarchist",
          choice3: "Socialist",
          choice4: "Capitalist",
          answer: "choice4"
        },

        question7 = {
          question: "Which is a branch of the U.S. government?",
          choice1: "Legislative",
          choice2: "Parliament",
          choice3: "Financial",
          choice4: "Authoritative",
          answer: "choice1"
        },

        question8 = {
          question: "What are the two parts of the U.S. Congress?",
          choice1: "State Legislature and Senate",
          choice2: "President and Supreme Court",
          choice3: "Senate and House of Representatives",
          choice4: "Parliament and House of Commons",
          answer: "choice3"
        },

        question9 = {
          question: "How many U.S. Senators are there?",
          choice1: "50",
          choice2: "60",
          choice3: "435",
          choice4: "100",
          answer: "choice4"
        },

        question10 = {
          question: "Who does a U.S. Senator represent?",
          choice1: "Only people in their Congressional District",
          choice2: "All the people of the country",
          choice3: "All people of the state",
          choice4: "Half the people of the state",
          answer: "choice3"
        },

        question11 = {
          question: "The House of Representatives has how many voting members?",
          choice1: "535",
          choice2: "50",
          choice3: "435",
          choice4: "100",
          answer: "choice3"
        },

        question12 = {
          question: "What is the term, in years, for a U.S. Representative?",
          choice1: "4",
          choice2: "6",
          choice3: "8",
          choice4: "2",
          answer: "choice2"
        },

        question13 = {
          question: "Why do some states have more Representatives than other states?",
          choice1: "Larger economy",
          choice2: "More land mass",
          choice3: "Lower population",
          choice4: "Higher population",
          answer: "choice4"
        },

        question14 = {
          question: "Who is the Commander in Chief of the U.S. military?",
          choice1: "The Chairman of the Joint Chiefs of Staff",
          choice2: "The President",
          choice3: "The Secretary of Defense",
          choice4: "The Chief Justice of the Supreme Court",
          answer: "choice2"
        },

        question15 = {
          question: "What is the highest court in the United States?",
          choice1: "The U.S. Supreme Court",
          choice2: "The Court of Congress",
          choice3: "The Supreme Court of the largest state",
          choice4: "The U.S. Court of Appeals",
          answer: "choice1"
        },

        question16 = {
          question: "What are the two major political parties in the United States?",
          choice1: "Republican and Constitution",
          choice2: "Democratic and Republican",
          choice3: "Democratic and Libertarian",
          choice4: "Republican and Labor",
          answer: "choice2"
        },

        question17 = {
          question: "What do we show loyalty to when we say the Pledge of Allegiance?",
          choice1: "The United Nations",
          choice2: "The President of the United States",
          choice3: "The Constitution",
          choice4: "The flag of the United States",
          answer: "choice4"
        },

        question18 = {
          question: "When is the last day you can send in federal income tax forms?",
          choice1: "April 1st",
          choice2: "October 1st",
          choice3: "December 31st",
          choice4: "April 15th",
          answer: "choice4"
        },

        question19 = {
          question: "Who wrote the Declaration of Independence?",
          choice1: "John Adams",
          choice2: "George Washington",
          choice3: "Gouverneur Morris",
          choice4: "Thomas Jefferson",
          answer: "choice4"
        },

        question20 = {
          question: "Who is considered the 'Father of Our Country'?",
          choice1: "George Washington",
          choice2: "Thomas Jefferson",
          choice3: "James Madison",
          choice4: "Benjamin Franklin",
          answer: "choice1"
        },

        question21 = {
          question: "Who lived in America before the Europeans arrived?",
          choice1: "Mexicans",
          choice2: "American Indians",
          choice3: "Italians",
          choice4: "Vikings",
          answer: "choice2"
        },

        question22 = {
          question: "When was the Declaration of Independence adopted?",
          choice1: "July 4th, 1776",
          choice2: "December 7th, 1941",
          choice3: "July 4th, 1775",
          choice4: "September 17th, 1787",
          answer: "choice1"
        },

        question23 = {
          question: "Which was NOT one of the original thirteen American colonies?",
          choice1: "New Hampshire",
          choice2: "Georgia",
          choice3: "Maine",
          choice4: "New York",
          answer: "choice3"
        },

        question24 = {
          question: "What happened at the Constitutional Convention?",
          choice1: "The state governors met to discuss war with Great Britain",
          choice2: "The U.S. Constitution was written",
          choice3: "America was presented with the Statue of Liberty, from the French",
          choice4: "The Declaration of Independence was signed",
          answer: "choice2"
        },

        question25 = {
          question: "In what year was the Constitution written?",
          choice1: "1941",
          choice2: "1787",
          choice3: "1776",
          choice4: "1492",
          answer: "choice2"
        },

        question26 = {
          question: "The Federalist Papers supported the passage of the U.S. Constitution. Who was one of the writers?",
          choice1: "Alexander Hamilton",
          choice2: "George Washington",
          choice3: "Thomas Paine",
          choice4: "John Quincy Adams",
          answer: "choice1"
        },

        question27 = {
          question: "What is one thing Benjamin Franklin is NOT famous for?",
          choice1: "Becoming the 1st Postmaster General of the United States",
          choice2: "Being a U.S. Diplomat",
          choice3: "Building the first free libraries",
          choice4: "Becoming the 3rd U.S. President",
          answer: "choice4"
        },

        question28 = {
          question: "What territory did the United States buy from France in 1803?",
          choice1: "The Louisiana Territory",
          choice2: "The State of Alaska",
          choice3: "The Southwest Territory",
          choice4: "The Northwest Territory",
          answer: "choice1"
        },

        question29 = {
          question: "Which is a war that the U.S. Fought in the 1800s?",
          choice1: "The Mexican-American War",
          choice2: "World War 1",
          choice3: "World War 2",
          choice4: "The French and Indian War",
          answer: "choice1"
        },

        question30 = {
          question: "Which was the U.S. war between the North and the South?",
          choice1: "The American Revolution",
          choice2: "The Vietnam War",
          choice3: "The Civil War",
          choice4: "The Korean War",
          answer: "choice3"
        },

        question31 = {
          question: "Which was NOT one of the reasons for the Civil War?",
          choice1: "Religious freedom",
          choice2: "Abolition of slavery",
          choice3: "Economic reasons",
          choice4: "States rights",
          answer: "choice1"
        },

        question32 = {
          question: "Which was one important thing that Abraham Lincoln did?",
          choice1: "Freed the slaves",
          choice2: "The New Deal",
          choice3: "Led the U.S. During the American Revolution",
          choice4: "Declared war with Germany",
          answer: "choice1"
        },

        question33 = {
          question: "What did the Emancipation Proclamation do?",
          choice1: "Declared war with Great Britain",
          choice2: "Freed the slaves",
          choice3: "Ended the French and Indian War",
          choice4: "Ended the War of 1812",
          answer: "choice2"
        },

        question34 = {
          question: "What is Susan B. Anthony famous for?",
          choice1: "Ran the Underground Railroad",
          choice2: "Taught and helped Helen Keller",
          choice3: "Sewed the first American flag",
          choice4: "Fought for women's voting rights",
          answer: "choice4"
        },

        question35 = {
          question: "Who was President during World War I?",
          choice1: "Woodrow Wilson",
          choice2: "Herbert Hoover",
          choice3: "Franklin D. Roosevelt",
          choice4: "Harry S. Truman",
          answer: "choice1"
        },

        question36 = {
          question: "Who was President during the Great Depression and World War II?",
          choice1: "Woodrow Wilson",
          choice2: "Franklin D. Roosevelt",
          choice3: "Harry S. Truman",
          choice4: "Herbert Hoover",
          answer: "choice2"
        },

        question37 = {
          question: "Who did the United States fight in World War II?",
          choice1: "Russia, Japan and Vietnam",
          choice2: "Japan, Germany and Italy",
          choice3: "China, Japan and Germany",
          choice4: "Russia, China and North Korea",
          answer: "choice2"
        },

        question38 = {
          question: "What movement tried to end racial discrimination?",
          choice1: "Civil Rights",
          choice2: "Prohibition",
          choice3: "Women's Suffrage",
          choice4: "Tea Party",
          answer: "choice1"
        },

        question39 = {
          question: "What ocean is on the East Coast of the United States?",
          choice1: "Indian",
          choice2: "Pacific",
          choice3: "Arctic",
          choice4: "Atlantic",
          answer: "choice4"
        },

        question40 = {
          question: "What ocean is on the West Coast of the United States?",
          choice1: "Indian",
          choice2: "Atlantic",
          choice3: "Pacific",
          choice4: "Arctic",
          answer: "choice3"
        },

        question41 = {
          question: "Which of the following is a U.S. territory.",
          choice1: "West Indies",
          choice2: "British Virgin Islands",
          choice3: "American Dominion",
          choice4: "Guam",
          answer: "choice4"
        },

        question42 = {
          question: "Which are the two longest rivers in the United States?",
          choice1: "Missouri, Mississippi",
          choice2: "Colorado, Hudson",
          choice3: "Hudson, Missouri",
          choice4: "Ohio, Mississippi",
          answer: "choice1"
        },

        question43 = {
          question: "Which is NOT an American Indian tribe in the United States?",
          choice1: "Navajo",
          choice2: "Cherokee",
          choice3: "Wackamo",
          choice4: "Iroquois",
          answer: "choice3"
        },

        question44 = {
          question: "What major event happened on September 11, 2001, in the United States?",
          choice1: "The stock market crashed.",
          choice2: "Terrorists attacked the United States.",
          choice3: "The United States went to war with Iran.",
          choice4: "Terrorists attacked Canada.",
          answer: "choice2"
        },

        question45 = {
          question: "Which state shares a border with Canada?",
          choice1: "New Jersey",
          choice2: "California",
          choice3: "Nevada",
          choice4: "Michigan",
          answer: "choice4"
        },

        question46 = {
          question: "Which state shares a border with Mexico?",
          choice1: "Oklahoma",
          choice2: "Louisiana",
          choice3: "California",
          choice4: "Nevada",
          answer: "choice4"
        },

        question47 = {
          question: "Where is the Statue of Liberty?",
          choice1: "Connecticut",
          choice2: "New York/New Jersey",
          choice3: "Delaware",
          choice4: "Massachusetts",
          answer: "choice2"
        },

        question48 = {
          question: "What do the U.S. Flag's thirteen stripes represent?",
          choice1: "The number of original colonies",
          choice2: "The length of the American Revolution",
          choice3: "The number of U.S. Wars",
          choice4: "The number of U.S. Senators",
          answer: "choice1"
        },

        question49 = {
          question: "What do the U.S. Flag's fifty stars represent?",
          choice1: "The number of cannons at Fort McHenry",
          choice2: "The number of U.S. Representatives",
          choice3: "The number of U.S. States",
          choice4: "The men who died at Normandy",
          answer: "choice3"
        },

        question50 = {
          question: "What is the name of the U.S. national anthem?",
          choice1: "America the Beautiful",
          choice2: "The Star Spangled Banner",
          choice3: "Battle Hymn of the Republic",
          choice4: "Stars and Stripes",
          answer: "choice2"
        }
      ], // end of questions array

      shuffledQuestions: [],
      qTimer: null,
      aTimer: null,
      qSecs: 30,
      aSecs: 5,
      cdTimer: null,
      countdown: 0,
      questionNumber: 0,
      correctChoices: 0,
      wrongAnswers: 0,
      timedOut: 0,
      message: "",
      questionLimit: 2,
      score: 0,
      startGame: function() {

        var startBtn = $("<button>").text("Start Game").addClass("btn-start btn-danger btn-lg");
        $("#trivia").append(startBtn);

      }, //end startGame

      displayScore: function() {

        $("#score").html("New score: " + triviaGame.score);

      },


      askQuestion: function() {

        if (triviaGame.questionNumber >= triviaGame.questionLimit) {
          triviaGame.displayScore();

          var data = {
            score: triviaGame.score
          }

          $.ajax({
            url: "/scores/create",
            method: "POST",
            data: data
          }).done(function(response) {
            window.location = "/scores"
          });
        
          triviaGame.score = 0;
        triviaGame.gameOver();

      }

      else {
        triviaGame.displayScore();
        triviaGame.countdown = triviaGame.qSecs;

        triviaGame.displayCountdown();

        triviaGame.cdTimer = setInterval(triviaGame.displayCountdown, 1000);

        triviaGame.qTimer = setTimeout(triviaGame.timeExpired, 1000 * triviaGame.qSecs);

        //not using "this" here because this function is being called from a button
        //and "this" refers to the button, not the object

        var divQuestion = $("<div>")
          .text(triviaGame.shuffledQuestions[triviaGame.questionNumber].question)
          .addClass("question");

        var divChoice1 = $("<div>")
          .text(triviaGame.shuffledQuestions[triviaGame.questionNumber].choice1)
          .addClass("choices")
          .attr("data-choice", "choice1");

        var divChoice2 = $("<div>")
          .text(triviaGame.shuffledQuestions[triviaGame.questionNumber].choice2)
          .addClass("choices")
          .attr("data-choice", "choice2");

        var divChoice3 = $("<div>")
          .text(triviaGame.shuffledQuestions[triviaGame.questionNumber].choice3)
          .addClass("choices")
          .attr("data-choice", "choice3");

        var divChoice4 = $("<div>")
          .text(triviaGame.shuffledQuestions[triviaGame.questionNumber].choice4)
          .addClass("choices")
          .attr("data-choice", "choice4");

        divQuestion.append(divChoice1)
          .append(divChoice2)
          .append(divChoice3)
          .append(divChoice4);


        $("#trivia").html(divQuestion);

      } // end else 

    }, //end askQuestion

    displayCountdown: function() {

      $(".countdown").html(":" + String("00" + triviaGame.countdown).slice(-2));

      triviaGame.countdown--;

    },


    timeExpired: function() {

      triviaGame.timedOut++;

      $("#trivia").html("You ran out of time!");

      triviaGame.message = "<br><br>The Correct answer was: "

      triviaGame.displayAnswer();

    },

    displayAnswer: function() {
      var correctChoice = triviaGame.shuffledQuestions[triviaGame.questionNumber].answer;

      triviaGame.aTimer = setTimeout(triviaGame.askQuestion, 1000 * triviaGame.aSecs);


      $("#trivia").append(triviaGame.message +
        triviaGame.shuffledQuestions[triviaGame.questionNumber][correctChoice]);

      triviaGame.questionNumber++;

      clearInterval(triviaGame.cdTimer);
    },

    gameOver: function() {

      var divCorrect = $("<div>")
        .text("Correct Answers: " + triviaGame.correctChoices)
        .addClass("result");

      var divWrong = $("<div>")
        .text(" Wrong Answers: " + triviaGame.wrongAnswers)
        .addClass("result");

      var divExpired = $("<div>")
        .text("Ran Out of Time: " + triviaGame.timedOut)
        .addClass("result");



      var restartBtn = $("<button>").text("Play Again!").addClass("btn-start btn-danger btn-lg");

      $("#trivia").html(divCorrect)
        .append(divWrong)
        .append(divExpired)
        .append(restartBtn);

      triviaGame.questionNumber = 0;
      triviaGame.correctChoices = 0;
      triviaGame.wrongAnswers = 0;
      triviaGame.timedOut = 0;
      triviaGame.score = 0;
          
    }

}; //end of trivia game object

// app starts to run here

triviaGame.startGame();

// setInterval(askQuestion, 1000 * triviaGame.timer);
$(document).on("click", ".btn-start", function() {

  triviaGame.shuffledQuestions = shuffleArray(triviaGame.questions)
  triviaGame.askQuestion();

});

$(document).on("click", ".choices", function() {

  clearTimeout(triviaGame.qTimer);
  clearInterval(triviaGame.cdTimer);
  

  var clickedChoice = $(this).data("choice");
  var correctChoice = triviaGame.shuffledQuestions[triviaGame.questionNumber].answer;

  if (correctChoice === clickedChoice) {
    triviaGame.score++;
    triviaGame.correctChoices++;
    
    $("#trivia").html("You got it!");
    triviaGame.message = "<br>"

  } else {
    triviaGame.wrongAnswers++;
    $("#trivia").html("Nope!");
    triviaGame.message = "<br>The Correct answer was: "

  }

  triviaGame.displayAnswer();

});


}); //end document ready
