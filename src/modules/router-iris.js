import { isEmpty, parseUrl } from '../utils'
import { Method } from '../constants'

let subRouter = new Map()

// coinswap
subRouter.set(Method.GetReservePool, (args) => {
    let apiUrl = parseUrl('/coinswap/liquidities/%s', args)
    return apiUrl
})

// token
subRouter.set(Method.GetTokens, (args) => {
    let param = []
    if (!isEmpty(args[0])) {
        param.push(`source=${args[0]}`)
    }
    if (!isEmpty(args[1])) {
        param.push(`owner=${args[1]}`)
    }
    if (!isEmpty(args[2])) {
        param.push(`gateway=${args[2]}`)
    }
    let queryString = param.join('&')
    return `/token/tokens?${queryString}`
})
subRouter.set(Method.GetToken, (args) => {
    return parseUrl('/token/tokens/%s', args)
})
subRouter.set(Method.GetGatewayFee, (args) => {
    return parseUrl('/token/fees/gateways/%s', args[0])
})
subRouter.set(Method.GetTokensFee, (args) => {
    return parseUrl('/token/fees/tokens/%s', args[0])
})

export const IrisRouter = subRouter
