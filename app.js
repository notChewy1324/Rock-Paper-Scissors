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
                const computerChoise = computerOptions[computerNumber];
            });
        });
    }

    // Calls all inner functions
    startGame();
    playMatch();
};

// Start the game fucntion
game();