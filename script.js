let userScore = 0;
let computerScore = 0;

// Load sounds
const clickSound = new Audio('assets/click.mp3');
const winSound = new Audio('assets/win.mp3');
const loseSound = new Audio('assets/lose.mp3');

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  return choices[Math.floor(Math.random() * choices.length)];
}

function play(userChoice) {
  clickSound.play();

  const computerChoice = getComputerChoice();
  let result = '';

  const imageMap = {
    rock: 'assets/rock.png',
    paper: 'assets/paper.png',
    scissors: 'assets/scissors.png'
  };

  const userHand = document.getElementById('user-hand');
  const compHand = document.getElementById('computer-hand');
  userHand.src = imageMap[userChoice];
  compHand.src = imageMap[computerChoice];

  // Animate hands
  userHand.classList.add('animate');
  compHand.classList.add('animate');
  setTimeout(() => {
    userHand.classList.remove('animate');
    compHand.classList.remove('animate');
  }, 300);

  // Determine result
  if (userChoice === computerChoice) {
    result = 'Draw!';
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = 'You Win!';
    userScore++;
    winSound.play();
  } else {
    result = 'You Lose!';
    computerScore++;
    loseSound.play();
  }

  // Update display
  document.getElementById('winner').textContent = `Result: ${result}`;
  document.getElementById('user-score').textContent = userScore;
  document.getElementById('computer-score').textContent = computerScore;
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}

