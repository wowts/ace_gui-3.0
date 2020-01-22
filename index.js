"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AceGUIWidgetBase {
    constructor() {
        this.fullHeight = false;
        this.fullWidth = false;
        this.userData = {};
    }
    SetCallback(name, func) { }
    SetParent(parent) {
    }
    Fire(name, ...args) { }
    SetWidth(width) { }
    SetRelativeWidth(width) { }
    SetHeight(height) { }
    IsVisible() {
        return false;
    }
    IsShown() {
        return false;
    }
    Release() {
    }
    SetPoint(anchor, reference, refAnchor, x, y) {
    }
    ClearAllPoints() {
    }
    GetNumPoints() {
        return 0;
    }
    GetPoint(index) {
        return ["ANCHOR_NONE", undefined, "ANCHOR_NONE", 0, 0];
    }
    GetUserDataTable() {
        return this.userData;
    }
    SetUserData(key, value) {
        this.userData[key] = value;
    }
    GetUserData(key) {
        return this.userData[key];
    }
    IsFullHeight() {
        return this.fullHeight;
    }
    SetFullHeight(isFull) {
        this.fullHeight = isFull;
    }
    IsFullWidth() {
        return this.fullWidth;
    }
    SetFullWidth(isFull) {
        this.fullWidth = isFull;
    }
}
exports.AceGUIWidgetBase = AceGUIWidgetBase;
class AceGUIWidgetContainerBase extends AceGUIWidgetBase {
    constructor() {
        super();
        this.frame = {};
        this.content = {};
    }
    PauseLayout() {
    }
    ResumeLayout() {
    }
    PerformLayout() {
    }
    DoLayout() {
    }
    AddChild(child, beforeWidget) {
    }
    AddChildren(...children) {
    }
    ReleaseChildren() {
    }
    SetLayout(layout) {
    }
}
exports.AceGUIWidgetContainerBase = AceGUIWidgetContainerBase;
class Dropdown extends AceGUIWidgetBase {
    constructor() {
        super(...arguments);
        this.value = null;
        this.multi = false;
    }
    SetDisabled(disabled) {
    }
    ClearFocus() {
    }
    SetText(text) {
        throw new Error("Method not implemented.");
    }
    SetLabel(text) {
        throw new Error("Method not implemented.");
    }
    SetValue(value) {
        this.value = value;
    }
    GetValue() {
        return this.value;
    }
    SetItemValue(item, value) {
    }
    SetItemDisabled(item, disabled) {
    }
    SetList(list, order, itemType) {
    }
    AddItem(value, text, itemType) {
    }
    SetMultiselect(multi) {
        this.multi = multi;
    }
    GetMultiselect() {
        return this.multi;
    }
}
class CheckBox extends AceGUIWidgetBase {
    constructor() {
        super(...arguments);
        this.disabled = false;
        this.value = false;
        this.description = "";
        this.isFullHeight = false;
        this.isFullWidth = false;
    }
    SetDisabled(disabled) {
        this.disabled = disabled;
    }
    GetDisabled() {
        return this.disabled;
    }
    SetValue(value) {
        this.value = value;
    }
    GetValue() {
        return this.value;
    }
    SetTriState(type) {
    }
    ToggleChecked() {
        this.value = !this.value;
    }
    SetLabel(label) {
    }
    SetDescription(desc) {
        this.description = desc;
    }
    GetDescription() {
        return this.description;
    }
    SetImage(path, ...coords) {
    }
}
class AceGUI {
    constructor() {
        this.WidgetBase = AceGUIWidgetBase;
        this.WidgetContainerBase = AceGUIWidgetContainerBase;
        this.layouts = {};
    }
    Create(name) {
        if (name === "CheckBox")
            return new CheckBox();
        if (name === "Dropdown")
            return new Dropdown();
        return new AceGUIWidgetBase();
    }
    Release(widget) { }
    SetFocus(widget) { }
    ClearFocus() { }
    RegisterAsContainer(container) {
        throw Error("Not implemented");
    }
    RegisterAsWidget(widget) {
        throw Error("Not implemented");
    }
    RegisterWidgetType(name, widget, version) {
    }
    RegisterLayout(name, layoutFunc) {
    }
    GetLayout(name) {
        return this.layouts[name];
    }
    GetNextWidgetNum(type) {
        return 0;
    }
    GetWidgetCount(type) {
        return 0;
    }
    GetWidgetVersion(type) {
        return "";
    }
}
exports.AceGUI = AceGUI;
const lib = new AceGUI();
exports.default = lib;
