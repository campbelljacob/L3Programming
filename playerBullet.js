class playerB {  // players bullet
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
    }
    draw() {
        canvasContext.fillStyle = this.c;  //draws players bullet using canvas' colorRect
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {  // moves bullet up the canvas
        this.y -= this.ySpeed;
    }

    outOfBounds() {  // returns bullet if out of bounds
        return this.y < 0;
    }

    hasHitItem(item) {  // detects if bullet has hit an enemy
        return ((this.x + this.w) >= item.x &&
                this.x <= (item.x + item.w)) &&
            (this.y + this.h >= item.y &&
                this.y <= (item.y + item.h));

    }

    hasHitEnemy(enemy) {
        return this.hasHitItem(enemy);
    }

    hasCollided() {
        var self = this;
        var collided = false;

        enemies.forEach(function (enemy, i) {
            if (self.hasHitEnemy(enemy)) {
                delete enemies[i];
                collided = true;
                score += 1;
                console.log(score);
            }
        });

        enemies = enemies.filter(item => item !== undefined);  // deletes specific enemy that was hit as well as bullet 
        return collided;
    }
}

