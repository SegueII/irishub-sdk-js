/** @module Auth */
import { AbstractModule } from '../module'

export class Auth extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Auth}
     */
    constructor(provider, opt) {
        super(provider, opt)
    }

    /**
     * Get the account information on blockchain
     *
     * @param address {string} - address of account
     * @returns {*}
     */
    getAccount(address) {
        return super.__getAccount(address)
    }
}
