const sonic = document.querySelector('.sonic');
const crab = document.querySelector('.crab');
const ring = document.querySelector('.ring');
const scoreDisplay = document.querySelector('.score');

const anel = document.getElementById("anel");
const tema = document.getElementById("tema");
const morte = document.getElementById("morte");
const gameover = document.getElementById("gameover");
const pulando = document.getElementById("pulando");




var canvas = document.getElementById("nuvem");
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawCloud(x, y) {
  ctx.fillStyle = "#FFFFFF";
  ctx.beginPath();
  ctx.moveTo(x, y);
  ctx.bezierCurveTo(x + 40, y - 40, x + 80, y - 40, x + 120, y);
  ctx.bezierCurveTo(x + 120, y - 40, x + 160, y - 40, x + 200, y);
  ctx.bezierCurveTo(x + 250, y - 40, x + 250, y + 50, x + 200, y + 50);
  ctx.bezierCurveTo(x + 175, y + 50, x + 175, y + 75, x + 200, y + 100);
  ctx.bezierCurveTo(x + 175, y + 125, x + 150, y + 125, x + 125, y + 100);
  ctx.bezierCurveTo(x + 100, y + 125, x + 75, y + 125, x + 50, y + 100);
  ctx.bezierCurveTo(x + 25, y + 125, x, y + 125, x, y + 100);
  ctx.bezierCurveTo(x - 25, y + 125, x - 50, y + 125, x - 75, y + 100);
  ctx.bezierCurveTo(x - 100, y + 125, x - 125, y + 125, x - 150, y + 100);
  ctx.bezierCurveTo(x - 175, y + 125, x - 200, y + 125, x - 200, y + 100);
  ctx.bezierCurveTo(x - 200, y + 75, x - 200, y + 50, x - 150, y + 50);
  ctx.bezierCurveTo(x - 120, y + 50, x - 120, y - 40, x - 150, y - 40);
  ctx.bezierCurveTo(x - 175, y - 40, x - 175, y - 15, x - 150, y);
  ctx.bezierCurveTo(x - 120, y - 15, x - 80, y - 15, x - 50, y);
  ctx.bezierCurveTo(x - 40, y - 15, x, y - 15, x, y);
  ctx.closePath();
  ctx.fill();
}



var cloudX = canvas.width;
var cloudY = 50;

function updateCloudPosition() {
  cloudX -= 1;
  if (cloudX < -300) {
    cloudX = canvas.width;
  }
}

function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawCloud(cloudX, cloudY);
}






let score = 0;

const iniciarJogo = () => {
    tema.play();
}

const encerrarJogo = () => {
    tema.pause();
}

const pulo = () => {
    
    pulando.play();
    sonic.classList.add('pulo');
    setTimeout(()=>{ sonic.classList.remove('pulo')},800);
}

document.addEventListener('keydown',pulo);

const loop = setInterval(()=>{
     updateCloudPosition();
    render();
   
    gameovernotification.style.display = 'none'
    iniciarJogo();
   
    
    const crabPosition = crab.offsetLeft;
    const crabH = +window.getComputedStyle(sonic).bottom.replace('px','');


    if(crabPosition <=65 && crabPosition >0 && crabH<=180 ){
        crab.style.left = '65px';
        ring.style.left = '500px';
        
        setTimeout(function(){
            morte.pause();
          }, 5000); // 10 segundos
          morte.play();
          
          setTimeout(function(){
            gameover.pause();
          }, 10000); // 10 segundos
          gameover.play();
          
        clearInterval(loop);
        encerrarJogo();
        gameovernotification.style.display = 'inline-block';
    }
    
   
},10);


const loop1 = setInterval(()=>{

    const ringPosition = ring.offsetLeft;
    const ringH = +window.getComputedStyle(sonic).bottom.replace('px','');
    if(ringPosition <=65 && ringPosition >0 && ringH<=180){
        anel.play();
        score = score+100;
        scoreDisplay.textContent = score; // atualiza o score na tela
        ring.style.animation = 'none';
        void ring.offsetWidth;
        ring.style.animation = 'ringAndar 5s infinite linear';
        
        }
},10);

document.addEventListener('keydown', function(event) {
  if (event.code === 'Space') { // verifica se a tecla pressionada é a barra de espaço
    location.reload(); // recarrega a página para reiniciar o jogo
  }
});
