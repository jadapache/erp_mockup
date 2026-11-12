import { Component, input, output, signal } from '@angular/core';
import { MenuItem } from '../../models/menu.model';

@Component({
  selector: 'app-menu-node',
  standalone: true,
  template: `
    @if (item().children && item().children!.length > 0) {
      <div class="menu-group" [class.level-0]="level() === 0" [class.is-open]="isOpen()">
        <button
          type="button"
          class="menu-group-btn"
          [class.level-0-btn]="level() === 0"
          [class.level-1-btn]="level() === 1"
          [class.level-gt1-btn]="level() > 1"
          (click)="toggleOpen()"
          [title]="item().name"
        >
          @if (level() === 0 && (item().name.toLowerCase().includes('configuraci') || item().id.toLowerCase().includes('conf'))) {
            <!-- Gear Icon for Configuration Group -->
            <svg class="node-icon gear-icon" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="12" r="3"/>
              <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
            </svg>
          } @else {
            <!-- Window Grid Icon identical to screenshot -->
            <svg class="node-icon grid-icon" viewBox="0 0 20 20" width="16" height="16" fill="currentColor">
              <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
            </svg>
          }
          <span class="node-label">{{ item().name }}</span>
          <svg class="node-chevron" [class.open]="isOpen()" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
            @if (isOpen()) {
              <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd"/>
            } @else {
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
            }
          </svg>
        </button>

        @if (isOpen()) {
          <div class="menu-children-container">
            @for (child of item().children; track child.id) {
              <app-menu-node
                [item]="child"
                [level]="level() + 1"
                (itemSelect)="itemSelect.emit($event)"
              />
            }
          </div>
        }
      </div>
    } @else {
      <!-- Leaf Menu Item -->
      <button
        type="button"
        class="leaf-item-btn"
        [style.padding-left.px]="14 + (level() * 16)"
        (click)="itemSelect.emit(item())"
        [title]="item().name"
      >
        <svg class="node-icon grid-icon" viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
          <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
        </svg>
        <span class="leaf-label">{{ item().name }}</span>
      </button>
    }
  `,
  styles: [`
    :host {
      display: block;
      width: 100%;
    }

    .menu-group {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin: 2px 0;
    }

    .menu-group.level-0.is-open {
      background: #f8fafc;
      border-radius: 8px;
    }

    .menu-group-btn {
      display: flex;
      align-items: center;
      gap: 10px;
      width: 100%;
      border: none;
      background: transparent;
      padding: 9px 12px;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      border-radius: 6px;
      transition: all 0.15s ease;
      color: #334155;
    }

    .menu-group-btn:hover {
      background: #f1f5f9;
      color: #0369a1;
    }

    /* Active open level 0 card badge effect matching screenshot */
    .menu-group.level-0.is-open > .level-0-btn {
      background: #eff6ff;
      color: #0284c7;
      font-weight: 700;
      border-radius: 8px;
    }

    .menu-group.level-0.is-open > .level-0-btn .node-icon {
      color: #0284c7;
    }

    .menu-group.level-0.is-open > .level-0-btn .node-chevron {
      color: #0284c7;
    }

    .level-1-btn {
      padding-left: 24px;
      font-size: 13px;
      font-weight: 600;
      color: #475569;
    }

    .level-gt1-btn {
      padding-left: 36px;
      font-size: 12.5px;
      color: #475569;
    }

    .node-icon {
      flex-shrink: 0;
      color: #64748b;
    }

    .node-label {
      flex: 1;
      font-size: 13.5px;
      font-weight: 600;
      white-space: normal;
      line-height: 1.35;
      word-break: break-word;
    }

    .node-chevron {
      flex-shrink: 0;
      color: #64748b;
      transition: transform 0.2s;
    }

    .menu-children-container {
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 2px;
      padding-bottom: 4px;
    }

    .leaf-item-btn {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      width: 100%;
      border: none;
      background: transparent;
      padding-top: 7px;
      padding-bottom: 7px;
      padding-right: 12px;
      cursor: pointer;
      text-align: left;
      font-family: inherit;
      border-radius: 6px;
      transition: all 0.12s ease;
      color: #475569;
    }

    .leaf-item-btn:hover {
      background: #f0fdf4;
      color: #0369a1;
      font-weight: 500;
    }

    .leaf-item-btn:hover .node-icon {
      color: #0284c7;
    }

    .leaf-label {
      font-size: 13px;
      line-height: 1.35;
      word-break: break-word;
    }
  `]
})
export class MenuNodeComponent {
  item = input.required<MenuItem>();
  level = input<number>(0);

  itemSelect = output<MenuItem>();

  isOpen = signal<boolean>(false);

  toggleOpen(): void {
    this.isOpen.update(v => !v);
  }
}
