const start = document.querySelector(".start-game");
const luigi = document.querySelector(".luigi-game");
const pipe = document.querySelector(".pipe-game");
const ground = document.querySelector(".ground-game");
const greenKoopa = document.querySelector(".green-koopa");
const bullet = document.querySelector(".bullet");
const audioStart = document.getElementById("mario-theme");
const smallJump = document.getElementById("mario-jump-small");
const restart = document.querySelector(".restart");
const gameOver = document.querySelector(".game-over");

//score element
const scoreElement = document.querySelector(".score-number");
let score = 0;

//configuração do contador
let cont = 0;
let fixedCont = 0;
const contador = setInterval(() => {
    cont += 0.05;
    Math.round(cont);
    fixedCont = cont.toFixed(2);
    console.log(fixedCont);
}, 50);

// const jump = function jump ();
const jump = () => {
    luigi.classList.add("jump-luigi");
    setTimeout(() => {
        luigi.classList.remove("jump-luigi");
    }, 500);
    smallJump.play();
};

//condicional para parar as animações - game over
const loopGame = setInterval(() => {
    audioStart.play();
    const pipePosition = pipe.offsetLeft;
    const groundPosition = ground.offsetLeft;
    const luigiPosition = +window.getComputedStyle(luigi).bottom.replace("px", "");
   

    if (pipePosition <= 120 && pipePosition > 0 && luigiPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        luigi.style.animation = "none";
        luigi.style.bottom = `${luigiPosition}px`;

        ground.style.animation = "none";
        ground.style.left = `${groundPosition}px`

        luigi.src = "./Imagens/luigi-gameover.webp";
        luigi.style.width = "75px";
        luigi.style.marginLeft = "45px";
        audioStart.src = "Audio/audio_gameover.mp3";
        
        gameOver.style.display = "block";
        restart.style.display = "block";
        clearInterval(loopGame);
        clearInterval(contador);
    };
}, 10);

document.addEventListener("keydown", jump);

//função score
const LuigiScore = () => {
    const pipePosition = pipe.offsetLeft;

    if (pipePosition > 159 && pipePosition < 300) {
        score += 5;
        scoreElement.innerHTML = score;
    }
    else {
        score += 0;
    }
}
document.addEventListener("keydown", LuigiScore);
