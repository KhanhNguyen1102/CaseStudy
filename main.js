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
function play() {
    susu.move();
    susu.draw(ctx);
    for (let i = 0; i < bullet.length; i++) {
        bullet[i].move();
        bullet[i].draw(ctx);
    }

    requestAnimationFrame(play);
}

let ctx;
let susu;
let bullet;
let enemy;
start();
play();
setInterval(shoot,500)