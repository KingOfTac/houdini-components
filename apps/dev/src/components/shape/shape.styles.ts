import { shapeTokens as tokens } from './shape.tokens';
import { css } from '@microsoft/fast-element';
import { display } from '@microsoft/fast-foundation';

export const shapeStyles = css`
	${display('inline-block')} :host {
		${tokens.color};
		${tokens.sides};
		${tokens.rotation};
		${tokens.radius};
		${tokens.rounded};
		${tokens.scale};
		${tokens.shadow};
		${tokens.moveto};

		background-image: paint(polygon);
		padding: calc(var(--polygon-scale) * 1px);
		transform: translate(var(--polygon-moveto));
	}
`;