let userScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function play(userChoice) {
  const computerChoice = getComputerChoice();
  let result = '';

  if (userChoice === computerChoice) {
    result = 'Draw!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You Win!';
    userScore++;
  } else {
    result = 'You Lose!';
    computerScore++;
  }

  // Update UI
  document.getElementById('user-choice').textContent = `Your choice: ${userChoice}`;
  document.getElementById('computer-choice').textContent = `Computer's choice: ${computerChoice}`;
  document.getElementById('winner').textContent = `Result: ${result}`;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}
