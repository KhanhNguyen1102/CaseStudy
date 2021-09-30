function start() {
    susu = new Plane(112, 61, 600, 600, 4, 4, "planeSuper1.png", "top")
    bullet = [];
    enemy = [];
    boss = new Boss(228, 215, 650, 0, "boss1.png")
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
    if (susu.score < 7) {
        let enemy1 = new Enemy(77, 72, Math.random() * 1300, 0, "enemy1.png");
        enemy.push(enemy1);
    }

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
    if (enemy.length > 1) {
        for (let i = 0; i < enemy.length; i++) {
            enemy[i].move();
            if (enemy[i].y > 700 - enemy[i].height) {
                enemy.splice(enemy.indexOf(enemy[i]), 1)
            }
            enemy[i].draw(ctx);
            console.log(enemy)
        }
    }
}

function checkBulletHitEnemy() {
    for (let i = 0; i < bullet.length; i++) {
        for (let j = 0; j < enemy.length; j++) {
            if (bullet[i].status && enemy[j].status === 1) {
                if (((bullet[i].y >= enemy[j].y - 72) && (bullet[i].y <= enemy[j].y + 72)) && ((bullet[i].x >= enemy[j].x - 42) && (bullet[i].x <= enemy[j].x - 40))) {
                    bullet[i].status = false;
                    enemy[j].status = 2
                    enemy[j].img = "boomEnemy1.png"
                    susu.score++;
                } else if (((bullet[i].y >= enemy[j].y + 30) && (bullet[i].y <= enemy[j].y + 73)) && ((bullet[i].x >= enemy[j].x - 41) && (bullet[i].x <= enemy[j].x + 77))) {
                    bullet[i].status = false;
                    enemy[j].status = 2
                    enemy[j].img = "boomEnemy1.png"
                    susu.score++;
                } else if (((bullet[i].y >= enemy[j].y - 72) && (bullet[i].y <= enemy[j].y + 72)) && ((bullet[i].x >= enemy[j].x + 75) && (bullet[i].x <= enemy[j].x + 79))) {
                    bullet[i].status = false;
                    enemy[j].status = 2
                    enemy[j].img = "boomEnemy1.png"
                    susu.score++;
                }
            }
        }
    }
}
function checkPlaneHitEnemy(){
    for (let i = 0; i < enemy.length; i++) {
        if (enemy[i].status ===1){
            if((susu.x >= enemy[i].x-112) && (susu.x <= enemy[i].x + 77) && (susu.y>=enemy[i].y - 61) &&(susu.y<=enemy[i].y)){
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            }else if ((susu.x >= enemy[i].x-112) && (susu.x <= enemy[i].x ) && (susu.y>=enemy[i].y - 61) &&(susu.y<=enemy[i].y +72)){
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            }else if ((susu.x >= enemy[i].x-112) && (susu.x <= enemy[i].x + 77 ) && (susu.y>=enemy[i].y) &&(susu.y<=enemy[i].y +72)){
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            }else if ((susu.x >= enemy[i].x) && (susu.x <= enemy[i].x + 77 ) && (susu.y>=enemy[i].y - 61) &&(susu.y<=enemy[i].y +72)){
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            }
        }
    }
}
function checkPlaneHitBoss(){
    if (boss.status){}
}
function drawScore() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#dddb00";
    ctx.fillText("Score: " + susu.score, 8, 20);
}

function drawLives() {
    ctx.font = "25px Arial";
    ctx.fillStyle = "#b8dd00";
    ctx.fillText("Lives: " + susu.live, 1400, 20);
}

function play() {
    susu.move();
    boss.move();
    susu.draw(ctx);
    drawBullet();
    drawEnemy();
    drawScore();
    drawLives()
    boss.draw(ctx);
    checkBulletHitEnemy();
    checkPlaneHitEnemy()
    requestAnimationFrame(play);
}

let ctx;
let susu;
let bullet;
var enemy;
let boss;

start();
play();
setInterval(shoot, 500)
setInterval(createEnemy, 1000)
setInterval(changeSpeedEnemy, 1500)
