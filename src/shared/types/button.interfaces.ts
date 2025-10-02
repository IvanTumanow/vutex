export interface IButton {
    type: "submit" | "reset" | "button"
    children: any
    active?: boolean
}