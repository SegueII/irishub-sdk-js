import { isEmpty, parseUrl } from '../utils'
import { Method } from '../constants'

let subRouter = new Map()

// auth
subRouter.set(Method.GetAccount, args => {
    return parseUrl("/cosmos/auth/v1beta1/accounts/%s", ...args)
})

// coinswap
subRouter.set(Method.GetReservePool, args => {
    return parseUrl('/coinswap/liquidities/%s', args)
})

// token
subRouter.set(Method.GetTokens, args => {
    let param = []
    if (!isEmpty(args[0])) {
        param.push(`source=${args[0]}`)
    }
    if (!isEmpty(args[1])) {
        param.push(`owner=${args[1]}`)
    }
    let queryString = param.join('&')
    return `/token/tokens?${queryString}`
})
subRouter.set(Method.GetToken, args => {
    return parseUrl('/token/tokens/%s', args)
})
subRouter.set(Method.GetTokensFee, args => {
    return parseUrl('/token/fees/tokens/%s', args[0])
})

export const IrisRouter = subRouter
