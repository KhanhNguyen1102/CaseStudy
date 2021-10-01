class Plane {
    width;
    height;
    x;
    y;
    speedX;
    speedY;
    img;
    score;
    live;

    constructor(width, height, x, y, speedX, speedY, img) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.img = img;
        this.defaultSpeedX = speedX;
        this.defaultSpeedY = speedY;
        this.score = 0;
        this.live =3 ;
    }

    draw(ctx) {
        ctx.beginPath();
        let img = new Image();
        let width = this.width;
        let height = this.height;
        let x = this.x;
        let y = this.y;
        img.onload = function () {
            ctx.clearRect(0, 0, 1500, 700)
            ctx.drawImage(img, x, y, width, height);
        }
        img.src = this.img;
        ctx.closePath()
    }

    moveTop() {
        let y = this.y
        if (y > 60) {
            this.speedY = this.defaultSpeedY;
            this.y -= this.speedY;
            this.speedX = 0
            this.x += this.speedX;
        }
    }

    moveBot() {
        let y = this.y;
        let height = this.height;
        if (y < 700 - height) {
            this.speedY = this.defaultSpeedY;
            this.y += this.speedY;
            this.speedX = 0
            this.x += this.speedX;
        }
    }

    moveRight() {
        let x = this.x
        let width = this.width
        if (x < 1500 - width) {
            this.speedX = this.defaultSpeedX;
            this.x += this.speedX;
            this.speedY = 0;
            this.y += this.speedY
        }
    }

    moveLeft() {
        let x = this.x
        if (x > 0) {
            this.speedX = this.defaultSpeedX;
            this.x -= this.speedX;
            this.speedY = 0;
            this.y += this.speedY
        }
    }

    move() {
        switch (this.orientation) {
            case 'left':
                this.moveLeft();
                break;
            case 'right':
                this.moveRight();
                break;
            case 'top':
                this.moveTop();
                break;
            case 'bot':
                this.moveBot();
                break;
        }
    }

    fire() {
        let bullet1 = new Bullet(susu.x + susu.width / 2 - 18, susu.y - 49, 41, 49, "bullet1.png", 4)
        bullet.push(bullet1);
    }
}
