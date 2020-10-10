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
     * @param gateway {string} - the gateway moniker of the destination token, optional when source is gateway
     */
    getTokens(source, owner, gateway) {
        return super.__get(Method.GetTokens, source, owner, gateway)
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
     * @param moniker {string} - the unique name of the destination gateway
     */
    getGateway(moniker) {
        if (isEmpty(moniker)) {
            throw new Error('moniker is empty')
        }
        return super.__get(Method.GetGateway, moniker)
    }

    /**
     *
     * @param owner {string} - the owner address to be queried
     */
    getGateways(owner) {
        return super.__get(Method.GetGateways, owner)
    }

    /**
     *
     * @param moniker {string} - the unique name of the destination gateway
     */
    getGatewayFee(moniker) {
        return super.__get(Method.GetGatewayFee, moniker)
    }

    /**
     *
     * @param id {string} - the unique id of the token
     */
    getTokensFee(id) {
        return super.__get(Method.GetTokensFee, id)
    }
}
