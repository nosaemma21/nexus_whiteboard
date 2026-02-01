export enum ElementType{
   RECTANGLE = "rect",
   CIRCLE = "circle",
   PATH = "path",
   TEXT = "i-text"
}

//to match fabric JS
export interface ICanvasElement{
   id: string;
   type: ElementType;
   x: number;
   y: number;
   width?: number;
   height?: number;
   fill?: string;
   stroke?: string;
   points?: number[]
   text?: string;
   zIndex: number;
}