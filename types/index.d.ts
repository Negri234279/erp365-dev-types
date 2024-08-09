import { Connection } from 'mongoose'

import { DominioDocument } from './schemas/domain'
import { UsuarioDocument } from './schemas/users'
import { ClienteDocument } from './schemas/client'

declare module 'express' {
    interface Request {
        dbInstance: Connection
        masterDb: Connection
    }

    interface Response {
        locals: CustomLocals
    }

    interface CustomLocals {
        subdomain: string
        domain: DominioDocument
        user?: UsuarioDocument
        cliente?: ClienteDocument
    }
}
