class Boss{
    width;
    height;
    x;
    y;
    speedX;
    speedY;
    img;
    status;

    constructor(width, height, x, y, img) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.img = img;
        this.speedX = 3;
        this.status= true;
    }

    draw(ctx) {
        if(this.status && susu.score > 5) {
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
        if (this.x > 1500 - this.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        this.x+=this.speedX;
    }
}