//
//
//

var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName );
alert('Hi there, ' + userName + ', I am going to ask you some questions about me. ' + ' Please answer Y or N');


function question1(){
  var pTagOne = document.getElementById('ans-one');
  console.log(userName + ' answered Question 1 with ' + answer1);

  if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() === 'YES') {
    pTagOne.textContent = 'That is correct! ' + ' I was born in Tulsa, Oklahoma.';
    console.log(userName + ' totally nailed Question 1');

  } else if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
    pTagOne.textContent = 'Sorry ' + userName + ' you\'re wrong!!!';
    console.log(userName + ' did not answer Question 1 correctly');

  } else {
    alert('You should have given a Y or N answer, so you lose this round.');
  }
}

var answer1 = prompt('Was I born in Tulsa, Oklahoma?');
question1();


function question2() {
  var pTagTwo = document.getElementById('ans-two');
  console.log(userName + ' answered Question 2 with ' + answer2);

  if (answer2.toLowerCase() === 'y' || answer2.toUpperCase() === 'YES') {
    pTagTwo.textContent = 'Yes, I have an older sister.';
    console.log(userName + ' answered Question 2 correctly');

  } else if (answer2.toLowerCase() === 'n' || answer2.toUpperCase() === 'NO') {
    pTagTwo.textContent = 'Sorry that is incorrect, I happen to have an older sister.';
    console.log(userName + ' answered Question 2 incorrectly');

  } else {
    alert('You really should work on following directions better!');
  }
}

var answer2 = prompt('Do I have any siblings?');
question2();

function question3(answer3){
  var pTagThree = document.getElementById('ans-three');
  console.log(userName + ' answered Question 3 with ' + answer3);

  if (answer3.toLowerCase() === 'y' || answer3.toUpperCase() === 'YES') {
    pTagThree.textContent = 'That is the correct answer, nice job!' + userName;
    console.log(userName + ' responded to Question 3 correctly by choosing ' + answer3);

  } else if (answer3.toLowerCase() === 'n' || answer3.toUpperCase() === 'NO') {
    pTagThree.textContent = 'That is the correct answer, nice job!' + userName;
    console.log(userName + ' responded to Question 3 with ' + answer3 + ' Which is not correct.');

  } else {
    alert(userName + ', It is really unfortunate that you do not grasp how to play the game.');
  }
};

var answer3 = prompt('Am I older than 18?');
question3(answer3);

function question4(answer4) {
  var pTagFour = document.getElementById('ans-four');
  console.log(userName + ' responded with ' + answer4 + ' for Question 4.');

  if (answer4.toLowerCase() === 'y' || answer4.toUpperCase() === 'YES') {
    pTagFour.textContent= userName + ', You made a wise selection ' + ' I am so awesome at riding bikes!'
    console.log(answer4 + ' was the correct answer to Question 4.');

  } else if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'NO') {
    pTagFour.textContent= 'This time your answer is wrong ' + userName + '. I have known how to ride a bike since I was 6. ' + ' Can you imagine how sad childhood would be with no bike rides? ';
    console.log(userName + ' responded to Question 4 with ' + answer4 + ' which was not correct.');

  } else {
    alert(userName + ', Maybe for the next question you can choose Y or N and be full of win?');
  }
}

var answer4 = prompt('Do I know how to ride a bike?');
question4(answer4);


function question5(answer5) {
  var pTagFive = document.getElementById('ans-five');
  console.log(userName + ' answered Question 5 with ' + answer5);

  if (answer5.toLowerCase() === 'y' || answer5.toUpperCase() === 'YES') {
    pTagFive.textContent= userName + ' you are correct. ' + ' I lived in Denver just before moving to Seattle.';
    console.log(userName + ' responded with ' + answer5 + ', which the correct answer for Question 5.');

  } else if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'NO') {
    pTagFive.textContent= userName + ', your answer is not correct. ' + ' I did live in Denver for about 5 years before relocating to Seattle.';
    console.log(userName + ' responded to Question 5 with ' + answer5 + ' which is incorrect.');

  } else {
    alert('You did not chose a valid response, you lose! ' + ' What a shame you have not figured out the game.');
  }
}

var answer5 = prompt('Have I ever lived in Denver?');
question5(answer5);

function question6(incorrectAnswer, answer6) {

  while(incorrectAnswer < 4) {
    var pTagSix = document.getElementById('ans-six');
    console.log(userName + ' responded to Question 6 with ' + answer6);

    if (answer6 > 37) {
      pTagSix.textContent= 'Too high!';
      console.log(userName + ' responded with ' + answer6 + ' to Question 6 which is incorrect.');
      incorrectAnswer +=1;

    } else if (answer6 < 37) {
      pTagSix.textContent= 'Too low!';
      console.log(userName + ' responded with ' + answer6 + ' to Question 6 which is incorrect.');
      incorrectAnswer +=1;

    } else if (answer6 === 37) {
      pTagSix.textContent = 'You got it right. ' + ' Exellent work ' + userName + '!';
      console.log(userName + ' responded correctly to Question 6.');
      incorrectAnswer +=1;

    } else if (typeof(answer6) === 'number') {
      pTagSix.textContent = userName + ', you did not enter a number value.';
      console.log(userName + ' answered Question 6 with ' + answer6);
      incorrectAnswer +=1;
    }
  }
}

var incorrectAnswer = 0;
var answer6 = parseInt(prompt(userName + ', you learned earlier that I am not 18.' + ' How old do you think I am? ' + ' Guess carefully, because you only get 4 tries'))

question6(incorrectAnswer, answer6);
