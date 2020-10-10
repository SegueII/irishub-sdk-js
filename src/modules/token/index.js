/** @module token */
import { isEmpty } from '../../utils'
import { Method } from '../../constants'
import { AbstractModule } from '../module'

export class Token extends AbstractModule {
    /**
     *
     * @param provider {WsProvider|HttpProvider} - agent of network
     * @param opt {object} - other configurable parameters
     * @return {Token}
     */
    constructor(provider, opt) {
        super(provider, opt)
    }

    /**
     *
     * @param source {string} - the source of the destination token, options: native, external, gateway
     * @param owner {string} - the owner address of the destination token, optional when source is native, ignored when source is not native
     */
    getTokens(source, owner) {
        return super.__get(Method.GetTokens, source, owner)
    }

    /**
     *
     * @param id {string} - the unique id of the token
     */
    getToken(id) {
        if (isEmpty(id)) {
            throw new Error('id is empty')
        }
        return super.__get(Method.GetToken, id)
    }

    /**
     *
     * @param id {string} - the unique id of the token
     */
    getTokensFee(id) {
        return super.__get(Method.GetTokensFee, id)
    }
}
