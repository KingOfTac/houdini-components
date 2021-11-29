export function createProperties(prefix, props) {
    props.map(prop => {
        prop.variable = `--${prefix}-${prop.name}`;
        switch (prop.type) {
            case 'number':
                prop.value = (exp) => parseInt(exp);
                break;
            case 'string':
                prop.value = (exp) => exp.toString().trim();
                break;
            case 'boolean':
                prop.value = (exp) => JSON.parse(exp);
                break;
            case 'object':
                prop.value = (exp) => JSON.parse(exp);
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
                this.propsMap.forEach((prop) => arr.push(prop.value));
                return arr;
            }
        },
        variableStrings: {
            get: function () {
                const arr = [];
                this.propsMap.forEach((prop) => arr.push(prop.variable));
                return arr;
            }
        }
    });
}
;
