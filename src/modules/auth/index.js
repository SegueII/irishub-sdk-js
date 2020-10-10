/** @module auth */
import { isEmpty } from '../../utils'
import { Method } from '../../constants'
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
     */
    getAccount(address) {
        if (isEmpty(address)) {
            throw new Error('address is empty')
        }
        return super.__get(Method.GetAccount, address)
    }
}
