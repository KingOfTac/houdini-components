import seedrandom from 'seedrandom';

let prng = seedrandom();
function seedPRNG(seed) {
	prng = seedrandom(seed);
}

export function random(i: any, k: any, l?: any) {
	const isArray = Array.isArray(arguments[0]);

	if (isArray) {
		const targetArray = arguments[0];

		return targetArray[random(0, targetArray.length - 1, true)];
	} else {
		const min = arguments[0];
		const max = arguments[1];
		const clamp = arguments[2] || false;

		const val = prng() * (max - min) + min;
		return clamp ? Math.round(val) : val;
	}
}

export function randomBias(min, max, bias, influence = 0.5) {
	const base = random(min, max);
	const mix = random(0, 1) * influence;

	return base * (1 - mix) + bias * mix;
}

export function randomSnap(min, max, snapInc) {
	return Math.round(random(min, max) / snapInc) * snapInc;
}

type BoundingRect = {
	width: number;
	height: number;
	x: number;
	y: number;
}

export class Quadtree {
	private objects: BoundingRect[] = [];
	private nodes: Quadtree[] = [];

	constructor(
		public bounds: BoundingRect,
		public maxObjects: number = 10,
		public maxLevels: number = 4,
		public level: number = 0
	) { }

	split() {
		const nextLevel = this.level + 1,
		subWidth = this.bounds.width / 2,
		subHeight = this.bounds.height / 2,
		x = this.bounds.x,
		y = this.bounds.y;

		this.nodes[0] = new Quadtree({
			x: x + subWidth,
			y: y,
			width: subWidth,
			height: subHeight
		}, this.maxObjects, this.maxLevels, nextLevel);

		this.nodes[1] = new Quadtree({
			x: x,
			y: y,
			width: subWidth,
			height: subHeight
		}, this.maxObjects, this.maxLevels, nextLevel);

		this.nodes[2] = new Quadtree({
			x: x,
			y: y + subHeight,
			width: subWidth,
			height: subHeight
		}, this.maxObjects, this.maxLevels, nextLevel);

		this.nodes[3] = new Quadtree({
			x: x + subWidth,
			y: y + subHeight,
			width: subWidth,
			height: subHeight
		}, this.maxObjects, this.maxLevels, nextLevel);
	}

	getIndex(pRect: BoundingRect) {
		const bounds = this.bounds;
		const indexes: number[] = [],
			yMidPoint = bounds.x + (bounds.width / 2),
			xMidPoint = bounds.y + (bounds.height / 2),
			startIsNorth = pRect.y < xMidPoint,
			startIsWest = pRect.x < yMidPoint,
			endIsEast = pRect.x + pRect.width > yMidPoint,
			endIsSouth = pRect.y + pRect.height > xMidPoint;

		if (startIsNorth && endIsEast) {
			indexes.push(0);
		}

		if (startIsWest && startIsNorth) {
			indexes.push(1);
		}

		if (startIsWest && endIsSouth) {
			indexes.push(2);
		}

		if (endIsEast && endIsSouth) {
			indexes.push(3);
		}

		return indexes;
	}

	insert(pRect: BoundingRect) {
		let indexes;

		if (this.nodes.length) {
			indexes = this.getIndex(pRect);

			for (let i = 0; i < indexes.length; i++) {
				this.nodes[indexes[i]].insert(pRect);
			}

			return;
		}

		this.objects.push(pRect);

		if (this.objects.length > this.maxObjects && this.level < this.maxLevels) {
			if (!this.nodes.length) {
				this.split();
			}

			for (let i = 0; i < this.objects.length; i++) {
				indexes = this.getIndex(this.objects[i]);
				for (let j = 0; j < indexes.length; j++) {
					this.nodes[indexes[j]].insert(this.objects[i]);
				}
			}

			this.objects = [];
		}
	}

	retrieve(pRect: BoundingRect): BoundingRect[] {
		const indexes = this.getIndex(pRect);
		let returnObjects = this.objects;

		if (this.nodes.length) {
			for (let i = 0; i < indexes.length; i++) {
				returnObjects = returnObjects.concat(this.nodes[indexes[i]].retrieve(pRect))
			}
		}

		returnObjects = returnObjects.filter((item, index) => {
			return returnObjects.indexOf(item) >= index;
		});

		return returnObjects;
	}

	clear() {
		this.objects = [];

		for (let i = 0; i < this.nodes.length; i++) {
			if (this.nodes.length) {
				this.nodes[i].clear();
			}
		}

		this.nodes = [];
	}
}