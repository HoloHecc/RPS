let cpuScore = 1;
let playerScore = 1;
const cScore = document.getElementById('cpuScore');
const pScore = document.getElementById('playerScore');
const buttons = document.querySelectorAll('.selection button');
const cshowIcon = document.querySelector('.showCpu i');
const pshowIcon = document.querySelector('.showPlayer i');

const randomClass = ["hand-rock", "hand-paper", "hand-scissor"];
const text = document.getElementById('condition');