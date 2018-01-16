import { Component, OnInit, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
    moduleId: module.id,
    selector: 'property-info',
    templateUrl: './property-info.component.html', 
    styleUrls: ['./property-info.component.scss']
})

export class PropertyInfoComponent {
    @Input() property: any;     

    
    @Output() editingProperty = new EventEmitter();
    @Output() deletedProperty = new EventEmitter();

    public constructor(private propertyService: PropertyService) {}

    selectedPropertyId: string = '1';

    public editProperty(id: string){
        this.editingProperty.emit({property: this.property})
    }

    public deleteProperty(id: string) {
        this.propertyService.deleteProperty(id).then((response) => {
            if(response)
                this.deletedProperty.emit({property: this.property});
            return;
        })
        .catch(() => {
            this.showError();
        });
    }

    showError(){
        alert("Failed to delete property");
    }
} 