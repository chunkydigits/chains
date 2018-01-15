import { Component, OnInit, Input, Injectable } from '@angular/core';
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
    selectedPropertyId: string = '1';

    public editProperty(id: string){
        alert("in edit prop");
    }
} 