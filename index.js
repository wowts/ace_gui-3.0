"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AceGUIWidgetBase {
    SetParent(parent) { }
    SetCallback(name, func) { }
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
class AceGUI {
    constructor() {
        this.WidgetBase = AceGUIWidgetBase;
        this.WidgetContainerBase = AceGUIWidgetContainerBase;
        this.layouts = {};
    }
    Create(name) {
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
