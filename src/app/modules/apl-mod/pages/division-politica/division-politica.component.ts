import { Component, signal, computed, inject, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
  ValidationErrors,
  ValidatorFn
} from '@angular/forms';
import { DivisionPoliticaService } from '../../services/division-politica.service';
import { DivisionPoliticaItem, NivelDivision } from '../../models/division-politica.model';

type ViewMode = 'empty' | 'view' | 'edit' | 'create';

@Component({
  selector: 'app-division-politica',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './division-politica.component.html',
  styleUrls: ['./division-politica.component.css']
})
export class DivisionPoliticaComponent implements OnDestroy {
  private readonly fb = inject(FormBuilder);
  private readonly geoService = inject(DivisionPoliticaService);
  private alertTimeoutId: ReturnType<typeof setTimeout> | null = null;

  readonly searchTerm = signal('');
  readonly selectedNode = signal<DivisionPoliticaItem | null>(null);
  readonly viewMode = signal<ViewMode>('empty');
  readonly currentFormLevel = signal<NivelDivision>('PAIS');
  readonly parentNodeForCreation = signal<DivisionPoliticaItem | null>(null);
  readonly showDeleteModal = signal(false);
  readonly successMessage = signal<string | null>(null);
  readonly showValidationErrors = signal(false);

  readonly form: FormGroup = this.fb.group({
    codigo: ['', [Validators.required]],
    nombre: ['', [Validators.required, Validators.maxLength(40)]],
    iso: [''],
    isoRips: [''],
    ripsNum: [''],
    indicativo: [''],
    tipoImpuesto: [''],
    codigoDestino: ['']
  });

  readonly filteredNodes = computed(() => {
    const q = this.searchTerm().trim().toLowerCase();
    const all = this.geoService.items();
    if (!q) return all;
    return this.filterTreeNodes(all, q);
  });

