export declare enum ElementType {
    RECTANGLE = "rect",
    CIRCLE = "circle",
    PATH = "path",
    TEXT = "i-text"
}
export interface ICanvasElement {
    id: string;
    type: ElementType;
    x: number;
    y: number;
    width?: number;
    height?: number;
    fill?: string;
    stroke?: string;
    points?: number[];
    text?: string;
    zIndex: number;
}
//# sourceMappingURL=canvas.d.ts.map