let userWins = 0;
let computerWins = 0;

let computer_prompt = prompt('would you like to play rock, paper, scissors? '); 
for (i = 0; i < 5; i++) {
    
if (computer_prompt.toLowerCase() == 'no') {
    console.log('ok!');
} 
else if (computer_prompt.toLowerCase() == 'yes') {
  rockPaperScissors();
  
}
else (console.log('pick a valid choice'));
 }

if (userWins > computerWins) {
  console.log('you get the win!');
}

else if (computerWins > userWins) {
  console.log('computer gets the dub!');
}



function rockPaperScissors() {
  
  let computer1choice = computerChoice();
  let user1choice = userChoice(); 
  
  if(computer1choice == user1choice) {
    console.log("its a tie!")
  }
  else if (computer1choice == 'paper' && user1choice == 'scissors') {
    console.log('user wins!')
    userWins++;
    
    
    
  }
  
  else if (computer1choice == 'paper' && user1choice == 'rock') {
    console.log('computer wins!')
    computerWins++;
    
  }
  
  else if (computer1choice == 'rock' && user1choice == 'scissors') {
    console.log('computer wins!')
    computerWins++;
  }
  
  else if (computer1choice == 'rock' && user1choice == 'paper') {
    console.log('user wins!')
    userWins++;
  }
  
  else if (computer1choice == 'scissors' && user1choice == 'rock') {
    console.log('user wins!')
    userWins++;
  }
  
  else if (computer1choice == 'scissors' && user1choice == 'paper') {
    console.log('computer wins!')
    computerWins++;
  }
  else (console.log('valid choice!'))
  
  
}

function userChoice() {
  let user_choice;
  while (true) {
    user_choice = prompt('rock, paper, or scissors?');
    if (user_choice.toLowerCase() === 'rock' || user_choice.toLowerCase() === 'paper'      || user_choice.toLowerCase() === 'scissors') {
      return user_choice;
    } else {
      alert('try again');
    }
  }
  
  
}

function computerChoice() {
  let computer_choice;
  computer_choice = ['rock', 'paper', 'scissors']
  const computer_decision = Math.floor(Math.random() * computer_choice.length);
  
  return computer_choice[computer_decision]
}