  private filterTreeNodes(nodes: DivisionPoliticaItem[], query: string): DivisionPoliticaItem[] {
    const result: DivisionPoliticaItem[] = [];
    for (const node of nodes) {
      const matchSelf = node.nombre.toLowerCase().includes(query) || node.codigo.includes(query);
      const matchedChildren = node.hijos ? this.filterTreeNodes(node.hijos, query) : [];
      if (matchSelf || matchedChildren.length > 0) {
        result.push({
          ...node,
          expanded: true,
          hijos: matchedChildren
        });
      }
    }
    return result;
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  toggleExpand(node: DivisionPoliticaItem, event: MouseEvent): void {
    event.stopPropagation();
    node.expanded = !node.expanded;
  }

  selectNode(node: DivisionPoliticaItem): void {
    this.selectedNode.set(node);
    this.viewMode.set('view');
  }

  onCreateNewRoot(): void {
    this.parentNodeForCreation.set(null);
    this.currentFormLevel.set('PAIS');
    this.viewMode.set('create');
    this.setupFormForCreate('PAIS', '');
  }

  onAddChild(): void {
    const parent = this.selectedNode();
    if (!parent) return;

    const nextLevel = this.getNextChildLevel(parent.nivel);
    if (!nextLevel) return;

    this.parentNodeForCreation.set(parent);
    this.currentFormLevel.set(nextLevel);
    this.viewMode.set('create');
    this.setupFormForCreate(nextLevel, parent.codigo);
  }

  onEditCurrentNode(): void {
    const node = this.selectedNode();
    if (!node) return;

    this.currentFormLevel.set(node.nivel);
    this.viewMode.set('edit');
    this.setupFormForEdit(node);
  }

  private getNextChildLevel(level: NivelDivision): NivelDivision | null {
    if (level === 'PAIS') return 'DEPARTAMENTO';
    if (level === 'DEPARTAMENTO') return 'CIUDAD';
    if (level === 'CIUDAD') return 'BARRIO';
    return null;
  }

  canAddChild(level?: NivelDivision): boolean {
    return level === 'PAIS' || level === 'DEPARTAMENTO' || level === 'CIUDAD';
  }

  getAddChildButtonLabel(level?: NivelDivision): string {
    if (level === 'PAIS') return 'Añadir departamento';
    if (level === 'DEPARTAMENTO') return 'Agregar ciudad';
    if (level === 'CIUDAD') return 'Agregar barrio';
    return 'Agregar';
  }

  getLevelBadgeLabel(level?: NivelDivision): string {
    if (level === 'PAIS') return 'País';
    if (level === 'DEPARTAMENTO') return 'Departamento';
    if (level === 'CIUDAD') return 'Ciudad';
    if (level === 'BARRIO') return 'Barrio';
    return '';
  }

  getCodeLengthRule(level: NivelDivision): string {
    if (level === 'PAIS') return 'exactamente 3 dígitos';
    if (level === 'DEPARTAMENTO') return 'exactamente 6 dígitos';
    if (level === 'CIUDAD') return 'exactamente 9 dígitos';
    return 'entre 10 y 15 dígitos';
  }

  getCurrentCodeLength(): number {
    const val = this.form.get('codigo')?.value?.toString() ?? '';
    return val.trim().length;
  }

  getCodePlaceholder(level: NivelDivision): string {
    if (level === 'PAIS') return 'Numérico, exactamente 3 dígitos. Ejemplo: 170.';
    if (level === 'DEPARTAMENTO') return '001001';
    if (level === 'CIUDAD') return '001001001';
    return 'Código numérico (10 a 15 dígitos)';
  }

  private buildCodeValidator(level: NivelDivision, parentCode?: string): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const val = control.value?.toString().trim();
      if (!val) return { required: true };

      if (!/^\d+$/.test(val)) {
        return { numeric: true };
      }

      if (level === 'PAIS' && val.length !== 3) {
        return { invalidLength: { required: 3, actual: val.length } };
      }
      if (level === 'DEPARTAMENTO' && val.length !== 6) {
        return { invalidLength: { required: 6, actual: val.length } };
      }
      if (level === 'CIUDAD' && val.length !== 9) {
        return { invalidLength: { required: 9, actual: val.length } };
      }
      if (level === 'BARRIO' && (val.length < 10 || val.length > 15)) {
        return { invalidLength: { min: 10, max: 15, actual: val.length } };
      }

      if (parentCode && !val.startsWith(parentCode)) {
        return { prefixMismatch: { requiredPrefix: parentCode } };
      }

      if (val === parentCode) {
        return { sameAsParent: true };
      }

      const existing = this.geoService.findNodeByCode(this.geoService.items(), val);
      if (existing) {
        return { duplicateCode: true };
      }

      return null;
    };
  }

  private setupFormForCreate(level: NivelDivision, baseCode: string): void {
    this.showValidationErrors.set(false);
    const parentCode = this.parentNodeForCreation()?.codigo;
    const codeCtrl = this.form.get('codigo');
    codeCtrl?.setValidators([this.buildCodeValidator(level, parentCode)]);

    this.form.reset({
      codigo: baseCode,
      nombre: '',
      iso: '',
      isoRips: '',
      ripsNum: '',
      indicativo: '',
      tipoImpuesto: '',
      codigoDestino: ''
    });

    this.applyLevelFieldValidators(level);
  }

  private setupFormForEdit(node: DivisionPoliticaItem): void {
    this.showValidationErrors.set(false);
    const codeCtrl = this.form.get('codigo');
    codeCtrl?.clearValidators();
    codeCtrl?.setValidators([Validators.required]);
    codeCtrl?.updateValueAndValidity();

    this.form.patchValue({
      codigo: node.codigo,
      nombre: node.nombre,
      iso: node.iso ?? '',
      isoRips: node.isoRips ?? '',
      ripsNum: node.ripsNum ?? '',
      indicativo: node.indicativo ?? '',
      tipoImpuesto: node.tipoImpuesto ?? '',
      codigoDestino: node.codigoDestino ?? ''
    });

    this.applyLevelFieldValidators(node.nivel);
  }

  private applyLevelFieldValidators(level: NivelDivision): void {
    const isoCtrl = this.form.get('iso');
    const isoRipsCtrl = this.form.get('isoRips');
    const ripsNumCtrl = this.form.get('ripsNum');
    const indicativoCtrl = this.form.get('indicativo');
    const tipoImpuestoCtrl = this.form.get('tipoImpuesto');
    const codigoDestinoCtrl = this.form.get('codigoDestino');

    if (level === 'PAIS') {
      isoCtrl?.setValidators([Validators.required, Validators.maxLength(3)]);
      isoRipsCtrl?.setValidators([Validators.maxLength(3)]);
      ripsNumCtrl?.setValidators([Validators.maxLength(3), Validators.pattern(/^\d*$/)]);
      indicativoCtrl?.clearValidators();
      tipoImpuestoCtrl?.clearValidators();
      codigoDestinoCtrl?.clearValidators();
    } else {
      isoCtrl?.clearValidators();
      isoRipsCtrl?.clearValidators();
      ripsNumCtrl?.clearValidators();
      indicativoCtrl?.setValidators([Validators.maxLength(4), Validators.pattern(/^\d*$/)]);
      tipoImpuestoCtrl?.setValidators([Validators.maxLength(3)]);
      codigoDestinoCtrl?.setValidators([Validators.maxLength(3)]);
    }

    [isoCtrl, isoRipsCtrl, ripsNumCtrl, indicativoCtrl, tipoImpuestoCtrl, codigoDestinoCtrl].forEach(ctrl =>
      ctrl?.updateValueAndValidity()
    );
  }

  onCancelForm(): void {
    if (this.selectedNode()) {
      this.viewMode.set('view');
    } else {
      this.viewMode.set('empty');
    }
  }

  onSubmitForm(): void {
    this.showValidationErrors.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formVal = this.form.getRawValue();
    const level = this.currentFormLevel();
    const isEdit = this.viewMode() === 'edit';
    const parentCode = this.parentNodeForCreation()?.codigo;

    const saved = this.geoService.saveItem(
      {
        ...formVal,
        nivel: level
      },
      isEdit,
      parentCode
    );

    if (saved) {
      const updated = this.geoService.findNodeByCode(this.geoService.items(), formVal.codigo.trim());
      this.selectedNode.set(updated ?? null);
      this.viewMode.set('view');
      this.triggerSuccess(
        isEdit ? 'Registro actualizado correctamente.' : 'Registro creado correctamente.'
      );
    }
  }

  openDeleteConfirm(): void {
    this.showDeleteModal.set(true);
  }

  closeDeleteConfirm(): void {
    this.showDeleteModal.set(false);
  }

  confirmDelete(): void {
    const node = this.selectedNode();
    if (node) {
      this.geoService.deleteItem(node.codigo);
      this.selectedNode.set(null);
      this.viewMode.set('empty');
      this.closeDeleteConfirm();
      this.triggerSuccess('Registro eliminado correctamente.');
    }
  }

  private triggerSuccess(msg: string): void {
    if (this.alertTimeoutId) {
      clearTimeout(this.alertTimeoutId);
    }
    this.successMessage.set(msg);
    this.alertTimeoutId = setTimeout(() => {
      this.successMessage.set(null);
      this.alertTimeoutId = null;
    }, 3000);
  }

  dismissAlert(): void {
    if (this.alertTimeoutId) {
      clearTimeout(this.alertTimeoutId);
      this.alertTimeoutId = null;
    }
    this.successMessage.set(null);
  }

  ngOnDestroy(): void {
    if (this.alertTimeoutId) {
      clearTimeout(this.alertTimeoutId);
      this.alertTimeoutId = null;
    }
  }
}
