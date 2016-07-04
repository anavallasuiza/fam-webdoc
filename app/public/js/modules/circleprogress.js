'use strict';

class Circle {
    constructor($element, radius = 100, barWidth = 20, initial = 0, bgColor = 'rgba(255,255,255,0.2)', barColor = 'rgba(255,255,255,1)') {
        this.$element = $element;
        this.radius = radius;
        this.barWidth = barWidth;
        this.initial = initial;
        this.bgColor = bgColor;
        this.barColor = barColor;
        this.radius = (this.radius - this.barWidth) / 2;

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.canvas.height = this.radius;

        this.ctx = this.canvas.getContext('2d');

        this.ctx.translate(this.radius / 2, this.radius / 2);
        this.ctx.rotate(-1 * Math.PI / 2);

        this.$element.append(this.canvas);

        this.initial && this.update(this.initial);
    }

    update(percent) {
        this.clear();
        this.drawCircle(1, this.bgColor);
        this.drawCircle(percent, this.barColor);
    }

    drawCircle(percent, color) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.radius, 0, (2 * Math.PI) * percent, false);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = this.barWidth;
        this.ctx.stroke();
    }

    clear() {
        this.ctx.save();
        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.restore();
    }
}

module.exports = Circle;
