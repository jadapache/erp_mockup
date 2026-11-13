import { DivisionPoliticaItem } from './division-politica.model';

export interface Municipio extends DivisionPoliticaItem {
  nivel: 'CIUDAD';
  indicativo?: string;
  tipoImpuesto?: string;
  codigoDestino?: string;
}
