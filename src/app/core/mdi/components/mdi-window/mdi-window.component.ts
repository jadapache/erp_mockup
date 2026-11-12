import { Component, input, output } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { CdkDrag, CdkDragHandle, CdkDragStart, CdkDragMove, CdkDragEnd } from '@angular/cdk/drag-drop';
import { MdiWindow } from '../../models/mdi-window.model';

export interface DragPositionPayload {
  id: string;
  x: number;
  y: number;
  width: number;
  height: number;
}

@Component({
  selector: 'app-mdi-window',
  standalone: true,
  imports: [NgComponentOutlet, CdkDrag, CdkDragHandle],
  templateUrl: './mdi-window.component.html',
  styleUrl: './mdi-window.component.css',
  host: {
    '[class.is-maximized]': 'window().maximized',
    '[class.is-docked]': '!!window().dockedPosition'
  }
})
export class MdiWindowComponent {
  window = input.required<MdiWindow>();

  activate = output<string>();
  close = output<string>();
  minimize = output<string>();
  maximize = output<string>();
  dragStarted = output<string>();
  dragMoved = output<DragPositionPayload>();
  dragEnded = output<DragPositionPayload>();
  resize = output<{ id: string; width: number; height: number }>();

  onDragStart(): void {
    this.activate.emit(this.window().id);
    this.dragStarted.emit(this.window().id);
  }

  onDragMoved(event: CdkDragMove): void {
    const pos = event.source.getFreeDragPosition();
    this.dragMoved.emit({
      id: this.window().id,
      x: pos.x,
      y: pos.y,
      width: this.window().width,
      height: this.window().height
    });
  }

  onDragEnded(event: CdkDragEnd): void {
    const pos = event.source.getFreeDragPosition();
    this.dragEnded.emit({
      id: this.window().id,
      x: pos.x,
      y: pos.y,
      width: this.window().width,
      height: this.window().height
    });
  }

  onResizeStart(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this.activate.emit(this.window().id);

    const startX = event.clientX;
    const startY = event.clientY;
    const startW = this.window().width;
    const startH = this.window().height;

    const onMouseMove = (moveEvent: MouseEvent) => {
      const nextW = Math.max(320, startW + (moveEvent.clientX - startX));
      const nextH = Math.max(220, startH + (moveEvent.clientY - startY));
      this.resize.emit({ id: this.window().id, width: nextW, height: nextH });
    };

    const onMouseUp = () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseup', onMouseUp);
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mouseup', onMouseUp);
  }
}
