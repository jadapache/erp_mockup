import { Component } from '@angular/core';
import { GenericModuleViewComponent } from '../../../../shared/components/generic-module-view.component';

@Component({
  selector: 'app-contratante-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  templateUrl: './contratos-pages.component.html',
  styleUrls: ['./contratos-pages.component.css']
})
export class ContratanteComponent {
  readonly title = 'Contratante';
}

@Component({
  selector: 'app-entidades-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  templateUrl: './contratos-pages.component.html',
  styleUrls: ['./contratos-pages.component.css']
})
export class EntidadesComponent {
  readonly title = 'Entidades';
}

@Component({
  selector: 'app-tablas-basicas-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  templateUrl: './contratos-pages.component.html',
  styleUrls: ['./contratos-pages.component.css']
})
export class TablasBasicasComponent {
  readonly title = 'Tablas Básicas';
}

@Component({
  selector: 'app-tarifas-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  templateUrl: './contratos-pages.component.html',
  styleUrls: ['./contratos-pages.component.css']
})
export class TarifasComponent {
  readonly title = 'Tarifas';
}

@Component({
  selector: 'app-destinos-paquetes-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  templateUrl: './contratos-pages.component.html',
  styleUrls: ['./contratos-pages.component.css']
})
export class DestinosPaquetesComponent {
  readonly title = 'Configuración Destinos y Paquetes';
}

@Component({
  selector: 'app-proximo-vencer-view',
  standalone: true,
  imports: [GenericModuleViewComponent],
  templateUrl: './contratos-pages.component.html',
  styleUrls: ['./contratos-pages.component.css']
})
export class ProximoVencerComponent {
  readonly title = 'Contratos Próximos a Vencer';
}
