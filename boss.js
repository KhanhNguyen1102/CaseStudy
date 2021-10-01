class Boss {
    width;
    height;
    x;
    y;
    speedX;
    speedY;
    img;
    status;
    health;
    count;

    constructor(width, height, x, y, img) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.img = img;
        this.speedX = 3;
        this.status = 1;
        this.health = 20;
        this.count = 0;
    }

    draw(ctx) {
        let check = (susu.score > 15)
        if ((this.status === 1) && check && (this.health > 0)) {
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
        } else if ((this.status === 2) && (this.health === 0)) {
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
            this.count++
            if (this.count === 10) {
                this.status = 3;
                this.count =0 ;
            }
        }
    }

    move() {
        if (this.x > 1500 - this.width || this.x < 0) {
            this.speedX = -this.speedX;
        }
        this.x += this.speedX;
    }

    fire() {
        let bullet3 = new BulletBoss(boss.x + boss.width / 2, boss.y + 215, 45, 45, "bossbullet12.png", 2, -2)
        bulletBoss.push(bullet3);
        let bullet2 = new BulletBoss(boss.x + boss.width / 2, boss.y + 215, 45, 45, "bossbullet12.png", 2, 0)
        bulletBoss.push(bullet2);
        let bullet4 = new BulletBoss(boss.x + boss.width / 2, boss.y + 215, 45, 45, "bossbullet12.png", 2, 2)
        bulletBoss.push(bullet4);
    }
}