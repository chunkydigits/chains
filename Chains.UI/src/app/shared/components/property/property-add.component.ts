import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
    //moduleId: module.id,
    selector: 'property-add',
    templateUrl: '/app/shared/components/property/property-add.component.html', 
    styleUrls: ['../../../../app/shared/components/property/property-add.component.css']
})

export class PropertyAddComponent {
    @Output() propertyCreated = new EventEmitter();
    @Output() propertyCreateCancelled = new EventEmitter();
    
    property: any = {"Id" : "NEW"};

    constructor(private service: PropertyService) { }

    saveProperty() {
        debugger;
        this.service.saveProperty(this.property);
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
}