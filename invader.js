class Enemy { //main constructer for enemies
    constructor(src, x, y, w, h, Speed) {
        this.src = src;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.Speed = Speed;
    }
    
    drawEnemy() {
        canvasContext.drawImage(this.src, this.x, this.y, this.w, this.h);
    }

    draw() { //draws enemeis using canvas' color rect
        canvasContext.fillStyle = this.c;
        canvasContext.fillRect(this.x, this.y, this.w, this.h);
    }

    move() { //simple movement
        this.x += this.Speed;
    }

    edgeHit() { //if 1 enemy hit the edge all drop down and reverses direction of movement by running drop()
        return this.x + this.w  + 2 >= canvas.width || this.x < 0;
    }

    drop() { 
        this.Speed *= -1;
        this.y += 10;
        this.x += this.Speed;

    }

    touchPlayer() { // ends game if enemy touches player
        if (this.y >= player.y - this.h)
            endgame = false;
    }

}

