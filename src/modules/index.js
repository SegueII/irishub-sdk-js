import {Bank} from "./bank";
import {Stake} from "./stake";
import {Tm} from "./tm";
import {Version} from "./version";
import {Slashing} from "./slashing";
import {Gov} from "./gov";
import {Distribution} from "./distr";
import {CoinSwap} from "./coinswap";

export default class ModuleManager {

    /**
     *
     * @param provider
     */
    constructor(provider, opt) {
        this.provider = provider;
        this.register(new Bank(provider, opt))
            .register(new Stake(provider, opt))
            .register(new Tm(provider, opt))
            .register(new Version(provider, opt))
            .register(new Slashing(provider, opt))
            .register(new Gov(provider, opt))
            .register(new Distribution(provider, opt))
            .register(new CoinSwap(provider, opt));
    }

    /**
     *
     * @param name
     * @returns {boolean}
     */
    hasMethod(name) {
        return typeof this.methods[name] !== 'undefined';
    };

    /**
     *
     * @param name
     */
    createMethod(name) {
        if (this.hasMethod(name)) {
            return this.methods[name];
        }
        throw new Error(`not found this method:${name}`)
    }

    /**
     *
     * @param module
     * @private
     */
    register(module) {
        Object.getOwnPropertyNames(Object.getPrototypeOf(module)).forEach((name) => {
            if (!this.methods) {
                this.methods = {}
            }
            if (name !== "constructor") {
                if (this.methods[name]) {
                    throw new Error(`method : ${name} has already register`)
                }
                this.methods[name] = module
            }
        });
        return this;
    }
}
