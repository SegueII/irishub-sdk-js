import { WsProvider } from './ws-provider'
import { HttpProvider } from './http-provider'
import { wsProto, httpProto, allProto } from '../constants'

const Url = require('url')
export class ProviderFactory {
    /**
     * @return {ProviderFactory}
     */
    constructor() {}

    /**
     * create a agent of network by uri
     *
     * @param {string|Provider} - lcd's url
     * @returns {HttpProvider|Error|WsProvider}
     */
    static create(server, option = {}) {
        if (typeof server !== 'string') {
            return server
        }
        let { protocol, hostname, port, path } = Url.parse(server)
        // default to http
        if (!allProto.includes(protocol)) {
            let p = Url.parse(`http://${server}`)
            protocol = p.protocol
            hostname = p.hostname
            port = p.port
            path = p.path
        }
        server = !port ? `${protocol}//${hostname}${path}` : `${protocol}//${hostname}:${port}${path}`

        if (wsProto.includes(protocol)) {
            return new WsProvider(server, option)
        } else if (httpProto.includes(protocol)) {
            return new HttpProvider(server, option)
        } else {
            return Error('invalid protocol')
        }
    }
}
