import { LuaArray, LuaObj } from "@wowts/lua";
import { UIAnchor, UIFrame, UIPosition, UIRegion } from "@wowts/wow-mock";
export declare type Widgeted<T> = UIFrame & {
    obj?: T;
};
export interface AceLayout {
}
export declare type LayoutFunc = (content: AceGUIWidgetBase, children: LuaArray<AceGUIWidgetBase>) => void;
export declare class AceGUIWidgetBase {
    private fullHeight;
    private fullWidth;
    private userData;
    SetParent(parent: AceGUIWidgetBase): void;
    SetCallback(name: string, func: (widget: AceGUIWidgetBase) => void): void;
    Fire(name: string, ...args: any[]): void;
    SetWidth(width: number): void;
    SetRelativeWidth(width: number): void;
    SetHeight(height: number): void;
    IsVisible(): boolean;
    IsShown(): boolean;
    Release(): void;
    SetPoint(anchor: UIPosition, reference: UIFrame, refAnchor: UIPosition, x: number, y: number): void;
    ClearAllPoints(): void;
    GetNumPoints(): number;
    GetPoint(index: number): [UIAnchor, UIRegion | undefined, UIAnchor, number, number];
    GetUserDataTable(): LuaObj<string>;
    SetUserData<T>(key: string, value: T): void;
    GetUserData<T>(key: string): T;
    IsFullHeight(): boolean;
    SetFullHeight(isFull: boolean): void;
    IsFullWidth(): boolean;
    SetFullWidth(isFull: boolean): void;
}
export declare class AceGUIWidgetContainerBase extends AceGUIWidgetBase {
    frame: Widgeted<AceGUIWidgetContainerBase>;
    content: Widgeted<AceGUIWidgetContainerBase>;
    PauseLayout(): void;
    ResumeLayout(): void;
    PerformLayout(): void;
    DoLayout(): void;
    AddChild(child: AceGUIWidgetBase, beforeWidget?: AceGUIWidgetBase): void;
    AddChildren(...children: AceGUIWidgetBase[]): void;
    ReleaseChildren(): void;
    SetLayout(layout: AceLayout): void;
}
export interface AceGUIWidgetCheckBox extends AceGUIWidgetBase {
    SetDisabled(disabled: boolean): void;
    SetValue(value: boolean): void;
    GetValue(): boolean;
    SetTriState(type: "radio" | "checkbox"): void;
    ToggleChecked(): void;
    SetLabel(label: string): void;
    SetDescrption(desc: string): void;
    SetImage(path: string, ...coords: number[]): void;
}
export declare type AceGUIWidgetDropDownItemType = "Dropdown-Item-Toggle" | "Dropdown-Item-Header" | "Dropdown-Item-Execute" | "Dropdown-Item-Menu" | "Dropdown-Item-Separator";
export interface AceGUIWidgetDropDown extends AceGUIWidgetBase {
    SetDisabled(disabled: boolean): void;
    ClearFocus(): void;
    SetText(text: string): void;
    SetLabel(text: string): void;
    SetValue<T>(value: T): void;
    GetValue<T>(): T;
    SetItemValue<T>(item: string, value: T): void;
    SetItemDisabled(item: string, disabled: boolean): void;
    SetList<T>(list: LuaObj<T>, order?: LuaArray<string>, itemType?: AceGUIWidgetDropDownItemType): void;
    AddItem<T>(value: T, text: string, itemType?: AceGUIWidgetDropDownItemType): void;
    SetMultiselect(multi: boolean): void;
    GetMultiselect(): boolean;
}
export declare class AceGUI {
    WidgetBase: typeof AceGUIWidgetBase;
    WidgetContainerBase: typeof AceGUIWidgetContainerBase;
    private layouts;
    Create(name: "CheckBox"): AceGUIWidgetCheckBox;
    Create(name: "Dropdown"): AceGUIWidgetDropDown;
    Release(widget: AceGUIWidgetBase): void;
    SetFocus(widget: AceGUIWidgetBase): void;
    ClearFocus(): void;
    RegisterAsContainer<T extends {
        content: UIFrame;
        frame: UIFrame;
    }>(container: new () => T): new () => Widgeted<T & AceGUIWidgetContainerBase>;
    RegisterAsWidget<T extends {
        frame: UIFrame;
    }>(widget: new () => T): new () => Widgeted<T & AceGUIWidgetBase>;
    RegisterWidgetType<T>(name: string, widget: AceGUIWidgetBase, version: number): void;
    RegisterLayout(name: string, layoutFunc: LayoutFunc): void;
    GetLayout(name: string): LayoutFunc;
    GetNextWidgetNum(type: string): number;
    GetWidgetCount(type: string): number;
    GetWidgetVersion(type: string): string;
}
declare const lib: AceGUI;
export default lib;
