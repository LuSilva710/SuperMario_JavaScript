const start = document.querySelector(".start-game");
const peach = document.querySelector(".peach-game");
const pipe = document.querySelector(".pipe-game");
const bullet = document.querySelector(".bullet");
const greenKoopa = document.querySelector(".green-koopa");
const ground = document.querySelector(".ground-game-peach");
const audioStart = document.getElementById("mario-theme");
const smallJump = document.getElementById("mario-jump-small");
const restart = document.querySelector(".restart");
const gameOver = document.querySelector(".game-over");

//score element
const scoreElement = document.querySelector(".score-number");
let score = 0;

// const jump = function jump ();
const jump = () => {
    peach.classList.add("jump-peach");
    setTimeout(() => {
        peach.classList.remove("jump-peach");
    }, 500);
    smallJump.play();
};

//condicional para parar as animações - game over
const loopGame = setInterval(() => {
    audioStart.play();
    const pipePosition = pipe.offsetLeft;
    const groundPosition = ground.offsetLeft;
    const peachPosition = +window.getComputedStyle(peach).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && peachPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        peach.style.animation = "none";
        peach.style.bottom = `${peachPosition}px`;

        ground.style.animation = "none";
        ground.style.left = `${groundPosition}px`

        peach.src = "./Imagens/peach-game-over.png";
        peach.style.width = "115px";
        peach.style.marginLeft = "15px";
        audioStart.src = "Audio/audio_gameover.mp3";
        
        gameOver.style.display = "block";
        restart.style.display = "block";
        clearInterval(loopGame);

    };
}, 10);

document.addEventListener("keydown", jump);


//função score
const peachScore = () => {
    const pipePosition = pipe.offsetLeft;
    if (pipePosition > 159 && pipePosition < 300) {
        score += 5;
        scoreElement.innerHTML = score;
    }
    else {
        score += 0;
    }
};
document.addEventListener("keydown", peachScore);
