class Player {  // vars for building player
    constructor(x, y, w, h, c, xSpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.xSpeed = xSpeed;
    }

    draw() {  // draws player using canvas' colorRect
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);

    }

    move() { // moves player if left or right arrow keys are pressed 
        if (rightKeyPressed && this.x < canvas.width - this.w) {
            this.x += this.xSpeed;
        }
        if (leftKeyPressed && this.x > 0) {
            this.x -= this.xSpeed;
        }


    }
    startPos() { // starts player in the centre of the canvas
        this.x = canvas.width / 2 - this.w / 2;
        this.y = canvas.height - 50;
        startingPos = false;

    }

    hasHitEnemy(item) {  // detects if player has been hit by enemy of bullet
        return ((this.x + this.w) >= item.x &&
                this.x <= (item.x + item.w)) //xcollision
            &&
            (this.y >= item.y &&
                this.y <= (item.y + item.h)); //ycollision
    }

    hasHitPlayer(playerShip) {
        return this.hasHitItem(ebullets);

    }
    hasCollided() { //collided code
        var self = this;
        var collided = false;

        ebullets.forEach(function (ebullets, i) {
            if (self.hasHitEnemy(ebullets)) {
                collided = true;
            }
        });
        return collided;

    }
}

