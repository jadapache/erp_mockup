import { MenuModule } from './models/menu.model';

export const MENU_MODULES: MenuModule[] = [
  {
    "code": "hce",
    "name": "Historia Clínica Electrónica",
    "items": [
      {
        "id": "mnu_hce_proc",
        "name": "Procesos",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_hce_proc_abcx",
            "name": "Abrir Cirugía, Electrofisiología y hemodinamia",
            "orden": "01_38",
            "url": "../cirugia/abrircirugias.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_aler",
            "name": "Alertas de Paciente",
            "orden": "01_21",
            "url": "../informes/alertaspaciente.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_anin",
            "name": "Anular Incapacidad",
            "orden": "01_35",
            "url": "../incapacidades/anularincapacidad.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_aerd",
            "name": "Aprobar Estudios",
            "orden": "01_14",
            "url": "../apoyodiagnostico/aprobarestudios.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_aomo",
            "name": "Aprobar Ordenes de Medicamentos Oncología",
            "orden": "01_23",
            "url": "../medicamentos/aprobarordenoncologia.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_sode",
            "name": "Asociar Solicitud de Dev con Devoluciones",
            "orden": "01_12",
            "url": "../solicitudes/asociardevolucionesfr.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_audi",
            "name": "Auditoria Traslado de insumos",
            "orden": "01_17",
            "url": "../auditoria/auditoriatrasladoinsumos.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_audt",
            "name": "Auditoria Traslado de Medicamentos",
            "orden": "01_15",
            "url": "../auditoria/auditoriatrasladomedicamentos.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_casu",
            "name": "Cambio de Sucursal",
            "orden": "01_41",
            "url": "../cambiosucursal/cambiosucursal.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_canc",
            "name": "Cancelar",
            "orden": "01_12",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_cons",
            "name": "Consentimientos",
            "orden": "01_36",
            "url": "../consultas/consentimientos.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_msnp",
            "name": "Consulta Estado Envío Mensajes",
            "orden": "01_28",
            "url": "../paciente/mensajesenviados.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_cohe",
            "name": "Consultar Solic. Hemoderivados",
            "orden": "01_18",
            "url": "../ordenes/consolidadoordeneshemoderivados.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_deta",
            "name": "Desbloquear Tarjeta de Medicamentos",
            "orden": "01_37",
            "url": "../medicamentos/desbloqueartarjetamedicamentos.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_expo",
            "name": "Exportación Masiva",
            "orden": "01_34",
            "url": "../generales/exportarconsultahistoriaMasiva.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_ghem",
            "name": "Gestionar Hemoderivados",
            "orden": "01_30",
            "url": "../enfermeria/procesohemoderivados.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_homa",
            "name": "Habilitar Dispensación de Medicamento Ambulatorio",
            "orden": "01_10",
            "url": "../sme/dispensacionmedicamentos.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_home",
            "name": "Hoja de Medicamentos",
            "orden": "01_43",
            "url": "https://enfermeriahic.fcv.org",
            "children": []
          },
          {
            "id": "mnu_hce_proc_just",
            "name": "Justificaciones No Pos",
            "orden": "01_09",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_just_ctrl",
                "name": "Control de Envíos",
                "orden": "01_09_03",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_just_cons",
                "name": "Medicamentos y Procedimientos",
                "orden": "01_09_01",
                "url": "../medicamentos/consolidadojustificacion.xhtml",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_mapr",
            "name": "Marcado de Atenciones",
            "orden": "01_27",
            "url": "../atencion/marcaratencionesprivadas.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_metr",
            "name": "Metas de Tratamiento",
            "orden": "01_16",
            "url": "../metas/metatratamiento.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_mohg",
            "name": "Modificación Hojas de Gasto",
            "orden": "01_42",
            "url": "../solicitudes/modificacionhojadegasto.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_mnop",
            "name": "Perfil Farmacológico",
            "orden": "01_22",
            "url": "../medicamentos/perfilfarmacologico.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_prog",
            "name": "Programar",
            "orden": "01_11",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_Prop",
            "name": "Programas Promoción y Prevención",
            "orden": "01_24",
            "url": "../promocionyprevencion/programaspromocionyprevencion.xhtm",
            "children": []
          },
          {
            "id": "mnu_hce_proc_rvxe",
            "name": "Reclasificar ventas por esor",
            "orden": "01_40",
            "url": "../reclacificacionventas/reclacificacionventas.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_rotu",
            "name": "Rotulado Leche Materna",
            "orden": "01_31",
            "url": "../rotuladolechematerna/rotuladolechematerna.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_rocm",
            "name": "Rotulado Preparación Central de Mezclas",
            "orden": "01_33",
            "url": "../medicamentos/rotuladocentralmezclas.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_lact",
            "name": "Rotulado Solicitudes Lactario",
            "orden": "01_29",
            "url": "../lactario/lactario.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_imro",
            "name": "Rótulo de Identificación del Paciente",
            "orden": "01_39",
            "url": "../generales/rotuloidentificadorpaciente.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_plan",
            "name": "Seguimiento a Ordenes",
            "orden": "01_01",
            "url": "../enfermeria/planenfermeria.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_segs",
            "name": "Seguimiento a Solicitudes",
            "orden": "01_09",
            "url": "../enfermeria/seguimientoenfermeria.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_svpd",
            "name": "Seguimiento de la Vía por Decisión",
            "orden": "01_32",
            "url": "../apoyodiagnostico/seguimientoviadecision.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_soli",
            "name": "Solicitudes",
            "orden": "01_02",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_soli_atip",
                "name": "Atender Interconsultas Pendientes",
                "orden": "01_08",
                "url": "../ordenes/interconsultaspendientes.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_atso",
                "name": "Atender Solicitud de Proc.",
                "orden": "01_06",
                "url": "../solicitudes/solicitudespendientes.xhtml?indatender=true",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_copr",
                "name": "Consultar Solicitudes",
                "orden": "01_07",
                "url": "../solicitudes/solicitudespendientes.xhtml?indatender=false",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_devo",
                "name": "Devolucion de medicamentos e insumos",
                "orden": "01_02_03",
                "url": "../solicitudes/solicituddevoluciones.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_insu",
                "name": "Insumos",
                "orden": "01_02_02",
                "url": "../solicitudes/solicitudinsumos.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_medi",
                "name": "Líquidos Endovenosos",
                "orden": "01_02_01",
                "url": "../medicamentos/solicitudliquidos.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_lab",
                "name": "Solicitud Laboratorio",
                "orden": "01_02_04",
                "url": "../solicitudes/solicitudlaboratorios.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_spat",
                "name": "Solicitud Patología",
                "orden": "01_02_04",
                "url": "../solicitudes/solicitudpatologia.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_itmi",
                "name": "Solicitudes Pendientes IT1000 y Laboratorio",
                "orden": "01_19",
                "url": "../laboratorios/laboratorioclinicoit.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_atop",
                "name": "Atender Ordenes Pendientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_atsh",
                "name": "Atender Solicitud de Hemo.",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_coso",
                "name": "Consultar Solicitudes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_hemo",
                "name": "Hemoderivados",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_lrla",
                "name": "Leer Resultados de Laboratorio",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_nutr",
                "name": "Nutrición",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_proc",
                "name": "Procedimientos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_soli_diet",
                "name": "Solicitud de Dieta",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_hepa",
            "name": "Solicitudes Pendientes Hemoderivado y Patología",
            "orden": "01_30",
            "url": "../impresionsticker/solicitudhemoderivadopatologia.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_suro",
            "name": "Solicitudes Pendientes Uroanálisis",
            "orden": "01_60",
            "url": "../laboratorios/validaruroanalisis.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_sude",
            "name": "Suspender Solicitudes de Devolución",
            "orden": "01_11",
            "url": "../solicitudes/suspendersolicitudesdevolucion.xhtml",
            "children": []
          },
          {
            "id": "mnu_hce_proc_urge",
            "name": "Tablero De Urgencias",
            "orden": "01_4",
            "url": "https://urgenciashic.fcv.org",
            "children": []
          },
          {
            "id": "mnu_hce_proc_ante",
            "name": "Antecedentes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_auat",
            "name": "Autorización de atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_ciru",
            "name": "Cirugía",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_ciru_canc",
                "name": "Cirugía",
                "orden": "01_12_01",
                "url": "../cirugia/cancelacioncirugia.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_prog",
                "name": "Programar",
                "orden": "01_20",
                "url": "../cirugia/programacioncirugia.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_auto",
                "name": "Autorizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_paci",
                "name": "Programadas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_renp",
                "name": "Registrar Cx No Programada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_repr",
                "name": "Registrar Cx Programada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_anes",
                "name": "Registro de Anestesía",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_inst",
                "name": "Registro de Instrumentación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_perf",
                "name": "Registro de Perfusión",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_ciru_lvpr",
                "name": "Lista de Verificación de\r\nProcedimientos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_justnp_cons",
            "name": "Consolidar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_elec",
            "name": "Electrofisiología",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_elec_canc",
                "name": "Electrofisiología Cancelar",
                "orden": "01_12_03",
                "url": "../electrofisiologia/cancelacionelectrofisiologia.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_elec_prog",
                "name": "Electrofisiología Programar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_elec_repr",
                "name": "Electrofisiología Registrar Programada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_elec_paci",
                "name": "Programación de Electrofisiología",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_hemo",
            "name": "Hemoclasificación",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_hedi",
            "name": "Hemodinamia",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_hedi_canc",
                "name": "Hemodinamia Cancelar",
                "orden": "01_12_02",
                "url": "../hemodinamia/cancelacionhemodinamia.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_hedi_auto",
                "name": "Hemodinamia Autorizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_hedi_prog",
                "name": "Hemodinamia Programar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_hedi_renp",
                "name": "Hemodinamia Registrar no Programada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_hedi_repr",
                "name": "Hemodinamia Registrar Programada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_hedi_paci",
                "name": "Programación de Hemodinamia",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_hist",
            "name": "Historia",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_junt",
            "name": "Junta Medica Quirúrgica",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_junt_acta",
                "name": "Acta Junta Médico quirúrgica",
                "orden": "01_13",
                "url": "../cirugia/actamedicoquirurgica.xhtml",
                "children": []
              },
              {
                "id": "mnu_hce_proc_junt_junt",
                "name": "Junta Medica Quirúrgica",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_junt_ptes",
                "name": "Pacientes Junta Medica Quirúrgica",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_hce_proc_junt_ptes_acta",
                    "name": "Acta(@)",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_hce_proc_junt_ptes_junt",
                    "name": "Junta Medica(@)",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_hce_proc_junt_prog",
                "name": "Programacion",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_junt_prju",
                "name": "Programar Junta",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_lcex",
            "name": "Laboratorios Clínicos Externos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_moco",
            "name": "Monitorear Control",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_moco_cons",
                "name": "Consultar Control",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_moco_fina",
                "name": "Finalizar Control",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_moco_inic",
                "name": "Iniciar Control",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_moco_mort",
                "name": "Modificar Rango de Tiempos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_TeOc",
            "name": "Nota de Terapia Ocupacional",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_TrSo",
            "name": "Nota de Trabajo Social",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_Nota",
            "name": "Notas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_noad",
            "name": "Notas Administrativas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_noen",
            "name": "Notas de Enfermeria",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_Fisi",
            "name": "Notas de Fisioterapia",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_fono",
            "name": "Notas de Fonoaudiologia",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_gast",
            "name": "Notas de Gastroenterología",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_nutr",
            "name": "Notas de Nutrición",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_psic",
            "name": "Notas de Psicología",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_TerR",
            "name": "Notas de Terapia Respiratoria",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_orde",
            "name": "Ordenes",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_hce_proc_orde_ores",
                "name": "Orden de Estancia",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_acti",
                "name": "Actividades",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_cont",
                "name": "Controles",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_esve",
                "name": "Estancia por Vender",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_hemo",
                "name": "Hemoderivados",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_junt",
                "name": "Junta Quirúrgica",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_medi",
                "name": "Medicamentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_nutr",
                "name": "Nutrición",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_oran",
                "name": "Orden Anterior",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_hce_proc_orde_proc",
                "name": "Procedimientos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_hce_proc_paci",
            "name": "Paciente",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_prob",
            "name": "Problemas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_prex",
            "name": "Procedimientos Externos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_proc_vacu",
            "name": "Vacunación",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_hce_arch",
        "name": "Archivo",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_hce_arch_abri",
            "name": "Abrir",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_arch_conf",
            "name": "Configurar Impresora",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_arch_elim",
            "name": "Eliminar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_arch_guar",
            "name": "Guardar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_arch_impr",
            "name": "Imprimir",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_arch_nuev",
            "name": "Nuevo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_arch_sali",
            "name": "Salir",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_hce_ayud",
        "name": "Ayuda",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_hce_ayud_acer",
            "name": "Acerca de...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_ayud_busq",
            "name": "Busqueda",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_ayud_cont",
            "name": "Contenido",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_ayud_indi",
            "name": "Indice",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_hce_conf",
        "name": "Configuración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_hce_conf_abcx",
            "name": "Abrir Cirugias",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_coes",
            "name": "Configurar Esquemas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_puco",
            "name": "Configurar Puerto de Comunicacion",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_dsmi",
            "name": "DSM-IV",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_hodx",
            "name": "Homólogo de Diagnósticos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_homo",
            "name": "Homólogos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_labo",
            "name": "Laboratorio Clínico",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_tmod",
            "name": "Permisos por Módulo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_ttab",
            "name": "Permisos Por Tabla",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_cope",
            "name": "Personal",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_conf_tbas",
            "name": "Tablas Básicas",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_hce_edic",
        "name": "Edición",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_hce_edic_agre",
            "name": "Agregar Registro",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_busc",
            "name": "Buscar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_copi",
            "name": "Copiar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_cort",
            "name": "Cortar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_desh",
            "name": "Deshacer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_elim",
            "name": "Eliminar Registro",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_pega",
            "name": "Pegar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_edic_refr",
            "name": "Refrescar",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_hce_info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_hce_info_Epic",
            "name": "Epicrisis",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_info_escx",
            "name": "Estadisticas de Cirugia",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_info_gene",
            "name": "Generador de Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "MNU_HCE_INFO_ENO",
            "name": "Informe de Eventos de Notificacion Obligatoria",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_info_ines",
            "name": "Informes de Estadistica",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_info_nota",
            "name": "Notas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_info_repo",
            "name": "Personalizar Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_hce_info_Tras",
            "name": "Traslados",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_Hce_inep",
        "name": "Informes EPS",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_Hce_inep_paqu",
            "name": "Paquetes",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_hce_Limp",
        "name": "Limpiar",
        "orden": "",
        "url": "",
        "children": []
      },
      {
        "id": "mnu_hce_Sist",
        "name": "Sistabla",
        "orden": "",
        "url": "",
        "children": []
      },
      {
        "id": "mnu_hce_vent",
        "name": "Ventana",
        "orden": "",
        "url": "",
        "children": []
      }
    ]
  },
  {
    "code": "req",
    "name": "Requisiciones",
    "items": [
      {
        "id": "mnu_req_inic",
        "name": "Inicio",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_req_inic_act",
            "name": "Actualizar contrase&ntilde;a",
            "orden": "01_02",
            "url": "/faces/publico/paginas/actualizarContrasenna.jsp",
            "children": []
          },
          {
            "id": "mnu_req_inic_actu",
            "name": "Actualizar contraseña",
            "orden": "NULL",
            "url": "NULL",
            "children": []
          },
          {
            "id": "mnu_req_inic_msl",
            "name": "Mis Solicitudes",
            "orden": "01_01",
            "url": "/faces/publico/paginas/estado.jsp",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_req_proc",
        "name": "Procesos",
        "orden": "02",
        "url": "",
        "children": [
          {
            "id": "mnu_req_proc_dev",
            "name": "Actualizar Solicitudes Devueltas",
            "orden": "02_07",
            "url": "/faces/publico/paginas/actualizarsolicitud.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_apr",
            "name": "Aprobacion",
            "orden": "02_05",
            "url": "/faces/publico/paginas/aprobacion.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_apde",
            "name": "Aprobacion Dir.Ejecutivo",
            "orden": "NULL",
            "url": "NULL",
            "children": []
          },
          {
            "id": "mnu_req_proc_apd",
            "name": "Aprobacion Presidencia",
            "orden": "02_06",
            "url": "/faces/publico/paginas/aprobaciondirejecutivo.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_csl",
            "name": "Crear Solicitudes",
            "orden": "02_01",
            "url": "/faces/publico/paginas/solicitud.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_pap",
            "name": "PreAprobacion",
            "orden": "02_02",
            "url": "/faces/publico/paginas/prerevision.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_tab",
            "name": "Tabulaciones",
            "orden": "02_09",
            "url": "/faces/publico/paginas/solicitudesTab.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_tic",
            "name": "Tipo de Compra",
            "orden": "02_08",
            "url": "/faces/publico/paginas/tipocompra.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_vod",
            "name": "V.B Direccion/Gerencia",
            "orden": "02_04",
            "url": "/faces/publico/paginas/revisiondirejecutivo.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_vob",
            "name": "Visto Bueno",
            "orden": "02_03",
            "url": "/faces/publico/paginas/revision.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_vibo",
            "name": "Visto Bueno Costos Y Presupuesto",
            "orden": "02_10",
            "url": "/faces/publico/paginas/revisionpresupuesto.jsp",
            "children": []
          },
          {
            "id": "mnu_req_proc_vode",
            "name": "Visto Bueno Director Ejecutivo",
            "orden": "NULL",
            "url": "NULL",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_req_info",
        "name": "Informes",
        "orden": "03",
        "url": "",
        "children": [
          {
            "id": "mnu_req_info_cop",
            "name": "Consolidado por Producto",
            "orden": "03_01",
            "url": "/faces/publico/paginas/informe_consolidacion.jsp",
            "children": []
          },
          {
            "id": "mnu_req_info_cou",
            "name": "Consolidado por Ubicacion",
            "orden": "03_02",
            "url": "/faces/publico/paginas/informe_consolidacion_ubi.jsp",
            "children": []
          },
          {
            "id": "mnu_req_info_req",
            "name": "Requisiciones",
            "orden": "03_03",
            "url": "/faces/publico/paginas/informe_requisiciones.jsp",
            "children": []
          },
          {
            "id": "mnu_req_info_ret",
            "name": "Requisiciones Ampliado",
            "orden": "03_04",
            "url": "/faces/publico/paginas/informe_requisicionesampliado.jsp",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_req_ayud",
        "name": "Ayuda",
        "orden": "04",
        "url": "",
        "children": []
      },
      {
        "id": "mnu_req_sali",
        "name": "Salir",
        "orden": "05",
        "url": "/faces/publico/paginas/inicio.jsp",
        "children": []
      }
    ]
  },
  {
    "code": "acf",
    "name": "Activos Fijos",
    "items": [
      {
        "id": "mnu_acf_conf",
        "name": "Configuración",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_acf_conf_conu",
            "name": "Control de numeración",
            "orden": "01_04",
            "url": "../configuracion/controlnumeracion.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_enlc",
            "name": "Enlace contable",
            "orden": "01_03",
            "url": "../configuracion/enlacecontable.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_grup",
            "name": "Grupos de activos y elementos",
            "orden": "01_01",
            "url": "../configuracion/grupoactivoelemento.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_invi",
            "name": "Inventario inicial",
            "orden": "01_06",
            "url": "../configuracion/inventarioinicial.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_marc",
            "name": "Marcas y modelos",
            "orden": "01_05",
            "url": "../configuracion/marcaymodelo.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_movi",
            "name": "Movimientos de activos fijos",
            "orden": "01_02",
            "url": "../configuracion/movimientosactivosfijos.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_ores",
            "name": "Otros responsables de activos fijos",
            "orden": "01_07",
            "url": "../configuracion/otroresponsable.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_reac",
            "name": "Reclasificación de activos fijos",
            "orden": "01_08",
            "url": "../configuracion/reclasificacionactivos.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_conf_ubpu",
            "name": "Ubicaciones por usuario",
            "orden": "01_09",
            "url": "../configuracion/ubicacionesusuario.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_acf_regi",
        "name": "Registro",
        "orden": "02",
        "url": " ",
        "children": [
          {
            "id": "mnu_acf_regi_adic",
            "name": "Adiciones y Mejoras",
            "orden": "02_04",
            "url": "../registro/adicionesymejoras.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_regi_asig",
            "name": "Asignación a Responsable",
            "orden": "02_02",
            "url": "../registro/asignacionresponsable.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_regi_fich",
            "name": "Ficha de Activo",
            "orden": "02_01",
            "url": "../registro/fichaactivo.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_regi_mser",
            "name": "Mantenimiento y Servicios",
            "orden": "02_05",
            "url": "../registro/mantenimientoservicio.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_regi_pseg",
            "name": "Pólizas de Seguro",
            "orden": "02_03",
            "url": "../registro/polizaseguro.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_acf_proc",
        "name": "Procesos",
        "orden": "03",
        "url": " ",
        "children": [
          {
            "id": "mnu_acf_proc_baja",
            "name": "Baja de Inventario",
            "orden": "03_12",
            "url": "../procesos/bajainventario.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_cont",
            "name": "Contabilizar",
            "orden": "03_13",
            "url": "../procesos/contabilizar.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_depr",
            "name": "Depreciación",
            "orden": "03_09",
            "url": "../procesos/depreciacion.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_hist",
            "name": "Depreciación e Inflación Histórico",
            "orden": "03_14",
            "url": "../procesos/depreciacioninflahistorico.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_dema",
            "name": "Depreciación Manual",
            "orden": "03_16",
            "url": "../procesos/depreciacionmanual.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_debo",
            "name": "Devolucion a bodega",
            "orden": "03_15",
            "url": "../procesos/devolucionbodega.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_devp",
            "name": "Devolución a Proveedor",
            "orden": "03_10",
            "url": "../procesos/devolucionaproveedor.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_dove",
            "name": "Donaciones y Ventas",
            "orden": "03_11",
            "url": "../procesos/donacionyventa.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_ende",
            "name": "Ingreso Acumulado del Activo",
            "orden": "03_06",
            "url": "../procesos/ingresoacumulactivo.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_icxp",
            "name": "Interfaz Ordenes de Pago",
            "orden": "03_02",
            "url": "../procesos/ordenespago.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_pres",
            "name": "Préstamo de Activos",
            "orden": "03_08",
            "url": "../procesos/prestamoydevolucionactivo.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_bicu",
            "name": "Recepción de Bienes en Custodia",
            "orden": "03_04",
            "url": "../procesos/recepcionbienescustodia.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_invc",
            "name": "Recepción de Comodatos",
            "orden": "03_03",
            "url": "../procesos/recepcioncomodato.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_rcom",
            "name": "Recepción de Compra",
            "orden": "03_01",
            "url": "../procesos/recepcioncompra.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_rdon",
            "name": "Recepción de Donación",
            "orden": "03_05",
            "url": "../procesos/recepciondonacion.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_proc_tras",
            "name": "Traslado de Activos",
            "orden": "03_07",
            "url": "../procesos/trasladoactivos.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_acf_info",
        "name": "Informes",
        "orden": "04",
        "url": " ",
        "children": [
          {
            "id": "mnu_acf_info_exis",
            "name": "Existencias de activos",
            "orden": "04_01",
            "url": "../informes/existenciaactivo.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_info_inde",
            "name": "Inventario Detallado Activos Fijos",
            "orden": "04_05",
            "url": "../informes/informeinventariodetalladoacf.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_info_movi",
            "name": "Movimiento de Activos",
            "orden": "04_02",
            "url": "../informes/movimientoactivo.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_info_tras",
            "name": "Traslados Consolidados",
            "orden": "04_03",
            "url": "../informes/trasladoconsolidados.xhtml",
            "children": []
          },
          {
            "id": "mnu_acf_info_vepo",
            "name": "Vencimiento de pólizas",
            "orden": "04_04",
            "url": "../informes/vencimientopolizas.xhtml",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "adm",
    "name": "Admisiones",
    "items": [
      {
        "id": "mnu_Adm_Proc",
        "name": "Procesos",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_Adm_Proc_admc",
            "name": "Administración de camas",
            "orden": "01_01",
            "url": "../admcama/admcama.xhtml ",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_onco",
            "name": "Resolución 247",
            "orden": "01_03",
            "url": "../estadistica/resolucion247.xhtml",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_reso",
            "name": "Resolución 4505",
            "orden": "01_02",
            "url": "../estadistica/resolucion4505.xhtml",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Dere",
            "name": "Actualizar derechos",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adm_proc_dere_arch",
                "name": "Archivo de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_proc_dere_conf",
                "name": "Configuración de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_proc_dere_cons",
                "name": "Consulta de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_proc_dere_impo",
                "name": "Importación de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_Adm_Proc_Vinc",
            "name": "Agregar vinculaciones a la atención del paciente",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Aler",
            "name": "Alertas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Aten",
            "name": "Atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_audi",
            "name": "Auditoría",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Auto",
            "name": "Autorizaciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Cate",
            "name": "Cambiar Tipo de Atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_csuc",
            "name": "Cambio Sucursal",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Cita",
            "name": "Citas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_csau",
            "name": "Consultar Cambio de Sucursal",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_ImMa",
            "name": "Impresión de Manillas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_ImRo",
            "name": "Impresión de Rótulo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_nota",
            "name": "Notas Administrativas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Proc_Tras",
            "name": "Traslados",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_adm_auto",
        "name": "Autorizaciones",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_adm_auto_admi",
            "name": "Administración",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adm_auto_admi_aiur",
                "name": "Atenciones iniciales de Urgencias",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_auto_admi_idbe",
                "name": "Inconsistencias en las DB de entidades pagadoras",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_auto_admi_soli",
                "name": "Solicitudes de Autorización",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_adm_auto_auto",
            "name": "Autorizaciones a Pacientes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_adm_auto_autr",
            "name": "Formatos de Autorizaciones",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adm_auto_autr_inf1",
                "name": "Inconsistencias en DB de Entidad Respons de Pago",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_auto_autr_inf2",
                "name": "Informe de la atención inicial de Urgencias",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_auto_autr_inf3",
                "name": "Solicitud Autorización de Servicios de Salud",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "mnu_Adm_Conf",
        "name": "Configuracion",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_Adm_Conf_camb",
            "name": "Cambio de Paciente",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Conf_Clie",
            "name": "Pacientes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Conf_Even",
            "name": "Eventos Catastroficos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Conf_Secc",
            "name": "Habitaciones y camas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Conf_TaBa",
            "name": "Tablas Basicas...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Conf_TiAt",
            "name": "Tipos de Atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Conf_CEXC",
            "name": "Centros de Excelencia",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_Adm_Info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_Adm_Info_Cens",
            "name": "Censo Diario de Pacientes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_CeAm",
            "name": "Certificado de Ambulancias",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_adm_info_acci",
            "name": "Certificado de Atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_adm_info_ProV",
            "name": "Contratos Próximos A Vencer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_DxSe",
            "name": "Dias de Estancia por servicio(Ubicacion)",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_EDia",
            "name": "Egresos por Diagnostico",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_EAte",
            "name": "Estado de las Atenciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Esta",
            "name": "Estancia",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_EvCa",
            "name": "Formato de Reclamación por Evento Catastrófico",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Soat",
            "name": "Formato de Reclamación SOAT",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_adm_info_autr",
            "name": "Formatos de Autorizaciones",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adm_info_autr_inf1",
                "name": "Inconsistencias en DB de Entidad Respons de Pago",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_info_autr_inf2",
                "name": "Informe de la atención inicial de Urgencias",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adm_info_autr_inf3",
                "name": "Solicitud Autorización de Servicios de Salud",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_Adm_Info_Furs",
            "name": "Formularios Unicos de Reclamación",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_Adm_Info_Furs_Furi",
                "name": "Furips",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Adm_Info_Furs_Arch",
                "name": "Generación Archivos Planos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_Adm_Info_Gene",
            "name": "Generador de Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_reso",
            "name": "Generar archivo resolucion 4505",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Auto",
            "name": "Informe de Autorizaciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Prea",
            "name": "Informe Preadmisiones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Ingr",
            "name": "Ingresos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_PaMe",
            "name": "numero de Pacientes atendidos por médico",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Orde",
            "name": "Orden por Habitacion",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Otro",
            "name": "Otros...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_pdda",
            "name": "Pacientes Dados de Alta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_PEgr",
            "name": "Pacientes Egresados por servicios",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_PPen",
            "name": "Pacientes Pendientes por Cama",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_PEvC",
            "name": "Pacientes por Evento Catastrófico",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Repo",
            "name": "Personalizar Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_UsuS",
            "name": "Producción de usuarios del Sistema",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_eser",
            "name": "Resumen de egreso por ubicacion",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Info_Gast",
            "name": "Certificado Gastos Soat",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_Adm_Ingr",
        "name": "Ingresos por Empresa",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_Adm_Ingr_Empr",
            "name": "Ingresos por Empresa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Adm_Ingr_Res",
            "name": "Resumen por Servicio",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "fed",
    "name": "Modulo de Facturacion Electronica",
    "items": [
      {
        "id": "mnu_fed_fact",
        "name": "Facturas",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_fact_busc",
            "name": "Buscador",
            "orden": "01_04",
            "url": "/views/facturas/buscadorfacturas.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_fact_doac",
            "name": "Documentos Actuales",
            "orden": "01_01",
            "url": "/views/facturas/facturasactuales.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_fact_dope",
            "name": "Documentos Pendientes",
            "orden": "01_02",
            "url": "/views/facturas/facturaspendientes.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_fact_dore",
            "name": "Documentos Rechazados",
            "orden": "01_03",
            "url": "/views/facturas/facturasrechazadas.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_docu",
        "name": "Documentos",
        "orden": "02",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_docu_budo",
            "name": "Buscador",
            "orden": "02_02",
            "url": "/views/adquiriente/buscadordocumentos.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_docu_dope",
            "name": "Documentos Pendientes",
            "orden": "02_01",
            "url": "/views/adquiriente/documentospendientes.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_nocr",
        "name": "Notas Crédito",
        "orden": "02",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_nocr_busc",
            "name": "Buscador",
            "orden": "02_03",
            "url": "/views/notascredito/buscadornotascredito.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_nocr_doac",
            "name": "Documentos Actuales",
            "orden": "02_01",
            "url": "/views/notascredito/notascreditoactuales.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_nocr_dope",
            "name": "Documentos Pendientes",
            "orden": "02_02",
            "url": "/views/notascredito/notascreditopendientes.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_node",
        "name": "Notas Débito",
        "orden": "03",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_node_busc",
            "name": "Buscador",
            "orden": "03_03",
            "url": "/views/notasdebito/buscadornotasdebito.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_node_doac",
            "name": "Documentos Actuales",
            "orden": "03_01",
            "url": "/views/notasdebito/notasdebitoactuales.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_node_dope",
            "name": "Documentos Pendientes",
            "orden": "03_02",
            "url": "/views/notasdebito/notasdebitopendientes.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_admi",
        "name": "Administrador",
        "orden": "04",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_admi_crus",
            "name": "Administrar Usuarios",
            "orden": "04_01",
            "url": "/views/administrador/adminusuarios.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_admi_nume",
            "name": "Consulta Resolución Numeración",
            "orden": "04_03",
            "url": "/views/administrador/consultaresolucionnumeracion.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_admi_terc",
            "name": "Envío a terceros",
            "orden": "04_04",
            "url": "/views/administrador/envioterceros.xhtml",
            "children": []
          },
          {
            "id": "mnu_fed_admi_docu",
            "name": "Verificación Documentos",
            "orden": "04_02",
            "url": "/views/administrador/verificaciondocumentos.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_grip",
        "name": "RIPS",
        "orden": "05",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_grip_trip",
            "name": "Trazabilidad Rips",
            "orden": "05_01",
            "url": "/views/rips/trazabilidadrips.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_crsa",
        "name": "Cifrado RSA",
        "orden": "06",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_crsa_sofa",
            "name": "Cifrado RSA Soporte Facturas",
            "orden": "06_01",
            "url": "/views/crsa/soportefacturas.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fed_frad",
        "name": "Radicación Automatizada",
        "orden": "07",
        "url": "",
        "children": [
          {
            "id": "mnu_fed_frad_trad",
            "name": "Trazabilidad Facturas Radicadas",
            "orden": "07_01",
            "url": "/views/ripsradicacion/trazabilidadradicacionrips.xhtml",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "ciw",
    "name": "Citas Web",
    "items": [
      {
        "id": "mnu_ciw_segu",
        "name": "Seguridad",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_ciw_segu_pusu",
            "name": "Permisos Usuario",
            "orden": "01_01",
            "url": "/pages/seguridad/permisos_usuario/permisos_usuario.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_ciw_mtto",
        "name": "Mantenimientos",
        "orden": "02",
        "url": "",
        "children": [
          {
            "id": "mnu_ciw_mtto_amed",
            "name": "Agenda Médico",
            "orden": "02_03",
            "url": "/pages/mtto/agenda_medico/agenda_medico.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_cmas",
            "name": "Cancelación Masiva Citas",
            "orden": "02_07",
            "url": "/pages/mtto/programar_citas/programar_citas.xhtml?masivo=2",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_cons",
            "name": "Consultorios",
            "orden": "02_01",
            "url": "/pages/mtto/consultorios/consultorios.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_enre",
            "name": "Entidad Requisitos Cita",
            "orden": "02_13",
            "url": "/pages/mtto/entidadrequisitos/entidadrequisitos.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_eapp",
            "name": "Entidades\ta Visualizar en App",
            "orden": "02_08",
            "url": "/pages/mtto/entidades_app/entidades_app.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_etas",
            "name": "Exámen y Tipo de Asistencia",
            "orden": "02_09",
            "url": "/pages/mtto/examen_tas/examen_tas.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_exam",
            "name": "Exámenes",
            "orden": "02_02",
            "url": "/pages/mtto/examenes/examenes.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_gdli",
            "name": "Grupo de Lista",
            "orden": "02_11",
            "url": "/pages/mtto/grupodelista/grupodelista.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_lide",
            "name": "Listas Desplegables",
            "orden": "02_12",
            "url": "/pages/mtto/listasdesplegables/listasdesplegables.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_pcte",
            "name": "Pacientes",
            "orden": "02_05",
            "url": "/pages/mtto/pacientes/pacientes.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_pmed",
            "name": "Planilla Médico",
            "orden": "02_04",
            "url": "/pages/mtto/planilla_medico/planilla_medico.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_expr",
            "name": "Relación Exámenes y Productos",
            "orden": "02_14",
            "url": "/pages/mtto/examenproducto/examenproducto.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_rtpe",
            "name": "Relación Tercero, Plan y Exámen",
            "orden": "02_10",
            "url": "/pages/mtto/relacion_terpla/relacion_terpla.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_tmas",
            "name": "Traslado Masivo Citas",
            "orden": "02_06",
            "url": "/pages/mtto/programar_citas/programar_citas.xhtml?masivo=1",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_pcit",
            "name": "Programación Citas",
            "orden": "03",
            "url": "/pages/mtto/programar_citas/programar_citas.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_esci",
            "name": "Novedades y Consultas de Citas Médicas",
            "orden": "04",
            "url": "/pages/mtto/estado_citas/estado_citas.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_cipe",
            "name": "Citas Pendientes del Día",
            "orden": "05",
            "url": "/pages/mtto/citas_pendientes/citas_pendientes.xhtml",
            "children": []
          },
          {
            "id": "mnu_ciw_mtto_cire",
            "name": "Informes",
            "orden": "06",
            "url": "/pages/mtto/informes/informes.xhtml",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "ven",
    "name": "Ventas",
    "items": [
      {
        "id": "mnu_ven_proc",
        "name": "Procesos",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_ven_proc_mipr_dipr",
            "name": "Ambulatorios",
            "orden": "01_07_02",
            "url": "/facturacion/ambulatorios.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_fazv",
            "name": "AZV",
            "orden": "01_01",
            "url": "../azv/pacientesazv.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cfac",
            "name": "Control Factura",
            "orden": "01_04",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_cfac_bufa",
                "name": "Búsqueda de Facturas",
                "orden": "01_04_02",
                "url": "../objeciones/trazabilidadfactura.xhtml",
                "children": []
              },
              {
                "id": "mnu_ven_proc_cfac_refa",
                "name": "Recepción de Facturas",
                "orden": "01_04_01",
                "url": "../objeciones/recepcionfacturas.xhtml",
                "children": []
              },
              {
                "id": "mnu_ven_proc_cfac_trfa",
                "name": "Reporte Trazabilidad de Facturas",
                "orden": "01_04_03",
                "url": "../objeciones/reportetrazabilidadfacturas.xhtml",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_rass",
            "name": "Facturación electrónica - RASS",
            "orden": "01_03",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_rass_cons",
                "name": "Consultas",
                "orden": "01_03_03",
                "url": "../facturacion/consultafacturarass.xhtml",
                "children": []
              },
              {
                "id": "mnu_ven_proc_rass_rfac",
                "name": "Facturación",
                "orden": "01_03_01",
                "url": "../facturacion/facturacionrass.xhtml",
                "children": []
              },
              {
                "id": "mnu_ven_proc_rass_rncr",
                "name": "Notas Crédito",
                "orden": "01_03_02",
                "url": "../notacredito/notascreditorass.xhtml",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_mipr_hour",
            "name": "Hospitalarios-Urgencias",
            "orden": "01_07_03",
            "url": "/facturacion/hospitalariourgencias.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_elim",
            "name": "Inhabilitar movimientos",
            "orden": "01_05_04",
            "url": "../objeciones/eliminacionmovimiento.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_inpa",
            "name": "Inhabilitar paquetes",
            "orden": "01_06",
            "url": "../objeciones/inhabilitarpaquete.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_neps",
            "name": "Nueva EPS",
            "orden": "01_02",
            "url": "../archivosplanos/nuevaeps.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_obje",
            "name": "Objeciones",
            "orden": "01_05",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_obje_caob",
                "name": "Cargue de Objeciones",
                "orden": "01_05_01",
                "url": "../objeciones/cargueobjecciones.xhtml",
                "children": []
              },
              {
                "id": "mnu_ven_proc_obje_conc",
                "name": "Conciliaciones",
                "orden": "01_05_03",
                "url": "../objeciones/conciliaciones.xhtml",
                "children": []
              },
              {
                "id": "mnu_ven_proc_obje_reob",
                "name": "Respuesta a Objeciones",
                "orden": "01_05_02",
                "url": "../objeciones/respuestaobjeciones.xhtml",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_REHG",
            "name": "Registro Hoja de Gasto",
            "orden": "01_08",
            "url": "../generales/reportehojadegasto.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_mipr_rfac",
            "name": "Reporte de Facturación",
            "orden": "01_07_04",
            "url": "/facturacion/reportefacturaccion.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_mipr_valt",
            "name": "Validar Token",
            "orden": "01_07_01",
            "url": "/facturacion/validartoken.xhtml",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cvma",
            "name": "Cambio masivo de Vinculación",
            "orden": "01",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_rvpe",
            "name": "Reclasificación de Ventas Por Esor",
            "orden": "01",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_ecat",
            "name": "Archivos Planos ECAT",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_asci",
            "name": "asignar citas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_aspq",
            "name": "Asociación de Paquetes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_aten",
            "name": "Atenciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_avim",
            "name": "Autorizar venta productos valor menor costo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cprq",
            "name": "Cambiar Procedimento  Qx",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cpro",
            "name": "Cambiar Procedimento No Qx",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cate",
            "name": "cambioaten",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cita",
            "name": "Citas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_FPGP",
            "name": "Clasificación Ventas PGP cambio Fecha Movimiento",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_clie",
            "name": "Clientes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_cont",
            "name": "Contabilizacion",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_coti",
            "name": "Cotizaciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_dsvl",
            "name": "Desvincular vales asociados",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_efac",
            "name": "Estado Fac Atencion",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_fact",
            "name": "Facturacion",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_fact_rela",
                "name": "En Relacion",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_ven_proc_fact_rela_cpgp",
                    "name": "Consolidado por Sede",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_ven_proc_fact_rela_acti",
                    "name": "Por Actividad",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_ven_proc_fact_rela_capi",
                    "name": "Por Capitación",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_ven_proc_fact_rela_PITP",
                    "name": "Por PITP",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_ven_proc_fact_gpdf",
                "name": "GeneraPdf",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_fact_Parc",
                "name": "Parcial",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_fact_acti",
                "name": "Por Actividad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_fact_paqu",
                "name": "Por Paquete",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_fact_vfac",
                "name": "Ver factura",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_canv",
            "name": "Gestión de Causales de No Venta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_Intc",
            "name": "Interfaz Contable",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_Intc_anul",
                "name": "Anular Relación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_coic",
                "name": "Consultar Comprobante",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_core",
                "name": "Consultar Relaciones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_expo",
                "name": "Exportar Relación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_genr",
                "name": "Generar Anulada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_inex",
                "name": "Importación - Exportación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_revi",
                "name": "Informes de Revisión",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_iope",
                "name": "Ingresos Operacionales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_Intc_cont",
                "name": "Nueva Relación",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_nota",
            "name": "Nota Credito",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_nota_cred",
                "name": "Nota Crdito",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_nota_cxc",
                "name": "Nota Crdito Parcial Cartera",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_noad",
            "name": "Notas Administrativas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_notd",
            "name": "Notas Debito",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_proc",
            "name": "Procedimientos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_rdes",
            "name": "Registrar descuentos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_regn",
            "name": "Registro Novedades",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_regn_clie",
                "name": "Clientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_regn_terc",
                "name": "Terceros",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_rips",
            "name": "Rips",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_proc_rips_edic",
                "name": "Edición",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_rips_enla",
                "name": "Enlazar Ventas - HCE",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_rips_Falt",
                "name": "Faltantes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_rips_gene",
                "name": "Generar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_proc_rips_reca",
                "name": "Recalcular Rips",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_proc_tvhm",
            "name": "Transferencia de ventas de hijo a madre",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_tven",
            "name": "Trasladar Venta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_tras",
            "name": "Traslados",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_vete",
            "name": "Venta Tercero",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_vent",
            "name": "Ventas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_vecx",
            "name": "Ventas Cx",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_vpgp",
            "name": "Clasificaciòn ventas contrato PGP",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_vpit",
            "name": "Clasificación ventas contrato PITP",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_peep",
            "name": "Creación Integral -Cliente-Atención-Venta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_PITP",
            "name": "Por PITP",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_rmtc",
            "name": "Relación Movimientos Tasa de Cambio a Liquidar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_proc_vlpe",
            "name": "Ventas de Laboratorio Pendientes",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_ven_conf",
        "name": "Configuración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_ven_conf_acta",
            "name": "Activar Cambio Tarifa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_actp",
            "name": "Actualiza Productos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_ctpc",
            "name": "Condiciones de Tarifa por Contrato",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_ctar",
            "name": "Condiciones Tarifa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_ctpa",
            "name": "Condiciones Tarifa por Atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_ctpl",
            "name": "Configurar Tarifas con Base Tlista",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_desc",
            "name": "Descuentos Programa Puntos Vital",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_malt",
            "name": "Manual Alterno",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_prod",
            "name": "Productos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_tbas",
            "name": "Tablas Básicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_otar",
            "name": "Tarifas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_dtar",
            "name": "Tarifas Basicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_tdes",
            "name": "Tope de descuentos mensuales",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_VSCT",
            "name": "Ventas semiautomáticas Control de Transfusión",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_conf_UCPD",
            "name": "Ubicaciones de Consumo por Destinos",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_ven_info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_ven_info_conf",
            "name": "Configurar Reporte",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_ides",
            "name": "Descuentos concedidos a particulares",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_fcpg",
            "name": "Factura consolidada por Sede",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_fact",
            "name": "Facturas del mes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_gene",
            "name": "Generador Reporte",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_aact",
            "name": "Informe Atenciones Activas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_proV",
            "name": "Informe Contratos Proximos a Vencer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_iCos",
            "name": "Informe Costo Mayor a Valor Venta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_appr",
            "name": "Informe de A. Pendientes por Refacturar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_cont",
            "name": "Informe de Contratos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_ifpa",
            "name": "Informe Plan Atención",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_hono",
            "name": "Informe por Responsables",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_iapo",
            "name": "Informes Apoyo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_iaut",
            "name": "Informes Autorizaciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_ctbl",
            "name": "Informes Contables",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_iurg",
            "name": "Informes Urgencias",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_vent",
            "name": "Informes Ventas",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_ven_info_vent_enti",
                "name": "Informe de Ventas por Entidad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_info_vent_esta",
                "name": "Informe Venta de Estancia",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_ven_info_vent_cpgp",
                "name": "Clasificaciòn de Ventas Contrato PGP",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_ven_info_pdda",
            "name": "Pacientes Dados de Alta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_rfac",
            "name": "Relaciones de facturas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_itar",
            "name": "Tarifas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_vusu",
            "name": "Ventas Usuario",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_veco",
            "name": "Verificador Enlace Contable",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_fdpq",
            "name": "Facturación Detallada por Paquete",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_IVPQ",
            "name": "Informe de Atenciones No Facturadas con Venta Paqu",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_VPPQ",
            "name": "Informe de ventas pendientes de paquetes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ven_info_VPTA",
            "name": "Informe Ventas pendientes por Tarifa",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "fec",
    "name": "Facturación Eletrónica Compras",
    "items": [
      {
        "id": "mnu_fec_docs",
        "name": "Documento Soporte",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_fec_docs_busc",
            "name": "Buscador",
            "orden": "01_03",
            "url": "/views/documentos/buscadordocumentos.xhtml",
            "children": []
          },
          {
            "id": "mnu_fec_docs_doac",
            "name": "Documentos Actuales",
            "orden": "01_01",
            "url": "/views/documentos/documentosactuales.xhtml",
            "children": []
          },
          {
            "id": "mnu_fec_docs_dope",
            "name": "Documentos Pendientes",
            "orden": "01_02",
            "url": "/views/documentos/documentospendientes.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fec_noaj",
        "name": "Nota de Ajuste",
        "orden": "02",
        "url": "",
        "children": [
          {
            "id": "mnu_fec_noaj_busc",
            "name": "Buscador",
            "orden": "02_03",
            "url": "/views/notasajuste/notasajustebuscador.xhtml",
            "children": []
          },
          {
            "id": "mnu_fec_noaj_doac",
            "name": "Documentos Actuales",
            "orden": "02_01",
            "url": "/views/notasajuste/notasajusteactuales.xhtml",
            "children": []
          },
          {
            "id": "mnu_fec_noaj_dope",
            "name": "Documentos Pendientes",
            "orden": "02_02",
            "url": "/views/notasajuste/notasajustependientes.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_fec_admc",
        "name": "Administrador",
        "orden": "03",
        "url": "",
        "children": [
          {
            "id": "mnu_fec_admc_vedo",
            "name": "Verificación Documentos",
            "orden": "03_01",
            "url": "/views/administrador/verificaciondocumentos.xhtml",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "nel",
    "name": "Nómina Electrónica",
    "items": [
      {
        "id": "mnu_nel_docs",
        "name": "Documento Soporte",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_nel_docs_busc",
            "name": "Buscador",
            "orden": "01_03",
            "url": "/vista/documentos/buscadordocumentos.xhtml",
            "children": []
          },
          {
            "id": "mnu_nel_docs_doac",
            "name": "Documentos Actuales",
            "orden": "01_01",
            "url": "/vista/documentos/documentosactuales.xhtml",
            "children": []
          },
          {
            "id": "mnu_nel_docs_dope",
            "name": "Documentos Pendientes",
            "orden": "01_02",
            "url": "/vista/documentos/documentospendientes.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_nel_dsna",
        "name": "Documento Soporte Nota Ajuste",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_nel_dsna_bdna",
            "name": "Buscador",
            "orden": "01_03",
            "url": "/vista/notaajuste/buscadordocumentosNotaAjusteNomina.xhtml",
            "children": []
          },
          {
            "id": "mnu_nel_dsna_dana",
            "name": "Documentos Actuales",
            "orden": "01_01",
            "url": "/vista/notaajuste/documentosactualesNotaAjusteNomina.xhtml",
            "children": []
          },
          {
            "id": "mnu_nel_dsna_dpna",
            "name": "Documentos Pendientes",
            "orden": "01_02",
            "url": "/vista/notaajuste/documentospendientesNotaAjusteNomina.xhtml",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "vit",
    "name": "Vital",
    "items": [
      {
        "id": "mnu_vit_conf",
        "name": "Configuración",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_vit_conf_basi",
            "name": "Tablas Básicas",
            "orden": "01_01",
            "url": "../configuracion/tablasbasicas.xhtml",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_vit_proc",
        "name": "Procesos",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_vit_proc_coac",
            "name": "Configuración de Acceso",
            "orden": "01_08",
            "url": "../administracion/configaccesoarbolhce.xhtml",
            "children": []
          },
          {
            "id": "mnu_vit_proc_mmas",
            "name": "Envío Mensaje Masivo",
            "orden": "01_09",
            "url": "../administracion/mensajemasivo.xhtml",
            "children": []
          },
          {
            "id": "mnu_vit_proc_inde",
            "name": "Indexar",
            "orden": "01_01",
            "url": "../administracion/indexacion.xhtml",
            "children": []
          },
          {
            "id": "mnu_vit_proc_medi",
            "name": "Medicamentos",
            "orden": "01_04",
            "url": "../administracion/medicamentosadmin.xhtml",
            "children": []
          },
          {
            "id": "mnu_vit_proc_vefr",
            "name": "Movimientos Pendientes Farmacia Robotizada",
            "orden": "01_05",
            "url": "../administracion/ventafarmaciarobotizada.xhtml",
            "children": []
          },
          {
            "id": "mnu_vit_proc_mens",
            "name": "Procesos",
            "orden": "01_02",
            "url": "../administracion/mensajeadmin.xhtml",
            "children": [
              {
                "id": "mnu_vit_proc_mens_invf",
                "name": "Inventario de Farmacia Robotizada",
                "orden": "01_06",
                "url": "../administracion/inventariomedicamentos.xhtml",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_vit_proc_ubic",
            "name": "Ubicaciones",
            "orden": "01_03",
            "url": "../administracion/ubicacionesadmin.xhtml",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "sum",
    "name": "Suministros",
    "items": [
      {
        "id": "mnu_sum_proc",
        "name": "Procesos",
        "orden": "01",
        "url": "",
        "children": [
          {
            "id": "mnu_sum_proc_soli",
            "name": "Solicitudes",
            "orden": "01",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_soli_epgr",
                "name": "Envío de Productos Gabinete",
                "orden": "01_02",
                "url": "../GabineteRFID/envioproductos.xhtml",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_eugr",
                "name": "Envío de Ubicaciones Gabinete",
                "orden": "01_01",
                "url": " ../GabineteRFID/envioubicaciones.xhtml",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_asol",
                "name": "Aprobar solicitud",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_esol",
                "name": "Cambiar estado solicitud",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_cons",
                "name": "Consultas",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_sum_proc_soli_cons_csol",
                    "name": "Consolidados",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_soli_cons_soli",
                    "name": "Solicitudes",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_soli_cons_Stoc",
                    "name": "Stock",
                    "orden": "",
                    "url": "",
                    "children": [
                      {
                        "id": "mnu_sum_proc_soli_cons_Stoc_sobr",
                        "name": "Productos de mas en el Stock",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_sum_proc_soli_cons_Stoc_prod",
                        "name": "Productos del Stock",
                        "orden": "",
                        "url": "",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "mnu_sum_proc_soli_soli",
                "name": "Crear solicitud",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_bion",
                "name": "Crear Solicitud Bionexo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_dmam",
                "name": "Dispensación de Ordenes Ambulatorias",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_sdev",
                "name": "Solicitud de devoluciones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_spen",
                "name": "Solicitudes pendientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_suge",
                "name": "Solicitudes Sugeridas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_soli_vsol",
                "name": "Visto bueno solicitudes",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_sum_proc_comp",
            "name": "Compras",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_comp_esoc",
                "name": "Cambiar estado orden",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_comp_csol",
                "name": "Consolidar solicitudes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_comp_cons",
                "name": "Consultas...",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_sum_proc_comp_cons_orde",
                    "name": "Ordenes",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_comp_cons_prov",
                    "name": "Proveedores",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_sum_proc_comp_coti",
                "name": "Cotizaciones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_comp_orba",
                "name": "Orden de Bonificación Acumuladas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_comp_orde",
                "name": "Orden de compra",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_comp_ocac",
                "name": "Orden de compra activo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_comp_OCBX",
                "name": "Subir Convenios BIONEXO",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_sum_proc_info",
            "name": "Informes",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_info_cmsm",
                "name": "Achivo Plano Compra de Medicamentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cmed",
                "name": "Archivo Precios de Compra de Medicamentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_vmed",
                "name": "Archivo Precios de Venta de Medicamentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cons",
                "name": "Consumo",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_sum_proc_info_cons_mens",
                    "name": "Consolidado Mes a Mes",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_info_cons_cons",
                    "name": "Consumo",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_sum_proc_info_cost",
                "name": "Control de costos y rentabilidad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cont_medi_paci",
                "name": "Control de Medicamentos Por Paciente",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cmpp",
                "name": "Control medicamentos por paciente",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_conv",
                "name": "Convenio proveedor",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cven",
                "name": "Convenios próximos a vencer",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_exis",
                "name": "existencia de productos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cong",
                "name": "Existencias de Consignaciones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_gene",
                "name": "Generador de reportes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_open",
                "name": "Ind Ordenes pendientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_jinv",
                "name": "Juego de inventario",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_ppro",
                "name": "Movimiento de productos por proveedor",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_mord",
                "name": "Movimientos de ordenes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_nove",
                "name": "Novedades proveedor",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_eord",
                "name": "Ordenes por estado",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_pere",
                "name": "Personalizar reportes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_rota",
                "name": "Rotación de productos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_sapr",
                "name": "solicitudes aprobadas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_spen",
                "name": "Solicitudes pendientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_sest",
                "name": "solicitudes por estado",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_venl",
                "name": "Verificador Enlace Contable",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_vmsm",
                "name": "Archivo Plano Venta de Medicamentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_cecc",
                "name": "Cambio de sucursal por Ccosto",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_PROF",
                "name": "Productos",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_sum_proc_info_PROF_ACLI",
                    "name": "Actualizar Listado",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_info_PROF_PAOF",
                    "name": "Productos a Ofertar",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_sum_proc_info_prtp",
                "name": "Productos Traídos por Paciente",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_info_varc",
                "name": "Variación de Costo",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_sum_proc_inte",
            "name": "Interfaz Contable",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_inte_minv",
                "name": "Movimiento de inventario",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inte_opag",
                "name": "Ordenes de Pago",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_sum_proc_inve",
            "name": "Inventarios",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_inve_amov",
                "name": "Anular Movimiento",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_avim",
                "name": "Autorizar venta productos valor menor costo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_cons",
                "name": "Consultas",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_sum_proc_inve_cons_movi",
                    "name": "consulta movimientos",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_inve_cons_kard",
                    "name": "consulta tarjeta kardex",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_sum_proc_inve_cons_exis",
                    "name": "Existencias",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_sum_proc_inve_cort",
                "name": "Corte de inventario",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_ecan",
                "name": "Entrega y Devolución de Canastas de Cirugía",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_etie",
                "name": "Impresion de Etiquetas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_etiq",
                "name": "Impresión de etiquetas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_fisi",
                "name": "Inventario físico",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_pcan",
                "name": "Preparación de Canastas de Cirugía",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_tran",
                "name": "Transacciones de inventario",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_meex",
                "name": "Impresión de etiquetas-Medicamentos externos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_ivfr",
                "name": "Impresion de vales de Farmacia Robotizada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_inve_rnir",
                "name": "Recalcular nivelres de inventario",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_sum_proc_prov",
            "name": "Proveedores",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_prov_cali",
                "name": "Calificación proveedor",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_prov_conv",
                "name": "Consulta convenio proveedores",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_prov_List",
                "name": "Consulta Lista Proveedor",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_prov_ccon",
                "name": "Crear Convenio proveedores",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_sum_proc_prov_nove",
                "name": "Novedades Proveedores",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_sum_proc_undo",
            "name": "Unidosis",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_sum_proc_undo_auto",
                "name": "Autorización Nutriciones Parenterales",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "mnu_sum_arch",
        "name": "Archivo",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_sum_arch_abri",
            "name": "Abrir",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_arch_elim",
            "name": "Eliminar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_arch_guar",
            "name": "Guardar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_arch_impr",
            "name": "Imprimir",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_arch_nuev",
            "name": "Nuevo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_arch_Sali",
            "name": "Salir",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_sum_ayud",
        "name": "Ayuda",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_sum_ayud_acer",
            "name": "Acerca de...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_ayud_cont",
            "name": "Contenido",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_sum_conf",
        "name": "Configuracion",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_sum_conf_actp",
            "name": "Actualiza productos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_cacx",
            "name": "Canastas para Procedimientos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_mata",
            "name": "Mantenimiento Tablas Básicas...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_modu",
            "name": "Modulos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_mous",
            "name": "Modulos - Usuarios",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_pame",
            "name": "Principios Activos de Medicamentos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_tbas",
            "name": "Tablas básicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_taus",
            "name": "Tablas básicas - Usuario",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_Tari",
            "name": "Tarifas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_conf_PPVI",
            "name": "Productos Puntos Vital",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_sum_edic",
        "name": "Edición",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_sum_edic_agre",
            "name": "Agregar Registro",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_edic_busc",
            "name": "Buscar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_edic_copi",
            "name": "Copiar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_edic_desh",
            "name": "Deshacer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_sum_edic_pega",
            "name": "Pegar",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "pdv",
    "name": "Punto de Venta",
    "items": [
      {
        "id": "mnu_pdv_Arch",
        "name": "Archivo",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_pdv_Arch_Abri",
            "name": "Abrir",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Arch_Cnfi",
            "name": "Configurar Impresión",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Arch_Elim",
            "name": "Eliminar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Arch_Guar",
            "name": "Guardar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Arch_Impr",
            "name": "Imprimir",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Arch_Nuev",
            "name": "Nuevo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Arch_Sali",
            "name": "Salir",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_pdv_Ayud",
        "name": "Ayuda",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_pdv_Ayud_Acer",
            "name": "Acerca de...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Ayud_Busc",
            "name": "Buscar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Ayud_Cont",
            "name": "Contenido",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Ayud_Indi",
            "name": "Indice",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_pdv_Conf",
        "name": "Configuración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_pdv_Conf_coin",
            "name": "Configuración de Conceptos Ingreso Vario",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_Tabl",
            "name": "Tablas Básicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_Tari",
            "name": "Tarifas por Porducto",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_clta",
            "name": "Cliente - Tarifa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_cint",
            "name": "Clientes Internacionales",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_clie",
            "name": "Clientes Orden de Pedido",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_coli",
            "name": "Conceptos de Liquidación de Facturas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Conf_prec",
            "name": "Precios Especiales",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_pdv_Edic",
        "name": "Edicion",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_pdv_Edic_Agre",
            "name": "Agragar Registro",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Busc",
            "name": "Buscar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Copi",
            "name": "Copiar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Cort",
            "name": "Cortar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Desh",
            "name": "Deshacer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Elim",
            "name": "Eliminar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Pega",
            "name": "Pegar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Edic_Refr",
            "name": "Refrescar",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_pdv_Info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_pdv_Info_Cons",
            "name": "Consultar Facturas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Info_Genr",
            "name": "Crear Reporte",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Info_Repe",
            "name": "Personalizar Reporte",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_pdv_Proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_pdv_Proc_Anul",
            "name": "Anular Factura",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_cons",
            "name": "Consultas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_coti",
            "name": "Cotizaciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_devo",
            "name": "Devoluciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_esta",
            "name": "Estadísticas de Venta",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Proc_Fact",
            "name": "Facturar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_fich",
            "name": "Ficha de Elemento",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_vmos",
            "name": "Ventas Contado",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_proc_vmay",
            "name": "Ventas Crédito",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Proc_auop",
            "name": "Autorizar Orden de Pedido",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Proc_nocr",
            "name": "Nota Crédito",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Proc_orpe",
            "name": "Orden de Pedido",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Proc_vcuo",
            "name": "Venta Cuota Moderadora",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_pdv_Proc_vser",
            "name": "Venta de Servicios",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_pdv_Vent",
        "name": "Ventana",
        "orden": "",
        "url": "",
        "children": []
      }
    ]
  },
  {
    "code": "adp",
    "name": "Administración de Personal",
    "items": [
      {
        "id": "mnu_adp_ento",
        "name": "Entorno",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_adp_ento_actm",
            "name": "Actualizar Menús",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_adp_ento_admi",
            "name": "Administración",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_ento_admi_ctra",
                "name": "Centros de Trabajo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_ceps",
                "name": "Codigos Nacionales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_dore",
                "name": "Dotación General Reglamentaria",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_eldo",
                "name": "Elementos de Dotación General",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_esca",
                "name": "Escala Salarial",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_homo",
                "name": "Homologación de Datos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_pcar",
                "name": "Perfil de Cargos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_peus",
                "name": "Permisos Requerimiento de Personal",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_plan",
                "name": "Plan de Cargos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_tcon",
                "name": "Tipos de Contrato",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_tdrf",
                "name": "Tipos de Deducibles para Retenciones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_tdoc",
                "name": "Tipos de Documentos para la Hoja de Vida",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_temp",
                "name": "Tipos de Empleado",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_tina",
                "name": "Tipos de Inactividades Laborales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_tjor",
                "name": "Tipos de Jornada Laboral",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_trie",
                "name": "Tipos de Riesgo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_crie",
                "name": "Clases de Riesgo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_admi_tesc",
                "name": "Tipos de Escalas Salariales",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_adp_ento_desa",
            "name": "Desarrollo y Talento Humano",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_ento_desa_area",
                "name": "Areas Evaluación de Desempeño",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_aspe",
                "name": "Aspectos a Verificar Referencias Laborales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_asin",
                "name": "Aspectos Inducción y Entrenamiento",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_dore",
                "name": "Dotación de Seguridad Industrial Reglamentaria",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_eldo",
                "name": "Elementos de Dotación Seguridad Industrial",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_epar",
                "name": "Estructura del Panorama de Riesgo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_fact",
                "name": "Factores Evaluación de Selección",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_rcoc",
                "name": "Registro Clínico Ocupacional",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_desa_sain",
                "name": "Subaspectos Inducción y Entrenamiento",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_adp_ento_liqu",
            "name": "Liquidación",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_ento_liqu_pcon",
                "name": "Agendas Consecutivas en Prenómina",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_back",
                "name": "Back Up Enlace Contable",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_base",
                "name": "Bases de Liquidación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_conc",
                "name": "Conceptos de Liquidación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_tabl",
                "name": "Definición de Tablas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_enla",
                "name": "Enlace Contable",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_fliq",
                "name": "Frecuencias de Liquidación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_modi",
                "name": "Modificar Última Agenda",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_ento_liqu_modi_pnom",
                    "name": "Modificar Pre nomina",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_adp_ento_liqu_pcal",
                "name": "Procedimientos de Cálculo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_pliq",
                "name": "Procesos de Liquidación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_page",
                "name": "Programar Agenda",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_cnap",
                "name": "Relación Concepto - Apropiación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_rete",
                "name": "Tabla de Retención en la Fuente",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_iman",
                "name": "Tabla Retencion IMAN",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_trac",
                "name": "Traslado de Conceptos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_ento_liqu_mleg",
                "name": "Valores Mínimos Legales",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "mnu_adp_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_adp_proc_admi",
            "name": "Administración",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_proc_admi_agad",
                "name": "Agenda Administrativa",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_cesa",
                "name": "Anticipos de Cesantías",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_camb",
                "name": "Cambios",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_proc_admi_camb_caja",
                    "name": "Cajas de Compensación Familiar",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_admi_camb_ctra",
                    "name": "Centro de Trabajo",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_admi_camb_cont",
                    "name": "Contrato",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_admi_camb_segu",
                    "name": "Entidades de Seguridad Social",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_admi_camb_fpag",
                    "name": "Forma de Pago",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_admi_camb_iden",
                    "name": "Identificación",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_admi_camb_ubic",
                    "name": "Ubicación, Cargo y Sueldo",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_adp_proc_admi_dian",
                "name": "Certificados de Ingresos y Retenciones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_cons",
                "name": "Consultas de Gestión",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_conr",
                "name": "Contratación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_cont",
                "name": "Control de Contratos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_dere",
                "name": "Deducibles de Retención",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_dota",
                "name": "Entrega Dotación General",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_enre",
                "name": "Entrevistas de retiro",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_hvid",
                "name": "Hoja de Vida",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_carg",
                "name": "Importar Novedades",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_inac",
                "name": "Inactividades Laborales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_infn",
                "name": "Información Adicional de Novedades",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_liqu",
                "name": "Liquidación de Contrato",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_nove",
                "name": "Novedades Generales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_perm",
                "name": "Permisos al Personal",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_admi_vaca",
                "name": "Vacaciones",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_adp_proc_atpe",
            "name": "Atención al Personal",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_proc_atpe_dote",
                "name": "Dotaciones Entregadas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_atpe_hlab",
                "name": "Historia Laboral",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_atpe_hvid",
                "name": "Hoja de Vida",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_atpe_inal",
                "name": "Inactividades Laborales",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_atpe_lnom",
                "name": "Liquidaciones de Nómina",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_atpe_vaca",
                "name": "Vacaciones",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_adp_proc_deta",
            "name": "Desarrollo y Talento Humano",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_proc_deta_biso",
                "name": "Bienestar Social",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_proc_deta_biso_asis",
                    "name": "Asistente de Bienestar Social",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_biso_insc",
                    "name": "Inscripción Participantes",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_biso_proa",
                    "name": "Programación Actividades",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_biso_reob",
                    "name": "Registro Observaciones",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_adp_proc_deta_capa",
                "name": "Capacitación",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_proc_deta_capa_asis",
                    "name": "Asistente de Capacitación",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_capa_eval",
                    "name": "Evaluación Aprovechamiento",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_capa_insc",
                    "name": "Inscripción Participantes",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_capa_prog",
                    "name": "Programación Capacitación",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_adp_proc_deta_evde",
                "name": "Evaluación de Desempeño",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_deta_repe",
                "name": "Requerimiento de personal",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_deta_saoc",
                "name": "Salud Ocupacional",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_proc_deta_saoc_metr",
                    "name": "Medicina del Trabajo",
                    "orden": "",
                    "url": "",
                    "children": [
                      {
                        "id": "mnu_adp_proc_deta_saoc_metr_asis",
                        "name": "Asistente Medicina de Trabajo",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_metr_hcoc",
                        "name": "Historia Clínica Ocupacional",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_metr_inpa",
                        "name": "Inscripción Participantes",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_metr_proa",
                        "name": "Programación Actividades",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_metr_reob",
                        "name": "Registro Observaciones",
                        "orden": "",
                        "url": "",
                        "children": []
                      }
                    ]
                  },
                  {
                    "id": "mnu_adp_proc_deta_saoc_mepr",
                    "name": "Medicina Preventiva",
                    "orden": "",
                    "url": "",
                    "children": [
                      {
                        "id": "mnu_adp_proc_deta_saoc_mepr_asis",
                        "name": "Asistente Medicina Preventiva",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_mepr_inpa",
                        "name": "Inscripción Participantes",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_mepr_prac",
                        "name": "Programación Actividades",
                        "orden": "",
                        "url": "",
                        "children": []
                      },
                      {
                        "id": "mnu_adp_proc_deta_saoc_mepr_reob",
                        "name": "Registro Observaciones",
                        "orden": "",
                        "url": "",
                        "children": []
                      }
                    ]
                  }
                ]
              },
              {
                "id": "mnu_adp_proc_deta_segu",
                "name": "Seguridad Industrial",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_proc_deta_segu_acci",
                    "name": "Accidente de Trabajo",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_segu_endo",
                    "name": "Entrega Dotación de Seguridad Industrial",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_segu_pano",
                    "name": "Panorama de Riesgos",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_adp_proc_deta_selp",
                "name": "Selección de Personal",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_adp_proc_deta_selp_asis",
                    "name": "Asistente de Selección",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_selp_eval",
                    "name": "Evaluación de Pruebas",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_selp_regc",
                    "name": "Registro de Candidatos",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_adp_proc_deta_selp_veri",
                    "name": "Verificación de Referencias",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              }
            ]
          },
          {
            "id": "mnu_adp_proc_rete",
            "name": "Generar Certificados Retefuente",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_adp_proc_liqu",
            "name": "Liquidación",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_adp_proc_liqu_cons",
                "name": "Consultas de Gestión",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_liqu_cont",
                "name": "Contabilizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_liqu_pain",
                "name": "Control de Cobro de Incapacidades",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_liqu_proc",
                "name": "Proceso de Liquidación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_liqu_rliq",
                "name": "Reliquidación de los Conceptos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_adp_proc_liqu_rete",
                "name": "Retención en la Fuente",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_adp_proc_nane",
            "name": "Nota Ajuste N?mina Electr?nica",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "asi",
    "name": "Administración del Sistema",
    "items": [
      {
        "id": "mnu_asi_ento",
        "name": "Entorno",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_asi_ento_cons",
            "name": "Consultas Programadas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_esta",
            "name": "Estaciones de Trabajo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_menu",
            "name": "Menús del Software",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_peri",
            "name": "Periféricos de Red",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_pmco",
            "name": "Permisos sobre consultorios",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_role",
            "name": "Roles de Usuarios",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_rotu",
            "name": "Rótulos y Definiciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_tbas",
            "name": "Tablas Básicas",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_asi_ento_tbas_modu",
                "name": "Tablas por Módulo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_asi_ento_tbas_user",
                "name": "Tablas por Usuario",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_asi_ento_tabl",
            "name": "Tablas Dinámicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_usua",
            "name": "Usuarios Permitidos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_coco",
            "name": "Configuración de Contraseñas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_ento_codb",
            "name": "Generar Código de Barras",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_asi_info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_asi_info_hrus",
            "name": "Histórico de Roles por Usuario",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_asi_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_asi_proc_veri",
            "name": "Actualización de Módulos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_proc_regi",
            "name": "Archivo de Configuración",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_proc_audi",
            "name": "Auditoría a Transacciones",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_asi_proc_audi_limp",
                "name": "Limpiar Aud. Administrativos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_asi_proc_audi_admi",
                "name": "Módulos Administrativos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_asi_proc_audi_asis",
                "name": "Módulos Asistenciales",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_asi_proc_cheq",
            "name": "Chequear Base de Datos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_proc_gene",
            "name": "Generar Archivo de Chequeo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_asi_proc_arpl",
            "name": "Gestión de Archivos Planos",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_asi_proc_arpl_baar",
                "name": "Bajar Archivo Plano",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_asi_proc_arpl_suar",
                "name": "Subir Archivo Plano",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "code": "apl",
    "name": "Administración de Aplicación",
    "items": [
      {
        "id": "mnu_apl_ento",
        "name": "Entorno",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_apl_ento_actm",
            "name": "Actualizar Menús",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_cons",
            "name": "Constantes del Sistema",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_repo",
            "name": "Constantes para Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_dato",
            "name": "Datos Dinamicos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_dipo",
            "name": "División Política Internacional",
            "orden": "",
            "url": "",
            "icon": "globe",
            "children": []
          },
          {
            "id": "mnu_apl_ento_dpag",
            "name": "Documentos Valores de Pago",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_banc",
            "name": "Entidades Bancarias y Sucursales",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_enti",
            "name": "Entidades y Estructura Orgánica",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_fabr",
            "name": "Fabricantes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_firm",
            "name": "Firmas Autorizadas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_tasa",
            "name": "Impuestos, Descuentos y Comisiones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_mone",
            "name": "Monedas y Tasas de Cambio",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_tcon",
            "name": "Tipos de Contrato con Proveedores",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_umed",
            "name": "Unidades de Medida",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_apl_ento_nume",
            "name": "Numeración",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "cxp",
    "name": "Cuentas por Pagar",
    "items": [
      {
        "id": "mnu_cxp_ento",
        "name": "Entorno",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cxp_ento_actm",
            "name": "Actualizar Menús",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_conc",
            "name": "Conceptos de Liquidación de Pagos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_cons",
            "name": "Control de Numeración",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_enco",
            "name": "Enlace Contable",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxp_ento_enco_Conf",
                "name": "Configuracion Contable",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxp_ento_enco_CuPu",
                "name": "Cuenta Puente",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxp_ento_cadp",
            "name": "Enlace Contratos y Conceptos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_homo",
            "name": "Homologación Tasas de Impuestos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_movi",
            "name": "Movimientos de Cuentas por Pagar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_prov",
            "name": "Proveedores y/o Contratistas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_cont",
            "name": "Tipos de Contratos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_ento_cvpn",
            "name": "Configuración Contable Valor Presente Neto",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_cxp_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cxp_proc_aupa",
            "name": "Autorizaciones de Pago",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_came",
            "name": "Caja Menor",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxp_proc_came_cnsg",
                "name": "Consignar Saldo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxp_proc_came_lega",
                "name": "Legalizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxp_proc_came_rgas",
                "name": "Registrar Gastos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxp_proc_cert",
            "name": "Certificados",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_cont",
            "name": "Contabilizar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_cons",
            "name": "Informes de Gestión",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_noop",
            "name": "Notas de Cuentas por Pagar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_noes",
            "name": "Notas Especiales de Cuentas por Pagar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_orpa",
            "name": "Ordenes de Pago",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxp_proc_orpa_opno",
                "name": "Nómina",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxp_proc_orpa_oppr",
                "name": "Proveedores y/o Contratistas",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxp_proc_rsal",
            "name": "Recalcular Saldos de Ordenes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxp_proc_moni",
            "name": "Amortización Interés Valor Presente Neto",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "cnt",
    "name": "Contabilidad",
    "items": [
      {
        "id": "mnu_cnt_ento",
        "name": "Entorno",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cnt_ento_actu",
            "name": "Actualizar Menús",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_ccos",
            "name": "Centros de Costo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_comp",
            "name": "Comprobantes Permitidos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_info",
            "name": "Datos de SuperSalud",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cnt_ento_info_ctas",
                "name": "Cuentas y Periodos Contables",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cnt_ento_Dian",
            "name": "Datos Informe Dian",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cnt_ento_Dian_docu",
                "name": "Homologación de Documentos de Identidad",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cnt_ento_ecod",
            "name": "Estructura Código Contable",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_movi",
            "name": "Movimientos de Contabilidad",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_nume",
            "name": "Numeración de Comprobantes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_foli",
            "name": "Numeración y Foliación",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_plan",
            "name": "Plan de Cuentas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_ppre",
            "name": "Plan de Cuentas Presupuestales",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_plex",
            "name": "Plantilla Generación Inf. Exógena",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_ppla",
            "name": "Plantillas de Planes Contables",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_redi",
            "name": "Relación Documentos Inf. Exógena",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_terc",
            "name": "Terceros",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_tipo",
            "name": "Tipos de Comprobantes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_CuPu",
            "name": "Cuentas Puente",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_grcc",
            "name": "Grupos de Centros de Costos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_prro",
            "name": "Proveedores - Rotación",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_taxo",
            "name": "Taxonomía ESFA",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_ento_terr",
            "name": "TERceros Rotacion de Cartera",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_cnt_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cnt_proc_agen",
            "name": "Agenda Administrativa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_ajus",
            "name": "Ajustes por Inflación",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_asie",
            "name": "Asientos Contables",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_came",
            "name": "Caja Menor",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cnt_proc_came_cnsg",
                "name": "Consignar Saldo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cnt_proc_came_lega",
                "name": "Legalizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cnt_proc_came_rgas",
                "name": "Registrar Gastos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cnt_proc_cerr",
            "name": "Cerrar Ejercicio",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_cmen",
            "name": "Cierre Mensual",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_dife",
            "name": "Diferidos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_enla",
            "name": "Enlace Contable",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_efin",
            "name": "Estados Financieros",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_inex",
            "name": "Generar Información Exógena",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cnt_proc_inex_1001",
                "name": "Formato 1001",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cnt_proc_inex_1002",
                "name": "Formato 1002",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cnt_proc_inex_1003",
                "name": "Formato 1003",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cnt_proc_lcon",
            "name": "Libros Contables",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_rsal",
            "name": "Recalcular Saldos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_rcom",
            "name": "Renumeración de Comprobantes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_tras",
            "name": "Traslados de Cuentas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cnt_proc_dcos",
            "name": "Distribución por Centros de Costo",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "tes",
    "name": "Tesoreria",
    "items": [
      {
        "id": "mnu_tes_ento",
        "name": "Entorno",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_tes_ento_actm",
            "name": "Actualizar Menús",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_cexb",
            "name": "Archivo Extracto Bancario",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_caja",
            "name": "Cajas de Recaudos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_came",
            "name": "Cajas Menores",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_coco",
            "name": "Conceptos Compras Bienes y Servicios",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_conc",
            "name": "Conceptos y Parámetros",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_cncl",
            "name": "Conciliación Bancaria",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_coch",
            "name": "Configuración de cheques",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_conu",
            "name": "Control de Numeración",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_cueb",
            "name": "Cuentas Bancarias",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_enlc",
            "name": "Enlace Contable",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_enba",
            "name": "Entidades Bancarias",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_grco",
            "name": "Grupos Compras Bienes y Servicios",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_moau",
            "name": "Movimientos Automáticos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_movi",
            "name": "Movimientos de Tesorería",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_prub",
            "name": "Presupuesto Rubros de Flujo de Caja",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_ento_rubr",
            "name": "Rubros de Flujo de Caja",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_tes_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_tes_proc_agen",
            "name": "Agenda Administrativa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_proc_banc",
            "name": "Bancos",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_tes_proc_banc_anti",
                "name": "Anticipos sin Documento Soporte",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_ched",
                "name": "Cheques Devueltos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_conc",
                "name": "Conciliación Bancaria",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_tes_proc_banc_conc_proc",
                    "name": "Ejecutar Proceso de Conciliación",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_tes_proc_banc_conc_extb",
                    "name": "Incluir Extractos Bancarios",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_tes_proc_banc_conc_info",
                    "name": "Informes Conciliación",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_tes_proc_banc_cons",
                "name": "Consignación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_depr",
                "name": "Devolución de Anticipos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_devo",
                "name": "Devoluciones a Clientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_cheq",
                "name": "Entregar Cheques",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_inco",
                "name": "Informes de Gestión",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_movi",
                "name": "Movimientos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_noba",
                "name": "Notas Bancarias",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_ordp",
                "name": "Ordenes de Pago",
                "orden": "",
                "url": "",
                "children": [
                  {
                    "id": "mnu_tes_proc_banc_ordp_nomi",
                    "name": "Nómina",
                    "orden": "",
                    "url": "",
                    "children": []
                  },
                  {
                    "id": "mnu_tes_proc_banc_ordp_prov",
                    "name": "Proveedores y/o Contratistas",
                    "orden": "",
                    "url": "",
                    "children": []
                  }
                ]
              },
              {
                "id": "mnu_tes_proc_banc_pgco",
                "name": "Pago Gastos por Compras",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_sald",
                "name": "Recalcular Saldos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_came",
                "name": "Reembolso Cajas Menores",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_reme",
                "name": "Remesas y/o Pagos Directos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_salc",
                "name": "Saldo de Cuentas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_tras",
                "name": "Transferencias",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_banc_dopa",
                "name": "Ver Documentos de Pago",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_tes_proc_caja",
            "name": "Caja",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_tes_proc_caja_arqu",
                "name": "Arqueo Diario",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_ccom",
                "name": "Cambio de Composición",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_turn",
                "name": "Cambio de Turno",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_cons",
                "name": "Consignación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_dpcl",
                "name": "Depósitos de Cliente",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_devo",
                "name": "Devolucion Documentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_inco",
                "name": "Informes de Gestión",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_movi",
                "name": "Movimientos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_prov",
                "name": "Provisión de Caja",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_repa",
                "name": "Recibir Abonos de Clientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_docu",
                "name": "Recibir Documentos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_ring",
                "name": "Recibir Ingresos Varios",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_tras",
                "name": "Traslado de Valores",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_trfc",
                "name": "Traslado Rubro Flujo de Caja",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_caja_docp",
                "name": "Ver Documentos de Pago",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_tes_proc_came",
            "name": "Caja Menor",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_tes_proc_came_cnsg",
                "name": "Consignar Saldo",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_came_lega",
                "name": "Legalizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_came_rgas",
                "name": "Registrar Gastos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_tes_proc_cons",
            "name": "Consultas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_proc_cont",
            "name": "Contabilizar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_proc_gein",
            "name": "Gestionar Ingresos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_proc_indi",
            "name": "Indicadores de Gestión",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_tes_proc_rcom",
            "name": "Registro de Compras",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_tes_proc_rcom_ccge",
                "name": "Caja General",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_rcom_cleg",
                "name": "Legalizar",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_tes_proc_rcom_ctcr",
                "name": "Tarjeta de Crédito",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "code": "ter",
    "name": "Integrador de Terceros",
    "items": [
      {
        "id": "mnu_ter_Admi",
        "name": "administración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_ter_Admi_conf",
            "name": "Configuración de Tablas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ter_Admi_tabl",
            "name": "Tablas Básicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ter_Admi_Terc",
            "name": "Terceros",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ter_Admi_dest",
            "name": "Destinatario Cartas de Cobro",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ter_Admi_dfae",
            "name": "Destinatarios Facturación Electrónica",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_ter_Admi_deta",
            "name": "Detalle Tributario",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "con",
    "name": "Contratos",
    "items": [
      {
        "id": "mnu_Con_Conf",
        "name": "Configuración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_Con_Conf_Apac",
            "name": "Asociar Productos a Contratos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_Cond",
            "name": "Condiciones sobre tarifa",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_cont",
            "name": "Contratante",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_Enti",
            "name": "Entidades",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_Tabl",
            "name": "Tablas Basicas...",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_Tari",
            "name": "Tarifas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_CDPA",
            "name": "Configuración Destinos y Paquetes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_CONP",
            "name": "Configuración Paquete",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Conf_depq",
            "name": "Detalle de Paquetes",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_con_info",
        "name": "Contratos Próximo a Vencer",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_con_info_ProV",
            "name": "Contratos Próximo a Vencer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Info_Esta",
            "name": "Estadísticas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_info_Gene",
            "name": "Generador de reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_info_Repo",
            "name": "Reportes e Informes",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_Con_info_Repo_admi",
                "name": "Admisiones",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_con_info_repo_reau",
                "name": "Contratos Renovados Automáticamante",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Con_info_Repo_Ctar",
                "name": "Contratos/Tarifas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_con_info_repo_dire",
                "name": "Directorio de Entidades",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Con_info_Repo_Docu",
                "name": "Documentación de Contratos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Con_info_Repo_Ejec",
                "name": "Ejecución de Contratos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_con_info_repo_eact",
                "name": "Empresas Activas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Con_info_Repo_Cali",
                "name": "Informe de calificación",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Con_info_Repo_Serv",
                "name": "Servicios",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_Con_info_Repo_Vige",
                "name": "Vigencia de Contratos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_Con_info_Repe",
            "name": "Reportes Personalizados",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_Con_Proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_Con_Proc_Cont",
            "name": "Contratos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_Con_Proc_Inac",
            "name": "Inactivar Contratos",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "cxc",
    "name": "Cartera",
    "items": [
      {
        "id": "mnu_cxc_conf",
        "name": "Configuracion",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cxc_conf_tbas",
            "name": "Tablas Báscas",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_cxc_info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cxc_info_conf",
            "name": "Configura Reporte",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_info_gene",
            "name": "Genera Reporte",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_info_reap",
            "name": "Informe de Recaudos por Aplicar",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_info_info",
            "name": "Informes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_info_ncde",
            "name": "Informe Notas Crédito Parcial Detallado por Servi",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_info_gcob",
            "name": "Gestión Cobranza",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_info_gglo",
            "name": "Glosas y Devoluciones",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_info_gglo_gdgl",
                "name": "Gestión Devolución y Glosas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_info_gglo_devo",
                "name": "Respuesta/Conciliación Devolución Facturas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_info_gglo_gpen",
                "name": "Respuestas/Conciliaciones Pendientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_info_gglo_tfac",
                "name": "Trazabilidad de Facturas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_info_gglo_rdev",
                "name": "Trazabilidad Recepción Devolución",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      },
      {
        "id": "mnu_cxc_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cxc_proc_ajus",
            "name": "Ajustes por Movimientos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_cont",
            "name": "Contabilizacion",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_cort",
            "name": "Corte de Cartera",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_cuen",
            "name": "Cuentas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_tes",
            "name": "Enlace con Tesoreria",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_enco",
            "name": "Enlace Contable",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_enco_conf",
                "name": "Configuración Contable",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_enco_cont",
                "name": "Contabilizar",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxc_proc_movi",
            "name": "Movimiento Cartera",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_mmas",
            "name": "Movimientos Masivos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_ncp",
            "name": "Nota Crédito Parcial",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_ncp_aut",
                "name": "Autorizar Nota Crédito Parcial",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ncp_con",
                "name": "Nota Crédito Parcial de Concurrencia",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ncp_glo",
                "name": "Nota Crédito Parcial de Glosa",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxc_proc_nove",
            "name": "Novedades",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_nove_clie",
                "name": "Clientes",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_nove_terc",
                "name": "Terceros",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxc_proc_Rcue",
            "name": "Relación de Cuentas",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_Rcue_Radi",
                "name": "Radicación de Envios",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Rfco",
                "name": "Recalcular Rips por Factura Consolidada",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Envi",
                "name": "Relación de Envios",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Sele",
                "name": "Relación de Selección",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Busq",
                "name": "Búsqueda de Envío",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Gefa",
                "name": "Generar Rips por Factura",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Reri",
                "name": "Recalcular Rips por Envío",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_Rcue_Refa",
                "name": "Recalcular Rips por Factura",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxc_proc_rncp",
            "name": "Reversar Nota Credito Parcial",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_tras",
            "name": "Traslado Movimiento",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_moni",
            "name": "Amortización Interés Valor Presente Neto",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_csin",
            "name": "Cruce saldo ingresos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_Ripi",
            "name": "Generar Rips Internacionales",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cxc_proc_gcob",
            "name": "Gestión de Cobranzas",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_gcob_cape",
                "name": "Consolidado de Anticipos y Pagos por Entidad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_gcob_aent",
                "name": "Discriminación de Anticipos por Entidad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_gcob_prei",
                "name": "Presupuesto Recaudo Internacional",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_gcob_rdxe",
                "name": "Recaudo Diario por Entidad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_gcob_sfxe",
                "name": "Saldos Facturas por Entidad",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_gcob_cgco",
                "name": "Control Gestión de Cobranzas",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxc_proc_ggdv",
            "name": "Gestión de Glosas y Devoluciones",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_ggdv_cglo",
                "name": "Crear Detalle Glosa",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ggdv_cfac",
                "name": "Pendiente Detalle Glosa/Devolución",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ggdv_rrfa",
                "name": "Relación Recepción de Facturas",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ggdv_rcde",
                "name": "Responder /Conciliar Devolución",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ggdv_rcgl",
                "name": "Responder /Conciliar Glosa",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cxc_proc_ncpc",
            "name": "Nota Crédito Parcial",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cxc_proc_ncpc_auto",
                "name": "Autorizar Nota Crédito Parcial",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ncpc_conc",
                "name": "Nota Crédito Parcial de Concurrencia",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ncpc_glos",
                "name": "Nota Crédito Parcial de Glosa",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cxc_proc_ncpc_rncp",
                "name": "Reversar Nota Crédito Parcial",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "code": "cit",
    "name": "Citas",
    "items": [
      {
        "id": "mnu_cit_conf",
        "name": "Configuración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cit_conf_pedi",
            "name": "Asignación médicos por día",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_conf_cope",
            "name": "Asignación médicos por mes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_conf_clie",
            "name": "Paciente",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_conf_plan",
            "name": "Planillas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_conf_seco",
            "name": "Servicios por consultorio",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_conf_seme",
            "name": "Servicios por médico",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_conf_taba",
            "name": "Tablas Basicas...",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_cit_info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cit_info_cime",
            "name": "Citas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_info_cons",
            "name": "Consulta de Citas con Novedades",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_Info_ProV",
            "name": "Contratos Proximos a Vencer",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_info_gene",
            "name": "Generador de reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_info_cims",
            "name": "Otros Módulos",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_info_repo",
            "name": "Reportes Personalizados",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_cit_proc",
        "name": "Procesos",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_cit_proc_asci",
            "name": "Asignación de Citas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_proc_aurl",
            "name": "Asignación de Url para Videollamada",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_proc_audi",
            "name": "Auditoría",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_proc_dere",
            "name": "Comprobación de derechos",
            "orden": "",
            "url": "",
            "children": [
              {
                "id": "mnu_cit_proc_dere_arch",
                "name": "Archivo de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cit_proc_dere_conf",
                "name": "Configuración de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cit_proc_dere_cons",
                "name": "Consulta de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              },
              {
                "id": "mnu_cit_proc_dere_impo",
                "name": "Importación de comprobación de derechos",
                "orden": "",
                "url": "",
                "children": []
              }
            ]
          },
          {
            "id": "mnu_cit_proc_nove",
            "name": "Novedades y Consultas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_proc_trci",
            "name": "Traslado de citas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_proc_trmc",
            "name": "traslado masivo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_cit_proc_bdam",
            "name": "Bloqueo de Agenda de Médicos",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "vcl",
    "name": "Vias Clinicas",
    "items": [
      {
        "id": "mnu_vcl_conf",
        "name": "Configuración",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_vcl_conf_paqu",
            "name": "Paquetes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_conf_para",
            "name": "Parámetros",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_conf_ruta",
            "name": "Subrutas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_conf_basi",
            "name": "Tablas Básicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_conf_vias",
            "name": "Vías",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_vcl_info",
        "name": "Informes",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_vcl_info_cove",
            "name": "Costeo de la Vía Clínica",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_info_gene",
            "name": "Generador de Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_info_Pvcl",
            "name": "Pacientes Con Vias Clinicas",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_info_pers",
            "name": "Personalizar Reportes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_info_vivs",
            "name": "Informe Productos Inactivos en Aspectos de Manejo",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      },
      {
        "id": "mnu_vcl_proc",
        "name": "Proceso",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_vcl_proc_asig",
            "name": "Asignación Vía a Pacientes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_proc_comp",
            "name": "Comparativo",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vcl_proc_tiem",
            "name": "Seguimiento Via por Tiempos de Evolución",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  },
  {
    "code": "vin",
    "name": "Integrador FCV",
    "items": [
      {
        "id": "mnu_vin_0002",
        "name": "Transacciones",
        "orden": "",
        "url": "",
        "children": [
          {
            "id": "mnu_vin_0002_0003",
            "name": "Devoluciones",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vin_0002_0001",
            "name": "Solicitudes",
            "orden": "",
            "url": "",
            "children": []
          },
          {
            "id": "mnu_vin_0002_0002",
            "name": "Venta Interna",
            "orden": "",
            "url": "",
            "children": []
          }
        ]
      }
    ]
  }
];
