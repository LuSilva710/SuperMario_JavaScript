const start = document.querySelector(".start-game");
const mario = document.querySelector(".super-mario");
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
 
// const jump = function jump ();
const jump = () => {
    mario.classList.add("jump-mario");
    setTimeout(() => {
        mario.classList.remove("jump-mario");
    }, 500);
    smallJump.play();
};

const handleJump = () => {
    jump();
};

// Adiciona um listener para o evento de clique na tela
document.addEventListener("click", handleJump);

// Adiciona um listener para o evento de pressionar a tecla
document.addEventListener("keydown", (event) => {
    if (event.code === "Space") {
        handleJump();
    }
});

//condicional para parar as animações - game over
const loopGame = setInterval(() => {
    audioStart.play();
    const pipePosition = pipe.offsetLeft;
    const groundPosition = ground.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = "none";
        mario.style.bottom = `${marioPosition}px`;

        ground.style.animation = "none";
        ground.style.left = `${groundPosition}px`

        mario.src = "./Imagens/mario-game-over.png";
        mario.style.width = "75px";
        mario.style.marginLeft = "45px";
        audioStart.src = "Audio/audio_gameover.mp3";

        gameOver.style.display = "block";
        restart.style.display = "block";
        clearInterval(loopGame);
    };
}, 10);

//função score
const marioScore = () => {
    const pipePosition = pipe.offsetLeft;
    if (pipePosition > 159 && pipePosition < 300) {
        score += 5;
        scoreElement.innerHTML = score;
    }
    else {
        score += 0;
    }
};
document.addEventListener("keydown", marioScore);
