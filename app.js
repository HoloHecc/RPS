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
const rockIcon = document.createElement('hand-rock');
// const paperIcon = document.getElementById()
// const scissorsIcon = document.getElementById()
//results
const winCondition = document.querySelector('condition');


//event listeners for buttons
rockBtn.addEventListener('click', function() {
    game('rock')
    document.querySelector('.playerChoiceIcon').innerHTML = rockIcon
});
paperBtn.addEventListener('click', function() {
    game('paper');
    document.querySelector('.playerChoiceIcon').innerHTML = 
    '<img class="hand-paper" src="hand-paper.png" style="width:175px; height:100px;">'
});
scissorsBtn.addEventListener('click', function() {
    game('scissors');
    document.querySelector('.playerChoiceIcon').innerHTML = 
    '<img class="hand-scissors" src="hand-scissors.png" style="width:175px; height:100px;">'
});

//random cpu function
function randomCpu() {
    const rpsClass = ["hand-rock", "hand-paper", "hand-scissors"]; 
    const randomChoice = (Math.floor(Math.random(rpsClass) * 3));
    document.querySelector('.cpuChoiceIcon').innerHTML = rpsClass [randomChoice]
    return rpsClass [randomChoice];
};


//game start function
function game(playerChoice){
    const cpuChoice = randomCpu();
    console.log('player chose' + playerChoice);
    console.log('cpu chose' + cpuChoice);

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