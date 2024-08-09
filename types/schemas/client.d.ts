import { ObjectId } from 'mongoose'

export interface Cliente {
    numCliente: number
    fechaCreacion?: Date
    createdBy?: string
    nombre: string
    cif?: string
    fechaNacimiento?: Date
    direccion?: string
    email?: string
    pais?: string
    ciudad?: string
    poblacion?: string
    web?: string
    telefono?: string
    telefono2?: string
    cp?: string
    observaciones?: string
    online?: boolean
    areaCliente?: boolean
    tiendaOnline?: boolean
    password?: string
    modoIva?: ObjectId  // Referenced collection 'modosivas'
    agrupaciones?: ObjectId[]  // Array of references to 'agrupaciones'
    tags?: ObjectId[]  // Array of references to 'tags'
    metodoPago?: ObjectId  // Reference to 'metodos'
    tipoIrpf?: ObjectId  // Reference to 'irpfs'
    descuento?: number
    tarifa?: ObjectId  // Reference to 'tarifas'
    riesgoAutorizado?: number
    diasPago?: {
        diaUno?: number
        diaDos?: number
    }
    nombreEntidad?: string
    iban?: string
    agente?: ObjectId  // Reference to 'usuarios'
    evento?: ObjectId  // Reference to 'eventos'
    carrito?: ObjectId[]  // Array of references to 'productos'
    creadoTiendaOnline?: boolean
    enviarRecordatorio?: boolean
    aseguradora?: ObjectId  // Reference to 'clientes'
    avatar?: string
    mandato?: string
    tipoAdeudo?: 'FIRST' | 'RECURRING'

    // Clínica-specific fields
    alergias?: string
    isAseguradora?: boolean
    sexo?: string
    lead?: boolean
    dateStoppedLead?: Date
    serie?: ObjectId  // Reference to 'series'
    almacen?: ObjectId  // Reference to 'almacenes'
    numeroHistorialClinico?: string
    numeroSeguridadSocial?: string
    numeroPoliza?: string
    tipoPunzon?: string
}

export interface ClienteDocument extends Cliente, Document { }