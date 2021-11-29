/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) {
    return value instanceof P ? value : new P(function (resolve) {
      resolve(value);
    });
  }

  return new (P || (P = Promise))(function (resolve, reject) {
    function fulfilled(value) {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    }

    function rejected(value) {
      try {
        step(generator["throw"](value));
      } catch (e) {
        reject(e);
      }
    }

    function step(result) {
      result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
    }

    step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

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

const prefix = 'masonry';
createProperties(prefix, [{
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

class MasonryLayout {
  static get inputProperties() {
    return ['--padding', '--columns'];
  } // @ts-ignore


  intrinsicSizes() {
    return __awaiter(this, void 0, void 0, function* () {});
  }

  layout(children, edges, constraints, styleMap) {
    return __awaiter(this, void 0, void 0, function* () {
      const inlineSize = constraints.fixedInlineSize - edges.inline;
      const padding = parseInt(styleMap.get('--padding').toString());
      const columnValue = styleMap.get('--columns').toString();
      let columns = parseInt(columnValue);

      if (columnValue == 'auto' || !columns) {
        columns = Math.ceil(inlineSize / 350);
      }

      const childInlineSize = (inlineSize - (columns + 1) * padding) / columns;
      const childFragments = yield Promise.all(children.map(child => {
        return child.layoutNextFragment({
          fixedInlineSize: childInlineSize
        });
      }));
      let autoBlockSize = 0;
      const columnOffsets = Array(columns).fill(0);

      for (let childFragment of childFragments) {
        const min = columnOffsets.reduce((acc, val, idx) => {
          if (!acc || val < acc.val) {
            return {
              idx,
              val
            };
          }

          return acc;
        }, {
          val: +Infinity,
          idx: -1
        }); // @ts-ignore

        childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx; // @ts-ignore

        childFragment.blockOffset = padding + min.val; // @ts-ignore

        columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
        autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
      }

      return {
        autoBlockSize,
        childFragments
      };
    });
  }

} // @ts-ignore


registerLayout('masonry', MasonryLayout);
