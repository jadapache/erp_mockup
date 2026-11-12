import { Component, input, output } from '@angular/core';
import { NgComponentOutlet } from '@angular/common';
import { CdkDrag, CdkDragEnd } from '@angular/cdk/drag-drop';
import { MdiWindow } from '../../models/mdi-window.model';

@Component({
  selector: 'app-mdi-window',
  standalone: true,
  imports: [NgComponentOutlet, CdkDrag],
  templateUrl: './mdi-window.component.html',
  styleUrl: './mdi-window.component.css',
  host: {
    '[class.is-maximized]': 'window().maximized'
  }
})
export class MdiWindowComponent {
  window = input.required<MdiWindow>();

  activate = output<string>();
  close = output<string>();
  minimize = output<string>();
  maximize = output<string>();
  move = output<{ id: string; x: number; y: number }>();
  resize = output<{ id: string; width: number; height: number }>();

  onDragEnded(event: CdkDragEnd): void {
    const position = event.source.getFreeDragPosition();
    this.move.emit({
      id: this.window().id,
      x: Math.max(0, position.x),
      y: Math.max(0, position.y)
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
