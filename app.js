//scores
let cpuScoreNum = 0;
let playerScoreNum = 0;

//DOM variables
const cScore = document.getElementById('cpuScore');
const pScore = document.getElementById('playerScore');
const scoreBoard = document.querySelector('.section');
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorsBtn = document.getElementById('scissors');
const winCondition = document.querySelector('condition');
//figure out how to make icon i tag change the img tag
//to show the icon
const cshowIcon = document.querySelector('.showCpu i');
const pshowIcon = document.querySelector('.showPlayer i');


const randomClass = ["hand-rock", "hand-paper", "hand-scissors"];



const game = () =>{
    buttons.forEach (btn =>{
        btn.addEventListener('click', (e) => {
            let clickedBtn = e.target.className;
            pshowIcon.className = clickedBtn;
            let randomNum = Math.floor(Math.random() * randomClass.length);
            cshowIcon.className = randomClass[randomNum];

            if(pshowIcon.className === cshowIcon.className){
                pScore.innerHTML = pScore.innerHTML;
                cScore.innerHTML = cScore.innerHTML;
                winCondition.innerHTML = "Tie!";
            }

            else if(pshowIcon.className === randomClass[0] && cshowIcon.className === randomClass[2]){
                pScore.innerHTML = playerScoreNum;
                playerScoreNum++;
                winCondition.innerHTML = "Ayyyy!"
            }else if(pshowIcon.className === randomClass[0] && cshowIcon.className === randomClass[1]){
                cScore.innerHTML = cpuScoreNum;
                cpuScoreNum++;
                winCondition.innerHTML = "Lose"
            }else if(pshowIcon.className === randomClass[1] && cshowIcon.className === randomClass[2]){
                cScore.innerHTML = cpuScoreNum;
                cpuScoreNum++;
                winCondition.innerHTML = "Lose"
            }else if(pshowIcon.className === randomClass[1] && cshowIcon.className === randomClass[0]){
                pScore.innerHTML = playerScoreNum;
                playerScoreNum++;
                winCondition.innerHTML = "Ayyyy!"
            }else if(pshowIcon.className === randomClass[2] && cshowIcon.className === randomClass[0]){
                cScore.innerHTML = cpuScoreNum;
                cpuScoreNum++;
                winCondition.innerHTML = "Lose"
            }else if(pshowIcon.className === randomClass[2] && cshowIcon.className === randomClass[1]){
                pScore.innerHTML = playerScoreNum;
                playerScoreNum++;
                winCondition.innerHTML = "Ayyyy!"
            }
        });
    });
}

game();