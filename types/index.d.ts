import { Request as ExpressRequest, Response as ExpressResponse } from 'express'
import { Connection } from 'mongoose'
import { DominioLeanDocument } from './schemas/domain'
import { UsuarioLeanDocument } from './schemas/users'

declare module 'express' {
    interface Request extends ExpressRequest {
        dbInstance: Connection
        masterDb: Connection
    }

    interface Response extends ExpressResponse {
        locals: CustomLocals
    }

    interface CustomLocals extends Locals {
        subdomain: string
        domain: DominioLeanDocument
        user: UsuarioLeanDocument
    }
}
