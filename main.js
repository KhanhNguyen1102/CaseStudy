function start() {
    susu = new Plane(112, 61, 600, 600, 6, 6, "planeSuper1.png", "top")
    bullet = [];
    bulletBoss = [];
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

function bossShoot() {
    if ((susu.score > 16) && (susu.score < 41)) {
        boss.fire();
    }

    if ((susu.score > 60) && (susu.score < 120)) {

        boss.fire();

    }
}

function createEnemy() {
    if (susu.score < 16 || susu.score > 39) {
        let enemy1 = new Enemy(77, 72, Math.random() * 1300, 0, "enemy1.png");
        enemy.push(enemy1);
    }

}

function changeSpeedEnemy() {
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].speedX = Math.random() * 10 - 5;
        if (susu.score > 41) {
            enemy[i].speedY = 4;
        }
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

function drawBulletBoss() {

    if (boss.status === 1 && bulletBoss.length > 3 && susu.score > 15) {
        for (let i = 0; i < bulletBoss.length; i++) {
            bulletBoss[i].move();
            if ((bulletBoss[i].x < -200) || (bulletBoss[i].x > 1700) || (bulletBoss[i].y > 900)) {
                bulletBoss.splice(bulletBoss.indexOf(bulletBoss[i]), 1)
            }
            bulletBoss[i].draw(ctx);
        }
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

function checkPlaneHitEnemy() {
    for (let i = 0; i < enemy.length; i++) {
        if (enemy[i].status === 1) {
            if ((susu.x >= enemy[i].x - 112) && (susu.x <= enemy[i].x + 77) && (susu.y >= enemy[i].y - 61) && (susu.y <= enemy[i].y)) {
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            } else if ((susu.x >= enemy[i].x - 112) && (susu.x <= enemy[i].x) && (susu.y >= enemy[i].y - 61) && (susu.y <= enemy[i].y + 72)) {
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            } else if ((susu.x >= enemy[i].x - 112) && (susu.x <= enemy[i].x + 77) && (susu.y >= enemy[i].y) && (susu.y <= enemy[i].y + 72)) {
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            } else if ((susu.x >= enemy[i].x) && (susu.x <= enemy[i].x + 77) && (susu.y >= enemy[i].y - 61) && (susu.y <= enemy[i].y + 72)) {
                enemy[i].status = 2
                enemy[i].img = "boomEnemy1.png"
                susu.live--;
            }
        }
    }
}

function checkPlaneHitBoss() {
    if (boss.status) {
        if ((susu.x >= boss.x - 112) && (susu.x <= boss.x + 228) && (susu.y >= 0) && (susu.y <= boss.y + 215)) {
            susu.live--;
        }
    }
}

function checkBulletHitBoss() {
    for (let i = 0; i < bullet.length; i++) {
        if (bullet[i].status && (boss.status === 1) && (boss.health > 0) && (susu.score > 15)) {
            if ((bullet[i].x >= boss.x - 41) && (bullet[i].x <= boss.x + 228) && (bullet[i].y > boss.y) && (bullet[i].y <= boss.y + 215)) {
                boss.health--;
                bullet[i].status = false;
            }
            if (boss.health === 0 && boss.status === 1) {
                boss.img = "boom1.png";
                boss.status = 2;
                susu.score += 25;
            }
        }
    }
}

function checkBulletHitPlane() {
    for (let i = 0; i < bulletBoss.length; i++) {
        if ((bulletBoss[i].x >= susu.x - 45) && (bulletBoss[i].x <= susu.x + 112) && (bulletBoss[i].y >= susu.y - 45) && (bulletBoss[i].y <= susu.y + 61)) {
            if (bulletBoss[i].status) {
                susu.live--;
            }
            bulletBoss[i].status = false;
        }
    }
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

function checkEnd() {
    if (susu.live === 0) {
        function a() {
            alert("Game Over")
            location.reload()
        }

        setTimeout(a, 100)
        start();
    }
}
function checkWin(){
    if (boss.status===3 && susu.score>60){
        function a() {
            alert("You Winnnnn!")
            location.reload()
        }

        setTimeout(a, 1)
        start()
    }
}

function drawHealthBoss() {
    if ((susu.score >15)||(susu.score >60)){
    ctx.font = "25px Arial";
    ctx.fillStyle = "#b8dd00";
    ctx.fillText("Boss's health: " + boss.health, 0, 50);
    }
}

function drawBoss() {
    if (susu.score === 60) {
        boss.status = 1;
        boss.health = 20;
        boss.img = "boss1.png";
        susu.score++;
        bulletBoss = [];
    }
    boss.draw(ctx);
}

function play() {
    susu.move();
    boss.move();
    susu.draw(ctx);
    drawBoss();
    drawBullet();
    drawEnemy();
    drawScore();
    drawLives();
    drawHealthBoss();
    drawBulletBoss();
    checkBulletHitEnemy();
    checkPlaneHitEnemy();
    checkPlaneHitBoss();
    checkBulletHitBoss();
    checkBulletHitPlane();
    checkEnd();
    checkWin();
    requestAnimationFrame(play);
}

let ctx;
let susu;
let bullet;
var enemy;
var boss;
let bulletBoss;

start();
play();
setInterval(shoot, 500)
setInterval(createEnemy, 500)
setInterval(changeSpeedEnemy, 1500)
setInterval(bossShoot, 1100)