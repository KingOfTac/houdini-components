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
function __decorate(decorators, target, key, desc) {
  var c = arguments.length,
      r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
      d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}
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

/**
 * Layout Worklet Definitions
 *
 * @remarks
*/

var ChildDisplayType;

(function (ChildDisplayType) {
  ChildDisplayType["block"] = "block";
  ChildDisplayType["normal"] = "normal";
})(ChildDisplayType || (ChildDisplayType = {}));

var LayoutSizingMode;

(function (LayoutSizingMode) {
  LayoutSizingMode["blockLike"] = "block-like";
  LayoutSizingMode["manual"] = "manual";
})(LayoutSizingMode || (LayoutSizingMode = {}));

var BlockFragmentationType;

(function (BlockFragmentationType) {
  BlockFragmentationType["none"] = "none";
  BlockFragmentationType["page"] = "page";
  BlockFragmentationType["column"] = "column";
  BlockFragmentationType["region"] = "region";
})(BlockFragmentationType || (BlockFragmentationType = {}));

var BreakType;

(function (BreakType) {
  BreakType["none"] = "none";
  BreakType["line"] = "line";
  BreakType["page"] = "page";
  BreakType["column"] = "column";
  BreakType["region"] = "region";
})(BreakType || (BreakType = {}));
class FragmentResultOptions {}
class IntrinsicSizesResultOptions {}
class LayoutDefinition {
  layout(children, edges, constraints, styleMap) {
    return __awaiter(this, void 0, void 0, function* () {
      return new FragmentResultOptions();
    });
  }

  intrinsicSizes(children, edges, styleMap) {
    return __awaiter(this, void 0, void 0, function* () {
      return new IntrinsicSizesResultOptions();
    });
  }

}

function CSSLayout(name) {
  return function (type) {
    if (!type.prototype.layout || !type.prototype.intrinsicSizes) {
      type = LayoutDefinition;
    } // @ts-ignore


    registerLayout(name, type);
  };
}

const prefix = 'masonry';
const props = createProperties(prefix, [{
  name: 'gaps',
  type: 'number',
  default: 10
}, {
  name: 'columns',
  type: 'number',
  default: 3
}]);
/**
 * CSS Layout Worklet to produce masonry columns
 *
 * @remarks
 *
 * @alpha
 */

let MasonryLayout = class MasonryLayout {
  static get inputProperties() {
    return props.variableStrings;
  }

  static get childInputProperties() {
    return [];
  }

  intrinsicSizes() {
    return __awaiter(this, void 0, void 0, function* () {});
  }

  layout(children, edges, constraints, styleMap, breaktoken) {
    return __awaiter(this, void 0, void 0, function* () {
      const config = {};
      const inlineSize = constraints.fixedInlineSize - edges.inline;
      props.propsMap.forEach(prop => config[prop.name] = prop.value(styleMap.get(prop.variable)) || prop.default);
      console.log(config);
      const padding = config.gaps;
      let columns = config.columns; // if (columnValue == 'auto' || !columns) {
      // 	columns = Math.ceil(inlineSize / 350);
      // }

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
        });
        childFragment.inlineOffset = padding + (childInlineSize + padding) * min.idx;
        childFragment.blockOffset = padding + min.val;
        columnOffsets[min.idx] = childFragment.blockOffset + childFragment.blockSize;
        autoBlockSize = Math.max(autoBlockSize, columnOffsets[min.idx] + padding);
      }

      return {
        autoBlockSize,
        childFragments
      };
    });
  }

};
MasonryLayout.LayoutOptions = {
  childDisplay: ChildDisplayType.normal,
  sizing: LayoutSizingMode.blockLike
};
MasonryLayout = __decorate([CSSLayout('masonry')], MasonryLayout);

export { MasonryLayout };
