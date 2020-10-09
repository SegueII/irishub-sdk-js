import { CoinSwap } from './coinswap'
import { Token } from './token'

export class ModuleManager {

    /**
     *
     * @param provider
     */
    constructor(provider, opt) {
        this.provider = provider
        this._add(new CoinSwap(provider, opt))
        this._add(new Token(provider, opt))
    }

    /**
     *
     * @param name
     * @returns {boolean}
     */
    hasMethod(name) {
        return typeof this.methods[name] !== 'undefined'
    }

    /**
     *
     * @param name
     */
    createMethod(name) {
        if (this.hasMethod(name)) {
            return this.methods[name]
        }
        throw new Error(`not found this method:${name}`)
    }

    /**
     *
     * @param module
     * @private
     */
    _add(module) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(module)).forEach((name) => {
            if (!this.methods) {
                this.methods = {}
            }
            if (name !== 'constructor') {
                if (this.methods[name]) {
                    throw new Error(`method : ${name} has already register`)
                }
                this.methods[name] = module
            }
        })
    }
}
