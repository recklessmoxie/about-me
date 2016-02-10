


var userName = prompt('What is your name?');
console.log('The user said their name is ' + userName );
alert('Hi there, ' + userName + ', I am going to ask you some questions about me. ' + ' Please answer Y or N');

var answer1 = prompt('Was Shelly born in Tulsa, Oklahoma?');
console.log(userName + ' answered Question 1 with ' + answer1);

if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() === 'YES') {
  alert('That is correct! ' + ' Shelly was born in Tulsa, Oklahoma.');
  console.log(userName + ' totally nailed Question 1');

} else if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
  alert('Sorry ' + userName + ' you\'re wrong!!!');
  console.log(userName + ' did not answer Question 1 correctly');

} else {
  alert('You should have given a Y or N answer, so you lose this round.');
}

var answer2 = prompt('Does Shelly have any siblings?');
console.log(userName + ' answered Question 2 with ' + answer2);

if (answer2.toLowerCase() === 'y' || answer2.toUpperCase() === 'YES') {
  alert('Yes, Shelly has 1 older sister.');
  console.log(userName + ' answered Question 2 correctly');

} else if (answer2.toLowerCase() === 'n' || answer2.toUpperCase() === 'NO') {
  alert('Sorry that is incorrect, Shelly happens to have an older sister.');
  console.log(userName + ' answered Question 2 incorrectly');

} else {
  alert('You really should work on following directions better!');
}

var answer3 = prompt('Is Shelly older than 18?');
console.log(userName + ' answered Question 3 with' + answer3);

if (answer3.toLowerCase() === 'y' || answer3.toUpperCase() === 'YES') {
  alert('That is the correct answer, nice job! ' + userName);
  console.log(userName + ' got the answer to Question 3 right and chose ' + answer3);

} else if (answer3.toLowerCase() === 'n' || answer3.toUpperCase() === 'NO') {
  alert('Sorry ' + userName + answer3 + ' is not the correct answer.' + ' Though Shelly would probably be flattered by your response.');
  console.log(userName + 'answered question 3 with' + answer3 + ' Which is not correct.');

} else {
  alert('It is really unfortunate that you do not grasp how to play the game.');
}

var answer4 = prompt('Does Shelly know how to ride a bike?');
console.log(userName + 'chose to respond with ' + answer4 + ' for Question 4.');

if (answer4.toLowerCase() === 'y' || answer4.toUpperCase() === 'YES') {
  alert(userName + ' You made a wise selection ' + ' Shelly is awesome at riding bikes!'); console.log(answer4 + ' was the right answer for Question 4.');

} else if (answer4.toLowerCase() === 'n' || answer4.toUpperCase() === 'NO') {
  alert('Shelly has known how to ride a bike for a long time. ' + userName + ' Imagine how sad it would be to have a childhood with no bikes.' + ' This time your answer is wrong.');
  console.log(userName + 'chose ' + answer4 + ' which was not the correct response.');

} else {
  alert('Maybe for the last question you an choose Y or N and be full of win?');
}

var answer5 = prompt('Is Shelly a vegetarian?');
console.log(userName + 'answered Question 5 with ' + answer5);

if (answer5.toLowerCase() === 'y' || answer5.toUpperCase() === 'YES') {
  alert(userName + ', Shelly used to be a vegetarian, but fell off the wagon and into a cheeseburger ' + ' So unfortunately, your answer is incorrect');
  console.log(answer5 + ' is incorrect for Question 5.');

} else if (answer5.toLowerCase() === 'n' || answer5.toUpperCase() === 'NO') {
  alert(userName + 'Shelly is a sad meat eater, so you picked the right answer.');
  console.log(userName + ' chose ' + answer4 + ' which is the right answer this time.');

} else {
  alert('You still did not chose a valid response, you lose');

};
