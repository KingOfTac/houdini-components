import { __awaiter } from "tslib";
/**
 * Layout Worklet Definitions
 *
 * @remarks
*/
export var ChildDisplayType;
(function (ChildDisplayType) {
    ChildDisplayType["block"] = "block";
    ChildDisplayType["normal"] = "normal";
})(ChildDisplayType || (ChildDisplayType = {}));
export var LayoutSizingMode;
(function (LayoutSizingMode) {
    LayoutSizingMode["blockLike"] = "block-like";
    LayoutSizingMode["manual"] = "manual";
})(LayoutSizingMode || (LayoutSizingMode = {}));
export var BlockFragmentationType;
(function (BlockFragmentationType) {
    BlockFragmentationType["none"] = "none";
    BlockFragmentationType["page"] = "page";
    BlockFragmentationType["column"] = "column";
    BlockFragmentationType["region"] = "region";
})(BlockFragmentationType || (BlockFragmentationType = {}));
export var BreakType;
(function (BreakType) {
    BreakType["none"] = "none";
    BreakType["line"] = "line";
    BreakType["page"] = "page";
    BreakType["column"] = "column";
    BreakType["region"] = "region";
})(BreakType || (BreakType = {}));
export class LayoutConstraintOptions {
    constructor() {
        this.blockFragmentationType = BlockFragmentationType.none;
    }
}
export class BreakTokenOptions {
}
export class FragmentResultOptions {
}
export class IntrinsicSizesResultOptions {
}
export class LayoutDefinition {
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
