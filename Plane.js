class Plane {
    width;
    height;
    x;
    y;
    speedX;
    speedY;
    img;
    score;
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
        this.speedY = this.defaultSpeedY;
        this.y -= this.speedY;
        this.speedX = 0
        this.x += this.speedX;
    }

    moveBot() {
        this.speedY = this.defaultSpeedY;
        this.y += this.speedY;
        this.speedX = 0
        this.x += this.speedX;
    }

    moveRight() {
        this.speedX = this.defaultSpeedX;
        this.x += this.speedX;
        this.speedY = 0;
        this.y += this.speedY
    }

    moveLeft() {
        this.speedX = this.defaultSpeedX;
        this.x -= this.speedX;
        this.speedY = 0;
        this.y += this.speedY
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

    // check() {
    //     if ((50 <= this.x && this.x <= 300 && this.y === 150) ||
    //         (this.x === 50 && 150 <= this.y && this.y <= 300) ||
    //         (50 <= this.x && this.x <= 300 && this.y === 300) ||
    //         (this.x === 300 && 150 <= this.y && this.y <= 300)) {
    //         setTimeout(() => {
    //             alert('game over')
    //         }, 300)
    //         setTimeout(start, 300);
    //     }
    //     if ((450 <= this.x && this.x <= 550 && this.y === 450) ||
    //         (this.x === 450 && 450 <= this.y && this.y <= 550) ||
    //         (50 <= this.x && this.x <= 550 && this.y === 550) ||
    //         (this.x === 550 && 450 <= this.y && this.y <= 550)){
    //         if(cheese.isEmpty === false){
    //             jerry.score++;
    //         }
    //         cheese.isEmpty = true;
    //     }
    // }

}
