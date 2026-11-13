import { DivisionPoliticaItem } from './division-politica.model';

export interface Departamento extends DivisionPoliticaItem {
  nivel: 'DEPARTAMENTO';
  indicativo?: string;
  tipoImpuesto?: string;
  codigoDestino?: string;
}
