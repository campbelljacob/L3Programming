class invaderB { //invaders bullets
    constructor(x, y, w, h, c, ySpeed) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.c = c;
        this.ySpeed = ySpeed;
    }
    draw() {
        canvasContext.fillStyle = this.c; //draws enemy bullets using canvas' colorRect
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move() {
        this.y += this.ySpeed; // moves bullet down the canvas

    }

    outOfBounds() { // returns bullet if its out of bounds
        return this.y > canvas.height;
    }
    
}