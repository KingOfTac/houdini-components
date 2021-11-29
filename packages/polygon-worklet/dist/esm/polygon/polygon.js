export function drawPolygon(context, center, sides, radius) {
    for (let i = 1; i <= sides; ++i) {
        let x = center.x + radius * Math.cos(2 * Math.PI * i / sides);
        let y = center.y + radius * Math.sin(2 * Math.PI * i / sides);
        context.lineTo(x, y);
    }
}
