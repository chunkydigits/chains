"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import {UUID } from '@angular/UUID';
class PropertyInformation {
    constructor(obj) {
        this.id = obj['Id'];
        this.displayName = obj['DisplayName'];
        this.rightMoveIdentifier = obj['RightMoveIdentifier'];
        this.addressLine1 = obj['AddressLine1'];
        this.addressLine2 = obj['AddressLine2'];
        this.addressLine3 = obj['AddressLine3'];
        this.addressLine4 = obj['AddressLine4'];
        this.addressLine5 = obj['AddressLine5'];
        this.postcode = obj['Postcode'];
    }
    static fromJSONArray(array) {
        return array.map(obj => new PropertyInformation(obj));
    }
    static fromJSON(source) {
        return new PropertyInformation(source);
    }
}
exports.PropertyInformation = PropertyInformation;
//# sourceMappingURL=property.js.map