import {isString,isBuffer} from "../utils"
const axios = require("axios");

export class HttpProvider{
    /**
     *
     * @param {string} - lcd's url
     * @param {object} - other configurable parameters
     * @return {HttpProvider}
     */
    constructor(url,opt){
        let timeout = opt.timeout ? opt.timeout : 2000;
        this._url = url;
        this._httpClient = axios.create({
            baseURL:url,
            timeout:timeout,
            proxy:opt.proxy
        })
    }

    /**
     *
     * @param url
     * @param opts
     * @returns {*}
     */
    get(url,opts){
        return this._execute("get", url,null,opts)
    }

    /**
     *
     * @param url
     * @param data
     * @param opts
     */
    post(url, data, opts) {
        return this._execute("post", url,data,opts)
    }

    /**
     *
     * @param method
     * @param args
     * @returns {Promise<SpeechRecognitionEvent | SVGAnimatedString | string | ArrayBuffer | never>}
     */
    call(method, args){
        let url = `${this._url}/${method}`;
        url = convertHttpArgs(url, args);
        return axios({
            url: url
        }).then(function ({ data }) {
            if (data.error) {
                let err = Error(data.error.message);
                Object.assign(err, data.error);
                throw err
            }
            return data.result
        }, function (err) {
            throw Error(err)
        })
    }

    close(){}

    /**
     *
     * @param method
     * @param path
     * @param params
     * @param opts
     * @returns {Promise<AxiosResponse<T> | never>}
     * @private
     */
    _execute(method, path, params, opts) {
        const options = {
            method,
            url: path,
            opts
        };

        if (params) {
            if (method === "get") {
                options.params = params
            } else {
                options.data = params
            }
        }

        return this._httpClient
            .request(options)
            .then(response => {
                return response.data
            }).catch(err => {
                let error = err;
                try {
                    const msgObj = err.response && err.response.data;
                    let message = msgObj.message ? msgObj.message : msgObj;
                    if(typeof message == "object"){
                        message = JSON.stringify(message)
                    }
                    message = `request api [${path}] failed,cause:${message}`;
                    const code = msgObj.code ? msgObj.code : err.response.status;
                    error = new Error(message);
                    error.code = code
                } catch (err) {
                    throw error
                }
                throw error
            })
    }
}

function convertHttpArgs (url, args) {
    args = args || {};
    const search = [];
    for (let k in args) {
        if(isString(args[k])) {
            search.push(`${k}="${args[k]}"`)
        } else if(isBuffer(args[k])){
            search.push(`${k}=0x${args[k].toString("hex")}`)
        } else {
            search.push(`${k}=${args[k]}`)
        }
    }
    return `${url}?${search.join("&")}`
}