import { LeanDocument, ObjectId } from "mongoose"

interface LiquidacionOptions {
    basadoCobros: boolean
    calcularSobreBaseImponible: boolean
    onlyWithCitas: number
    porcentajeSobreMaterial: number
    importeMinimo: number
    porcentajeSobrePaciente: number
    porcentajeSobreMutua: number
    importeFijo: number
    articulos: {
        _id: ObjectId | string
        calcularSobreBaseImponible: boolean
        porcentajeSobreMaterial: number
        porcentajeSobrePaciente: number
        porcentajeSobreMutua: number
        importeFijo: number
    }[]
}

interface HorarioControlAcceso {
    start: Date
    end: Date
}

interface Horario {
    nombre: string
    especialidades: ObjectId[] | string[]
    start: Date
    end: Date
    sobrescribirDuracion: boolean
    duracionCita: number
    periodico: boolean
    numeroCitasMax: number
    frecuencia: number
    activo: boolean
}

interface Ausencia {
    nombre: string
    start: Date
    end: Date
}

interface Especialidades {
    type: ObjectId | string
}

interface Sede {
    type: ObjectId | string
}

interface Usuario {
    nombre?: string
    userName: string
    password: string
    resetPasswordToken?: string
    passwordTokenExpiration?: Date
    isAdmin?: boolean
    administradorFincas?: boolean
    email?: string
    avatar?: string
    imgAvatar?: string // DEPRECATED
    uploadedAvatar?: boolean
    lastConnection?: Date
    notificaciones?: ObjectId[] | string[]
    perfil?: ObjectId | string
    parametros?: {
        idioma: string
        inicioClientes: boolean
        inicioVolumen: boolean
        inicioCounters: boolean
        inicioVentasAdeudado: boolean
        serie?: string
        almacen?: string
        terminal?: ObjectId | string
        receiveMentionEmails: boolean
    }
    permisos?: any // You can replace any with the actual type
    dominio?: ObjectId | string
    tpv?: string
    correo?: {
        servidor?: string
        cuenta?: string
        password?: string
        puerto?: number
        seguridad?: string
    }
    activarControlAcceso?: boolean
    horarioControlAcceso?: HorarioControlAcceso
    horario?: Horario[]
    ausencias?: Ausencia[]
    especialista?: boolean
    especialidades?: Especialidades[]
    comision?: number
    operario?: boolean
    costeOperario?: number
    pin?: string
    liquidacion?: LiquidacionOptions
    numeroColegiado?: string
    cif?: string
    telefono?: string
    sedes?: Sede[]
    activo?: boolean
    technician?: boolean
}

export interface UsuarioDocument extends Usuario, Document { }

export type UsuarioLeanDocument = LeanDocument<UsuarioDocument>