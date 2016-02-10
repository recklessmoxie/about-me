


var userName = prompt('What is your name?');
  console.log('The user said their name is ' + userName );
  alert('Hi there, ' + userName + ', I am going to ask you some questions abou me. ' + ' Please answer Y or N');

var answer1 = prompt('Was Shelly born in Tulsa, Oklahoma?');
  console.log('The user answer to Question 1 was ' + answer1);

if (answer1.toLowerCase() === 'y' || answer1.toUpperCase() === 'YES') {
  alert('That is correct! ' + ' Shelly was born in Tulsa, Oklahoma.');
  console.log(userName + ' totally nailed Question 1');

} else if (answer1.toLowerCase() === 'n' || answer1.toUpperCase() === 'NO') {
  alert('Sorry, you\'re wrong!!!');
  console.log(userName + ' did not answer Question 1 correctly');

} else {
  alert('You should have given a Y or N answer, so you lose this round.');
};

var answer2 = prompt('Does Shelly have any siblings?');
  console.log('The user answer to Question 2 was ' + answer2);

if (answer2.toLowerCase() === 'y' || answer2.toUpperCase() === 'YES') {
  alert('Yes, Shelly has 1 older sister.');
  console.log(userName + ' answered Question 2 correctly');

} else if (answer2.toLowerCase() === 'n' || answer2.toUpperCase() === 'NO') {
  alert('Sorry that is incorrect, Shelly happens to have an older sister.');
  console.log(userName + ' answered Question 2 incorrectly');

} else {
  alert('You really should work on following directions better!');
};
