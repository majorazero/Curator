/**
 * Create Token Helper
 */

// ////////////////////////////////////////
//  Dependencies
// ////////////////////////////////////////

const crypto = require("crypto");

// ////////////////////////////////////////
//  Token Utility
// ////////////////////////////////////////

// Export token utility
module.exports = class TokenUtility {
    constructor(key) {
        this.key = key;
    }

    encode(str) {
        const encoder = crypto.createCipher("aes-256-ctr", this.key);
        return encoder.update(str, "utf8", "hex");
    }

    decode(str) {
        const decoder = crypto.createDecipher("aes-256-ctr", this.key);
        return decoder.update(str, "hex", "utf8");
    }
};
