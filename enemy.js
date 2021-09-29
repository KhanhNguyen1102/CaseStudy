class Enemy {
    width;
    height;
    x;
    y;
    speedX;
    speedY;
    img;

    constructor(width, height, x, y,img) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        // this.speedX = speedX;
        // this.speedY = speedY;
        this.img = img;
        // this.defaultSpeedX = speedX;
        // this.defaultSpeedY = speedY;
    }

    draw(ctx) {
        ctx.beginPath();
        let img = new Image();
        let width = this.width;
        let height = this.height;
        let x = this.x;
        let y = this.y;
        img.onload = function () {
            ctx.drawImage(img, x, y, width, height);
        }
        img.src = this.img;
        ctx.closePath()
    }

    // moveTop() {
    //     this.speedY = this.defaultSpeedY;
    //     this.y -= this.speedY;
    //     this.speedX = 0
    //     this.x += this.speedX;
    // }
    //
    // moveBot() {
    //     this.speedY = this.defaultSpeedY;
    //     this.y += this.speedY;
    //     this.speedX = 0
    //     this.x += this.speedX;
    // }
    //
    // moveRight() {
    //     this.speedX = this.defaultSpeedX;
    //     this.x += this.speedX;
    //     this.speedY = 0;
    //     this.y += this.speedY
    // }
    //
    // moveLeft() {
    //     this.speedX = this.defaultSpeedX;
    //     this.x -= this.speedX;
    //     this.speedY = 0;
    //     this.y += this.speedY
    // }
}