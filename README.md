# ERP Mockup

Prototipo orientado a emular experiencia de sistema Legado desarrollado en VB6 **MDI (Multiple
Document Interface)** en aplicación  web de modernización. El prototipo permite: simular la navegación entre los diferentes módulos y submenús correspondientes; abrir formularios o componentes mockeados en ventanas independientes dentro de un workspace; organizar ventanas; utilizar atajos de teclado generales y contextuales.

## Características

-   Shell principal con encabezado, navegación por módulos, menú
    jerárquico, workspace y barra de tareas.
-   Apertura de formularios en ventanas MDI independientes.
-   Activación, minimización, restauración, maximización, cierre,
    movimiento y redimensionamiento.
-   Organización de ventanas en cascada.
-   Acoplamiento con previsualización y separador de proporción del 50 % (Similar a UX de Windows).
-   Comandos globales y contextuales con `@tanstack/angular-hotkeys`.
-   Catálogo de atajos accesible desde el encabezado del módulo y mediante `F1`.

## Módulos 

El prototipo admite navegación para cualquiera de los submenús de los 19 módulos del proyecto de modernización, mediante una interfaz generica. Solamente se contempla con interfaces mockeadas en:

### Admisiones (`adm-mod`)

-   Gestión de citas.
-   Alertas de admisiones.
-   Atención del paciente.

### Contratos (`con-mod`)

-   Asociar productos a contratos.
-   Condiciones de tarifa.
-   Contratante.

### Administración de Aplicación (`apl-mod`)

-   División política internacional.
-   Documentos y valores de pago.
-   Numeración.

## Experiencia MDI

El workspace funciona como un escritorio dentro de la aplicación web.
- Cada formulario se representa como una ventana independiente que puede: moverse, minimizarse, restaurarse, redimensionarse, maximizarse o cerrarse.
- La barra inferior permite visualización de las "ventanas" abiertas y permite cambiar entre ellas.
- El comportamiento de apertura de las ventanas emplea una organización de tipo cascada.

### Componentes principales

-   `MdiShellComponent`: compone encabezado, navegación, workspace,
    ventanas y barra de tareas.
-   `MdiWindowComponent`: representa la ventana y gestiona su
    interacción visual.
-   `MdiWindowService`: centraliza estado y operaciones de ventanas.
-   `mdi-registry.ts`: relaciona identificadores con componentes y
    dimensiones iniciales.
-   `menu-data.ts`: contiene la estructura de navegación.

Los formularios se renderizan mediante `NgComponentOutlet`.

## Acoplamiento de ventanas

El sistema de docking incorpora: 
- Detección de proximidad a bordes del workspace. 
- Previsualización de la región de acoplamiento. 
- Indicación de la zona disponible para una segunda ventana. 
- Límite de dos ventanas acopladas. 
- Ajuste de proporción mediante separador (*splitter*). 
- Desacoplamiento al comenzar a mover una ventana acoplada. 
- Restauración de geometría flotante.

La geometría se calcula respecto al workspace MDI, no al viewport completo del navegador. 

## Comandos y atajos

Se emplea las dependencias `@tanstack/angular-hotkeys` y `@tanstack/hotkeys` para la implementación correspondiente de esta funcionalidad. La configuración global se encuentra en `src/app/app.config.ts`, y las declaraciones de atajos en `src/app/core/commands/app-hotkeys.ts`.

### Atajos generales actuales

  -----------------------------------------------------------------------
  Comando                 Atajo                   Descripción
  ----------------------- ----------------------- -----------------------
  Buscar en el sistema    `Ctrl+B`                Enfoca el campo de
                                                  búsqueda global.

  Refrescar vista         `F5`                    Solicita refrescar la
                                                  vista activa sin
                                                  recargar el navegador.

  Ayuda de atajos         `F1`                    Abre o Cierra el
                                                  catálogo de comandos.

  Cerrar ventana MDI      `Alt+W`                 Cierra la ventana
                                                  activa.

  Siguiente ventana MDI   `Alt+T`                 Activa la siguiente
                                                  ventana visible.
  -----------------------------------------------------------------------

### Contexto y formularios

Los comandos generales se registran en el shell y permanecen disponibles transversalmente al cambiar de módulo. Los formularios pueden registrar acciones contextuales mediante: `CommandContextService`.

