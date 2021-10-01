class BulletBoss {
    x;
    y;
    width;
    height;
    img;
    speedX;
    speedY;
    status;

    constructor(x, y, width, height, img, speedY,speedX) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.speedY = speedY;
        this.status = true;
        this.speedX = speedX;
    }

    draw(ctx) {
        if (this.status) {
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
    }

    move() {
        this.y += this.speedY;
        this.x += this.speedX;
    }
}