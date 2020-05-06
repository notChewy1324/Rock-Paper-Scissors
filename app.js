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

    }

    // Calls all inner functions
    startGame();
    playMatch();
};

// Start the game fucntion
game();