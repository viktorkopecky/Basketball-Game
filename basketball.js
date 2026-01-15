class Basketball {
    constructor() {
        this.x = 100;
        this.y = 100;
        this.radius = 20;
        this.color = 'orange';
    }

    update() {
        //
    }

    display() {
        fill(this.color);
        ellipse(this.x, this.y, this.radius * 2);
    }
}