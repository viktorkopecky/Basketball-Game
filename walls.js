class StaticWall {
    /**
     * @param {number} x - střed X
     * @param {number} y - střed Y
     * @param {number} w - šířka
     * @param {number} h - výška
     * @param {string|p5.Color} wallColor
     */
    constructor(x, y, w, h, wallColor = color(204, 102, 0)) {
        this.sprite = new Sprite(x, y, w, h, 'static');
        this.sprite.color = wallColor;
        this.sprite.stroke = color(33, 47, 61);
        this.sprite.strokeWeight = 2;
        this.width = w;
        this.height = h;
    }
}