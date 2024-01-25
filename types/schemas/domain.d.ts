import { Document, ObjectId, LeanDocument } from "mongoose"

export interface Plan {
    name: string
    maxConcurrentUsers: number
    maxConnectionsPerUser: number
    allowMultipleDevices: boolean
}

export interface Region {
    type: ObjectId
    ref: string
}

export interface Plantilla {
    type: ObjectId
    ref: string
}

export interface AutoNotificacion {
    plantilla: Plantilla
    timeMs: number
    transport: string
}

export interface AgendaParams {
    nombreTercero: string
    nombreAgente: string
    ocultarAgente: boolean
    ocultarNHC: boolean
    ocultarEspecialidad: boolean
    ocultarAseguradora: boolean
    ocultarTlfCliente: boolean
    ocultarDisponibilidad: boolean
    ocultarEtiquetas: boolean
    desactivarCitasDisponibles: boolean
    multipleSpecialist: boolean
    getOperarios: boolean
    ocultarPartes: boolean
}

export interface Partes {
    showNumIncidenciaLista: boolean
    hideColumnImporte: boolean
    priorityInsuredClient: boolean
    showInsuredClient: boolean
    showNumExpediente: boolean
    showNumPoliza: boolean
    showTelefono: boolean
    showFechaCita: boolean
    showEspecialidad: boolean
    showFechaFinal: boolean
    showTrabajoRealizado: boolean
    showTrabajoPendiente: boolean
    showImporter: boolean
    showCP: boolean
}

export interface Consentimientos {
    timeExpiration: number
    textDefault: string
}

export interface ParametrosGenerales {
    inicioClientes: boolean
    inicioVolumen: boolean
    inicioCounters: boolean
    inicioVentasAdeudado: boolean
    region: Region
    trabajarSinIva: boolean
    mostrarPeriodosMeses: boolean
    validezPresupuestos: boolean
    diasValidez: number
    entregaPedidos: boolean
    diasEntrega: number
    diasEntregaHabiles: boolean
    hideBultosColumnPedidos: boolean
    showClientAvatar: boolean
    notificaciones: AutoNotificacion[]
    autoNotificaciones: boolean
    confirmedStatus: ObjectId
    typeRenting: string
    agendaParams: AgendaParams
    partes: Partes
    consentimientos: Consentimientos
}

export interface Estados {
    disponible: ObjectId
    pendiente: ObjectId
    finalizada: ObjectId
    cancelada: ObjectId
}

export interface MultiEmpresa {
    _id: ObjectId
    dominio: string
}

export interface Dominio {
    nombre?: string
    apellidos?: string
    email?: string
    empresa?: string
    telefono?: string
    cif?: string
    direccion?: string
    pais?: string
    localidad?: string
    cp?: string
    dominio: string
    plan: Plan
    estado: boolean
    fechaRegistro?: Date
    modulos?: any
    parametrosGenerales?: ParametrosGenerales
    version?: number
    defaultClient?: string
    superAdmin?: string
    productoDefault?: string
    lastConnection?: Date
    ownDomain?: string
    gpsAppCode?: string
    gpsAppCodeExpiration?: Date
    gMapsApiKey?: string
    importing?: Date
    multiEmpresa?: MultiEmpresa[]
    estados?: Estados
    reseller?: ObjectId
}

export interface DominioDocument extends Dominio, Document { }

export type DominioLeanDocument = LeanDocument<DominioDocument>