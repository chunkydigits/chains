import { Component, OnInit, Input, Output, Injectable, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyService } from '../../services/property.service';

@Component({
    moduleId: module.id,
    selector: 'property-info',
    templateUrl: './property-info.component.html', 
    styleUrls: ['./property-info.component.css']
})

export class PropertyInfoComponent {
    @Input() property: any;     

    
    @Output() editingProperty = new EventEmitter();

    selectedPropertyId: string = '1';

    public editProperty(id: string){
        this.editingProperty.emit({property: this.property})
    }
} 