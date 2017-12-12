"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_list_item_1 = require("./check-list-item");
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
        var x = obj['PropertyCheckListitems'];
        this.propertyCheckListItems = new Array();
        var iterator;
        iterator = 0;
        if (this.propertyCheckListItems.length === 0)
            return;
        x.forEach(element => {
            this.propertyCheckListItems[iterator] = new check_list_item_1.CheckListItem(element);
            iterator++;
        });
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