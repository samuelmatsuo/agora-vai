var score = 0;
var gameContainer = document.getElementById("gameContainer");
var scoreValue = document.getElementById("scoreValue");

gameContainer.addEventListener("click", function(e) {
  if (e.target.classList.contains("object")) {
    score++;
    scoreValue.textContent = score;
    moveObject(e.target);
  }
});

function moveObject(object) {
  var containerWidth = gameContainer.clientWidth;
  var containerHeight = gameContainer.clientHeight;
  var maxX = containerWidth - object.offsetWidth;
  var maxY = containerHeight - object.offsetHeight;

  var randomX = Math.floor(Math.random() * maxX);
  var randomY = Math.floor(Math.random() * maxY);

  object.style.top = randomY + "px";
  object.style.left = randomX + "px";
}

function startGame() {
  var duration = 30; // Tempo do jogo em segundos

  var countdown = setInterval(function() {
    duration--;
    if (duration === 0) {
      clearInterval(countdown);
      gameContainer.removeEventListener("click", clickHandler);
      alert("Fim do jogo! Sua pontuação final é: " + score);
    }
  }, 1000);

  createObjects();
}

function createObjects() {
  var numObjects = 10; // Número de objetos a serem criados

  for (var i = 0; i < numObjects; i++) {
    var object = document.createElement("div");
    object.classList.add("object");
    gameContainer.appendChild(object);
    moveObject(object);
  }
}

startGame();
