import { describe, it, expect } from 'vitest';
import { toSlug, getSlugForForm, resolveFormBySlugs } from './mdi-slug-router';

describe('mdi-slug-router', () => {
  it('should normalize strings into url-friendly slugs', () => {
    expect(toSlug('División Política Internacional')).toBe('division-politica-internacional');
    expect(toSlug('Configuración Destinos y Paquetes')).toBe('configuracion-destinos-y-paquetes');
  });

  it('should resolve form for entorno and division-politica', () => {
    const result = resolveFormBySlugs('entorno', 'division-politica-internacional');
    expect(result).toBeTruthy();
    expect(result?.formDef.id).toBe('mnu_apl_ento_dipo');
    expect(result?.moduleCode).toBe('apl');
  });

  it('should generate slug for a given formId', () => {
    const slugs = getSlugForForm('mnu_apl_ento_dipo', 'División Política Internacional');
    expect(slugs).toBeTruthy();
    expect(slugs?.moduleSlug).toBe('entorno');
    expect(slugs?.formSlug).toBe('division-politica-internacional');
  });
});
