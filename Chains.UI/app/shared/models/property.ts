import { CheckListItem } from './check-list-item';
//import {UUID } from '@angular/UUID';

export class PropertyInformation {
    constructor(obj: Object) {
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
        this.propertyCheckListItems = new Array<CheckListItem>();

        var iterator: number;
        iterator = 0; 
        
        x.forEach(element => {
            this.propertyCheckListItems[iterator] = new CheckListItem(element);
            iterator++;    
        });
    }

    id: string;
    displayName: string; // will be a number 
    addressLine1: string;
    addressLine2: string;
    addressLine3: string;
    addressLine4: string;
    addressLine5: string;
    postcode: string;
    dateAdded: Date;
    rightMoveIdentifier: string;

    // EXTRACT THESE TO A CHAIN STATUS MODEL
    blocker: string; // will be either estate-agent, solicitor, public-user(buyer) or public-user(seller)
    endOfChain: boolean;
    startOfChain: boolean;
    order: number;
    status: number; // could use some sort of enum here. 
    type: number; // 1 - start ready, 2 - start not ready, 3 - end ready, 4 - end not ready, 5 - property node
    totalPropertiesInChain: number;
    propertyCheckListItems: CheckListItem[];

    static fromJSONArray(array: Array<Object>) : PropertyInformation[] {
        return array.map(obj => new PropertyInformation(obj));
    }

    static fromJSON(source: Object): PropertyInformation {
        return new PropertyInformation(source);
    }
}