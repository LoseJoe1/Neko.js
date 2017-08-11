const snek = require('snekfetch');
let packageData = require('./package.json');
let headerUserAgent = `${packageData.name} (V${packageData.version})`;

class NekoClient {
    /**
     * @typedef {Object} ClientOptions
     * @property {string} key - The api token for the client.
     */

    /**
     * @param {ClientOptions} options - The clients options.
     */
    constructor(options) {
        /**
         * The API header for the client.
         * @type {string[]}
         */
        this.key = options.key;

        this.apiUrl = "https://nekos.life/api";
        //error checking options
        //if (options.key === undefined) throw Error('Please specify a header key in the client options.');
        if (typeof options.key !== `string`) throw Error('Client key must be a string.');
    }


    /**Pat image
    * @returns {Promise<Object>}
    */

    pat() {
        return this._get(`/pat`);
    }
    /**Hug image
     * @returns {Promise<Object>}
     */

    hug() {
        return this._get(`/hug`);
    }
    /**Kiss <3 image
     * @returns {Promise<Object>}
     */
    kiss() {
        return this._get(`/kiss`)
    }
    /**oWo Neko <3 image
     * @returns {Promise<Object>}
     */
    neko() {
        return this._get(`/neko`);
    }
    /**Why? joke
    * @returns {Promise<Object>}
    */

    why() {
        return this._get(`/why`);
    }
    /**LewdNeko <3 image
     * @returns {Promise<Object>}
     */
    LewdNeko() {
        return this._get(`/lewd/neko`);
    }
    /**Lizard image
     * @returns {Promise<Object>}
     */
    lizard() {
        return this._get(`/lizard`);
    }

    _get(endpoint) {
        return new Promise((resolve, reject) => {
            snek.get(this.apiUrl + endpoint)
                .set("Key", this.key)
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                }).catch((err) => {
                    reject(err);
                });
        });
    }
}

module.exports.Client = NekoClient;