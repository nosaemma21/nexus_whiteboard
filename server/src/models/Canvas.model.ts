import mongoose, { Schema, Document } from "mongoose";

import type { ICanvasElement } from "../interfaces/canvas.js";

export interface ICanvas extends Document {
  boardId: String;
  elements: ICanvasElement;
  version: number;
}

const CanvasSchema: Schema = new Schema(
  {
    boardId: { type: String, required: true, unique: true, index: true },
    elements: { type: Schema.Types.Mixed, default: [] },
    version: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  },
);

export const Canvas = mongoose.model<ICanvas>("Canvas", CanvasSchema);
