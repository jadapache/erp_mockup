import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-citas',
  standalone: true,
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.css']
})
export class CitasComponent {
  readonly showFilters = signal(true);

  toggleFilters(): void {
    this.showFilters.update(v => !v);
  }
}
