import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyInformation } from '../../models/property';
import { PropertyService } from '../../services/property.service';

@Component({
    //moduleId: module.id,
    selector: 'property-add',
    templateUrl: '/app/shared/components/property/property-add.component.html', 
    styleUrls: ['../../../../app/shared/components/property/property-add.component.css']
})

export class PropertyEditComponent {
    @Output() propertySaved = new EventEmitter();
    @Output() propertyEditCancelled = new EventEmitter();
    
    property: PropertyInformation = new PropertyInformation({"Id" : "NEW"});

    constructor(private service: PropertyService) { }

    saveProperty() {
        this.service.saveProperty(this.property);
        this.propertySaved.emit({ property: this.property });
        this.property = new PropertyInformation({"Id": "NEW"});
        console.log('saveProperty');
    }
        
    cancelAddProperty() {
        // add-property doesn't appear to be deactivated when clicking here as it is just an illusion of lots deactivation using visuals
        if (this.canDeactivate()) {
            console.log('cancelled adding a property');
            this.property = new PropertyInformation({"Id" : "NEW"});
            this.propertyEditCancelled.emit({ cancelled: true });
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