import { isEmpty, parseUrl } from '../utils'
import { Method } from '../constants'

let subRouter = new Map()

// auth
subRouter.set(Method.GetAccount, (args) => {
    return parseUrl('/cosmos/auth/v1beta1/accounts/%s', ...args)
})

// tm
subRouter.set(Method.GetNodeInfo, (args) => {
    return '/node_info'
})
subRouter.set(Method.GetSyncing, (args) => {
    return '/syncing'
})
subRouter.set(Method.GetBlock, (args) => {
    let uri = '/blocks/%s'
    if (args > 0) {
        uri = parseUrl(uri, args)
    } else {
        uri = parseUrl(uri, 'latest')
    }
    return uri
})
subRouter.set(Method.GetBlockResult, (args) => {
    throw new Error(`cosmos don't support the api[getBlockResult]`)
})
subRouter.set(Method.GetValidatorSet, (args) => {
    let uri = '/validatorsets/%s'
    if (args > 0) {
        uri = parseUrl(uri, args)
    } else {
        uri = parseUrl(uri, 'latest')
    }
    return uri
})
subRouter.set(Method.GetTx, (args) => {
    return parseUrl('/txs/%s', ...args)
})

subRouter.set(Method.GetLcdVersion, (args) => {
    return '/version'
})

subRouter.set(Method.GetNodeVersion, (args) => {
    return '/node_version'
})

subRouter.set(Method.Broadcast, (args) => {
    return '/txs'
})


// coinswap
subRouter.set(Method.GetReservePool, (args) => {
    throw new Error(`cosmos don't support the api[getReservePool]`)
})

export const CosmosRouter = subRouter
