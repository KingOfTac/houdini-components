export function createProperties(prefix:string, props:any[]) {
	props.map(prop => {
		prop.variable = `--${prefix}-${prop.name}`;
		switch(prop.type) {
			case 'number':
				prop.value = (exp:any) => parseInt(exp);
				break;
			case 'string':
				prop.value = (exp:any) => exp.toString().trim();
				break;
			case 'boolean':
				prop.value = (exp:any) => (JSON.parse(exp) as boolean);
				break;
			case 'object':
				prop.value = (exp:any) => JSON.parse(exp);
				break;
		}
	});

	return Object.defineProperties({}, {
		propsMap: {
			value: props
		},
		values: {
			get: function() {
				const arr:any[] = [];
				this.propsMap.forEach((prop:any) => arr.push(prop.value));
				return arr;
			}
		},
		variableStrings: {
			get: function() {
				const arr:any[] = [];
				this.propsMap.forEach((prop:any) => arr.push(prop.variable));
				return arr;
			}
		}
	});
};