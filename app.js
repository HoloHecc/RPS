//scores numbers
let cpuScoreNum = 0;
let playerScoreNum = 0;

//DOM variables
//score
const cScore = document.getElementById('cpuScore');
const pScore = document.getElementById('playerScore');
const scoreBoard = document.querySelector('.section');
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
//adding in params to change result text
//cause empty params has nothing to referernce
function win(player, cpu) {
    console.log('player win')
    playerScoreNum++;
    pScore.innerHTML = playerScoreNum;
    cScore.innerHTML = cpuScoreNum;
    winCondition.innerHTML = 'player wins!'
    
};

//losing function
function lose() {
    console.log('cpu win')
    cpuScoreNum++;
    pScore.innerHTML = playerScoreNum;
    cScore.innerHTML = cpuScoreNum;
    winCondition.innerHTML = 'player lose!'
};

//tie function
function tie() {
    console.log('tie')
    pScore.innerHTML = playerScoreNum;
    cScore.innerHTML = cpuScoreNum;
    winCondition.innerHTML = 'tie!'
};

//game start function
function game(playerChoice){
    const cpuChoice = randomCpu();
    console.log('player chose' + playerChoice);
    console.log('cpu chose' + cpuChoice);

    switch (playerChoice + cpuChoice) {
        case 'rock' + scissorsIcon:
        case 'paper' + rockIcon:
        case 'scissors' + paperIcon:
            //passing the params into the function
            //referencing the switch params
            win(playerChoice, cpuChoice);
            break;
        case 'rock' + paperIcon:
        case 'paper' + scissorsIcon:
        case 'scissors' + rockIcon:
            lose(playerChoice, cpuChoice);
            break;
        case 'rock' + rockIcon:
        case 'paper' + paperIcon:
        case 'scissors' + scissorsIcon:
            tie(playerChoice, cpuChoice);
            break;
    }

}




// const game = () =>{
//     buttons.forEach (btn =>{
//         btn.addEventListener('click', (e) => {
//             let clickedBtn = e.target.className;
//             pshowIcon.className = clickedBtn;
//             let randomNum = Math.floor(Math.random() * randomClass.length);
//             cshowIcon.className = randomClass[randomNum];

//             if(pshowIcon.className === cshowIcon.className){
//                 pScore.innerHTML = pScore.innerHTML;
//                 cScore.innerHTML = cScore.innerHTML;
//                 winCondition.innerHTML = "Tie!";
//             }

//             else if(pshowIcon.className === randomClass[0] && cshowIcon.className === randomClass[2]){
//                 pScore.innerHTML = playerScoreNum;
//                 playerScoreNum++;
//                 winCondition.innerHTML = "Ayyyy!"
//             }else if(pshowIcon.className === randomClass[0] && cshowIcon.className === randomClass[1]){
//                 cScore.innerHTML = cpuScoreNum;
//                 cpuScoreNum++;
//                 winCondition.innerHTML = "Lose"
//             }else if(pshowIcon.className === randomClass[1] && cshowIcon.className === randomClass[2]){
//                 cScore.innerHTML = cpuScoreNum;
//                 cpuScoreNum++;
//                 winCondition.innerHTML = "Lose"
//             }else if(pshowIcon.className === randomClass[1] && cshowIcon.className === randomClass[0]){
//                 pScore.innerHTML = playerScoreNum;
//                 playerScoreNum++;
//                 winCondition.innerHTML = "Ayyyy!"
//             }else if(pshowIcon.className === randomClass[2] && cshowIcon.className === randomClass[0]){
//                 cScore.innerHTML = cpuScoreNum;
//                 cpuScoreNum++;
//                 winCondition.innerHTML = "Lose"
//             }else if(pshowIcon.className === randomClass[2] && cshowIcon.className === randomClass[1]){
//                 pScore.innerHTML = playerScoreNum;
//                 playerScoreNum++;
//                 winCondition.innerHTML = "Ayyyy!"
//             }
//         });
//     });
// }

// game();