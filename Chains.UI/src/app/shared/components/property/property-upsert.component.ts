import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';
import { RightMoveService } from '../../services/rightmove.service';

@Component({
    //moduleId: module.id,
    selector: 'property-upsert',
    templateUrl: './property-upsert.component.html', 
    styleUrls: ['./property-upsert.component.scss']
})

export class PropertyUpsertComponent {
    @Output() propertySaved = new EventEmitter();
    @Output() propertyNotSaved = new EventEmitter();

    @Input() property: any;
    
    //property: any = {"Id" : "NEW"};

    constructor(private propertyService: PropertyService, private rightMoveService: RightMoveService) { }

    saveProperty() {
        debugger;
        this.propertyService.saveProperty(this.property).then((response) => {
            if(response) {
                this.propertySaved.emit({ property: this.property });
                this.property = {"Id" : "NEW"};
            }
            else 
                return;      
        })
        .catch(() => {
            this.showError();
        });
    }

    showError(){
        alert("Failed to save property");
    }

    populateDisplayName(){
        this.property.DisplayName = this.property.AddressLine1 + ", " + this.property.Postcode;
    }
        
    cancelAddProperty() {
        // add-property doesn't appear to be deactivated when clicking here as it is just an illusion of lots deactivation using visuals
        if (this.canDeactivate()) {
            console.log('cancelled adding a property');
            this.property = {"Id" : "NEW"};
            this.propertyNotSaved.emit({ cancelled: true });
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