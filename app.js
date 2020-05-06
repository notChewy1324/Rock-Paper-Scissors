const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    // Starts the game
    const startGame = () => {
        const playButton = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const matchScreen = document.querySelector('.match');

        playButton.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            matchScreen.classList.remove('fadeOut')
        });
    }
    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        // Computer's options
        const computerOptions = ['rock', 'paper', 'scissors']

        options.forEach(option => {
            option.addEventListener('click', function(){
                // Computer choice
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                // Compare hands
                compareHands(this.textContent, computerChoice);
                // Update images
                playerHand.src = `./assets/${this.textContent}.png`;
                computerHand.src = `./assets/${computerChoice}.png`;
            });
        });
    }

    const compareHands = (plaerChoice, computerChoice) => {
        // Update text
        const winner = document.querySelector('.winner');

        // Check for tie
        if(playerChoice === computerChoice){
            winner.textContent = "It is a tie!";
            return;
        }

        // Check for rock
        if(playerChoice === 'rock'){
            if(computerChoice === 'scissors'){
                winner.textContent = "Player Wins!";
                return;
            } else {
                winner.textContent = "Computer Wins!";
                return;
            }
        }

        // Check for paper
        if(playerChoice === 'paper'){
            if(computerChoice === 'rock'){
                winner.textContent = "Player Wins!";
                return;
            } else {
                winner.textContent = "Computer Wins!";
                return;
            }
        }

        // Check for scissors
        if(playerChoice === 'scissors'){
            if(computerChoice === 'paper'){
                winner.textContent = "Player Wins!";
                return;
            } else {
                winner.textContent = "Computer Wins!";
                return;
            }
        }
    }

    // Calls all inner functions
    startGame();
    playMatch();
};

// Start the game fucntion
game();