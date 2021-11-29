function createProperties(prefix, props) {
  props.map(prop => {
    prop.variable = `--${prefix}-${prop.name}`;

    switch (prop.type) {
      case 'number':
        prop.value = exp => parseInt(exp);

        break;

      case 'string':
        prop.value = exp => exp.toString().trim();

        break;

      case 'boolean':
        prop.value = exp => JSON.parse(exp);

        break;

      case 'object':
        prop.value = exp => JSON.parse(exp);

        break;
    }
  });
  return Object.defineProperties({}, {
    propsMap: {
      value: props
    },
    values: {
      get: function () {
        const arr = [];
        this.propsMap.forEach(prop => arr.push(prop.value));
        return arr;
      }
    },
    variableStrings: {
      get: function () {
        const arr = [];
        this.propsMap.forEach(prop => arr.push(prop.variable));
        return arr;
      }
    }
  });
}

function drawPolygon(context, center, sides, radius) {
  for (let i = 1; i <= sides; ++i) {
    let x = center.x + radius * Math.cos(2 * Math.PI * i / sides);
    let y = center.y + radius * Math.sin(2 * Math.PI * i / sides);
    context.lineTo(x, y);
  }
}

function asVector(p, pp, v) {
  v.x = pp.x - p.x, v.y = pp.y - p.y, v.len = Math.sqrt(v.x * v.x + v.y * v.y), v.nx = v.x / v.len, v.ny = v.y / v.len, v.ang = Math.atan2(v.ny, v.nx);
}
function drawRoundedPolygon(context, points, strokeRadius) {
  let x,
      y,
      len = points.length,
      p1 = points[len - 1],
      p2,
      p3,
      v1 = {},
      v2 = {},
      sinA,
      sinA90,
      radDirection,
      drawDirection,
      angle,
      halfAngle,
      cRadius,
      lenOut,
      radius = strokeRadius;

  for (let i = 0; i < len; i++) {
    p2 = points[i % len];
    p3 = points[(i + 1) % len];
    asVector(p2, p1, v1);
    asVector(p2, p3, v2);
    sinA = v1.nx * v2.ny - v1.ny * v2.nx;
    sinA90 = v1.nx * v2.nx - v1.ny * -v2.ny;
    angle = Math.asin(sinA < -1 ? -1 : sinA > 1 ? 1 : sinA);
    radDirection = 1;
    drawDirection = false;

    if (sinA90 < 0) {
      if (angle < 0) {
        angle = Math.PI + angle;
      } else {
        angle = Math.PI - angle;
        radDirection = -1;
        drawDirection = true;
      }
    } else {
      if (angle > 0) {
        radDirection = -1;
        drawDirection = true;
      }
    }

    halfAngle = angle / 2;
    lenOut = Math.abs(Math.cos(halfAngle) * radius / Math.sin(halfAngle));

    if (lenOut > Math.min(v1.len / 2, v2.len / 2)) {
      lenOut = Math.min(v1.len / 2, v2.len / 2);
      cRadius = Math.abs(lenOut * Math.sin(halfAngle) / Math.cos(halfAngle));
    } else {
      cRadius = radius;
    }

    x = p2.x + v2.nx * lenOut;
    y = p2.y + v2.ny * lenOut;
    x += -v2.ny * cRadius * radDirection;
    y += v2.nx * cRadius * radDirection;
    context.arc(x, y, cRadius, v1.ang + Math.PI / 2 * radDirection, v2.ang - Math.PI / 2 * radDirection, drawDirection);
    p1 = p2;
    p2 = p3;
  }

  context.closePath();
}

const prefix = 'polygon';
const props = createProperties(prefix, [{
  name: 'color',
  type: 'string'
}, {
  name: 'sides',
  type: 'number'
}, {
  name: 'rotation',
  type: 'number'
}, {
  name: 'radius',
  type: 'number'
}, {
  name: 'rounded',
  type: 'boolean'
}]);

class PolygonPainter {
  static get inputProperties() {
    return props.variableStrings;
  }

  paint(context, geometry, properties) {
    const config = {};
    props.propsMap.forEach(prop => config[prop.name] = prop.value(properties.get(prop.variable)));
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
      points.push({
        x,
        y,
        radius: 0
      });
    }

    if (config.rounded) {
      drawRoundedPolygon(context, points, config.radius);
    } else {
      drawPolygon(context, center, config.sides, radius);
    }

    context.closePath();
    context.fillStyle = config.color;
    context.fill();
  }

} // @ts-ignore


registerPaint('polygon', PolygonPainter);
