class Bullet{
    x;
    y;
    width;
    height;
    img;
    speed;

    constructor(x, y, width, height, img,speed) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.img = img;
        this.speed =speed;
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
    move(){
        this.y-=this.speed;
    }
}