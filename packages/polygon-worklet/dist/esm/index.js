import { createProperties } from '@kingoftac/worklet-utilities';
import { drawPolygon } from './polygon/polygon';
import { drawRoundedPolygon } from './polygon/rounded-polygon';
const prefix = 'polygon';
const props = createProperties(prefix, [
    { name: 'color', type: 'string' },
    { name: 'sides', type: 'number' },
    { name: 'rotation', type: 'number' },
    { name: 'radius', type: 'number' },
    { name: 'rounded', type: 'boolean' }
]);
class PolygonPainter {
    static get inputProperties() {
        return props.variableStrings;
    }
    paint(context, geometry, properties) {
        const config = {};
        props.propsMap.forEach((prop) => config[prop.name] = prop.value(properties.get(prop.variable)));
        const radius = Math.min(geometry.width, geometry.height) / 2;
        const center = {
            x: geometry.width / 2,
            y: geometry.height / 2
        };
        context.translate(geometry.width / 2, geometry.height / 2);
        context.rotate(config.rotation * Math.PI / 180);
        context.translate(-geometry.width / 2, -geometry.height / 2);
        context.beginPath();
        let x = center.x + radius * Math.cos(2 * Math.PI * 0 / config.sides);
        let y = center.y + radius * Math.sin(2 * Math.PI * 0 / config.sides);
        context.moveTo(x, y);
        const points = [];
        for (let i = 1; i <= config.sides; ++i) {
            x = center.x + radius * Math.cos(2 * Math.PI * i / config.sides);
            y = center.y + radius * Math.sin(2 * Math.PI * i / config.sides);
            points.push({ x, y, radius: 0 });
        }
        if (config.rounded) {
            drawRoundedPolygon(context, points, config.radius);
        }
        else {
            drawPolygon(context, center, config.sides, radius);
        }
        context.closePath();
        context.fillStyle = config.color;
        context.fill();
    }
}
// @ts-ignore
registerPaint('polygon', PolygonPainter);
