import { DockOrientation, DockPosition } from '../models/mdi-window.model';

export const DOCK_DETECTION_ZONE = 24;
export const MIN_WINDOW_WIDTH = 320;
export const MIN_WINDOW_HEIGHT = 220;
export const SPLITTER_SIZE = 6;
export const MIN_VISIBLE_TITLEBAR = 80;

export interface WorkspaceRect {
  width: number;
  height: number;
}

export interface WindowRect {
  x: number;
  y: number;
  width: number;
  height: number;
}

export function clampWindowPosition(
  x: number,
  y: number,
  width: number,
  height: number,
  ws: WorkspaceRect,
  minVisible = MIN_VISIBLE_TITLEBAR
): { x: number; y: number } {
  const clampedY = Math.max(0, Math.min(ws.height - 30, y));
  const minX = -(width - minVisible);
  const maxX = ws.width - minVisible;
  const clampedX = Math.max(minX, Math.min(maxX, x));

  return { x: clampedX, y: clampedY };
}

export function detectDockCandidate(
  x: number,
  y: number,
  width: number,
  height: number,
  ws: WorkspaceRect,
  detectionZone = DOCK_DETECTION_ZONE
): DockPosition | null {
  const windowBottom = y + height;
  if (y < -30 || windowBottom > ws.height + 40) {
    return null;
  }

  const windowRight = x + width;

  const hitLeft = x >= -detectionZone && x <= detectionZone;
  const hitRight = Math.abs(ws.width - windowRight) <= detectionZone;

  if (hitLeft) return 'left';
  if (hitRight) return 'right';

  return null;
}

export function getPositionOrientation(_pos: DockPosition): DockOrientation {
  return 'horizontal';
}

export function getOppositePosition(pos: DockPosition): DockPosition {
  return pos === 'left' ? 'right' : 'left';
}

export function canAccommodateDock(
  _orientation: DockOrientation,
  ws: WorkspaceRect,
  ratio = 0.5,
  minW = MIN_WINDOW_WIDTH,
  minH = MIN_WINDOW_HEIGHT
): boolean {
  if (ws.height < minH) return false;
  const w1 = ws.width * ratio;
  const w2 = ws.width * (1 - ratio);
  return w1 >= minW && w2 >= minW;
}

export function calculateDockGeometries(
  _orientation: DockOrientation,
  firstPos: DockPosition,
  ratio: number,
  ws: WorkspaceRect,
  hasSecond: boolean
): { first: WindowRect; second?: WindowRect } {
  const clampedRatio = Math.max(0.1, Math.min(0.9, ratio));
  const wLeft = Math.round(ws.width * clampedRatio);
  const wRight = Math.max(0, ws.width - wLeft);

  if (firstPos === 'left') {
    return {
      first: { x: 0, y: 0, width: wLeft, height: ws.height },
      second: hasSecond ? { x: wLeft, y: 0, width: wRight, height: ws.height } : undefined
    };
  } else {
    return {
      first: { x: wLeft, y: 0, width: wRight, height: ws.height },
      second: hasSecond ? { x: 0, y: 0, width: wLeft, height: ws.height } : undefined
    };
  }
}

export function getPreviewRect(
  pos: DockPosition,
  ws: WorkspaceRect,
  ratio = 0.5
): WindowRect {
  if (pos === 'left') {
    return { x: 0, y: 0, width: Math.round(ws.width * ratio), height: ws.height };
  } else {
    const w = Math.round(ws.width * (1 - ratio));
    return { x: ws.width - w, y: 0, width: w, height: ws.height };
  }
}
