const { get } = require('snekfetch');
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
        this.token = options.token;
        //misc members
        this.apiUrl = "https://nekos.life/api";
        //error checking options
        if (options.key === undefined) throw Error('Please specify a token in the client options.');
        if (typeof options.key !== `string`) throw Error('Client key must be a string.');
    }

    pat() {
        return this._get(`/pat`);
    }

    hug() {
        return this._get(`/hug`);
    }

    kiss() {
        return this._get(`/kiss`)
    }

    neko() {
        return this._get(`/neko`); 
    }

    why() {
        return this._get(`/why`);
    }

    LewdNeko() {
        return this._get(`/lewd/neko`);
    }

    lizard() {
        return this._get(`/lizard`);
    }

    

    _get(endpoint, query) {
        return new Promise((resolve, reject) => {
            get((this.apiUrl) + endpoint)
                .set("key", this.key)
                .query(query || {})
                .then(res => {
                    if (res.status !== 200) return reject(res);
                    return resolve(res.body);
                });
        });
    }
}


module.exports.Client = NekoClient;