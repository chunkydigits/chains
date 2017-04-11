"use strict";
var Chain = (function () {
    function Chain() {
    }
    return Chain;
}());
exports.Chain = Chain;
var Guid = (function () {
    function Guid(guid) {
        this.guid = guid;
        this._guid = guid;
    }
    Guid.prototype.ToString = function () {
        return this.guid;
    };
    return Guid;
}());
exports.Guid = Guid;
//# sourceMappingURL=chain - Copy.js.map