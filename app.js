


var userName = prompt('What is your name?');
  console.log('The user said their name is ' + userName );
  alert('Hi there, ' + userName + ', I am going to ask you some questions about me. ' + ' Please answer Y or N');

var answer1 = prompt('Was Shelly born in Tulsa, Oklahoma?');
  console.log(userName 'answered Question 1 with ' + answer1);

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
  console.log(userName 'answered Question 2 with ' + answer2);

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
  alert('Sorry ' + userName + answer3 ' is not the correct answer, but Shelly would be flattered with your response.');
  console.log(userName + 'answered question 3 with' + answer3 + ' Which is not correct.');

} else {
  alert('It is really unfortunate that you do not grasp how to play the game.');
}
}

}
