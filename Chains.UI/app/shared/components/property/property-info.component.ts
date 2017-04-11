import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertyInformation } from '../../models/property';
import { PropertyService } from '../../services/property.service';

@Component({
    moduleId: module.id,
    selector: 'property-info',
    templateUrl: '/app/shared/components/property/property-info.component.html', 
    styleUrls: ['../../../../app/shared/components/property/property-info.component.css']
})

export class PropertyInfoComponent {
    @Input() property: PropertyInformation;     
    selectedPropertyId: string = '1';
} 