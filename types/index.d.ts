import { Request as ExpressRequest } from 'express'
import { Connection } from 'mongoose'

declare module 'express' {
    interface Request extends ExpressRequest {
        dbInstance: Connection
    }
}