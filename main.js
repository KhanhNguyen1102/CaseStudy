function start() {
    susu = new Plane(112, 61, 600, 300, 4, 4, "planeSuper1.png", "top")
    bullet = [];
    enemy = [];
    ctx = document.getElementById("myCanvas").getContext("2d");
}

function moveSelection(key) {
    switch (key.keyCode) {
        case 37:
            susu.orientation = "left";
            break;
        case 39:
            susu.orientation = "right";
            break;
        case 38:
            susu.orientation = "top";
            break;
        case 40:
            susu.orientation = "bot";
            break;
    }

}

function doReady() {
    window.addEventListener('keydown', moveSelection);
}

function shoot() {
    susu.fire();
}

function createEnemy() {
    let enemy1 = new Enemy(77, 72, Math.random() * 1300, 0, "enemy1.png");
    enemy.push(enemy1);
}

function changeSpeedEnemy() {
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].speedX = Math.random() * 10 - 5;
    }
}

function drawBullet() {
    for (let i = 0; i < bullet.length; i++) {
        bullet[i].move();
        if (bullet[i].y < -60) {
            bullet.splice(bullet.indexOf(bullet[i]), 1)
        }
        bullet[i].draw(ctx);
    }
}

function drawEnemy() {
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].move();
        if (enemy[i].y > 700 - enemy[i].height) {
            enemy.splice(enemy.indexOf(enemy[i]), 1)
        }
        enemy[i].draw(ctx);
    }
}

function checkBulletHitEnemy() {
    for (let i = 0; i < bullet.length; i++) {
        for (let j = 0; j < enemy.length; j++) {
            if (bullet[i].status === true && enemy[j].status === true) {
                if (((bullet[i].y >= enemy[j].y - 72) && (bullet[i].y <= enemy[j].y + 72)) && ((bullet[i].x >= enemy[j].x - 42) && (bullet[i].x <= enemy[j].x - 40))) {
                    bullet[i].status = false;
                    enemy[j].status = false;
                    susu.score++;
                } else if (((bullet[i].y >= enemy[j].y + 30) && (bullet[i].y <= enemy[j].y + 73)) && ((bullet[i].x >= enemy[j].x - 41) && (bullet[i].x <= enemy[j].x + 77))) {
                    bullet[i].status = false;
                    enemy[j].status = false;
                    susu.score++;
                }else if (((bullet[i].y >= enemy[j].y - 72) && (bullet[i].y <= enemy[j].y + 72)) && ((bullet[i].x >= enemy[j].x +75) && (bullet[i].x <= enemy[j].x +79))){
                    bullet[i].status = false;
                    enemy[j].status = false;
                    susu.score++;
                }
            }
        }
    }
}
function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#dddb00";
    ctx.fillText("Score: " + susu.score, 8, 20);
}
function play() {
    susu.move();
    susu.draw(ctx);
    drawBullet();
    drawEnemy();
    drawScore();
    checkBulletHitEnemy();

    requestAnimationFrame(play);
}

let ctx;
let susu;
let bullet;
var enemy;
start();
play();
setInterval(shoot, 500)
setInterval(createEnemy, 1000)
setInterval(changeSpeedEnemy, 1500)
