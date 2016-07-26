'use strict';

class Circle {
    constructor($element, radius = 100, barWidth = 20, initial, bgColor = 'rgba(255,255,255,0.2)', barColor = 'rgba(255,255,255,1)') {
        this.$element = $element;
        this.radius = radius;
        this.barWidth = barWidth;
        this.initial = initial;
        this.bgColor = bgColor;
        this.barColor = barColor;
        this.adjustedRadius = (radius / 2) - (barWidth / 2);

        this.canvas = document.createElement('canvas');
        this.canvas.width = this.canvas.height = this.radius;
        this.$element.append(this.canvas);

        this.ctx = this.canvas.getContext('2d');

        this.ctx.translate(this.radius / 2, this.radius / 2);
        this.ctx.rotate(-Math.PI / 2);

        this.initial && this.update(this.initial);
    }

    update(percent) {
        this.ctx.clearRect(-this.canvas.width / 2, -this.canvas.height / 2, this.canvas.width, this.canvas.height);

        this.drawCircle(1, this.bgColor);
        this.drawCircle(percent, this.barColor);
    }

    drawCircle(percent, color) {
        percent = Math.min(Math.max(0, percent || 1), 1);
        this.ctx.beginPath();
        this.ctx.arc(0, 0, this.adjustedRadius, 0, 2 * Math.PI * percent, false);
        this.ctx.strokeStyle = color;
        this.ctx.lineWidth = this.barWidth;
        this.ctx.stroke();
    }

}

module.exports = Circle;
