let cpuScoreNum = 1;
let playerScoreNum = 1;

const cScore = document.getElementById('cpuScore');
const pScore = document.getElementById('playerScore');
const buttons = document.querySelectorAll('.selection button');
const cshowIcon = document.querySelector('.showCpu i');
const pshowIcon = document.querySelector('.showPlayer i');

const randomClass = ["hand-rock", "hand-paper", "hand-scissors"];
const text = document.getElementById('condition');

// const path = require('path');
// const paper_icon = fs.readFileSync(path.join(__dirname, 'hand-paper.png'));
// const rock_icon = fs.readFileSync(path.join(__dirname, 'hand-rock.png'));
// const scissors_icon = fs.readFileSync(path.join(__dirname, 'hand-scissors.png'));

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
                text.innerHTML = "Tie!";
            }

            else if(pshowIcon.className === randomClass[0] && cshowIcon.className === randomClass[2]){
                pScore.innerHTML = playerScoreNum;
                playerScoreNum++;
                text.innerHTML = "Ayyyy!"
            }else if(pshowIcon.className === randomClass[0] && cshowIcon.className === randomClass[1]){
                cScore.innerHTML = cpuScoreNum;
                cpuScoreNum++;
                text.innerHTML = "Lose"
            }else if(pshowIcon.className === randomClass[1] && cshowIcon.className === randomClass[2]){
                cScore.innerHTML = cpuScoreNum;
                cpuScoreNum++;
                text.innerHTML = "Lose"
            }else if(pshowIcon.className === randomClass[1] && cshowIcon.className === randomClass[0]){
                pScore.innerHTML = playerScoreNum;
                playerScoreNum++;
                text.innerHTML = "Ayyyy!"
            }else if(pshowIcon.className === randomClass[2] && cshowIcon.className === randomClass[0]){
                cScore.innerHTML = cpuScoreNum;
                cpuScoreNum++;
                text.innerHTML = "Lose"
            }else if(pshowIcon.className === randomClass[2] && cshowIcon.className === randomClass[1]){
                pScore.innerHTML = playerScoreNum;
                playerScoreNum++;
                text.innerHTML = "Ayyyy!"
            }
        });
    });
}

game();