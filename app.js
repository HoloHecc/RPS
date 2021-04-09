//scores numbers
let cpuScoreNum = 0;
let playerScoreNum = 0;

//DOM variables
//score
const cScore = document.getElementById('cpuScore');
const pScore = document.getElementById('playerScore');
//buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
//icons
const rockIcon = '<img src="hand-rock.png" style="width:310px; height:210px;">';
const paperIcon = '<img src="hand-paper.png" style="width:310px; height:210px;">';
const scissorsIcon = '<img src="hand-scissors.png" style="width:310px; height:210px;">';
//results
const winCondition = document.querySelector('.condition');


//event listeners for buttons
rockBtn.addEventListener('click', function() {
    game('rock')
    document.querySelector('.playerChoiceIcon').innerHTML = rockIcon
});
paperBtn.addEventListener('click', function() {
    game('paper');
    document.querySelector('.playerChoiceIcon').innerHTML = paperIcon
});
scissorsBtn.addEventListener('click', function() {
    game('scissors');
    document.querySelector('.playerChoiceIcon').innerHTML = scissorsIcon
});

//random cpu function
function randomCpu() {
    const cpuChoice = [rockIcon, paperIcon, scissorsIcon]; 
    const randomChoice = (Math.floor(Math.random(cpuChoice) * 3));
    document.querySelector('.cpuChoiceIcon').innerHTML = cpuChoice [randomChoice]
    return cpuChoice [randomChoice];
};

//winning function
function win() {
    playerScoreNum++;
    pScore.innerHTML = playerScoreNum;
    cScore.innerHTML = cpuScoreNum;
    winCondition.innerHTML = 'player wins!';
};

//losing function
function lose() {
    cpuScoreNum++;
    pScore.innerHTML = playerScoreNum;
    cScore.innerHTML = cpuScoreNum;
    winCondition.innerHTML = 'player lose!';
};

//tie function
function tie() {
    pScore.innerHTML = playerScoreNum;
    cScore.innerHTML = cpuScoreNum;
    winCondition.innerHTML = 'tie!';
};

//game start function
function game(playerChoice){
    const cpuChoice = randomCpu();

    switch (playerChoice + cpuChoice) {
        case 'rock' + scissorsIcon:
        case 'paper' + rockIcon:
        case 'scissors' + paperIcon:
            win();
            break;
    
        case 'rock' + paperIcon:
        case 'paper' + scissorsIcon:
        case 'scissors' + rockIcon:
            lose();
            break;

        case 'rock' + rockIcon:
        case 'paper' + paperIcon:
        case 'scissors' + scissorsIcon:
            tie();
            break;
    }
};