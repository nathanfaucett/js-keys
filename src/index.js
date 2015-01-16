var has = require("has"),
    isNative = require("is_native"),
    isObject = require("is_object");


var nativeKeys = Object.keys;


if (!isNative(nativeKeys)) {
    nativeKeys = function keys(obj) {
        var hasFn = has,
            out = [],
            i = 0,
            key;

        for (key in obj) {
            if (hasFn(obj, key)) {
                out[i++] = key;
            }
        }

        return out;
    };
}

module.exports = function keys(obj) {
    return nativeKeys(isObject(obj) ? obj : Object(obj));
};