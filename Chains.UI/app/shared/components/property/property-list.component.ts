import { Component, OnInit, Input, Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertyInformation } from '../../models/property';
import { PropertyService } from '../../services/property.service';
import { Observable } from 'rxjs/Rx';

@Component({
    moduleId: module.id,
    selector: 'property-list',
    templateUrl: '/app/shared/components/property/property-list.component.html', 
    styleUrls: ['../../../../app/shared/components/property/property-list.component.css']
})

export class PropertyListComponent implements OnInit {
    @Input() userId: string;
    properties: PropertyInformation[]; 
    activeProperty: PropertyInformation;    
    addingProperty: boolean = false;
    editingProperty: boolean = false;
    errorMessage: string;
    loadingProperties: boolean = true;
    constructor(private service: PropertyService, private router: Router) { }

    ngOnInit() {
        this.getProperties();
    }

    getProperties() {
        this.errorMessage = null;
        this.service.getPropertiesForUserId(this.userId)
            .subscribe(
                properties => this.properties = properties,
                error => this.errorMessage = error
            );
        this.loadingProperties = false;
        if (this.errorMessage === null)
            console.log('Properties successfully retrieved');
        else 
            console.log('Error found when retrieving properties');
    }

    selectProperty(id: string) {
        if (this.addingProperty) {
            console.log('You can not view a property whilst adding a new property');
            return;
        }
        this.service.getPropertyById(id).subscribe(property => this.activeProperty = property);
    }

    addProperty() {
        this.addingProperty = true;
    }
    
    editProperty(id:string) {
        this.editingProperty = true;
        this.selectProperty(id);
    }

    newPropertyCreated(event) {
        console.log('newPropertyCreated Event Fired');
        this.properties.push(event.property);
        this.addingProperty = false;
    }

    newPropertyCreateCancelled(event) {
        console.log('newPropertyCreateCancelled Event Fired');
        console.log(event.cancelled);
        this.addingProperty = !event.cancelled;
    }    
} 