import { Component } from '@angular/core';
import { GenericModuleViewComponent } from '../common/generic-module-view.component';

@Component({
  selector: 'app-contratante-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  template: `<app-generic-module-view title="Contratante" moduleName="Contratos" />`
})
export class ContratanteComponent {}

@Component({
  selector: 'app-entidades-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  template: `<app-generic-module-view title="Entidades" moduleName="Contratos" />`
})
export class EntidadesComponent {}

@Component({
  selector: 'app-tablas-basicas-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  template: `<app-generic-module-view title="Tablas Básicas" moduleName="Contratos" />`
})
export class TablasBasicasComponent {}

@Component({
  selector: 'app-tarifas-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  template: `<app-generic-module-view title="Tarifas" moduleName="Contratos" />`
})
export class TarifasComponent {}

@Component({
  selector: 'app-destinos-paquetes-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  template: `<app-generic-module-view title="Configuración Destinos y Paquetes" moduleName="Contratos" />`
})
export class DestinosPaquetesComponent {}

@Component({
  selector: 'app-proximo-vencer-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  template: `<app-generic-module-view title="Contratos Próximos a Vencer" moduleName="Contratos" />`
})
export class ProximoVencerComponent {}
