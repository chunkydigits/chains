import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { RightMoveService } from '../../services/rightmove.service';

@Component({
    //moduleId: module.id,
    selector: 'property-add',
    templateUrl: './property-add.component.html', 
    styleUrls: ['./property-add.component.css']
})

export class PropertyAddComponent {
    @Output() propertyCreated = new EventEmitter();
    @Output() propertyCreateCancelled = new EventEmitter();
    
    property: any = {"Id" : "NEW"};

    constructor(private propertyService: PropertyService, private rightMoveService: RightMoveService) { }

    saveProperty() {
        debugger;
        this.propertyService.saveProperty(this.property);
        this.propertyCreated.emit({ property: this.property });
        this.property = {"Id" : "NEW"};
        console.log('saveProperty');
    }
        
    cancelAddProperty() {
        // add-property doesn't appear to be deactivated when clicking here as it is just an illusion of lots deactivation using visuals
        if (this.canDeactivate()) {
            console.log('cancelled adding a property');
            this.property = {"Id" : "NEW"};
            this.propertyCreateCancelled.emit({ cancelled: true });
            console.log('cancelled');
        }
    }
    
    canDeactivate() {
        console.log('in canDeactivate');
        if (this.property.displayName !== '' || this.property.rightMoveIdentifier !== '') {
            return window.confirm('Your changes will be disgarded');
        }
        return true;
    }

    getRightMoveDetails(rightMoveIdentifier: string){
        console.log("in getRMImage");
        
        this.rightMoveService.getRightMoveDetails(rightMoveIdentifier)
            .then(
                details => {
                    console.log("RightMoveDetails", details)
                    this.property.RightMoveImageUrl = details.ImageUrl;
                    this.property.RightMoveAskingPrice = details.AskingPrice;
                },
                error => console.log("Error when retrieving details from RightMove", error)
            );
    }
}