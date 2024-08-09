import { Request, Response } from 'express'
import { Connection } from 'mongoose'
import { AsyncLocalStorage } from 'node:async_hooks'

import { DominioDocument } from './schemas/domain'
import { UsuarioDocument } from './schemas/users'

interface IContextStore {
    req?: Request
    res?: Response
    dbInstance?: Connection
    masterDb?: Connection
    user?: UsuarioDocument
    device?: any
    domain?: DominioDocument
    subdomain?: string
}

declare const als: AsyncLocalStorage<IContextStore>

declare function addToContext<T extends keyof IContextStore>(path: T, value: IContextStore[T]): void

declare class Context {
    static getRequest(): Request
    static getResponse(): Response
    static getDbInstance(): Connection
    static getMasterDb(): Connection
    static getUser(): UsuarioDocument | undefined
    static isDevice(): any | undefined
    static getDomain(): DominioDocument
}

export { als, addToContext, Context }
