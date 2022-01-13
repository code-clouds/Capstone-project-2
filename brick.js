class Brick {
    constructor(x, y) {
        var options = {
            isStatic: true,
            friction: 0.3,
            density: 0.8
        }

        this.brick = Bodies.rectangle(x, y, 40, 40, options);
        World.add(world, this.brick);
    }
    display() {
        var pos = this.brick.position;
        var angle = this.brick.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        fill("lightblue");
        rectMode(CENTER);
        rect(0,0,40,40);
        pop();
    }
}