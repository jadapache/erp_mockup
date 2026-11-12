import { Type } from '@angular/core';

export interface MdiWindow {
  id: string;
  title: string;
  component: Type<unknown>;

  x: number;
  y: number;

  width: number;
  height: number;

  zIndex: number;

  minimized: boolean;
  maximized: boolean;
  active: boolean;

  restoreGeometry?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
