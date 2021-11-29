import type { Vector, Point } from '@kingoftac/worklet-utilities';

function asVector(p:Point, pp:Point, v:Vector):void {
	v.x = pp.x - p.x,
	v.y = pp.y - p.y,
	v.len = Math.sqrt((v.x * v.x) + (v.y * v.y)),
	v.nx = v.x / v.len,
	v.ny = v.y / v.len,
	v.ang = Math.atan2(v.ny, v.nx);
};

export function drawRoundedPolygon(context:any, points:Point[], strokeRadius:number): void {
	let x,
		y,
		len = points.length,
		p1 = points[len - 1],
		p2:Point,
		p3:Point,
		v1:Vector = ({} as Vector),
		v2:Vector = ({} as Vector),
		sinA,
		sinA90,
		radDirection,
		drawDirection,
		angle,
		halfAngle, 
		cRadius, 
		lenOut, 
		radius: number = strokeRadius;

	for (let i = 0; i < len; i++) {
		p2 = points[(i) % len];
		p3 = points[(i + 1) % len];

		asVector(p2, p1, v1);
		asVector(p2, p3, v2);

		sinA = (v1.nx * v2.ny) - (v1.ny * v2.nx);
		sinA90 = (v1.nx * v2.nx) - (v1.ny * -v2.ny);
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

		x += (-v2.ny * cRadius * radDirection);
		y += (v2.nx * cRadius * radDirection);

		context.arc(
			x,
			y,
			cRadius,
			v1.ang + Math.PI / 2 * radDirection,
			v2.ang - Math.PI / 2 * radDirection,
			drawDirection
		);

		p1 = p2;
		p2 = p3;
	}

	context.closePath();
}