### Modal con catálogo de atajos

Se emplea `ShortcutHelpComponent` para combinar: 
- Comandos generales obtenidos de la lista de hotkeys. 
- Registros contextuales de formularios. 
- El nombre del módulo activo. 
- Formateo de teclas mediante `injectFormatForDisplay()`.

Se abre mediante `F1` o el botón con label **F1 Atajos** en el encabezado.

Los atajos nativos de edición ---copiar, pegar, cortar y deshacer--- siguen funcionando en inputs,textareas, editores y controles interactivos.

## Estructura del proyecto

``` text
src/app/
├── core/
│   ├── commands/
│   │   ├── app-hotkeys.ts
│   │   ├── core-commands.service.ts
│   │   ├── command-context.service.ts
│   │   ├── models/
│   │   └── components/shortcut-help/
│   └── mdi/
│       ├── components/
│       │   ├── mdi-shell/
│       │   ├── mdi-window/
│       │   ├── menu-node/
│       │   └── inicio-view.component.ts
│       ├── models/
│       ├── services/
│       │   ├── mdi-window.service.ts
│       │   └── mdi-dock-utils.ts
│       ├── mdi-registry.ts
│       └── menu-data.ts
├── modules/
│   ├── adm-mod/
│   ├── con-mod/
│   └── apl-mod/
└── shared/
    └── components/
```

### Core

Infraestructura transversal: shell MDI, estado y operaciones de ventanas, registro de formularios, navegación, comandos globales, contexto y modal catálogo de atajos.

### Modules

Interfaces agrupadas por módulo: Admisiones, Contratos y Administración de Aplicación. 

### Shared

Componentes reutilizables que permite visualización genérica para opciones sin interfaz específica.

## Stack tecnológico

  Tecnología                    Uso
  ----------------------------- ------------------------------
  Angular 22                    Framework de aplicación
  TypeScript 6                  Lenguaje principal
  Angular Signals               Estado reactivo
  Angular CDK                   Interacciones de arrastre
  Tailwind CSS 4                Estilos
  `@tanstack/angular-hotkeys`   Registro y gestión de atajos
  `@tanstack/hotkeys`           Motor de hotkeys asociado
  RxJS 7                        Flujos reactivos
  Vitest                        Pruebas
  Angular SSR                   Configuración SSR

## Requisitos e instalación

Requisitos: 
- Node.js compatible con la versión de Angular CLI del proyecto. 
- npm. 
- Git.

Clonar:

``` bash
git clone https://github.com/jadapache/erp_mockup.git
cd erp_mockup
```

Instalar dependencias:

``` bash
npm ci
```

Iniciar el servidor:

``` bash
npm start o ng serve
```

Abrir `http://localhost:4200/`. 

## Extensión del prototipo

### Agregar un formulario MDI

1.  Crear el componente standalone dentro del módulo correspondiente.
2.  Registrar el formulario en `src/app/core/mdi/mdi-registry.ts`.
3.  Definir identificador, título, componente y dimensiones iniciales.
4.  Verificar que el elemento del menú apunte al identificador registrado.

### Agregar un comando general

1.  Declarar el comando y sus metadatos en `src/app/core/commands/app-hotkeys.ts`.
2.  Implementar la acción en `CoreCommandsService` o en el punto de composición global adecuado.
3.  Registrar el atajo en el shell mediante la API de TanStack.
4.  Verificar conflictos con atajos del navegador (ej: Ctrl + F4 en Chrome), controles editables y scopes contextuales.
5.  Comprobar que aparece en el modal del catálogo.

### Agregar un comando contextual

1.  Determinar si pertenece al módulo, a una ventana o a un diálogo.
2.  Registrar la acción en el contexto adecuado.
3.  Asociarla al `windowId` correcto si depende de una instancia MDI.
4.  Verificar que no se ejecute desde ventanas inactivas.


### Observaciones generales

-   Mantener la lógica transversal en `core`.
-   Mantener la lógica de pantalla en el módulo correspondiente.
-   Evitar acoplar `MdiWindowService` a componentes concretos.
-   No introducir sub-inyectores dinámicos alrededor de  `NgComponentOutlet`.
-   Mantener una única fuente de verdad para atajos y metadatos.
