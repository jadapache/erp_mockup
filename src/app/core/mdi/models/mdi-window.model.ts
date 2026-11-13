import { Type } from '@angular/core';

export type DockPosition = 'left' | 'right';

export type DockOrientation = 'horizontal';

export interface MdiDockState {
  orientation: DockOrientation;
  firstWindowId: string;
  secondWindowId?: string;
  ratio: number;
}

export interface MdiWindow {
  id: string;
  title: string;
  component: Type<unknown>;
  formId?: string;

  x: number;
  y: number;

  width: number;
  height: number;

  zIndex: number;

  minimized: boolean;
  maximized: boolean;
  active: boolean;

  dockedPosition?: DockPosition;

  restoreGeometry?: {
    x: number;
    y: number;
    width: number;
    height: number;
  };
}
