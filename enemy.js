class Enemy {
    width;
    height;
    x;
    y;
    speedX;
    speedY;
    img;
    status;
    countEnemyBoom;
    constructor(width, height, x, y, img) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.img = img;
        this.speedX = 0;
        this.speedY = 2;
        this.status = 1;
        this.countEnemyBoom = 0;
    }

    draw(ctx) {

        if (this.status === 1) {
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
        } else if (this.status === 2) {
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
            this.countEnemyBoom++;
            if(this.countEnemyBoom ===10){
                this.status = 3;
            }
        }

    }

    move() {
        if (this.x > 1500 - this.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        this.x += this.speedX;
        this.y += this.speedY;
    }
}