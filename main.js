function start() {
    susu = new Plane(112, 61, 600, 300, 3, 3, "planeSuper1.png", "top")
    bullet =[];
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
function shoot(){
    susu.fire();
}
function createEnemy(){
    let enemy1 = new Enemy(77,72,Math.random()*1300,0,"enemy1.png");
    enemy.push(enemy1);
}
function changeSpeedEnemy(){
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].speedX = Math.random() * 10 -5;
    }
}
function play() {
    susu.move();
    susu.draw(ctx);
    for (let i = 0; i < bullet.length; i++) {
        bullet[i].move();
        if (bullet[i].y <0){
            bullet.splice(bullet.indexOf(bullet[i]),1)
        }
        bullet[i].draw(ctx);
    }
    for (let i = 0; i < enemy.length; i++) {
        enemy[i].move();
        if (enemy[i].y > 700 - enemy[i].height){
            enemy.splice(enemy.indexOf(enemy[i]),1)
        }
        enemy[i].draw(ctx);
    }
    console.log(bullet)
    requestAnimationFrame(play);
}

let ctx;
let susu;
let bullet;
var enemy;
start();
play();
setInterval(shoot,500)
setInterval(createEnemy,1000)
setInterval(changeSpeedEnemy,1500)
