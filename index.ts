import { LuaArray, LuaObj } from "@wowts/lua";
import { UIAnchor, UIFrame, UIPosition, UIRegion } from "@wowts/wow-mock";

export type Widgeted<T> = UIFrame & { obj?: T };
export interface AceLayout {
}

export type LayoutFunc = (content: AceGUIWidgetBase, children: LuaArray<AceGUIWidgetBase>) => void;

export class AceGUIWidgetBase {
    private fullHeight: boolean;
    private fullWidth: boolean;
    private userData: LuaObj<any>;
    public SetParent(parent: AceGUIWidgetBase): void {}
    public SetCallback(name: string, func: (widget: AceGUIWidgetBase) => void): void {}
    public Fire(name: string, ...args: any[]): void {}
    public SetWidth(width: number): void {}
    public SetRelativeWidth(width: number): void {}
    public SetHeight(height: number): void {}
    public IsVisible(): boolean {
        return false;
    }
    public IsShown(): boolean {
        return false;
    }
    public Release(): void {
    }
    public SetPoint(anchor: UIPosition, reference: UIFrame, refAnchor: UIPosition, x: number, y: number): void {
    }
    public ClearAllPoints(): void {
    }
    public GetNumPoints(): number {
        return 0;
    }
    public GetPoint(index: number): [UIAnchor, UIRegion | undefined, UIAnchor, number, number] {
        return ["ANCHOR_NONE", undefined, "ANCHOR_NONE", 0, 0];
    }
    public GetUserDataTable(): LuaObj<string> {
        return this.userData;
    }
    public SetUserData<T>(key: string, value: T): void {
        this.userData[key] = value;
    }
    public GetUserData<T>(key: string): T {
        return <T> this.userData[key];
    }
    public IsFullHeight(): boolean {
        return this.fullHeight;
    }
    public SetFullHeight(isFull: boolean): void {
        this.fullHeight = isFull;
    }
    public IsFullWidth(): boolean {
        return this.fullWidth;
    }
    public SetFullWidth(isFull: boolean) {
        this.fullWidth = isFull;
    }
}

export class AceGUIWidgetContainerBase extends AceGUIWidgetBase {
    public frame: Widgeted<AceGUIWidgetContainerBase>;
    public content: Widgeted<AceGUIWidgetContainerBase>;
    public PauseLayout(): void {
    }
    public ResumeLayout(): void {
    }

    public PerformLayout(): void {
    }
    public DoLayout(): void {
    }
    public AddChild(child: AceGUIWidgetBase, beforeWidget?: AceGUIWidgetBase): void {
    }
    public AddChildren(...children: AceGUIWidgetBase[]): void {
    }
    public ReleaseChildren(): void {
    }
    public SetLayout(layout: AceLayout): void {
    }
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

export type AceGUIWidgetDropDownItemType = "Dropdown-Item-Toggle" | "Dropdown-Item-Header"
    | "Dropdown-Item-Execute" | "Dropdown-Item-Menu" | "Dropdown-Item-Separator";

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

export class AceGUI {
    public WidgetBase = AceGUIWidgetBase;
    public WidgetContainerBase = AceGUIWidgetContainerBase;
    private layouts: LuaObj<LayoutFunc> = {};
    public Create(name: "CheckBox"): AceGUIWidgetCheckBox;
    public Create(name: "Dropdown"): AceGUIWidgetDropDown;
    public Create(name: string): AceGUIWidgetBase {
        return new AceGUIWidgetBase();
    }
    public Release(widget: AceGUIWidgetBase): void {}
    public SetFocus(widget: AceGUIWidgetBase): void {}
    public ClearFocus(): void {}
    public RegisterAsContainer<T extends { content: UIFrame, frame: UIFrame}>(container: new() => T): new() => Widgeted<T & AceGUIWidgetContainerBase> {
        throw Error("Not implemented");
    }
    public RegisterAsWidget<T extends { frame: UIFrame}>(widget: new() => T): new() => Widgeted<T & AceGUIWidgetBase> {
        throw Error("Not implemented");
    }
    public RegisterWidgetType(name: string, widget: AceGUIWidgetBase, version: number): void {
    }
    public RegisterLayout(name: string, layoutFunc: LayoutFunc): void {
    }
    public GetLayout(name: string): LayoutFunc {
        return this.layouts[name];
    }
    public GetNextWidgetNum(type: string): number {
        return 0;
    }
    public GetWidgetCount(type: string): number {
        return 0;
    }
    public GetWidgetVersion(type: string): string {
        return "";
    }
}

const lib = new AceGUI();
export default lib;
