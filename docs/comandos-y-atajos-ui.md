# Comandos y atajos de teclado en la UI

## Objetivo

Definir cómo debe presentar la aplicación los comandos heredados del sistema VB6, manteniendo los atajos existentes y permitiendo que su disponibilidad dependa del módulo, la ventana y el componente enfocado.

## Principios obligatorios

- Mantener los atajos actuales aunque ejecuten acciones diferentes según el contexto. Por ejemplo, `Ctrl+I` puede significar una acción distinta en cada módulo o ventana.
- No intentar convertir el menú **Edición** en un catálogo completo de comandos del módulo. En este sistema se administra como un listado asociado a componentes.
- Un comando debe tener una definición única y varias superficies de presentación. El botón, el menú, el menú contextual y el catálogo no deben implementar acciones independientes.
- La disponibilidad debe actualizarse al cambiar de módulo, ventana, componente, selección o estado del formulario.
- Las acciones deshabilitadas deben conservar una explicación accesible mediante tooltip o descripción cuando sea útil.

## Superficies de presentación

### Barra de herramientas global

Presenta acciones frecuentes y transversales, por ejemplo:

- Guardar
- Buscar
- Refrescar
- Imprimir
- Deshacer
- Copiar y pegar
- Navegación entre registros

Cada botón debe tener icono, nombre accesible y tooltip. El tooltip debe incluir el atajo cuando exista, por ejemplo: `Buscar — Ctrl+B`.

### Menú del módulo

Presenta los procesos propios del módulo y es la fuente principal para descubrir las funciones de negocio.

```text
Procesos
  Atención                         Ctrl+E
  Citas                            Ctrl+I
  Traslados                        Ctrl+T
  ─────────────────────────────
  Comprobación de derechos         >
  ─────────────────────────────
  Notas administrativas
  Cambio de sucursal
  Alertas
```

Los atajos deben mostrarse alineados a la derecha. No se debe cambiar el significado contextual de un atajo solo para conseguir uniformidad entre módulos.

### Acciones de la ventana activa

La ventana puede mostrar una barra contextual encima del formulario o tabla. Debe contener únicamente acciones aplicables a esa ventana y al estado actual:

```text
[ Nuevo registro ] [ Editar ] [ Eliminar ] [ Copiar registro ] [ Buscar ]
```

Ejemplos:

- Tabla: nuevo, editar, eliminar y copiar registro.
- Formulario: guardar, cancelar y deshacer.
- Consulta: buscar, filtrar, exportar y refrescar.
- Solo lectura: buscar, imprimir y refrescar.

### Menú contextual

El menú contextual debe mostrar comandos relacionados con el control, fila, registro o texto seleccionado. No debe repetir indiscriminadamente todo el menú del módulo.

```text
Copiar
Pegar
────────────────
Editar registro
Eliminar registro
Copiar registro
────────────────
Actualizar
```

### Menú Edición

Conservarlo como listado de operaciones generales asociadas al componente o control enfocado. Puede contener comandos como copiar, pegar, deshacer, insertar registro, eliminar registro y buscar, pero no debe usarse para listar todos los procesos del módulo.

## Catálogo modal de atajos

El modal es una ayuda de descubrimiento y referencia. No reemplaza la barra, los menús ni las acciones de la ventana.

Debe mostrar solamente los comandos activos o relevantes para el contexto actual, agrupados en este orden:

1. Atajos globales.
2. Atajos del módulo activo.
3. Atajos de la ventana activa.
4. Atajos del componente enfocado.

Ejemplo:

```text
ATAJOS GLOBALES
  Cerrar ventana MDI              Alt+W
  Siguiente ventana MDI           Alt+T
  Ayuda de atajos                 F1

MÓDULO ACTIVO: ADMISIONES
  Abrir Atención del Paciente     Ctrl+E
  Nueva atención                  Alt+N

VENTANA ACTIVA: ATENCIÓN
  Buscar                          Ctrl+B
  Insertar registro               Ctrl+I
  Eliminar registro               Ctrl+D
```

Cada entrada debe incluir nombre, descripción breve, combinación de teclas y contexto. Cuando sea útil, también puede indicar dónde está disponible: menú del módulo, barra contextual o menú Edición.

El catálogo debe actualizarse al cambiar de contexto y debe poder abrirse con `F1`. `Esc` debe cerrarlo.

## Modelo recomendado de comando

Cada comando debe definirse con una estructura equivalente a la siguiente:

```ts
type UiCommand = {
  id: string;
  label: string;
  description?: string;
  shortcut?: string;
  scope: 'global' | 'module' | 'window' | 'component';
  moduleId?: string;
  windowId?: string;
  componentId?: string;
  surfaces: Array<'toolbar' | 'module-menu' | 'edit-menu' | 'context-menu' | 'shortcut-catalog'>;
  isVisible: (context: UiContext) => boolean;
  isEnabled: (context: UiContext) => boolean;
  execute: (context: UiContext) => void;
};
```

La resolución del contexto debe considerar, en este orden:

1. Permisos del usuario.
2. Módulo y ventana activos.
3. Componente enfocado.
4. Selección actual.
5. Estado del formulario y de la operación.

## Criterios de aceptación

- `Ctrl+I` conserva su significado contextual y aparece con el texto correcto en el menú y en el catálogo.
- Cambiar de ventana actualiza la barra contextual, el estado de los menús y el contenido del catálogo.
- Los procesos del módulo aparecen en el menú del módulo, no como una lista masiva dentro de Edición.
- El mismo comando ejecuta la misma acción independientemente de si se invoca desde botón, menú, menú contextual o teclado.
- El catálogo distingue claramente comandos globales, del módulo, de la ventana y del componente.
- Los comandos no aplicables no se ejecutan por teclado y su estado visual es coherente con el resto de la UI.
