import { MENU_MODULES } from '../menu-data';
import { MenuItem } from '../models/menu.model';
import { MDI_FORMS, FormDefinition, getOrCreateForm } from '../mdi-registry';

export interface RouteMatchResult {
  moduleCode: string;
  formDef: FormDefinition;
}

export function toSlug(text: string): string {
  if (!text) return '';
  return text
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

interface FormSlugMeta {
  moduleCode: string;
  moduleSlug: string;
  groupSlug?: string;
  formSlug: string;
  formId: string;
  title: string;
}

const slugRegistry: FormSlugMeta[] = [];
let isInitialized = false;

function buildSlugRegistry(): void {
  if (isInitialized) return;
  isInitialized = true;

  for (const mod of MENU_MODULES) {
    const modSlug = toSlug(mod.name);
    for (const group of mod.items) {
      const groupSlug = toSlug(group.name);
      traverseMenuItems(group, mod.code, modSlug, groupSlug);
    }
  }

  // Complementar con entradas fijas de MDI_FORMS si no están en el menú
  for (const [formId, formDef] of Object.entries(MDI_FORMS)) {
    const existing = slugRegistry.find(r => r.formId === formId);
    if (!existing) {
      slugRegistry.push({
        moduleCode: 'apl',
        moduleSlug: 'entorno',
        formSlug: toSlug(formDef.title),
        formId,
        title: formDef.title
      });
    }
  }
}

function traverseMenuItems(
  item: MenuItem,
  moduleCode: string,
  moduleSlug: string,
  groupSlug: string
): void {
  if (item.children && item.children.length > 0) {
    for (const child of item.children) {
      traverseMenuItems(child, moduleCode, moduleSlug, groupSlug);
    }
    return;
  }

  const formSlug = toSlug(item.name);
  slugRegistry.push({
    moduleCode,
    moduleSlug,
    groupSlug,
    formSlug,
    formId: item.id,
    title: item.name
  });
}

export function getSlugForForm(formId: string, title?: string): { moduleSlug: string; formSlug: string } | null {
  buildSlugRegistry();

  const match = slugRegistry.find(r => r.formId === formId || (title && r.title === title));
  if (match) {
    // Si tiene groupSlug preferir el groupSlug (ej. "entorno" o "configuracion") como prefijo amigable
    const modSegment = match.groupSlug || match.moduleSlug;
    return {
      moduleSlug: modSegment,
      formSlug: match.formSlug
    };
  }

  if (title) {
    return {
      moduleSlug: 'general',
      formSlug: toSlug(title)
    };
  }

  return null;
}

export function resolveFormBySlugs(moduleSlugParam: string, formSlugParam: string): RouteMatchResult | null {
  buildSlugRegistry();

  const modParam = toSlug(moduleSlugParam);
  const formParam = toSlug(formSlugParam);

  // 1. Buscar coincidencia exacta por formSlug y (groupSlug o moduleSlug o moduleCode)
  const match = slugRegistry.find(r =>
    r.formSlug === formParam &&
    (r.groupSlug === modParam || r.moduleSlug === modParam || toSlug(r.moduleCode) === modParam)
  );

  if (match) {
    const formDef = getOrCreateForm(match.formId, match.title);
    return {
      moduleCode: match.moduleCode,
      formDef
    };
  }

  // 2. Buscar solo por formSlug
  const looseMatch = slugRegistry.find(r => r.formSlug === formParam);
  if (looseMatch) {
    const formDef = getOrCreateForm(looseMatch.formId, looseMatch.title);
    return {
      moduleCode: looseMatch.moduleCode,
      formDef
    };
  }

  // 3. Fallback en MDI_FORMS
  for (const [key, formDef] of Object.entries(MDI_FORMS)) {
    if (toSlug(formDef.title) === formParam || toSlug(key) === formParam) {
      return {
        moduleCode: 'apl',
        formDef
      };
    }
  }

  return null;
}
