const car = document.getElementById("car");
const obstacle = document.getElementById("obstacle");

let isJumping = false;

// Jump function
function jump() {
  if (isJumping) return;
  isJumping = true;
  let jumpHeight = 0;
  const upInterval = setInterval(() => {
    if (jumpHeight >= 50) {
      clearInterval(upInterval);
      const downInterval = setInterval(() => {
        if (jumpHeight <= 0) {
          clearInterval(downInterval);
          isJumping = false;
        }
        jumpHeight -= 5;
        car.style.bottom = 20 + jumpHeight + "px";
      }, 20);
    }
    jumpHeight += 5;
    car.style.bottom = 20 + jumpHeight + "px";
  }, 20);
}

// Collision detection
function checkCollision() {
  const carBottom = parseInt(window.getComputedStyle(car).bottom);
  const obstacleRight = parseInt(window.getComputedStyle(obstacle).right);

  if (obstacleRight > 50 && obstacleRight < 80 && carBottom <= 40) {
    alert("Game Over!");
    obstacle.style.animation = "none";
  }
}

// Event listener for jumping
document.addEventListener("keydown", (event) => {
  if (event.code === "Space") {
    jump();
  }
});

// Game loop
setInterval(checkCollision, 10);
