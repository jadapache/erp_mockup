import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-condiciones-tarifa',
  standalone: true,
  templateUrl: './condiciones-tarifa.component.html',
  styleUrls: ['./condiciones-tarifa.component.css']
})
export class CondicionesTarifaComponent {
  readonly showModal = signal(false);
  readonly selectedContract = signal('');

  readonly contracts = [
    { code: 'C-9000', name: 'TERCERO CONTRATO PRUEBA', desc: 'Contrato habilitado y activo sobre la tarifa 9003 (HU-CON-009)' },
    { code: 'C-9001', name: 'TERCERO CONTRATO PRUEBA', desc: 'Contrato habilitado y activo sobre la tarifa 9001 (HU-CON-009)' },
    { code: 'C-9002', name: 'TERCERO CONTRATO PRUEBA', desc: 'Contrato habilitado y activo sobre la tarifa 9003 (HU-CON-009)' },
    { code: 'CV-9101', name: 'CONTRATANTE PRUEBA EPS · A', desc: 'vence en 15 días (entra por fecha)' },
  ];

  openContractModal(): void {
    this.showModal.set(true);
  }

  closeContractModal(): void {
    this.showModal.set(false);
  }

  selectContract(name: string): void {
    this.selectedContract.set(name);
    this.closeContractModal();
  }
}
