export type NivelDivision = 'PAIS' | 'DEPARTAMENTO' | 'CIUDAD' | 'BARRIO';

export interface DivisionPoliticaItem {
  codigo: string;
  nombre: string;
  nivel: NivelDivision;
  iso?: string;
  isoRips?: string;
  ripsNum?: string;
  indicativo?: string;
  tipoImpuesto?: string;
  codigoDestino?: string;
  hijos?: DivisionPoliticaItem[];
  expanded?: boolean;
}

export interface DivisionPoliticaFormData {
  codigo: string;
  nombre: string;
  nivel: NivelDivision;
  iso?: string;
  isoRips?: string;
  ripsNum?: string;
  indicativo?: string;
  tipoImpuesto?: string;
  codigoDestino?: string;
}
