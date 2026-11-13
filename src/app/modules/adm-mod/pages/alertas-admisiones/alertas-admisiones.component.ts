import { Component, signal } from '@angular/core';

interface AlertaItem {
  id: string;
  atencion: string;
  paciente: string;
  tipoAlerta: string;
  detalle: string;
  habilitado: boolean;
  nivel: 'Baja' | 'Medio' | 'Alto';
}

@Component({
  selector: 'app-alertas-admisiones',
  standalone: true,
  templateUrl: './alertas-admisiones.component.html',
  styleUrls: ['./alertas-admisiones.component.css']
})
export class AlertasAdmisionesComponent {
  readonly alerts = signal<AlertaItem[]>([
    {
      id: 'al-1',
      atencion: '2294155',
      paciente: 'Paciente 506230 Pruebas 506230',
      tipoAlerta: 'Accidente de Tránsito',
      detalle: '',
      habilitado: true,
      nivel: 'Alto'
    },
    {
      id: 'al-2',
      atencion: '2315587',
      paciente: 'Paciente 510501 Pruebas 510501',
      tipoAlerta: 'Accidente de Tránsito',
      detalle: '',
      habilitado: true,
      nivel: 'Alto'
    },
    {
      id: 'al-3',
      atencion: '2325071',
      paciente: 'Paciente 511576 Pruebas 511576',
      tipoAlerta: 'Accidente de Tránsito',
      detalle: '',
      habilitado: true,
      nivel: 'Alto'
    }
  ]);

  toggleAlert(alert: AlertaItem): void {
    alert.habilitado = !alert.habilitado;
  }
}
