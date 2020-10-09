## Modules

<dl>
<dt><a href="#module_coinswap">coinswap</a></dt>
<dd></dd>
<dt><a href="#module_token">token</a></dt>
<dd></dd>
</dl>

<a name="module_coinswap"></a>

## coinswap

* [coinswap](#module_coinswap)
    * [.CoinSwap](#module_coinswap.CoinSwap)
        * [new exports.CoinSwap(provider, opt)](#new_module_coinswap.CoinSwap_new)
        * [.getReservePool(denom)](#module_coinswap.CoinSwap+getReservePool) ⇒ <code>Promise.&lt;\*&gt;</code>
        * [.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config)](#module_coinswap.CoinSwap+addLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config)](#module_coinswap.CoinSwap+removeLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
        * [.swap(input, output, ddeadline, isBuyOrder, config)](#module_coinswap.CoinSwap+swap)
        * [.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)](#module_coinswap.CoinSwap+tradeExactIrisForTokens)
        * [.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)](#module_coinswap.CoinSwap+tradeIrisForExactTokens)
        * [.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)](#module_coinswap.CoinSwap+tradeExactTokensForIris)
        * [.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)](#module_coinswap.CoinSwap+tradeTokensForExactIris)
        * [.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)](#module_coinswap.CoinSwap+tradeExactTokensForTokens)
        * [.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)](#module_coinswap.CoinSwap+tradeTokensForExactTokens)

<a name="module_coinswap.CoinSwap"></a>

### coinswap.CoinSwap
**Kind**: static class of [<code>coinswap</code>](#module_coinswap)  

* [.CoinSwap](#module_coinswap.CoinSwap)
    * [new exports.CoinSwap(provider, opt)](#new_module_coinswap.CoinSwap_new)
    * [.getReservePool(denom)](#module_coinswap.CoinSwap+getReservePool) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config)](#module_coinswap.CoinSwap+addLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config)](#module_coinswap.CoinSwap+removeLiquidity) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
    * [.swap(input, output, ddeadline, isBuyOrder, config)](#module_coinswap.CoinSwap+swap)
    * [.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)](#module_coinswap.CoinSwap+tradeExactIrisForTokens)
    * [.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)](#module_coinswap.CoinSwap+tradeIrisForExactTokens)
    * [.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)](#module_coinswap.CoinSwap+tradeExactTokensForIris)
    * [.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)](#module_coinswap.CoinSwap+tradeTokensForExactIris)
    * [.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)](#module_coinswap.CoinSwap+tradeExactTokensForTokens)
    * [.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)](#module_coinswap.CoinSwap+tradeTokensForExactTokens)

<a name="new_module_coinswap.CoinSwap_new"></a>

#### new exports.CoinSwap(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_coinswap.CoinSwap+getReservePool"></a>

#### coinSwap.getReservePool(denom) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  
**Returns**: <code>Promise.&lt;\*&gt;</code> - - reserve pool information  

| Param | Type | Description |
| --- | --- | --- |
| denom | <code>string</code> | uni denom of token,such as u-btc |

<a name="module_coinswap.CoinSwap+addLiquidity"></a>

#### coinSwap.addLiquidity(maxToken, irisAmt, minLiquidity, deadline, sender, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| maxToken | <code>Coin</code> | deposited token |
| irisAmt | <code>number</code> | amount of iris deposited |
| minLiquidity | <code>number</code> | amount of uni token |
| deadline | <code>number</code> | timestamp |
| sender | <code>string</code> | address of deposit |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap.CoinSwap+removeLiquidity"></a>

#### coinSwap.removeLiquidity(minToken, withdrawLiquidity, minIrisAmt, deadline, sender, config) ⇒ <code>Promise.&lt;{resp: \*, hash: string}&gt;</code>
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| minToken | <code>number</code> | amount of token retrieved |
| withdrawLiquidity | <code>Coin</code> | uni withdraw |
| minIrisAmt | <code>number</code> | amount of iris retrieved |
| deadline | <code>number</code> | timestamp |
| sender | <code>string</code> | address of sender |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap.CoinSwap+swap"></a>

#### coinSwap.swap(input, output, ddeadline, isBuyOrder, config)
**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| input | <code>Coin</code> | user spending tokens |
| output | <code>Coin</code> | user received tokens |
| ddeadline | <code>number</code> | timestamp |
| isBuyOrder | <code>boolean</code> |  |
| config | <code>Object</code> | config information includes: fee,gas,memo,timeout,network,chain,privateKey.if some properties is null ,will use the IrisClient default options |

<a name="module_coinswap.CoinSwap+tradeExactIrisForTokens"></a>

#### coinSwap.tradeExactIrisForTokens(outputTokenDenom, inputIrisAmount)
The function facilitates trading an exact amount of Iris for a specified token.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| outputTokenDenom | <code>string</code> | Address of output token. |
| inputIrisAmount | <code>number</code> | The input amount of Iris. |

<a name="module_coinswap.CoinSwap+tradeIrisForExactTokens"></a>

#### coinSwap.tradeIrisForExactTokens(outputTokenDenom, outputTokenAmount)
The function facilitates trading Iris for an exact amount of a specified token.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| outputTokenAmount | <code>number</code> | Denom of output token. |

<a name="module_coinswap.CoinSwap+tradeExactTokensForIris"></a>

#### coinSwap.tradeExactTokensForIris(inputTokenDenom, inputTokenAmount)
The function facilitates trading an exact amount of a specified token for Iris.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| inputTokenAmount | <code>number</code> | Amount of input token. |

<a name="module_coinswap.CoinSwap+tradeTokensForExactIris"></a>

#### coinSwap.tradeTokensForExactIris(inputTokenDenom, outputIrisAmount)
The function facilitates trading a specified token for an exact amount of Iris.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputIrisAmount | <code>number</code> | The output amount of iris |

<a name="module_coinswap.CoinSwap+tradeExactTokensForTokens"></a>

#### coinSwap.tradeExactTokensForTokens(inputTokenDenom, outputTokenDenom, inputTokenAmount)
The function facilitates trading an exact amount of a specified token for another token.

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| inputTokenAmount | <code>number</code> | The input amount of tokens |

<a name="module_coinswap.CoinSwap+tradeTokensForExactTokens"></a>

#### coinSwap.tradeTokensForExactTokens(inputTokenDenom, outputTokenDenom, outputTokenAmount)
The function facilitates trading an exact amount of a specified token for another token

**Kind**: instance method of [<code>CoinSwap</code>](#module_coinswap.CoinSwap)  

| Param | Type | Description |
| --- | --- | --- |
| inputTokenDenom | <code>string</code> | Denom of input token. |
| outputTokenDenom | <code>string</code> | Denom of output token. |
| outputTokenAmount | <code>number</code> | The output amount of tokens |

<a name="module_token"></a>

## token

* [token](#module_token)
    * [.Token](#module_token.Token)
        * [new exports.Token(provider, opt)](#new_module_token.Token_new)
        * [.getTokens(source, owner, gateway)](#module_token.Token+getTokens)
        * [.getToken(id)](#module_token.Token+getToken)
        * [.getGateway(moniker)](#module_token.Token+getGateway)
        * [.getGateways(owner)](#module_token.Token+getGateways)
        * [.getGatewayFee(moniker)](#module_token.Token+getGatewayFee)
        * [.getTokensFee(id)](#module_token.Token+getTokensFee)

<a name="module_token.Token"></a>

### token.Token
**Kind**: static class of [<code>token</code>](#module_token)  

* [.Token](#module_token.Token)
    * [new exports.Token(provider, opt)](#new_module_token.Token_new)
    * [.getTokens(source, owner, gateway)](#module_token.Token+getTokens)
    * [.getToken(id)](#module_token.Token+getToken)
    * [.getGateway(moniker)](#module_token.Token+getGateway)
    * [.getGateways(owner)](#module_token.Token+getGateways)
    * [.getGatewayFee(moniker)](#module_token.Token+getGatewayFee)
    * [.getTokensFee(id)](#module_token.Token+getTokensFee)

<a name="new_module_token.Token_new"></a>

#### new exports.Token(provider, opt)

| Param | Type | Description |
| --- | --- | --- |
| provider | <code>WsProvider</code> \| <code>HttpProvider</code> | agent of network |
| opt | <code>object</code> | other configurable parameters |

<a name="module_token.Token+getTokens"></a>

#### token.getTokens(source, owner, gateway)
**Kind**: instance method of [<code>Token</code>](#module_token.Token)  

| Param | Type | Description |
| --- | --- | --- |
| source | <code>string</code> | the source of the destination token, options: native, external, gateway |
| owner | <code>string</code> | the owner address of the destination token, optional when source is native, ignored when source is not native |
| gateway | <code>string</code> | the gateway moniker of the destination token, optional when source is gateway |

<a name="module_token.Token+getToken"></a>

#### token.getToken(id)
**Kind**: instance method of [<code>Token</code>](#module_token.Token)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the unique id of the token |

<a name="module_token.Token+getGateway"></a>

#### token.getGateway(moniker)
**Kind**: instance method of [<code>Token</code>](#module_token.Token)  

| Param | Type | Description |
| --- | --- | --- |
| moniker | <code>string</code> | the unique name of the destination gateway |

<a name="module_token.Token+getGateways"></a>

#### token.getGateways(owner)
**Kind**: instance method of [<code>Token</code>](#module_token.Token)  

| Param | Type | Description |
| --- | --- | --- |
| owner | <code>string</code> | the owner address to be queried |

<a name="module_token.Token+getGatewayFee"></a>

#### token.getGatewayFee(moniker)
**Kind**: instance method of [<code>Token</code>](#module_token.Token)  

| Param | Type | Description |
| --- | --- | --- |
| moniker | <code>string</code> | the unique name of the destination gateway |

<a name="module_token.Token+getTokensFee"></a>

#### token.getTokensFee(id)
**Kind**: instance method of [<code>Token</code>](#module_token.Token)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> | the unique id of the token |

